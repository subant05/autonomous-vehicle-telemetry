import { sqlInsertTopic, sqlInsertTopicSequence } from '../topics'
import {sqlInsertVehicle, sqlInsertVehicleOnline, sqlInsertVehicleTopic} from '../vehicles'
import {formatDateTime} from '../_utils'
import {sqlInsertCameraMessage} from './sqlInsertCameraMessage'
import process from 'process'
const { client, pool } = require("../../connection.js")

export const sqlInsertPreviewImageJson = async (argTopic, data, cb=a=>a) =>{
    cb(null, JSON.stringify("Data Sent") )

    if(!argTopic || !argTopic.includes('/preview') || !data){
        // cb(null, "ignored")
        return;
    }
    
    try{
        // Vehicle should not wait for response

        const topic = await sqlInsertTopic(argTopic, {category:"images", ...data})
        const vehicle = await sqlInsertVehicle(data.vehicle)
        const vehicleTopic = await sqlInsertVehicleTopic(vehicle.rows[0].id, topic.rows[0].id)
        const vehicleSequence = await sqlInsertTopicSequence(vehicle.rows[0].id, topic.rows[0].id, data)
        const vehicleOnline = await sqlInsertVehicleOnline(vehicle.rows[0].id)
        
        const queryResult =  await client.query(`
        WITH ins_camera_json as (
            INSERT INTO images.camera_json(json)
            VALUES($1)

            RETURNING *
        ),
        ins_left_intrinsics_k as (
            INSERT INTO images.side_intrinsics_k (data)
            (SELECT 
                json->'msg'->'camera_meta'->'left_intrinsics'->>'k' as data
            FROM ins_camera_json)

            RETURNING id
        ),
        ins_right_intrinsics_k as (
             INSERT INTO images.side_intrinsics_k (data)
             (SELECT 
                json->'msg'->'camera_meta'->'right_intrinsics'->>'k' as data
            FROM ins_camera_json)
 
             RETURNING id
         ),
         ins_left_intrinsics_d as (
             INSERT INTO images.side_intrinsics_d (data)
             (SELECT 
                json->'msg'->'camera_meta'->'left_intrinsics'->>'d' as data
            FROM ins_camera_json)

             RETURNING id
         ),
         ins_right_intrinsics_d as (
              INSERT INTO images.side_intrinsics_d (data)
             (SELECT 
                json->'msg'->'camera_meta'->'right_intrinsics'->>'d' as data
            FROM ins_camera_json)

              RETURNING id
        ),
        ins_left_intrinsics as (
            INSERT INTO images.side_intrinsics (height, width, k_id, d_id)
             (SELECT 
                CAST(json->'msg'->'camera_meta'->'left_intrinsics'->>'height' as INTEGER) as height
                , CAST(json->'msg'->'camera_meta'->'left_intrinsics'->>'width' as INTEGER) as width
                , (select id from ins_left_intrinsics_k)
                , (select id from ins_left_intrinsics_d)
            FROM ins_camera_json)

            RETURNING id
        ),
        ins_right_intrinsics as (
            INSERT INTO images.side_intrinsics (height, width, k_id, d_id)
             (SELECT 
                CAST(json->'msg'->'camera_meta'->'right_intrinsics'->>'height' as INTEGER) as height
                , CAST(json->'msg'->'camera_meta'->'right_intrinsics'->>'width' as INTEGER) as width
                , (select id from ins_right_intrinsics_k)
                , (select id from ins_right_intrinsics_d)
            FROM ins_camera_json)

            RETURNING id
        ),
        ins_stereo_extrinsics_t as (
            INSERT INTO images.stereo_extrinsics_t (data) 
            (SELECT 
                json->'msg'->'camera_meta'->'stereo_extrinsics'->>'t' as data
            FROM ins_camera_json)

            RETURNING id
        ),
        ins_stereo_extrinsics_r as (
             INSERT INTO images.stereo_extrinsics_r (data) 
             (SELECT 
                json->'msg'->'camera_meta'->'stereo_extrinsics'->>'r' as data
            FROM ins_camera_json)

             RETURNING id
         ),
         ins_stereo_extrinsics_r_rodrigues as (
             INSERT INTO images.stereo_extrinsics_r_rodrigues (data) 
             (SELECT 
                json->'msg'->'camera_meta'->'stereo_extrinsics'->>'r_rodrigues' as data
            FROM ins_camera_json)

             RETURNING id
         ),
         ins_stereo_extrinsics as (
             INSERT INTO images.stereo_extrinsics (t_id, r_id, r_rodrigues_id) 
             VALUES(
                 (select id from ins_stereo_extrinsics_t)
                 , (select id from ins_stereo_extrinsics_r)
                 , (select id from ins_stereo_extrinsics_r_rodrigues)
             )

             RETURNING id
         ),
         ins_tractor_extrinsics_t as (
             INSERT INTO images.tractor_extrinsics_t (data) 
             (SELECT 
                json->'msg'->'camera_meta'->'tractor_extrinsics'->>'t' as data
            FROM ins_camera_json)
         
             RETURNING id
         ),
         ins_tractor_extrinsics_r as (
              INSERT INTO images.tractor_extrinsics_r (data) 
              (SELECT 
                json->'msg'->'camera_meta'->'tractor_extrinsics'->>'r' as data
             FROM ins_camera_json)
         
              RETURNING id
          ),
          ins_tractor_extrinsics_r_rodrigues as (
              INSERT INTO images.tractor_extrinsics_r_rodrigues (data) 
              (SELECT 
                json->'msg'->'camera_meta'->'tractor_extrinsics'->>'r_rodrigues' as data
             FROM ins_camera_json)
         
              RETURNING id
          ),
          ins_tractor_extrinsics as (
              INSERT INTO images.tractor_extrinsics (t_id, r_id, r_rodrigues_id) 
              VALUES(
                  (select id from ins_tractor_extrinsics_t)
                  , (select id from ins_tractor_extrinsics_r)
                  , (select id from ins_tractor_extrinsics_r_rodrigues)
                 )
         
              RETURNING id
          ),
          ins_left_roi as (
             INSERT INTO images.camera_roi 
             (x_offset, y_offset, height, width, do_rectify) 
             (SELECT 
                CAST(json->'msg'->'camera_meta'->'left_roi'->>'x_offset' as INTEGER) as x_offset
                , CAST(json->'msg'->'camera_meta'->'left_roi'->>'y_offset' as INTEGER) as y_offset
                , CAST(json->'msg'->'camera_meta'->'left_roi'->>'height' as INTEGER) as height
                , CAST(json->'msg'->'camera_meta'->'left_roi'->>'width' as INTEGER) as width
                , CAST( json->'msg'->'camera_meta'->'left_roi'->>'do_rectify' as BOOLEAN) as do_rectify
             FROM ins_camera_json)
        
             RETURNING id
         ),
         ins_right_roi as (
             INSERT INTO images.camera_roi 
             (x_offset, y_offset, height, width, do_rectify) 
             (SELECT 
                CAST( json->'msg'->'camera_meta'->'right_roi'->>'x_offset' as INTEGER)  as x_offset
                , CAST( json->'msg'->'camera_meta'->'right_roi'->>'y_offset' as INTEGER)  as y_offset
                , CAST( json->'msg'->'camera_meta'->'right_roi'->>'height' as INTEGER)  as height
                , CAST( json->'msg'->'camera_meta'->'right_roi'->>'width' as INTEGER)  as width
                , CAST( json->'msg'->'camera_meta'->'right_roi'->>'do_rectify' as BOOLEAN) as do_rectify
             FROM ins_camera_json)

             RETURNING id
         ),
         ins_left_histogram_full_histogram as (
             INSERT INTO images.full_histogram (data)
             (SELECT 
                json->'msg'->'camera_meta'->'left_histogram'->>'full_histogram' as data
             FROM ins_camera_json)

             RETURNING id
         ),
         ins_left_histogram_small_histogram as (
             INSERT INTO images.small_histogram (data)
             (SELECT 
                json->'msg'->'camera_meta'->'left_histogram'->>'small_histogram' as data
             FROM ins_camera_json)

             RETURNING id
         ),
         ins_left_histogram as (
             INSERT INTO images.camera_histogram (full_histogram_id, small_histogram_id)
             VALUES (
                 (select id from ins_left_histogram_full_histogram)
                 , (select id from ins_left_histogram_small_histogram)
             )
             
             RETURNING id
         ),
         ins_right_histogram_full_histogram as (
             INSERT INTO images.full_histogram (data)
             (SELECT 
                json->'msg'->'camera_meta'->'right_histogram'->>'full_histogram' as data
             FROM ins_camera_json)
         
             RETURNING id
         ),
         ins_right_histogram_small_histogram as (
             INSERT INTO images.small_histogram (data)
             (SELECT 
                json->'msg'->'camera_meta'->'right_histogram'->>'small_histogram' as data
             FROM ins_camera_json)
             
             RETURNING id
         ),
         ins_right_histogram as (
             INSERT INTO images.camera_histogram (full_histogram_id, small_histogram_id)
             VALUES (
                 (select id from ins_right_histogram_full_histogram)
                 , (select id from ins_right_histogram_small_histogram)
             )
             
             RETURNING id
         ),
         ins_e as (
             INSERT INTO images.camera_meta_e (data)
             (SELECT 
                json->'msg'->'camera_meta'->>'e' as data
             FROM ins_camera_json)

             RETURNING id
         ),
         ins_f as (
             INSERT INTO images.camera_meta_f (data)
             (SELECT 
                json->'msg'->'camera_meta'->>'f' as data
             FROM ins_camera_json)

             RETURNING id
         ),
         ins_r1 as (
             INSERT INTO images.camera_meta_r1 (data)
             (SELECT 
                json->'msg'->'camera_meta'->>'r1' as data
             FROM ins_camera_json)

             RETURNING id
         ),
         ins_r2 as (
             INSERT INTO images.camera_meta_r2 (data)
             (SELECT 
                json->'msg'->'camera_meta'->>'r2' as data
             FROM ins_camera_json)

             RETURNING id
         ),
         ins_p1 as (
             INSERT INTO images.camera_meta_p1 (data)
             (SELECT 
                json->'msg'->'camera_meta'->>'p1' as data
             FROM ins_camera_json)

             RETURNING id
         ),
         ins_p2 as (
             INSERT INTO images.camera_meta_p2 (data)
             (SELECT 
                json->'msg'->'camera_meta'->>'p2' as data
             FROM ins_camera_json)

             RETURNING id
         ),
         ins_q as (
             INSERT INTO images.camera_meta_q (data)
             (SELECT 
                json->'msg'->'camera_meta'->>'q' as data
             FROM ins_camera_json)

             RETURNING id
         ),

         ins_camera_meta as (
            INSERT INTO images.camera_meta (
                serial_number
                , camera_name
                , left_intrinsics_id
                , right_intrinsics_id
                , stereo_extrinsics_id
                , tractor_extrinsics_id
                , e_id
                , f_id
                , r1_id
                , r2_id
                , p1_id
                , p2_id
                , q_id
                , left_roi_id
                , right_roi_id
                , left_exposure
                , right_exposure
                , left_gain
                , right_gain
                , extra
                , left_histogram_id
                , right_histogram_id
            )VALUES (
                (SELECT  json->'msg'->'camera_meta'->>'serial_number' as serial_number FROM ins_camera_json)
                , (SELECT  json->'msg'->'camera_meta'->>'camera_name' as camera_name FROM ins_camera_json)
                , (select id from ins_left_intrinsics)
                , (select id from ins_right_intrinsics)
                , (select id from ins_stereo_extrinsics)
                , (select id from ins_tractor_extrinsics)
                , (select id from ins_e )
                , (select id from ins_f)
                , (select id from ins_r1)
                , (select id from ins_r2)
                , (select id from ins_p1)
                , (select id from ins_p2)
                , (select id from ins_q)
                , (select id from ins_left_roi)
                , (select id from ins_right_roi)
                , (SELECT  CAST( json->'msg'->'camera_meta'->>'left_exposure' as DECIMAL) as left_exposure FROM ins_camera_json)
                , (SELECT  CAST(json->'msg'->'camera_meta'->>'right_exposure' as DECIMAL) as right_exposure FROM ins_camera_json)
                , (SELECT  CAST(json->'msg'->'camera_meta'->>'left_gain' as DECIMAL)  as left_gain FROM ins_camera_json)
                , (SELECT  CAST(json->'msg'->'camera_meta'->>'right_gain' as DECIMAL)  as right_gain FROM ins_camera_json)
                , (SELECT  json->'msg'->'camera_meta'->>'extra' as extra FROM ins_camera_json)
                , (select id from ins_left_histogram)
                , (select id from ins_right_histogram)
            )
   
            RETURNING id
         ),

         ins_camera_message_header as (
            INSERT INTO images.camera_message_header
            (header_id, readingAt, seq, node)
            (SELECT  
                CAST(json->'msg'->'descriptor'->>'id' as BIGINT) as header_id
                , $2 as readingAt
                , CAST( json->'msg'->'descriptor'->>'seq' as INTEGER) as seq 
                , json->'msg'->'descriptor'->>'node' as node 
            FROM ins_camera_json)

            RETURNING id
         ),

         ins_image_header_stamp as (
            INSERT INTO images.image_header_stamp
            (sec, nanosec)
            (SELECT  
                CAST( json->'msg'->'image'->'header'->'stamp'->>'sec' as INTEGER) as sec 
                , CAST(json->'msg'->'image'->'header'->'stamp'->>'nanosec' as INTEGER) as nanosec 
            FROM ins_camera_json)

            RETURNING id
        ),

        ins_image_header as (
            INSERT INTO images.image_header
            (stamp_id, frame_id)
            VALUES(
                (select id from ins_image_header_stamp)
                , (SELECT  
                        json->'msg'->'image'->'header'->>'frame_id' as frame_id 
                    FROM ins_camera_json)
                )

            RETURNING id
        ),

        ins_image_data as (
            INSERT INTO images.image_data (data) 
            (SELECT  
                json->'msg'->'image'->>'data' as data 
            FROM ins_camera_json)

            RETURNING id
        ),

        ins_images as (
            INSERT INTO images.images
            (
                header_id
                , height
                , width
                , encoding
                , is_bigendian
                , step
                , data_id
            )
            VALUES (
               (select id from ins_image_header)
               , (SELECT CAST( json->'msg'->'image'->>'height' as INTEGER) as height FROM ins_camera_json)
               , (SELECT CAST(json->'msg'->'image'->>'width' as INTEGER) as width FROM ins_camera_json)
               , (SELECT json->'msg'->'image'->>'encoding' as encoding FROM ins_camera_json)
               , (SELECT CAST( json->'msg'->'image'->>'is_bigendian' as INTEGER)  as is_bigendian FROM ins_camera_json)
               , (SELECT CAST(json->'msg'->'image'->>'step' as INTEGER)  as step FROM ins_camera_json)
               , (select id from ins_image_data)
               )
   
           RETURNING id
        ),
         
        ins_camera_message as (
            INSERT INTO images.camera_message
            (header_id, image_id, camera_meta_id)
            VALUES(
                (select id from ins_camera_message_header)
                , (select id from ins_images)
                , (select id from ins_camera_meta)
            )

            RETURNING id
        )

        INSERT INTO images.camera 
            (readingAt, topic_id, vehicle_id, msg_id, camera_json_id)
        VALUES(
            $3
            , $4
            , $5
            , (select id from ins_camera_message)
            , (SELECT id FROM ins_camera_json)
        )

        RETURNING id
        
        `,[
            JSON.stringify(data)
            , formatDateTime(data.msg.descriptor.timestamp)
            , formatDateTime(data.timestamp)
            , topic.rows[0].id
            , vehicle.rows[0].id

        ])

        // Sendind response immediately
        // cb(null, JSON.stringify(queryResult) )
        return queryResult

    }catch(e){
        console.log("INSERT CAMERA DATA MESSAGE: ", e.message)
        console.log("INSERT CAMERA DATA STACK: ", e.stack)
        cb(e)
        return null
    }

}