const grs = require('./middleware')
const router = require('./plugins/router')()
const fs = require('fs')

router.add("/",(req,res)=>{
        res.stream = true
        var filename = __dirname+"/../app/index.html";
        var readStream = fs.createReadStream(filename);
        readStream.on('open', function () {
            res.status = 200
            readStream.pipe(res);
          })
        .on('error', function(err) {
            res.end(err);
        })
        .on("finish", function(){
            res.end()
        })
    })
    .add("/device", (req, res, context)=>{
        res.status = 200
        res.body = `<html>
                        <body> Reloading...</body>
                        <script>
                        setTimeout(()=>location.reload(), 5000)
                        </script>
                    </html>`
        context.send ({value:`A device sent data at: ${new Date()}`})
    })
    .redirect("*","/")

const app =  grs({port:8080})
app.run()
app.use({wsInbound(data,next){
    const newData = JSON.parse(data)
    this.send(newData)
    next()
}})
app.use(router)
