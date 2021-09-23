import express from "express";
import * as Images from '../../database/postgres/queries/images'
import {setDefaultVehicle,responseCallback} from './_utils'
import { v4 as uuid } from 'uuid';

const cp = require("child_process")
const router = express.Router();
const getImageWorker = cp.fork("./database/postgres/queries/images/selectImageById.js")
const insertSegmentationWorker = cp.fork("./database/postgres/queries/images/sqlInsertSegmentationMap.js")
const insertImageWorker = cp.fork("./database/postgres/queries/images/sqlInsertPreviewImageJson.js")

console.log(`getImageWorker ${process.pid} started`);
console.log(`insertSegmentationWorker ${process.pid} started`);
console.log(`insertImageWorker ${process.pid} started`);

function getImages(id, isSegmentation, res){
  return new Promise((resolve, reject)=>{
     function ImageListener(data){
        if(data.img.length){
          if( id === data.img[1]){
              const img = Buffer.from(data.img[0], 'base64') //;
            
              res.writeHead(200, {
                'Content-Type': 'image/png',
                'Content-Length': img.length
              });
              res.end(img); 
            resolve(data.img)
            getImageWorker.removeListener("message",ImageListener)
          }
      }else{
          res.status(404)
          res.send("404")
          return
        reject(data.img)
        getImageWorker.removeListener("message",ImageListener)
      }

     }

     getImageWorker.addListener("message", ImageListener)

     getImageWorker.send({id, isSegmentation})

  })
}

function insertSegmentation(topic, body, cb, marker){
  cb(null, JSON.stringify("Data Sent") )
  return new Promise((resolve, reject)=>{
    function InsertListener(data){
      if(data.marker){
         if( marker === data.marker){
           resolve(data.img)
           insertSegmentationWorker.removeListener("message",InsertListener)
         }
      } else {
       reject(data)
       insertSegmentationWorker.removeListener("message",InsertListener)
     }

    }

    insertSegmentationWorker.addListener("message", InsertListener)

    insertSegmentationWorker.send({topic, body, cb, marker})

 })
}


function insertImage(topic, body, cb, marker){
  cb(null, JSON.stringify("Data Sent") )
  return new Promise((resolve, reject)=>{
    function InsertListener(data){
      if(data.marker){
         if( marker === data.marker){
           resolve(data.img)
           insertImageWorker.removeListener("message",InsertListener)
         }
      } else {
       reject(data)
       insertImageWorker.removeListener("message",InsertListener)
     }

    }

    insertImageWorker.addListener("message", InsertListener)

    insertImageWorker.send({topic, body, cb, marker})

 })
}

router.post("/preview", async (req, res) => {
    console.log("IMAGES:",req.body.topic)

    setDefaultVehicle(req)
    await insertImage(req.body.topic, req.body, responseCallback(res), uuid())
    // Images.sqlInsertPreviewImageJson(req.body.topic, req.body, responseCallback(res))
}) 
router.post("/segmentation", async (req, res) => {
    console.log("SEGMENTATION:",req.body.topic)

    setDefaultVehicle(req)
    await insertSegmentation(req.body.topic, req.body, responseCallback(res), uuid())
    // Images.sqlInsertSegmentationMap(req.body.topic, req.body, responseCallback(res))
})

router.get('/:id', async (req,res)=>{
    const id =  parseInt(req.params.id)
    if(isNaN(id)){
      res.status(404)
      res.send("404")
      return
    }
    const isSegmentation   = req.query.segmentation && req.query.segmentation === "true" ? true: false

    await getImages( id, isSegmentation, res)

    // const id =  parseInt(req.params.id)
    // if(isNaN(id)){
    //   res.status(404)
    //   res.send("404")
    //   return
    // }
    // const isSegmentation   = req.query.segmentation && req.query.segmentation === "true" ? true: false
    // const imageList = await Images.sqlSelectImageBase64ById(id, isSegmentation)
    // if(imageList.length){
    //   console.log(imageList[0] instanceof Array)
    //   var img = imageList[0] //;

    // console.log(img[0])
  
    //  res.writeHead(200, {
    //    'Content-Type': 'image/png',
    //    'Content-Length': img.length
    //  });
    //  res.end(img); 
    // }
    // else{
    //   res.status(404)
    //   res.send("404")
    //   return
    // }
  })

export default router;