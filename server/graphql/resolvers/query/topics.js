export async function topics(parent, args, ctx, info){
    const data =  new Promise((resolve, reject)=>{
      ctx.db.read({query:"ROS_topics", callback(err,data){
        if(err){
          resolve([])
        } else
          resolve(data)
      }})
    }) 

    return data
  }