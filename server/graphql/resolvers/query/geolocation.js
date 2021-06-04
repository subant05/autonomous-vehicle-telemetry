export async function geolocation(parent, args, ctx, info) {
    const data =  new Promise((resolve, reject)=>{
      ctx.db.read({query:"/starfire", callback(err,data){
        if(err){
          resolve([])
        } else
          resolve(data)
      }})
    }) 

    return data
}