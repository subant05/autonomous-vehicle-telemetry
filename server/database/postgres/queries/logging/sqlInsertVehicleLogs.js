import {formatDateTime} from '../_utils'
import {sqlInsertVehicle, sqlInsertVehicleOnline, sqlInsertVehicleTopic} from '../vehicles'
import { sqlInsertTopic, sqlInsertTopicSequence } from '../topics'
const { client, pool } = require("../../connection.js")

export const sqlInsertVehicleLogs = async (argTopic, data, cb = a => a) => {
    if (!argTopic || !argTopic.includes('/rosout') || !data) {
        cb(null, "ignored")
        return;
    }



        cb(null, "Data Recieved" )

        const topic = await sqlInsertTopic(argTopic, { category: "status", ...data[0] })
        const vehicle = await sqlInsertVehicle(data[0].vehicle)
        const vehicleTopic = await sqlInsertVehicleTopic(vehicle.rows[0].id, topic.rows[0].id)
        const vehicleSequence = await sqlInsertTopicSequence(vehicle.rows[0].id, topic.rows[0].id, data[0])
        const vehicleOnline = await sqlInsertVehicleOnline(vehicle.rows[0].id)
    try{    
        const queryResult = await client.query(`
            WITH ins_log_message_stamp AS (
                INSERT INTO logging.vehicle_log_message_stamps
                (sec, nanosec)
                select (s.value->'msg'->'stamp'->>'sec')::int
                    , (s.value->'msg'->'stamp'->>'nanosec')::int
                from jsonb_array_elements($1::jsonb) s
                
                RETURNING id
            ), 
            
            ins_message AS (
                INSERT INTO logging.vehicle_log_messages
                ( stamp_id, level, name, msg, file, function, line)
                SELECT
                        (SELECT id FROM ins_log_message_stamp 
                        WHERE id = 
                        (SELECT id FROM ins_log_message_stamp 
                        ORDER BY id LIMIT 1 OFFSET idx-1) 
                    )
                    , (t.value->'msg'->>'level')::int
                    , t.value->'msg'->>'name'
                    , t.value->'msg'->>'msg'
                    , t.value->'msg'->>'file'
                    , t.value->'msg'->>'function'
                    , (t.value->'msg'->>'line')::int
                FROM  jsonb_array_elements($1::jsonb) WITH ordinality AS t(value, idx)
                
                RETURNING id
            )
                
                INSERT INTO  logging.vehicle_logs (
                    message_id
                    , vehicle_id
                    , topic_id
                    , readingat )
                    SELECT  
                        (SELECT id FROM ins_message 
                        WHERE id = 
                        (SELECT id FROM ins_message 
                            ORDER BY id  LIMIT 1  OFFSET idx-1) 
                        )
                        , $2
                        , $3
                        , to_timestamp(((i.value->>'timestamp')::decimal)/1000000000)
                FROM  jsonb_array_elements($1::jsonb) WITH ordinality AS i(value, idx)

                RETURNING id
        `,[
            JSON.stringify(data)
            , vehicle.rows[0].id
            , topic.rows[0].id
            // , formatDateTime(data.timestamp)
        ])



        return queryResult
    }catch(e){
        console.log("INSERT VEHICLE LOG ERROR MESSAGE: ", e.message)
        console.log("INSERT VEHICLE LOG ERROR STACK: ", e.stack)
        console.log("INSERT CAMERA VEHICLE SQL RESULT: ", data[0].vehicle)
        console.log("INSERT CAMERA JSON VEHICLE PROPERTY: ", JSON.stringify(data.vehicle, null, " "))
        // cb(e)
        return null
    } 
}
