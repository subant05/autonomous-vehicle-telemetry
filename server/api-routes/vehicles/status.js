import express from "express";
import * as State from '../../database/postgres/queries/state'
import {setDefaultVehicle,responseCallback} from './_utils'

const router = express.Router();

router.post("/", async (req, res) => {
    setDefaultVehicle(req)
    // State.sqlInsertVehicleStatus(req.body.topic, req.body, responseCallback(res))
    State.sqlInsertVehicleStatusBatch(req.body,responseCallback(res))
})

router.get("/test", async (req, res) => {
    res.send("test positive")
})

export default router;