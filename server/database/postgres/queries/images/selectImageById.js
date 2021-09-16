const { client, pool } = require("../../connection.js")
import {rgbToBase64} from './_utils/rgbToBase64'
import process from 'process'

export const sqlSelectImageRgbById = async (id) =>{
    try {
        return await client.query(`
            select * from images.select_image_by_id ($1)
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
            console.log(data.rows[0].width)
            if(data.rows[0].data.includes("["))
                return [rgbToBase64({...data.rows[0],isSegmentation})]
            else{
                return [data.rows[0].data] //[`data:image/png;base64,${data.rows[0].data}`]
            }

        }
    }catch(e){
        console.log("SELECT BASE64 IMAGE BY ID -  MESSAGE: ", e.message)
        console.log("SELECT BASE64 IMAGE BY ID -  STACK: ", e.stack)
        return []
    }
    return []
}

process.on("message", async ({id, isSegmentation})=>{
    const img = await sqlSelectImageBase64ById(id, isSegmentation);
    process.send({img})
})

