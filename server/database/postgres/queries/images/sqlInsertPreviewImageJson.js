import { sqlInsertTopic, sqlInsertTopicSequence } from '../topics'
import {sqlInsertVehicle, sqlInsertVehicleOnline, sqlInsertVehicleTopic} from '../vehicles'
import {formatDateTime} from '../_utils'
import {sqlInsertCameraMessage} from './sqlInsertCameraMessage'
import process from 'process'
const { client, pool } = require("../../connection.js")

export const sqlInsertPreviewImageJson = async (argTopic, data) =>{

    if(!argTopic || !argTopic.includes('/preview') || !data){
        return;
    }
    
    try{
        const topic = await sqlInsertTopic(argTopic, {category:"images", ...data})
        const vehicle = await sqlInsertVehicle(data.vehicle)
        const vehicleTopic = await sqlInsertVehicleTopic(vehicle.rows[0].id, topic.rows[0].id)
        const vehicleSequence = await sqlInsertTopicSequence(vehicle.rows[0].id, topic.rows[0].id, data)
        const vehicleOnline = await sqlInsertVehicleOnline(vehicle.rows[0].id)
        const imageData = data.msg.image.data
        data.msg.image.data = null

        const queryResult =  await client.query(`
            select images.insert_camera_image($1, $2, $3, $4, $5, $6);
        `,[
            JSON.stringify(data)
            , formatDateTime(data.msg.descriptor.timestamp)
            , formatDateTime(data.timestamp)
            , topic.rows[0].id
            , vehicle.rows[0].id
            , JSON.stringify(imageData)

        ])

        return queryResult

    }catch(e){
        console.log("INSERT CAMERA DATA MESSAGE: ", e.message)
        console.log("INSERT CAMERA DATA STACK: ", e.stack)
        console.log("INSERT CAMERA VEHICLE SQL RESULT: ", vehicle)
        console.log("INSERT CAMERA JSON VEHICLE PROPERTY: ", JSON.stringify(data.vehicle, null, " "))
        return null
    }
}

process.on("message", async ({topic, body, cb, marker})=>{
    const result = await sqlInsertPreviewImageJson(topic, body);
    process.send({marker})
})