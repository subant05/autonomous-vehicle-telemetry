export function setDefaultVehicle(req){
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