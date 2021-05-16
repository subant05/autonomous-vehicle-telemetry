const grs = require('./middleware')
const router = require('./plugins/router')()

router.add("get","/", (req,res, mw)=>{
        mw.renderHTML(req,res,"index.html")
    })
    .add("get","/device", (req, res, mw)=>{
        mw.renderHTML(req,res,"device.html", ()=>mw.send ({value:`A device sent data at: ${new Date()}`}))
    })
    .redirect("get","*","/")

const app =  grs({port:8080})
app.run()
app.use({wsInbound(data,next){
    const newData = JSON.parse(data)
    this.send(newData)
    next()
}})
app.use(router)
