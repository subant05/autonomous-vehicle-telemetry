import {sqlInsertCameraMessageMeta} from './sqlInsertCameraMessageMeta'
import {sqlInsertCameraMessageHeader} from './sqlInsertCameraMessageHeader'
import {sqlInsertCameraMessageImage} from './sqlInsertCameraMessageImage'
const { client, pool } = require("../../connection.js")


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