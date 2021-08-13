import express from "express";
import * as Logging from '../../database/postgres/queries/logging'
import {setDefaultVehicle,responseCallback} from './_utils'

const router = express.Router();

router.post("/", async (req, res) => {
    res.send("Data Recieved" )

    setDefaultVehicle(req)
    Logging.sqlInsertVehicleLogs(req.body[0].topic, req.body)
})

router.post("/test", async (req, res) => {
    res.send("success")
})

export default router;