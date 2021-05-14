const grs = require('./middleware')

const app =  grs({port:8080})
app.use({device(req, next){
    console.log("Hello")
    next()
}})
app.use({inbound(data,next){
    console.log(data)
    let newData
    if(!isNaN(data))
        newData = new Date(parseInt(data)).toTimeString()
    else 
        newData = data
    this.send(newData)
    next(null, newData)
}})
app.run()