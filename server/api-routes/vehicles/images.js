import express from "express";
import { resolve } from "path";
import * as Images from '../../database/postgres/queries/images'
import {setDefaultVehicle,responseCallback} from './_utils'
const cp = require("child_process");



const router = express.Router();

router.post("/preview", async (req, res) => {
    return new Promise((resolve, reject)=>{
        res.send("Data Recieved")
        
        console.log("IMAGES:",req.body.topic)
        setDefaultVehicle(req)

        const worker =  cp.fork('./database/postgres/queries/images/sqlInsertPreviewImage.js') 
        const onMessage = (message)=>{
            console.log("Insert Message", message)
            resolve(message)
            worker.removeAllListeners("message")
        }

        const onError =  (message)=>{
            console.log("Insert Message", message)
            reject(message)
            worker.removeAllListeners("message")
        }

        worker.on("message", onMessage)
        worker.on("error",onError)
        worker.send({
            data:{argTopic: req.body.topic, data: req.body, cb:responseCallback(res)}
        })
    })


    // Images.sqlInsertPreviewImage(req.body.topic, req.body, responseCallback(res))
}) 
router.post("/segmentation", async (req, res) => {
    console.log("SEGMENTATION:",req.body.topic)

    setDefaultVehicle(req)
    Images.sqlInsertSegmentationMap(req.body.topic, req.body, responseCallback(res))
})

router.post("/test", async (req, res) => {
    res.send("success")
})

export default router;