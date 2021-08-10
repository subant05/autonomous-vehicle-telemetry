const { client, pool } = require("../../connection.js")

const insertObjectDetectionMessageVertices = async ( objectMessageId, data, cb = a => a) => {
    if(!data)
        return;
    const {
        xyz_camera
        , xyz_starfire
        , lla
        , enu
        , field_origin
        , ecef
    } = data

    const queryResult = await client.query(`
    With ins_xyz_camera AS (
        INSERT INTO detection.object_message_xyz_camera
        ( x_m, y_m, z_m)
        VALUES($1, $2, $3)

        RETURNING id
    ),

    ins_xyz_starfire AS (
        INSERT INTO detection.object_message_xyz_starfire
        ( x_m, y_m, z_m)
        VALUES($4, $5, $6)

        RETURNING id
    ),

    ins_lla AS (
        INSERT INTO detection.object_message_lla
        ( latitude_deg, longitude_deg, altitude_m)
        VALUES($7, $8, $9)

        RETURNING id
    ),

    ins_enu AS (
        INSERT INTO detection.object_message_enu
        ( east_m, north_m, up_m)
        VALUES($10, $11, $12)

        RETURNING id
    ),

    ins_field_origin AS(
        INSERT INTO detection.object_message_field_origin
        ( latitude_deg, longitude_deg, altitude_m)
        VALUES($13, $14, $15)

        RETURNING id
    ),

    ins_ecef AS (
        INSERT INTO detection.object_message_ecef
        ( x_m, y_m, z_m)
        VALUES($16, $17, $18)

        RETURNING id
    )


        INSERT INTO detection.object_message_vertices
        (
            object_message_id
            , xyz_camera_id
            , xyz_starfire_id
            , lla_id
            , enu_id
            , ecef_id
            , field_origin_id
        )
        VALUES (
            $19
            , (select id from ins_xyz_camera)
            , (select id from ins_xyz_starfire)
            , (select id from ins_lla)
            , (select id from ins_enu)
            , (select id from ins_ecef)
            , (select id from ins_field_origin)
        )

        RETURNING id

    `, [
        // ins_xyz_camera
        xyz_camera.x_m
        , xyz_camera.y_m
        , xyz_camera.z_m
        // ins_xyz_starfire 
        , xyz_starfire.x_m
        , xyz_starfire.y_m
        , xyz_starfire.z_m
        // ins_lla
        , lla.latitude_deg
        , lla.longitude_deg
        , lla.altitude_m
        // ins_enu
        , enu.east_m
        , enu.north_m
        , enu.up_m
        // ins_field_origin
        , field_origin.latitude_deg
        , field_origin.longitude_deg
        , field_origin.altitude_m
        // ins_ecef
        , ecef.x_m
        , ecef.y_m
        , ecef.z_m
        , objectMessageId
    ])
}


const getsSqlBatchGenerator = (objectMessageId, batch=[], cb=a=>a) => {
    return {
                async* [Symbol.asyncIterator](){
                    try{
                        const length = batch.length 
                        let count = 0
    
                        if(!length)
                            return null;
    
                        do{
                            yield insertObjectDetectionMessageVertices(objectMessageId, batch[count] );
                        }while(++count < length)
                        cb(null, "OBJECT DETECTION MESSAGE VERTICES Uploaded")

                    } catch(e){
                        console.log("INSERT OBJECT DETECTION MESSAGE VERTICES ERROR MESSAGE: ", e.message)
                        console.log("INSERT OBJECT DETECTION MESSAGE VERTICES ERROR STACK: ", e.stack)
                        cb("OBJECT DETECTION MESSAGE VERTICES Failed")
                        return null;
                    }

                }

        }
}

export const sqlInsertObjectDetectionMessageVertices = async (objectMessageId, batch=[], cb=a=>a) =>{
    try{
        if(!batch.length)
            return null;

        const iter = getsSqlBatchGenerator(objectMessageId, batch, cb)[Symbol.asyncIterator]()
        let vertices;
        do{
            vertices = await iter.next();
        } while(!vertices.done)

    } catch(e){
        console.log("INSERT OBJECT DETECTION MESSAGE VERTICES LOOP ERROR MESSAGE: ", e.message)
        console.log("INSERT OBJECT DETECTION MESSAGE VERTICES LOOP ERROR STACK: ", e.stack)
        cb("OBJECT DETECTION MESSAGE VERTICES Upload Failed")
        return null
    }

}