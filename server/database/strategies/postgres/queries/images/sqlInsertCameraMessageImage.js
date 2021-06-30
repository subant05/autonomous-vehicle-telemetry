const { client, pool } = require("../../connection.js")

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