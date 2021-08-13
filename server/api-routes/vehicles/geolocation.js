import express from "express";
import * as Geolocation from '../../database/postgres/queries/geolocation'
import {setDefaultVehicle, responseCallback} from './_utils'

const router = express.Router();

router.post("/", async (req, res) => {
    res.send("Data Recieved" )

    setDefaultVehicle(req)
    Geolocation.sqlInsertStarFire(req.body.topic, req.body)
})

router.post("/test", async (req, res) => {
    res.send("success")
})

export default router;