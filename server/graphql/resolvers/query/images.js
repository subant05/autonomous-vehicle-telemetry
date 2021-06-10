async function getTopicData(parent, {topic="",cursor=1, id}, ctx, info){
  if(!topic || typeof topic !== 'string')
      return []

  const data = await new Promise((resolve, reject)=>{
    ctx.db.read({query:topic, options:{cursor, limit:1, id}, callback(err,data){
      if(err){
        resolve([])
      } else
        resolve(data)
    }})
  }) 
  
  return data
}


export const imagePair = getTopicData
export const segmentationMap = getTopicData