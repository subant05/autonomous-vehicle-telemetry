import express from "express";
import fs from 'fs'
let recorded = false
function apiRouter({ pubsub, eventTypes, db }) {
  const router = express.Router();
  const onlineDevices = []

  const onlineDeviceChecker = (async function R() {
    const newDate = new Date().valueOf()
    const onlineFiltered = onlineDevices.filter(device=>{
      return (newDate - device.updated) < (1000*60)*3
    })

    onlineDevices.length = onlineFiltered.length
    onlineDevices.fill(...onlineFiltered)

    await pubsub.publish(eventTypes.Subscriptions.ONLINE_DEVICES, {
      onlineDevices: onlineDevices,
    });

    setTimeout(R.bind(this),500)
  })

  onlineDeviceChecker()

  router.post("/device", async (req, res) => {
    // if(req.body.topic === "/side_right/segmentation_map" && !recorded){
    //   console.log(JSON.stringify(req.body, null, " "))
    //   recorded = !recorded
    // }
    console.log(req.body)

    // if(req.body.topic.includes('VehicleState')){
      fs.appendFile('recent-request.json', JSON.stringify(req.body, null, " "), function (err) {
        if (err) return console.log(err);
        console.log('vehicle_state');
      });
    // }

    try {
      // Vehicle Data Added Temporarily
      req.body.vehicle =  {
        id:"1234"
        , name:'Gilroy Tractor'
        , type: 'tractor'
        , ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }

      db.on("data-saved", async (data) => {
        const index = onlineDevices.findIndex(device => {
          if(device.id === "1"){
            device.updated = new Date().valueOf()
            return true
          }
        })

        if (index === -1)
          onlineDevices.push({ id: "1", name: "Gillroy Tractor", type: "tractor", status: "Driving", conected: true, updated: new Date().valueOf() })

      })
      db.on("data-saved", async (data) => {
        await pubsub.publish(eventTypes.Subscriptions.DEVICE_MESSAGE, {
          deviceMessage: req.body,
        });
      })
      db.on("data-saved", async (data) => {
        if (data.query === '/starfire' && data.data) {
          const telemetry = data.data
          await pubsub.publish(eventTypes.Subscriptions.DEVICE_COORDINATES, {
            geographicCoordinates: {
              longitude: telemetry.msg.longitude
              , latitude: telemetry.msg.latitude
            },
          });
        }
      })
      db
        .create({ query: req.body.topic, data: req.body, event: "data-saved" })
        .create({ query: "ROS_topics", data: { name: req.body.topic, type: req.body.type }, options: { unique: true }, event: "topic-saved" })

    } catch (e) {
      res.send("Error")
    }

    res.send("device");
  });

  router.get("/topics", (req, res) => {
    if (!req.query.topic) {
      res.send("")
      return
    }

    console.log(req.query.topic)

    db.read({
      query: req.query.topic, callback(err, data) {
        if (err) {
          console.log(err)
          res.send("Error")
          return
        }

        res.send(data)
      }
    })

  })

  router.get("/cleardb", (req, res) => {
    db.reset()
    res.send("database reset")
  })

  return router
}


export { apiRouter as default }