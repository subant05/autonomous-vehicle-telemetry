import express from "express";

function apiRouter({pubsub,eventTypes}){
  const router = express.Router();

  router.post("/device", async function (req, res) {
    console.log(req.body)
    await pubsub.publish(eventTypes.DEVICE_MESSAGE, {
      deviceMessage: req.body,
    });
    res.send("device");
  });

  return router
}


export {apiRouter as default}