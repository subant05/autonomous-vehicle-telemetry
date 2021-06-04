async function getTopicData(parent, {topic="",cursor=1}, ctx, info){
  if(!topic || typeof topic !== 'string')
      return []

  const data = await new Promise((resolve, reject)=>{
    ctx.db.read({query:topic, options:{cursor, limit:1}, callback(err,data){
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