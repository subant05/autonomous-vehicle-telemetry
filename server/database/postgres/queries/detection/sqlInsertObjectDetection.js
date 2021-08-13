import {formatDateTime} from '../_utils'
import {sqlInsertVehicle, sqlInsertVehicleOnline, sqlInsertVehicleTopic} from '../vehicles'
import { sqlInsertTopic } from '../topics'
import {sqlInsertObjectDetectionMessage} from './sqlInsertObjectDetectionMessage'
import {sqlInsertObjectDetectionMessageVertices} from './sqlInsertObjectDetectionMessageVertices'

const { client, pool } = require("../../connection.js")

export const sqlInsertObjectDetection = async (argTopic, data, cb = a => a) => {
    if (!argTopic || !argTopic.includes('/closest_on_path_object') || !data) {
        cb(null, "ignored")
        return;
    }

    try{
        cb(null, "Data Recieved" )

        const topic = await sqlInsertTopic(argTopic, { category: "status", ...data })
        const vehicle = await sqlInsertVehicle(data.vehicle)
        const vehicleTopic = await sqlInsertVehicleTopic(vehicle.rows[0].id, topic.rows[0].id)
        const vehicleOnline = await sqlInsertVehicleOnline(vehicle.rows[0].id)
        const objectMessage = await sqlInsertObjectDetectionMessage(data.msg)
        const vertices = await sqlInsertObjectDetectionMessageVertices(
                objectMessage.rows[0].id
                , data.msg.vertices
            )

        const queryResult = await client.query(`
            INSERT INTO detection.objects 
                (
                    readingAt
                    , vehicle_id
                    , topic_id
                    , message_id
                )
            VALUES(
                $1
                , $2
                , $3
                , $4
            )

            RETURNING id 
        `, [
            formatDateTime(data.timestamp)
            , vehicle.rows[0].id
            , topic.rows[0].id
            , objectMessage.rows[0].id
        ])
    
        // cb(null, JSON.stringify(queryResult) )
        return queryResult

    }catch(e){
        console.log("INSERT OBJECT DETECTION ERROR MESSAGE: ", e.message)
        console.log("INSERT OBJECT DETECTION ERROR STACK: ", e.stack)
        cb(e)
        return null
    }

    
}