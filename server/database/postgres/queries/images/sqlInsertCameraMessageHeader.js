import moment from 'moment';
const { client, pool } = require("../../connection.js")

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