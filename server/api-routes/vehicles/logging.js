import express from "express";
import * as Logging from '../../database/postgres/queries/logging'
import {setDefaultVehicle,responseCallback} from './_utils'

const router = express.Router();

router.post("/", async (req, res) => {
    setDefaultVehicle(req)
    Logging.sqlInsertVehicleLogs(req.body[0].topic, req.body, responseCallback(res))
})

export default router;