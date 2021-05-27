export async function topics(parent, args, ctx, info){
    const data =  new Promise((resolve, reject)=>{
      ctx.db.read({query:"ROS_topics", callback(err,data){
        if(err){
          console.log(err)
          resolve([])
        } else
          resolve(JSON.parse(data))
      }})
    }) 

    return data
  }