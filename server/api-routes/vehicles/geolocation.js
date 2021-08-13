import express from "express";
import * as Geolocation from '../../database/postgres/queries/geolocation'
import {setDefaultVehicle, responseCallback} from './_utils'

const router = express.Router();

router.post("/", async (req, res) => {
    setDefaultVehicle(req)
    console.log("GEOLOCATION:",req.body.topic)
    Geolocation.sqlInsertStarFire(req.body.topic, req.body, responseCallback(res))
})

router.post("/test", async (req, res) => {
    res.send("test positive")
})

export default router;