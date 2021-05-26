const Query = {
  hello(parent, args, ctx, info) {
      return "hello"
  }
  , async geolocation(parent, args, ctx, info) {
      const data =  new Promise((resolve, reject)=>{
        ctx.db.read({query:"/starfire", callback(err,data){
          if(err){
            console.log(err)
            resolve([])
          } else
            resolve(JSON.parse(data))
        }})
      }) 

      return data
  }
  , async topics(parent, args, ctx, info){
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
}

export {Query as default}