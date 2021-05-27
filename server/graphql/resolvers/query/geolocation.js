export async function geolocation(parent, args, ctx, info) {
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