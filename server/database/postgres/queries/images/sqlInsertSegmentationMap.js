import { sqlInsertTopic } from '../topics'
import {sqlInsertVehicle, sqlInsertVehicleOnline, sqlInsertVehicleTopic} from '../vehicles'
import moment from 'moment';
import {sqlInsertCameraMessage} from './sqlInsertCameraMessage'
const { client, pool } = require("../../connection.js")

export const sqlInsertSegmentationMap = async (argTopic, data, cb=a=>a) =>{
    if(!argTopic.includes('/segmentation') || !data){
        cb(null, "ignored")
        return;
    }

    try {
        const topic = await sqlInsertTopic(argTopic, data)
        const vehicle = await sqlInsertVehicle(data.vehicle)
        const vehicleTopic = await sqlInsertVehicleTopic(vehicle.rows[0].id, topic.rows[0].id)
        const vehicleOnline = await sqlInsertVehicleOnline(vehicle.rows[0].id)
        const cameraMessage = await sqlInsertCameraMessage(data.msg)
        const queryResult = await client.query(`
            INSERT INTO images.segmentation_map 
            (readingAt, topic_id, msg_id, vehicle_id)
            VALUES(
                $1
                , $2
                , $3 
                , $4
            )

            RETURNING id
        `, [
            moment(data.timestamp/1000000).utc().format('YYYY-MM-DD HH:mm:ssZZ')
            , topic.rows[0].id
            , cameraMessage.rows[0].id
            , vehicle.rows[0].id
        ])

        cb(null, JSON.stringify(queryResult) )
        return queryResult
    }catch(e){
        console.log("INSERT CAMERA DATA MESSAGE: ", e.message)
        console.log("INSERT CAMERA DATA STACK: ", e.stack)
        cb(e)
        return null
    }

    return null
}