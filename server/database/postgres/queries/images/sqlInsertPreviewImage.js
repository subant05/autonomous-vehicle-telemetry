import { sqlInsertTopic, sqlInsertTopicSequence } from '../topics'
import {sqlInsertVehicle, sqlInsertVehicleOnline, sqlInsertVehicleTopic} from '../vehicles'
import {formatDateTime} from '../_utils'
import {sqlInsertCameraMessage} from './sqlInsertCameraMessage'
import process from 'process'
const { client, pool } = require("../../connection.js")

export const sqlInsertPreviewImage = async (argTopic, data, cb=a=>a) =>{
    if(!argTopic || !argTopic.includes('/preview') || !data){
        cb(null, "ignored")
        return;
    }
    
    try{
        // Vehicle should not wait for response
        cb(null, JSON.stringify("Data Sent") )

        const topic = await sqlInsertTopic(argTopic, {category:"images", ...data})
        const vehicle = await sqlInsertVehicle(data.vehicle)
        const vehicleTopic = await sqlInsertVehicleTopic(vehicle.rows[0].id, topic.rows[0].id)
        const vehicleSequence = await sqlInsertTopicSequence(vehicle.rows[0].id, topic.rows[0].id, data)
        const vehicleOnline = await sqlInsertVehicleOnline(vehicle.rows[0].id)
        
        const queryResult =  await client.query(`
        WITH ins_camera_json as (
            INSERT INTO images.camera_json(json)
            VALUES($59)

            RETURNING *
        ),
        ins_left_intrinsics_k as (
            INSERT INTO images.side_intrinsics_k (data)
            VALUES($1)

            RETURNING id
        ),
        ins_right_intrinsics_k as (
             INSERT INTO images.side_intrinsics_k (data)
             VALUES($2)

             RETURNING id
         ),
         ins_left_intrinsics_d as (
             INSERT INTO images.side_intrinsics_d (data)
             VALUES($3)

             RETURNING id
         ),
         ins_right_intrinsics_d as (
              INSERT INTO images.side_intrinsics_d (data)
              VALUES($4)

              RETURNING id
        ),
        ins_left_intrinsics as (
            INSERT INTO images.side_intrinsics (height, width, k_id, d_id)
            VALUES(
                $5
                , $6
                , (select id from ins_left_intrinsics_k)
                , (select id from ins_left_intrinsics_d)
             )

            RETURNING id
        ),
        ins_right_intrinsics as (
            INSERT INTO images.side_intrinsics (height, width, k_id, d_id)
            VALUES(
                $7
                , $8
                , (select id from ins_right_intrinsics_k)
                , (select id from ins_right_intrinsics_d)
             )

            RETURNING id
        ),
        ins_stereo_extrinsics_t as (
            INSERT INTO images.stereo_extrinsics_t (data) 
            VALUES($9)

            RETURNING id
        ),
        ins_stereo_extrinsics_r as (
             INSERT INTO images.stereo_extrinsics_r (data) VALUES($10)

             RETURNING id
         ),
         ins_stereo_extrinsics_r_rodrigues as (
             INSERT INTO images.stereo_extrinsics_r_rodrigues (data) VALUES($11)

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
             INSERT INTO images.tractor_extrinsics_t (data) VALUES($12)
         
             RETURNING id
         ),
         ins_tractor_extrinsics_r as (
              INSERT INTO images.tractor_extrinsics_r (data) VALUES($13)
         
              RETURNING id
          ),
          ins_tractor_extrinsics_r_rodrigues as (
              INSERT INTO images.tractor_extrinsics_r_rodrigues (data) VALUES($14)
         
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
             VALUES($15, $16, $17, $18, $19)
        
             RETURNING id
         ),
         ins_right_roi as (
             INSERT INTO images.camera_roi 
             (x_offset, y_offset, height, width, do_rectify) 
             VALUES($20, $21, $22, $23, $24)
        
             RETURNING id
         ),
         ins_left_histogram_full_histogram as (
             INSERT INTO images.full_histogram (data)
             VALUES($25)

             RETURNING id
         ),
         ins_left_histogram_small_histogram as (
             INSERT INTO images.small_histogram (data)
             VALUES($26)
             
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
             VALUES($27)
         
             RETURNING id
         ),
         ins_right_histogram_small_histogram as (
             INSERT INTO images.small_histogram (data)
             VALUES($28)
             
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
             VALUES ($31)

             RETURNING id
         ),
         ins_f as (
             INSERT INTO images.camera_meta_f (data)
             VALUES($32)

             RETURNING id
         ),
         ins_r1 as (
             INSERT INTO images.camera_meta_r1 (data)
             VALUES ($33)

             RETURNING id
         ),
         ins_r2 as (
             INSERT INTO images.camera_meta_r2 (data)
             VALUES ($34)

             RETURNING id
         ),
         ins_p1 as (
             INSERT INTO images.camera_meta_p1 (data)
             VALUES($35)

             RETURNING id
         ),
         ins_p2 as (
             INSERT INTO images.camera_meta_p2 (data)
             VALUES($36)

             RETURNING id
         ),
         ins_q as (
             INSERT INTO images.camera_meta_q (data)
             VALUES($37)

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
                $29
                , $30
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
                , $38
                , $39
                , $40
                , $41
                , $42
                , (select id from ins_left_histogram)
                , (select id from ins_right_histogram)
            )
   
            RETURNING id
         ),

         ins_camera_message_header as (
            INSERT INTO images.camera_message_header
            (header_id, readingAt, seq, node)
            VALUES ($43, $44, $45, $46)

            RETURNING id
         ),

         ins_image_header_stamp as (
            INSERT INTO images.image_header_stamp
            (sec, nanosec)
            VALUES($47, $48)

            RETURNING id
        ),

        ins_image_header as (
            INSERT INTO images.image_header
            (stamp_id, frame_id)
            VALUES(
                (select id from ins_image_header_stamp)
                , $49)

            RETURNING id
        ),

        ins_image_data as (
            INSERT INTO images.image_data (data) VALUES ($50)

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
               , $51
               , $52
               , $53
               , $54
               , $55
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
            $56
            , $57
            , $58 
            , (select id from ins_camera_message)
            , (SELECT id FROM ins_camera_json)
        )

        RETURNING id
        
        `,[
            JSON.stringify(data.msg.camera_meta.left_intrinsics.k)
            , JSON.stringify(data.msg.camera_meta.right_intrinsics.k)
            , JSON.stringify(data.msg.camera_meta.left_intrinsics.d)
            , JSON.stringify(data.msg.camera_meta.right_intrinsics.d)
            , data.msg.camera_meta.left_intrinsics.height
            , data.msg.camera_meta.left_intrinsics.width
            , data.msg.camera_meta.right_intrinsics.height
            , data.msg.camera_meta.right_intrinsics.width
            , JSON.stringify(data.msg.camera_meta.stereo_extrinsics.t)
            , JSON.stringify(data.msg.camera_meta.stereo_extrinsics.r)
            , JSON.stringify(data.msg.camera_meta.stereo_extrinsics.r_rodrigues)
            , JSON.stringify(data.msg.camera_meta.tractor_extrinsics.t)
            , JSON.stringify(data.msg.camera_meta.tractor_extrinsics.r)
            , JSON.stringify(data.msg.camera_meta.tractor_extrinsics.r_rodrigues)
            , data.msg.camera_meta.left_roi.x_offset
            , data.msg.camera_meta.left_roi.y_offset
            , data.msg.camera_meta.left_roi.height
            , data.msg.camera_meta.left_roi.width
            , data.msg.camera_meta.left_roi.do_rectify
            , data.msg.camera_meta.right_roi.x_offset
            , data.msg.camera_meta.right_roi.y_offset
            , data.msg.camera_meta.right_roi.height
            , data.msg.camera_meta.right_roi.width
            , data.msg.camera_meta.right_roi.do_rectify
            , JSON.stringify(data.msg.camera_meta.left_histogram.full_histogram)
            , JSON.stringify(data.msg.camera_meta.left_histogram.small_histogram)
            , JSON.stringify(data.msg.camera_meta.right_histogram.full_histogram)
            , JSON.stringify(data.msg.camera_meta.right_histogram.small_histogram)
            , data.msg.camera_meta.serial_number
            , data.msg.camera_meta.camera_name
            , JSON.stringify(data.msg.camera_meta.e)
            , JSON.stringify(data.msg.camera_meta.f)
            , JSON.stringify(data.msg.camera_meta.r1)
            , JSON.stringify(data.msg.camera_meta.r2)
            , JSON.stringify(data.msg.camera_meta.p1)
            , JSON.stringify(data.msg.camera_meta.p2)
            , JSON.stringify(data.msg.camera_meta.q)
            , data.msg.camera_meta.left_exposure
            , data.msg.camera_meta.right_exposure
            , data.msg.camera_meta.left_gain
            , data.msg.camera_meta.right_gain
            , data.msg.camera_meta.extra
            , data.msg.descriptor.id 
            , formatDateTime(data.msg.descriptor.timestamp)
            , data.msg.descriptor.seq 
            , data.msg.descriptor.node
            , data.msg.image.header.stamp.sec
            , data.msg.image.header.stamp.nanosec
            , data.msg.image.header.frame_id
            , JSON.stringify(data.msg.image.data)
            , data.msg.image.height
            , data.msg.image.width
            , data.msg.image.encoding
            , data.msg.image.is_bigendian
            , data.msg.image.step
            , formatDateTime(data.timestamp)
            , topic.rows[0].id
            , vehicle.rows[0].id
            , JSON.stringify(data)
        ])

        // Sendind response immediately
        // cb(null, JSON.stringify(queryResult) )
        return queryResult

    }catch(e){
        console.log("INSERT CAMERA DATA MESSAGE: ", e.message)
        console.log("INSERT CAMERA DATA STACK: ", e.stack)
        console.log("INSERT CAMERA VEHICLE SQL RESULT: ", vehicle)
        console.log("INSERT CAMERA JSON VEHICLE PROPERTY: ", JSON.stringify(data.vehicle, null, " "))
        cb(e)
        return null
    }

}