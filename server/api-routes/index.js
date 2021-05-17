import express from "express";

function apiRouter({pubsub,eventTypes}){
  const router = express.Router();

  router.get("/device", async function (req, res) {
    await pubsub.publish(eventTypes.DEVICE_MESSAGE, {
      deviceMessage: `From Device ${new Date()}`,
    });
    res.send("device");
  });

  return router
}


export {apiRouter as default}