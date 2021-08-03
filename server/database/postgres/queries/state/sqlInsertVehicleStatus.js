const { client, pool } = require("../../connection.js")
import {sqlInsertVehicle, sqlInsertVehicleOnline, sqlInsertVehicleTopic} from '../vehicles'
import { sqlInsertTopic } from '../topics'
import moment from 'moment';

export const sqlInsertVehicleStatus = async (argTopic, data, cb=a=>a) =>{
    if(!(argTopic.includes('/stop_reasons') || argTopic.includes('/autonomy_state')) || !data){
        cb(null, "ignored")
        return;
    }
    
    try{
        const topic = await sqlInsertTopic(argTopic, {category:"status", ...data})
        const vehicle = await sqlInsertVehicle(data.vehicle)
        const vehicleTopic = await sqlInsertVehicleTopic(vehicle.rows[0].id, topic.rows[0].id)
        const vehicleOnline = await sqlInsertVehicleOnline(vehicle.rows[0].id)


        const {descriptor, vehicle_state, stop_reasons} = data.msg
        const errorAlert = stop_reasons.filter(reason=>{
            return reason.is_active
        })
        const criticalError = stop_reasons.filter(reason=>{
            return reason.is_active && !reason.is_recoverable
        })

        const alertType = criticalError.length ? "critical" : errorAlert.length ?  "error" : "information"
        const alertMessage= criticalError.length ? criticalError[0].description : errorAlert.length ?  errorAlert[0].description  : ""

        const queryResult =  await client.query(`
            WITH ins_status_messge_header as (
                INSERT INTO state.status_message_header
                (headerId, readingAt, seq, node)
                VALUES($1, $2, $3, $4)

                RETURNING id
            ),
            ins_status_message as (
                INSERT INTO state.status_message
                (header_id) 
                VALUES(
                    (select id from ins_status_messge_header)
                )

                RETURNING id
            ),
            ins_vehicle_status as (
                INSERT INTO state.vehicle_status
                ( topic_id, vehicle_id, status_message_id, state_id)
                VALUES(
                    $5
                    , $6
                    , (select id from ins_status_message)
                    , (select id from state.vehicle_states where code = CAST($7 as BIGINT) )
                )

                RETURNING id
            ),
            
            ins_vehicle_status_detail as (

                INSERT INTO state.vehicle_status_detail
                (   vehicle_status_id
                    , vehicle_status_reason_id
                    , description
                    , is_active
                    , is_recoverable
                    )
                select 
                    (select id  from ins_vehicle_status) as vehicle_status_id
                    , (select id from state.vehicle_state_reason where code = CAST (t->>'reason' as BIGINT) )
                    , t ->> 'description'
                    , CAST(t ->> 'is_active' as BOOLEAN)
                    , CAST(t ->> 'is_recoverable' as BOOLEAN)
                from jsonb_array_elements($8::jsonb) t
    
                RETURNING id
            ),

            select_alert_status as (
                select 
                    case 
                        WHEN state != '' THEN state
                        ELSE 'information'
                    end as name
                    , description as message
                from (SELECT
                    id,
                    CASE
                        WHEN is_active = true THEN 'error'
                        WHEN is_recoverable = true THEN 'critical'
                        ELSE 'information'
                    END AS state
                    , description
                    FROM state.vehicle_status_detail
                    WHERE state.vehicle_status_detail.vehicle_status_id in (select id from ins_vehicle_status)
                    AND description != ''
                    ORDER BY state ASC
                    LIMIT 1) AS temp_vehicle_status_detail
            )

            INSERT INTO notifications.alerts(
                message
                , alert_type_id
                , vehicle_status_id
            )
            VALUES (
                $9
                , (select id from notifications.alert_types where name  = $10)
                , (select id from ins_vehicle_status)
            )

            RETURNING (select id from ins_vehicle_status)

        `,[
            descriptor.id
            , moment(descriptor.timestamp/1000000).utc().format('YYYY-MM-DD HH:mm:ssZZ')
            , descriptor.seq 
            , descriptor.node
            , topic.rows[0].id
            , vehicle.rows[0].id
            , vehicle_state.state
            , JSON.stringify(stop_reasons)
            , alertMessage
            , alertType
        ])
        cb(null, JSON.stringify(queryResult) )
        return queryResult
    }catch(e){
        console.log("INSERT STATUS ERROR MESSAGE: ", e.message)
        console.log("INSERT STATUS ERROR STACK: ", e.stack)
        cb(e)
        return null
    }

    return null
}


