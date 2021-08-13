import express from "express";
import * as State from '../../database/postgres/queries/state'
import {setDefaultVehicle,responseCallback} from './_utils'

const router = express.Router();

router.post("/", async (req, res) => {
    res.send("Data Recieved" )

    setDefaultVehicle(req)
    State.sqlInsertVehicleStatus(req.body.topic, req.body)
})

router.post("/batch", async (req, res) => {
    res.send("Data Recieved" )

    setDefaultVehicle(req)
    State.sqlInsertVehicleStatusBatch(req.body)
})

router.post("/test", async (req, res) => {
    res.send("success")
})

export default router;