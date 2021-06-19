const {client, pool} = require("../connection.js")


export const sqlInsertTopicType = async (type)=>{
    try{
        const topicTypes =  await client.query(`            
            INSERT INTO topics.topic_types( module, class)
            VALUES ( '${type.module}', '${type.class}')
            ON CONFLICT("module") DO NOTHING
            RETURNING *
            `)
        return topicTypes.rows.length ? topicTypes.rows[0] : type
    }catch(e){
        console.log("TYPES INSERT ERROR",e.message)
        if(e.message.includes("duplicate key "))
            return type
    }

    console.log("SQL: TOPIC TYPE INSERT FAILED")
}

export const sqlSelectTopic = async (topic) =>{
    try{
        const topic =  await client.query(` SELECT * FROM topics.topics
            WHERE name = '${topic}' `)

        topic.rows.length ? topic.rows[0] : null
    }catch(e){
        console.log("SQL: TOPIC TYPE INSERT FAILED")
        return null
    }
}

export const sqlInsertTopic = async (argTopic, argData) => {


    try{
        const type = await sqlInsertTopicType(argData.type)
        const topics = await client.query(`
                INSERT INTO topics.topics(type_id, name)
                select id, '${argTopic}' 
                from topics.topic_types 
                where module ='${type.module}' 
                and class='${type.class}'
                ON CONFLICT("name") DO NOTHING
                RETURNING *
            `)
        return topics.rows.length 
            ? topics 
            : await client.query(`
                SELECT * FROM topics.topics 
                WHERE name='${argTopic}'
            `)
    }catch(e){
        console.log("TOPICS INSERT ERROR: ",e.message)
        if(e.message.includes("duplicate key "))
            return sqlSelectTopic(argTopic)
    }

    console.log("SQL: TOPIC INSERT FAILED")

}
