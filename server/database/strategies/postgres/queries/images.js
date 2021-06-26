import { sqlInsertTopic } from './topics'
import {sqlInsertVehicle, sqlInsertVehicleOnline, sqlInsertVehicleTopic} from './vehicles'
import moment from 'moment';
const { client, pool } = require("../connection.js")


export const sqlInsertCameraMessageMeta = async (data) =>{
    try{
        return await client.query(`
           WITH ins_left_intrinsics_k as (
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
            )

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
        `,[
            JSON.stringify(data.left_intrinsics.k)
            , JSON.stringify(data.right_intrinsics.k)
            , JSON.stringify(data.left_intrinsics.d)
            , JSON.stringify(data.right_intrinsics.d)
            , data.left_intrinsics.height
            , data.left_intrinsics.width
            , data.right_intrinsics.height
            , data.right_intrinsics.width
            , JSON.stringify(data.stereo_extrinsics.t)
            , JSON.stringify(data.stereo_extrinsics.r)
            , JSON.stringify(data.stereo_extrinsics.r_rodrigues)
            , JSON.stringify(data.tractor_extrinsics.t)
            , JSON.stringify(data.tractor_extrinsics.r)
            , JSON.stringify(data.tractor_extrinsics.r_rodrigues)
            , data.left_roi.x_offset
            , data.left_roi.y_offset
            , data.left_roi.height
            , data.left_roi.width
            , data.left_roi.do_rectify
            , data.right_roi.x_offset
            , data.right_roi.y_offset
            , data.right_roi.height
            , data.right_roi.width
            , data.right_roi.do_rectify
            , JSON.stringify(data.left_histogram.full_histogram)
            , JSON.stringify(data.left_histogram.small_histogram)
            , JSON.stringify(data.right_histogram.full_histogram)
            , JSON.stringify(data.right_histogram.small_histogram)
            , data.serial_number
            , data.camera_name
            , JSON.stringify(data.e)
            , JSON.stringify(data.f)
            , JSON.stringify(data.r1)
            , JSON.stringify(data.r2)
            , JSON.stringify(data.p1)
            , JSON.stringify(data.p2)
            , JSON.stringify(data.q)
            , data.left_exposure
            , data.right_exposure
            , data.left_gain
            , data.right_gain
            , data.extra
        ])
    } catch(e){
        console.log("INSERT IMAGE MESSAGE CAMERA META: ", e.message)
        console.log("INSERT IMAGE MESSAGE CAMERA META STACK: ", e.stack)
    }

    return null
}

export const sqlInsertCameraMessageHeader = async (data) =>{
    try {
        return await client.query(`
            INSERT INTO images.camera_message_header
            (header_id, readingAt, seq, node)
            VALUES ($1, $2, $3, $4)

            RETURNING id
        `,[
            data.id 
            , moment(data.timestamp/1000000).utc().format('YYYY-MM-DD HH:mm:ssZZ')
            , data.seq 
            , data.node
        ])
    }catch(e){
        console.log("INSERT IMAGE MESSAGE CAMERA HEADER MESSAGE: ", e.message)
        console.log("INSERT IMAGE MESSAGE CAMERA HEADER STACK: ", e.stack)

    }

    return null;
}

export const sqlInsertCameraMessageImage = async (data)=>{
    try{
        return await client.query(`
            WITH ins_image_header_stamp as (
                INSERT INTO images.image_header_stamp
                (sec, nanosec)
                VALUES($1, $2)

                RETURNING id
            ),
            ins_image_header as (
                INSERT INTO images.image_header
                (stamp_id, frame_id)
                VALUES(
                    (select id from ins_image_header_stamp)
                    , $3)

                RETURNING id
            ),
            ins_image_data as (
                INSERT INTO images.image_data (data) VALUES ($4)

                RETURNING id
            )
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
                , $5
                , $6
                , $7
                , $8
                , $9
                , (select id from ins_image_data)
                )

            RETURNING id
        `,[
            data.header.stamp.sec
            , data.header.stamp.nanosec
            , data.header.frame_id
            , JSON.stringify(data.data)
            , data.height
            , data.width
            , data.encoding
            , data.is_bigendian
            , data.step
        ])

    }catch(e){
        console.log("INSERT IMAGE MESSAGE CAMERA IMAGE MESSAGE: ", e.message)
        console.log("INSERT IMAGE MESSAGE CAMERA IMAGE STACK: ", e.stack)
    }

    return null;
}

export const sqlInsertCameraMessage = async (data) =>{
    try {
        const cameraMessageMeta = await sqlInsertCameraMessageMeta(data.camera_meta)
        const cameraMessageHeader = await sqlInsertCameraMessageHeader(data.header || data.descriptor)
        const cameraMessageImage = await sqlInsertCameraMessageImage(data.image)
        
        return await client.query(`
            INSERT INTO images.camera_message
            (header_id, image_id, camera_meta_id)
            VALUES($1, $2, $3)

            RETURNING id
        `,[
            cameraMessageHeader.rows[0].id
            , cameraMessageImage.rows[0].id
            , cameraMessageMeta.rows[0].id
        ])
    } catch(e){
        console.log("INSERT CAMERA MESSAGE -  MESSAGE: ", e.message)
        console.log("INSERT CAMERA MESSAGE -  STACK: ", e.stack)

    }

    return null
}

export const sqlInsertImagePreview = async (argTopic, data) =>{
    if(!argTopic.includes('/preview') || !data)
        return;

    try {
        const topic = await sqlInsertTopic(argTopic, data)
        const vehicle = await sqlInsertVehicle(data.vehicle)
        const vehicleTopic = await sqlInsertVehicleTopic(vehicle.rows[0].id, topic.rows[0].id)
        const vehicleOnline = await sqlInsertVehicleOnline(vehicle.rows[0].id)
        const cameraMessage = await sqlInsertCameraMessage(data.msg)
        return await client.query(`
            INSERT INTO images.camera 
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

    }catch(e){
        console.log("INSERT CAMERA DATA MESSAGE: ", e.message)
        console.log("INSERT CAMERA DATA STACK: ", e.stack)
    }

    return null
}