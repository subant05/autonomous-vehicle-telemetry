import express from "express";
let recorded = false
function apiRouter({pubsub, eventTypes, db}){
  const router = express.Router();

  router.post("/device", async  (req, res) => {
    // if(req.body.topic === "/side_right/segmentation_map" && !recorded){
    //   console.log(JSON.stringify(req.body, null, " "))
    //   recorded = !recorded
    // }

    try{
      db.on("data-saved",async (data)=>{
        await pubsub.publish(eventTypes.Subscriptions.DEVICE_MESSAGE, {
          deviceMessage: req.body,
        });
      })
      db.on("data-saved",async (data)=>{
        if( data.query ==='/starfire' && data.data){
          const telemetry  = data.data
          await pubsub.publish(eventTypes.Subscriptions.DEVICE_COORDINATES, {
            geographicCoordinates: {
                longitude:telemetry.msg.longitude
                ,latitude:telemetry.msg.latitude
            },
          });
        }
      })
      db
        .create({query:req.body.topic, data:req.body, event:"data-saved"})
        .create({query:"ROS_topics", data:{name:req.body.topic, type:req.body.type}, options:{unique:true}, event:"topic-saved"})
      
    } catch(e){
      res.send("Error")
    }

    res.send("device");
  });

  router.get("/topics", (req, res)=>{
    if(!req.query.topic){
      res.send("")
      return
    }

    console.log(req.query.topic)

    db.read({query:req.query.topic, callback(err, data){
      if(err){
        console.log(err)
        res.send("Error")
        return
      }

      res.send(data)
    }})
    
  })

  return router
}


export {apiRouter as default}