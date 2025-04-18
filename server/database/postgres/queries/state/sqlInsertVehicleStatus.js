const { client, pool } = require("../../connection.js")
import {sqlInsertVehicle, sqlInsertVehicleOnline, sqlInsertVehicleTopic} from '../vehicles'
import { sqlInsertTopic, sqlInsertTopicSequence } from '../topics'
import {formatDateTime} from '../_utils/index'

export const sqlInsertVehicleStatus = async (argTopic, data, cb=a=>a) =>{
    if(!(argTopic.includes('/stop_reasons') || argTopic.includes('/autonomy_state')) || !data){
        cb(null, "ignored")
        return;
    }
    
    try{
        cb(null, `Data Recieved Autonomy State ${data.seq} : ${data.vehicle.name}` )

        const topic = await sqlInsertTopic(argTopic, {category:"status", ...data})
        const vehicle = await sqlInsertVehicle(data.vehicle)
        const vehicleTopic = await sqlInsertVehicleTopic(vehicle.rows[0].id, topic.rows[0].id)
        const vehicleSequence = await sqlInsertTopicSequence(vehicle.rows[0].id, topic.rows[0].id, data)
        const vehicleOnline = await sqlInsertVehicleOnline(vehicle.rows[0].id)
        const {descriptor, vehicle_state, stop_reasons, mission_stats} = data.msg
        const errorAlert = stop_reasons.stop_reasons.filter(reason=>{
            return reason.is_active
        })
        const criticalError = stop_reasons.stop_reasons.filter(reason=>{
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

            ins_mission_stats as (
                INSERT INTO state.status_message_mission_stats
                (
                    duration_autonomy_stopped, 
                    duration_autonomy_driving,
                    duration_no_autonomy,
                    duration_teleop,
                    autonomy_distance_travelled_m,
                    autonomy_area_travelled_sqm,
                    num_stops,
                    num_state_demotion,
                    num_true_positives,
                    num_false_positives,
                    num_teleop_queries,
                    mission_start_time
                )
                VALUES(
                    $12
                    , $13
                    , $14
                    , $15
                    , $16
                    , $17
                    , $18
                    , $19
                    , $20
                    , $21
                    , $22
                    , $23
                )

                RETURNING id
            ),

            ins_status_message as (
                INSERT INTO state.status_message
                (header_id, mission_stats_id) 
                VALUES(
                    (select id from ins_status_messge_header)
                    , (select id from ins_mission_stats)
                )

                RETURNING id
            ),
            ins_vehicle_status as (
                INSERT INTO state.vehicle_status
                ( topic_id, vehicle_id, status_message_id, state_id, readingat)
                VALUES(
                    $5
                    , $6
                    , (select id from ins_status_message)
                    , (select id from state.vehicle_states where code = CAST($7 as BIGINT) )
                    , $8
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
                from jsonb_array_elements($9::jsonb) t
    
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
                $10
                , (select id from notifications.alert_types where name  = $11)
                , (select id from ins_vehicle_status)
            )

            RETURNING (select id from ins_vehicle_status)

        `,[
            descriptor.id
            , formatDateTime(descriptor.timestamp)
            , descriptor.seq 
            , descriptor.node
            , topic.rows[0].id
            , vehicle.rows[0].id
            , vehicle_state.state
            , formatDateTime(data.timestamp)
            , JSON.stringify(stop_reasons.stop_reasons)
            , alertMessage
            , alertType
            , mission_stats.duration_autonomy_stopped
            , mission_stats.duration_autonomy_driving
            , mission_stats.duration_no_autonomy
            , mission_stats.duration_teleop
            , mission_stats.autonomy_distance_travelled_m
            , mission_stats.autonomy_area_travelled_sqm
            , mission_stats.num_stops
            , mission_stats.num_state_demotion
            , mission_stats.num_true_positives
            , mission_stats.num_false_positives
            , mission_stats.num_teleop_queries
            , formatDateTime(mission_stats.mission_start_time)
        ])
        
        // cb(null, JSON.stringify(queryResult) )
        return queryResult
    }catch(e){
        console.log("INSERT STATUS ERROR MESSAGE: ", e.message)
        console.log("INSERT STATUS ERROR STACK: ", e.stack)
        cb(e)
        return null
    }

    return null
}


