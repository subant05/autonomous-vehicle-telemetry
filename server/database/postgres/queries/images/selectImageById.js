const { client, pool } = require("../../connection.js")
import {rgbToBase64} from './_utils/rgbToBase64'

export const sqlSelectImageRgbById = async (id) =>{
    try {
        return await client.query(`
        SELECT 
            img_data.data as data, 
            imgs.is_bigendian as is_bigendian,
            imgs.encoding as encoding,
            imgs.height as height,
            imgs.width as width,
            imgs.step as step
        FROM images.images as imgs
        INNER JOIN images.image_data  as img_data ON  imgs.data_id = img_data.id
        WHERE imgs.id = $1
        `,[
            id
        ])
    } catch(e){
        console.log("SELECT IMAGE BY ID -  MESSAGE: ", e.message)
        console.log("SELECT IMAGE BY ID -  STACK: ", e.stack)
        return []
    }

    return []
}

export const sqlSelectImageBase64ById = async (id, isSegmentation = false) =>{
    try{
        const data = await sqlSelectImageRgbById(id)
        if(data.rows.length){
            if(data.rows[0].data.includes("["))
                return [rgbToBase64({...data.rows[0],isSegmentation})]
            else{
                return [Buffer.from(data.rows[0].data, 'base64')] //[`data:image/png;base64,${data.rows[0].data}`]
            }

        }
    }catch(e){
        console.log("SELECT BASE64 IMAGE BY ID -  MESSAGE: ", e.message)
        console.log("SELECT BASE64 IMAGE BY ID -  STACK: ", e.stack)
        return []
    }
    return []
}


