import {formatDateTime} from '../_utils'

const { client, pool } = require("../../connection.js")

export const sqlInsertObjectDetectionMessage = async (data, cb = a => a) => {


    try {
        const { descriptor
            , detection
            , centroid_rpy
            , centroid_location
            , circle_center
            , circle_radius_m
            , on_path
            , is_active_path_set
            , camera_name
            , id } = data

        const queryResult = await client.query(`
        
        WITH ins_object_message_header AS (
            INSERT INTO detection.object_message_header
            (headerId, readingat, seq, node )
            VALUES($1, $2, $3, $4)

            RETURNING id
        ),
        
        ins_object_message_detection_header AS (
            INSERT INTO detection.object_message_detection_header
            (headerId, readingAt, seq, node)
            VALUES($5, $6, $7, $8)

            RETURNING id
        ),

        ins_object_message_detection_cuboid_centroid AS (
            INSERT INTO detection.object_message_detection_cuboid_centroid
            ( x_m, y_m, z_m)
            VALUES($9, $10, $11)

            RETURNING id
        ),

        ins_object_message_detection_cuboid_dimension AS (
            INSERT INTO detection.object_message_detection_cuboid_dimension
            ( width_m, depth_m, height_m)
            VALUES($12, $13, $14)

            RETURNING id
        ),

        ins_object_message_detection_cuboid_orientation AS (
            INSERT INTO detection.object_message_detection_cuboid_orientation
            ( roll_deg, pitch_deg, yaw_deg)
            VALUES($15, $16, $17)

            RETURNING id
        ),

        ins_object_message_detection_cuboid AS (
            INSERT INTO detection.object_message_detection_cuboid
            ( centroid_id, dimension_id, orientation_id)
            VALUES( 
                (select id from ins_object_message_detection_cuboid_centroid)
                , (select id from ins_object_message_detection_cuboid_dimension)
                , (select id from ins_object_message_detection_cuboid_orientation))

            RETURNING id
        ),

        ins_object_message_detection_roi AS (
            INSERT INTO detection.object_message_detection_roi
            (   x
                , y
                , width
                , height
                , theta_deg)
            VALUES($18, $19, $20, $21, $22)

            RETURNING id
        ),

        ins_object_message_detection AS (
            INSERT INTO detection.object_message_detection
            ( header_id, cuboid_id, roi_id, label, confidence)
            VALUES(
                (select id from ins_object_message_detection_header)
                , (select id from ins_object_message_detection_cuboid)
                , (select id from ins_object_message_detection_roi)
                , $23
                , $24)

            RETURNING id
        ),

        ins_object_message_centroid_rpy AS (
            INSERT INTO detection.object_message_centroid_rpy
            ( roll_deg, pitch_deg, yaw_deg)
            VALUES($25, $26, $27)

            RETURNING id
        ),

        ins_object_message_centroid_location_xyz_camera AS (
            INSERT INTO detection.object_message_xyz_camera
            ( x_m, y_m, z_m)
            VALUES($28, $29, $30)

            RETURNING id
        ),

        ins_object_message_centroid_location_xyz_starfire AS (
            INSERT INTO detection.object_message_xyz_starfire
            ( x_m, y_m, z_m)
            VALUES($31, $32, $33)

            RETURNING id
        ),

        ins_object_message_centroid_location_lla AS (
            INSERT INTO detection.object_message_lla
            ( latitude_deg, longitude_deg, altitude_m)
            VALUES($34, $35, $36)

            RETURNING id
        ),

        ins_object_message_centroid_location_enu AS (
            INSERT INTO detection.object_message_enu
            ( east_m, north_m, up_m)
            VALUES($37, $38, $39)

            RETURNING id
        ),

        ins_object_message_centroid_location_ecef AS (
            INSERT INTO detection.object_message_ecef
            ( x_m, y_m, z_m)
            VALUES($40, $41, $42)

            RETURNING id
        ),

        ins_object_message_centroid_location_field_origin AS(
            INSERT INTO detection.object_message_field_origin
            ( latitude_deg, longitude_deg, altitude_m)
            VALUES($43, $44, $45)

            RETURNING id
        ),

        ins_object_message_centroid_location AS (
            INSERT INTO detection.object_message_centroid_location
            (
                xyz_camera_id
                , xyz_starfire_id
                , lla_id
                , enu_id
                , field_origin_id
                , ecef_id
            )
            VALUES
            (
                (select id from ins_object_message_centroid_location_xyz_camera )
                , (select id from ins_object_message_centroid_location_xyz_starfire )
                , (select id from ins_object_message_centroid_location_lla )
                , (select id from ins_object_message_centroid_location_enu )
                , (select id from ins_object_message_centroid_location_ecef )
                , (select id from ins_object_message_centroid_location_field_origin )
            )

            RETURNING id
        ),

        ins_object_message_circle_center_xyz_camera AS (
            INSERT INTO detection.object_message_xyz_camera
            ( x_m, y_m, z_m)
            VALUES($46, $47, $48)
        
            RETURNING id
        ),
        
        ins_object_message_circle_center_xyz_starfire AS (
            INSERT INTO detection.object_message_xyz_starfire
            ( x_m, y_m, z_m)
            VALUES($49, $50, $51)
        
            RETURNING id
        ),
        
        ins_object_message_circle_center_lla AS (
            INSERT INTO detection.object_message_lla
            ( latitude_deg, longitude_deg, altitude_m)
            VALUES($52, $53, $54)
        
            RETURNING id
        ),
        
        ins_object_message_circle_center_enu AS (
            INSERT INTO detection.object_message_enu
            ( east_m, north_m, up_m)
            VALUES($55, $56, $57)
        
            RETURNING id
        ),
        
        ins_object_message_circle_center_ecef AS (
            INSERT INTO detection.object_message_ecef
            ( x_m, y_m, z_m)
            VALUES($58, $59, $60)
        
            RETURNING id
        ),
        
        ins_object_message_circle_center_field_origin AS(
            INSERT INTO detection.object_message_field_origin
            ( latitude_deg, longitude_deg, altitude_m)
            VALUES($61, $62, $63)
        
            RETURNING id
        ),
        
        ins_object_message_circle_center AS (
            INSERT INTO detection.object_message_circle_center
            (xyz_camera_id, xyz_starfire_id, lla_id, enu_id, field_origin_id, ecef_id)
            VALUES
            (
                (select id from ins_object_message_circle_center_xyz_camera )
                , (select id from ins_object_message_circle_center_xyz_starfire )
                , (select id from ins_object_message_circle_center_lla )
                , (select id from ins_object_message_circle_center_enu )
                , (select id from ins_object_message_circle_center_ecef )
                , (select id from ins_object_message_circle_center_field_origin )
            )
        
            RETURNING id
        )
        
            INSERT INTO detection.object_message
            (
                referenceid
                , header_id
                , detection_id 
                , centroid_rpy_id 
                , centroid_location_id 
                , circle_center_id 
                , circle_radius_m 
                , on_path 
                , is_active_path_set 
                , camera_name 
            )
            VALUES (
                $64
                , (select id from ins_object_message_header)
                , (select id from ins_object_message_detection)
                , (select id from ins_object_message_centroid_rpy)
                , (select id from ins_object_message_centroid_location)
                , (select id from ins_object_message_circle_center)
                , $65
                , $66
                , $67
                , $68
            )

            RETURNING id

        `,[
            // ins_object_message_header 
            descriptor.id
            , formatDateTime(descriptor.timestamp)
            , descriptor.seq
            , descriptor.node
            // ins_object_message_detection_header
            , detection.descriptor.id
            , formatDateTime(detection.descriptor.timestamp)
            , detection.descriptor.seq
            , detection.descriptor.node
            // ins_object_message_detection_cuboid_centroid
            , detection.cuboid.centroid.x_m
            , detection.cuboid.centroid.y_m
            , detection.cuboid.centroid.z_m
            // ins_object_message_detection_cuboid_dimension
            , detection.cuboid.dimension.width_m
            , detection.cuboid.dimension.depth_m
            , detection.cuboid.dimension.height_m
            // ins_object_message_detection_cuboid_orientation
            , detection.cuboid.orientation.roll_deg
            , detection.cuboid.orientation.pitch_deg
            , detection.cuboid.orientation.yaw_deg
            // ins_object_message_detection_roi
            , detection.roi.x
            , detection.roi.y
            , detection.roi.width
            , detection.roi.height
            , detection.roi.theta_deg
            // ins_object_message_detection
            , detection.label
            , detection.confidence
            // ins_object_message_centroid_rpy
            , centroid_rpy.roll_deg
            , centroid_rpy.pitch_deg
            , centroid_rpy.yaw_deg
            // ins_object_message_centroid_location_xyz_camera 
            , centroid_location.xyz_camera.x_m
            , centroid_location.xyz_camera.y_m
            , centroid_location.xyz_camera.z_m
            // ins_object_message_centroid_location_xyz_starfire
            , centroid_location.xyz_starfire.x_m
            , centroid_location.xyz_starfire.y_m
            , centroid_location.xyz_starfire.z_m
            // ins_object_message_centroid_location_lla
            , centroid_location.lla.latitude_deg
            , centroid_location.lla.longitude_deg
            , centroid_location.lla.altitude_m
            // ins_object_message_centroid_location_enu 
            , centroid_location.enu.east_m
            , centroid_location.enu.north_m
            , centroid_location.enu.up_m
            // ins_object_message_centroid_location_ecef 
            , centroid_location.ecef.x_m
            , centroid_location.ecef.y_m
            , centroid_location.ecef.z_m
            // ins_object_message_centroid_location_field_origin 
            , centroid_location.field_origin.latitude_deg
            , centroid_location.field_origin.longitude_deg
            , centroid_location.field_origin.altitude_m
            // ins_object_message_circle_center_xyz_camera
            , circle_center.xyz_camera.x_m
            , circle_center.xyz_camera.y_m
            , circle_center.xyz_camera.z_m
            // ins_object_message_circle_center_xyz_starfire
            , circle_center.xyz_starfire.x_m
            , circle_center.xyz_starfire.y_m
            , circle_center.xyz_starfire.z_m
            // ins_object_message_circle_center_lla
            , circle_center.lla.latitude_deg
            , circle_center.lla.longitude_deg
            , circle_center.lla.altitude_m
            // ins_object_message_circle_center_enu
            , circle_center.enu.east_m
            , circle_center.enu.north_m
            , circle_center.enu.up_m
            // ins_object_message_circle_center_ecef
            , circle_center.ecef.x_m
            , circle_center.ecef.y_m
            , circle_center.ecef.z_m
            // ins_object_message_circle_center_field_origin
            , circle_center.field_origin.latitude_deg
            , circle_center.field_origin.longitude_deg
            , circle_center.field_origin.altitude_m
            // INSERT INTO detection.object_message
            , id
            , circle_radius_m 
            , on_path 
            , is_active_path_set 
            , camera_name 
        ]);
        cb(null, JSON.stringify(queryResult) )
        return queryResult

    } catch (e) {
        console.log("INSERT OBJECT DETECTION MESSAGE: ", e.message)
        console.log("INSERT OBJECT DETECTION  STACK: ", e.stack)
        cb(e)
        return null
    }
}