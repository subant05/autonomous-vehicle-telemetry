import express from "express";
import * as Detection from '../../database/postgres/queries/detection'
import {setDefaultVehicle, responseCallback} from './_utils'

const router = express.Router();

router.post("/", async (req, res) => {
    res.send("Data Recieved" )

    setDefaultVehicle(req)
    Detection.sqlInsertObjectDetection(req.body.topic, req.body)
})

router.post("/test", async (req, res) => {
    res.send("success")
})

export default router;