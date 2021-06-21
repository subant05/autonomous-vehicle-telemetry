import { sqlInsertTopic } from './topics'
import {sqlInsertVehicle, sqlInsertVehicleOnline} from './vehicles'
import moment from 'moment';
const { client, pool } = require("../connection.js")

export const sqlInsertStarFireHeader = async (data) => {
    try {
        const { id, timestamp, seq, node } = data
        const starFireHeader = await client.query(`
            INSERT INTO geolocation.starfire_header 
            (readingAt,seq,node,header_id)
            VALUES
            (
                $1
                , $2
                , $3
                , $4
            )
            RETURNING *
        `, [
            moment(timestamp/1000000).utc().format('YYYY-MM-DD HH:mm:ssZZ')
            , seq
            , node
            , id
        ])
        return starFireHeader

    } catch (e) {
        console.log("STARFIRE HEADER INSERT ERROR: ", e.message)
        return null

    }
}

export const sqlInsertStarfireMessage = async (data) => {
    // console.log(JSON.stringify(data, null , " "))
    try {
        // console.log(JSON.stringify(data,null, " "))
        const starFireHeader = await sqlInsertStarFireHeader(data.header)
        if(starFireHeader !== null){
            const starFireMessage = await client.query(`
                INSERT INTO geolocation.starfire_message
                (
                    header_id
                    , pgn_address
                    , serial_number
                    , type
                    , latitude
                    , longitude
                    , altitude
                    , bearing
                    , speed
                    , pitch
                    , roll
                    , yaw_rate
                    , correction_mode
                    , snr_db
                    , is_gps_locked
                ) 
                VALUES (
                    $1
                    , $2
                    , $3
                    , $4
                    , $5
                    , $6
                    , $7
                    , $8
                    , $9
                    , $10
                    , $11
                    , $12
                    , $13
                    , $14
                    , $15
                )
                RETURNING *
            `, [
                starFireHeader.rows[0].id
                , data.pgn_address
                , data.serial_number
                , data.type
                , data.latitude
                , data.longitude
                , data.altitude
                , data.bearing
                , data.speed
                , data.pitch
                , data.roll
                , data.yaw_rate
                , data.correction_mode
                , data.snr_db
                , data.is_gps_locked
            ])

            return starFireMessage

        }
    }catch(e){
        console.log("STARFIRE MESSAGE INSERT ERROR: ", e.message)
        console.log("STARFIRE MESSAGE INSERT ERROR: ", e.stack)

        return null
    }
}

export const sqlInsertStarFire = async (argTopic, data) => {
    if(argTopic !== '/starfire' || !data)
        return;

    try{
        const topic = await sqlInsertTopic(argTopic, data)
        const vehicle = await sqlInsertVehicle(data.vehicle)
        const vehicleOnline = await sqlInsertVehicleOnline(vehicle.rows[0].id)
        const starFireMessage = await sqlInsertStarfireMessage(data.msg)
        // console.log(starFireMessage)
        // return;
        const starFire = await client.query(`
            INSERT INTO geolocation.starfire (
                readingAt
                , topic_id
                , msg_id
                , vehicle_id
            ) VALUES (
                $1
                , $2
                , $3
                , $4
            )
        `, [
            moment(data.timestamp/1000000).utc().format('YYYY-MM-DD HH:mm:ssZZ')
            , topic.rows[0].id
            , starFireMessage.rows[0].id
            , vehicle.rows[0].id
        ])

        return starFire;
    }catch(e){
        console.log("STARFIRE INSERT ERROR: ", e.message)
        console.log("STARFIRE INSERT STACK: ", e.stack)

        return null
    }
}