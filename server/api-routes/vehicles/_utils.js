export function setDefaultVehicle(req){
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const vehicle =  {
        id:"1234"
        , name:'Gilroy Tractor'
        , type: 'tractor'
        , ip: ipAddress
    }

    if(req.body instanceof Array){
        req.body = req.body.map(body=>{
            if(body.vehicle){
                body.vehicle.ip = ipAddress
                return body
            }else {
                return {vehicle,...body}
            }
        })
    } else 
        if(req.body.vehicle){
            req.body.vehicle.ip = ipAddress
        }else {
            req.body.vehicle = vehicle
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