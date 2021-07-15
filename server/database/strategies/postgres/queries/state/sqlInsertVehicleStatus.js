const { client, pool } = require("../../connection.js")
import {sqlInsertVehicle} from '../vehicles'
import { sqlInsertTopic } from '../topics'
import moment from 'moment';

export const sqlInsertVehicleStatus = async (argTopic, data) =>{
    if(!argTopic.includes('/stop_reasons') || !data)
        return;
    
    try{
        const topic = await sqlInsertTopic(argTopic, data)
        const vehicle = await sqlInsertVehicle(data.vehicle)

        const {descriptor, vehicle_state, stop_reasons} = data.msg

        return await client.query(`
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
            )

            INSERT INTO notifications.alerts(
                message
                , alert_type_id
                , vehicle_status_id
            )
            VALUES (
                ''
                , (select id from notifications.alert_types where name ='information')
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
        ])
    }catch(e){
        console.log("INSERT STATUS ERROR MESSAGE: ", e.message)
        console.log("INSERT STATUS ERROR STACK: ", e.stack)
    }

    return null
}