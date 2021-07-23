import express from "express";
import * as Images from '../../database/postgres/queries/images'
import {setDefaultVehicle,responseCallback} from './_utils'

const router = express.Router();

router.post("/preview", async (req, res) => {
    setDefaultVehicle(req)
    Images.sqlInsertImagePreview(req.body.topic, req.body, responseCallback(res))
}) 
router.post("/segmentation", async (req, res) => {
    setDefaultVehicle(req)
    Images.sqlInsertSegmentationMap(req.body.topic, req.body, responseCallback(res))
})

export default router;