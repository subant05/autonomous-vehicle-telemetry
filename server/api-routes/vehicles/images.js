import express from "express";
import * as Images from '../../database/postgres/queries/images'
import {setDefaultVehicle,responseCallback} from './_utils'
import { ChildProcess } from "child_process";



const router = express.Router();

router.post("/preview", async (req, res) => {
    console.log("IMAGES:",req.body.topic)

    setDefaultVehicle(req)
    Images.sqlInsertPreviewImage(req.body.topic, req.body, responseCallback(res))
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