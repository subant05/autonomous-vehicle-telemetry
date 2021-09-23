import express from "express";
import * as Images from '../../database/postgres/queries/images'
import {setDefaultVehicle,responseCallback} from './_utils'
const cp = require("child_process")
const router = express.Router();
const worker = cp.fork("./database/postgres/queries/images/selectImageById.js")

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
            worker.removeListener("message",ImageListener)
          }
      }else{
          res.status(404)
          res.send("404")
          return
        reject(data.img)
        worker.removeListener("message",ImageListener)
      }

     }

     worker.addListener("message", ImageListener)

     worker.send({id, isSegmentation})

  })
}

router.post("/preview", async (req, res) => {
    console.log("IMAGES:",req.body.topic)

    setDefaultVehicle(req)
    Images.sqlInsertPreviewImageJson(req.body.topic, req.body, responseCallback(res))

    // Images.sqlInsertPreviewImage(req.body.topic, req.body, responseCallback(res))
}) 
router.post("/segmentation", async (req, res) => {
    console.log("SEGMENTATION:",req.body.topic)

    setDefaultVehicle(req)
    Images.sqlInsertSegmentationMap(req.body.topic, req.body, responseCallback(res))
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