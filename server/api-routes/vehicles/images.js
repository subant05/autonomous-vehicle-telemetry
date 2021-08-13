import express from "express";
import * as Images from '../../database/postgres/queries/images'
import {setDefaultVehicle,responseCallback} from './_utils'

const router = express.Router();

router.post("/preview", async (req, res) => {
    res.send("Data Recieved" )

    setDefaultVehicle(req)
    Images.sqlInsertPreviewImage(req.body.topic, req.body)
}) 
router.post("/segmentation", async (req, res) => {
    res.send("Data Recieved" )

    setDefaultVehicle(req)
    Images.sqlInsertSegmentationMap(req.body.topic, req.body)
})

router.post("/test", async (req, res) => {
    res.send("success")
})

export default router;