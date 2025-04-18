const {client, pool} = require("../../connection.js")


export const sqlInsertTopicType = async (type, category)=>{
    try{
        const topicTypes =  await client.query(`            
            INSERT INTO topics.topic_types( module, class)
            VALUES ( '${type.module}', '${type.class}')
            ON CONFLICT("module") DO NOTHING
            RETURNING *
            `)
        return topicTypes.rows.length ? topicTypes.rows[0] : type
    }catch(e){
        if(e.message.includes("duplicate key "))
            return type
        else {
            console.log("TYPES INSERT ERROR",e.message)
        }
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
                INSERT INTO topics.topics(type_id, name, topic_category_id)
                select 
                    id
                    , '${argTopic}' 
                    , (select id from topics.topic_category where name ='${argData.category.toLowerCase()}')
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
        if(e.message.includes("duplicate key "))
            return sqlSelectTopic(argTopic)
        else{
            console.log("TOPICS INSERT ERROR: ",e.message)
        }
    }

    console.log("SQL: TOPIC INSERT FAILED")

}

export const sqlInsertTopicSequence = async (vehicleId, topicId, {seq}={seq:0} ) => {
    try{
        return await client.query(`
            INSERT INTO topics.topic_sequence 
            (topic_id, vehicle_id, seq)
            VALUES( $1, $2, $3)

            RETURNING *
        `,[
            topicId
            , vehicleId
            , seq
        ])
    } catch(e){
        console.log("TOPIC SEQUENCE INSERT MESSAGE", e.message)
        console.log("TOPIC SEQUENCE INSERT STACK", e.stack)

        return null
    }
}
