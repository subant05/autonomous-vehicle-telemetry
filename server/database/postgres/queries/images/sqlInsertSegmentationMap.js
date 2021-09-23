import { sqlInsertTopic, sqlInsertTopicSequence } from '../topics'
import {sqlInsertVehicle, sqlInsertVehicleOnline, sqlInsertVehicleTopic} from '../vehicles'
import {formatDateTime} from '../_utils'
import moment from 'moment';
import {sqlInsertCameraMessage} from './sqlInsertCameraMessage'
const { client, pool } = require("../../connection.js")

export const sqlInsertSegmentationMap = async (argTopic, data, cb=a=>a) =>{
    cb(null, JSON.stringify("Data Sent") )

    // if(!argTopic.includes('/segmentation') || !data){
    //     // cb(null, "ignored")
    //     return;
    // }

    try {

        const topic = await sqlInsertTopic(argTopic, {category:"images", ...data})
        const vehicle = await sqlInsertVehicle(data.vehicle)
        const vehicleTopic = await sqlInsertVehicleTopic(vehicle.rows[0].id, topic.rows[0].id)
        const vehicleSequence = await sqlInsertTopicSequence(vehicle.rows[0].id, topic.rows[0].id, data)
        const vehicleOnline = await sqlInsertVehicleOnline(vehicle.rows[0].id)
        const imageData = data.msg.image.data
        data.msg.image.data = null

        const queryResult =  await client.query(`
            select images.insert_segmentation_map($1, $2, $3, $4, $5, $6);
        `,[
            JSON.stringify(data)
            , formatDateTime(data.msg.descriptor.timestamp)
            , formatDateTime(data.timestamp)
            , topic.rows[0].id
            , vehicle.rows[0].id
            , JSON.stringify(imageData)
        ])

        // cb(null, JSON.stringify(queryResult) )
        return queryResult
    }catch(e){
        console.log("INSERT SEGMENTATION CAMERA DATA MESSAGE: ", e.message)
        console.log("INSERT SEGMENTATION CAMERA DATA STACK: ", e.stack)
        cb(e)
        return null
    }

    return null
}