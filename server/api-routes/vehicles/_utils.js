export function setDefaultVehicle(req){
    if(req.body instanceof Array){
        const vehicle =  {
            id:"1234"
            , name:'Gilroy Tractor'
            , type: 'tractor'
            , ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
        }
        req.body = req.body.map(body=>{
            return {vehicle,...body}
        })
    } else 
        req.body.vehicle =  {
            id:"1234"
            , name:'Gilroy Tractor'
            , type: 'tractor'
            , ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
        }
}

export function responseCallback(res){
    return (err,success)=>{
        console.log("Response Callback", err, success)
        if(err){
            res.status(503);
            res.send(err.message)
        } else {
            res.status(200);
            res.send(success)
        }
    }
}