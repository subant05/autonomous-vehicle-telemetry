import express from "express";

function apiRouter({pubsub, eventTypes, db}){
  const router = express.Router();

  router.post("/device", async  (req, res) => {
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
    
    res.send("device");
  });

  return router
}


export {apiRouter as default}