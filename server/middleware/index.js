const { throws } = require('assert')
const http = require('http')
const WebSocket = require('ws')

class GreatRedSpot {
    constructor({port=8080}={}){
        this.inbound=[]
        this.outbound=[]
        this.device=[]
        this.port = port
        this.socket;


        this.server = http.createServer(this.restfulHandler.bind(this))
        const WebSocketServer = new WebSocket.Server({ server:this.server });
        WebSocketServer.on('connection', (socket) => {
            socket.on("message",message=>{
                this.executePlugins(this.inbound,message)
            })
            socket.on('open', function open() {
                console.log('connected');
                socket.send(Date.now());
              });
              
              socket.on('close', function close() {
                console.log('disconnected');
              });

            this.socket = socket
        });

        // WebSocketServer.on("close",function(){
        //     console.log("Client disconnected")
        // })
        
    }

    restfulHandler(req, res){
            if (req.url.endsWith('favicon.ico')) {
                res.status =204
                res.end()
            }
            else 
                this.executePlugins(this.device, req, (data)=>{
                    switch(data.error){
                        case true:
                            res.statusCode = 500; 
                            res.end("Error")
                            break;
                        default:
                            res.statusCode = 200; 
                            res.end("success")
                    }
                })
        }

    send(data){
        this.executePlugins(this.outbound,data,()=>this.socket.send(data))
    }

    run(){
        this.server.listen(this.port)
    }

    use(plugins){
        if(plugins.device)
            this.device.push(plugins.device)
        if(plugins.inbound)
            this.inbound.push(plugins.inbound)
        if(plugins.outbound)
            this.outbound.unshift(plugins.outbound)
    }


    executePlugins(plugins, data, final){
        const iterator = (index) => {
            if(index === plugins.length)
                return final && final(data)
            
            plugins[index].call(this, data, (err, update)=>{
                if(err)
                    console.error(err)
                
                if(update)
                    data = update
                        
                iterator(++index)
                
            })
        }
        iterator(0)
    }

}

module.exports = function(){
    return new GreatRedSpot(...arguments)
}