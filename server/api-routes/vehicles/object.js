import express from "express";
import {setDefaultVehicle, responseCallback} from './_utils'

const router = express.Router();

router.post("/", async (req, res) => {
    res.send("Success")
})

export default router;