const { client, pool } = require("../connection.js")
import moment from 'moment';

export const sqlInsertVehicleType = async (data) =>{
    const {type, description} = data

    try {
        const vehicleType =  await client.query(`
            INSERT INTO vehicles.vehicle_types
            (type, description)
            VALUES ($1,$2)
            
            RETURNING *
        `,[type.toLowerCase().trim(), description])

        return vehicleType
    }catch(e){
        if(e.message.includes("duplicate key "))
            return sqlSelectVehicleType(type)
        else {
            console.log("VEHICLE TYPE INSERT ERROR", e.message)
            console.log("VEHICLE TYPE INSERT STACK", e.stack)
        }
    }
}

export const sqlSelectVehicleType = async (type) =>{
    try {
        const vehicleType = await client.query(`
            SELECT * FROM vehicles.vehicle_types
            WHERE type = $1 
        `, [type.toLowerCase().trim()])

        return vehicleType
    } catch(e){
        console.log("VEHICLE TYPE SELECT ERROR", e.message)
    }

    return null
}

export const sqlInsertVehicle = async (data) => {
    const {id, name, type, description, ip} = data

    try{
        const vehicleType = await sqlInsertVehicleType({type, description})
        const vehicle = await client.query(`
            INSERT INTO vehicles.vehicles 
            (device_id, name, type_id, ip)
            VALUES($1, $2, $3, $4)

            RETURNING *
        `, [
            id
            , name.toLowerCase().trim()
            , vehicleType.rows[0].id
            , ip
            ]
         )

        return vehicle;

    }catch(e){
        if(e.message.includes("duplicate key")){
            return client.query(`
                SELECT * FROM vehicles.vehicles 
                WHERE device_id = $1
                AND name = $2
                `,[
                    id
                    , name.toLowerCase().trim()
                ])
        } else {
            console.log("INSERT VECHILE ERROR", e.message)
            console.log("INSERT VECHILE STACK", e.stack)
        }
    }

    return null;
}

export const sqlInsertVehicleOnline = async (vehicleId)=>{
    if(isNaN(vehicleId))
        return null

    try {
        const vehicleOnline = await client.query(`
            INSERT INTO vehicles.vehicles_online
            (vehicle_id)
            VALUES ($1)
            RETURNING *
        `, [
            vehicleId
        ])

        return vehicleOnline
    }catch(e){
        if(e.message.includes("duplicate key ")){
            const vehicleOnline = await client.query(`
                UPDATE vehicles.vehicles_online
                SET updated_at = $1
                WHERE vehicle_id = $2

                RETURNING *
            `, [
                moment().utc().format('YYYY-MM-DD HH:mm:ssZZ')
                , vehicleId
            ])

            return vehicleOnline
        } else {
            console.log("VEHICLE ONLINE INSERT ERROR: ", e.message)
            console.log("VEHICLE ONLINE INSERT STACK: ", e.stack)
        }
    }

    return null
}

export const sqlInsertVehicleTopic = async (vehicle_id, topic_id)=>{
    try{
        const vehicleTopic = await client.query(`
            INSERT INTO vehicles.vehicle_topics
            (vehicle_id, topic_id)
            VALUES ($1, $2)

            RETURNING *
        `, [
            vehicle_id
            ,topic_id
            ]
        )

        return vehicleTopic
    }catch(e){
        if(e.message.includes("duplicate key")){
            return await client.query(`
                SELECT * FROM  vehicles.vehicle_topics
                WHERE vehicle_id = $1
                AND topic_id = $2
            `, [
                vehicle_id
                ,topic_id
                ]
            )
        } else {
            console.log("VEHICLE TOPIC INSERT ERROR: ", e.message)
            console.log("VEHICLE TOPIC INSERT STACK: ", e.stack)
        }
    }

    return null
}