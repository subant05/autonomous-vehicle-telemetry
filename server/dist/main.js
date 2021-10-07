(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 137:
/*!***************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/detection/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByVehicleId": () => (/* reexport safe */ _objectByVehicleId__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "HeaderIdByVehicleId": () => (/* reexport safe */ _objectHeaderIdByVehicleId__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "ById": () => (/* reexport safe */ _objectById__WEBPACK_IMPORTED_MODULE_2__.default)
/* harmony export */ });
/* harmony import */ var _objectByVehicleId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectByVehicleId */ 73730);
/* harmony import */ var _objectHeaderIdByVehicleId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectHeaderIdByVehicleId */ 74874);
/* harmony import */ var _objectById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objectById */ 33360);






/***/ }),

/***/ 33360:
/*!********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/detection/objectById.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ objectById)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const objectById  = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query ObjectDetectionQuery ($id: BigInt){
    objects(
          condition:{id:$id}
          ){
            totalCount
            pageInfo{
              startCursor
              hasNextPage
              hasPreviousPage
            }
            nodes{
            readingat
            id
            topicId
            topic{
              name
            }
            vehicleId
            message{
              header{
                headerid
                readingat
                seq
                node
              }
              cameraName
              detection{
                header{
                  headerid
                  readingat
                  seq
                  node
                }
                  cuboid {
                  centroid{
                    xM
                    yM
                    zM
                  }
                  dimension{
                    widthM
                    depthM
                    heightM
                  }
                  orientation{
                    rollDeg
                    pitchDeg
                    yawDeg
                  }
                }
                roi{
                  x
                  y
                  width
                  height
                  thetaDeg
                }
                label
                confidence
              }
              centroidRpy{
                rollDeg
                pitchDeg
                yawDeg
              }
              centroidLocation{
                xyzCamera{
                  xM
                  yM
                  zM
                }
                xyzStarfire{
                  xM
                  yM
                  zM
                }
                lla{
                  latitudeDeg
                  longitudeDeg
                  altitudeM
                }
                enu{
                  eastM
                  northM
                  upM
                }
                fieldOrigin{
                  latitudeDeg
                  longitudeDeg
                  altitudeM
                }
                ecef{
                  xM
                  yM
                  zM
                }
              }
              objectMessageVertices{
                nodes{
                  xyzCamera{
                    xM
                    yM
                    zM
                  }
                }
              }
            }      
          }
        }
  }
  `

  

/***/ }),

/***/ 73730:
/*!***************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/detection/objectByVehicleId.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ objectByVehicleId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const objectByVehicleId  = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query ObjectDetectionQuery ($vehicleId: BigInt $cursor:Int $size:Int){
    objects(
          first: $size
          offset: $cursor
          orderBy:ID_DESC 
          condition:{vehicleId:$vehicleId}
          ){
            totalCount
            pageInfo{
              startCursor
              hasNextPage
              hasPreviousPage
            }
            nodes{
            readingat
            id
            topicId
            topic{
              name
            }
            vehicleId
            message{
              header{
                headerid
                readingat
                seq
                node
              }
              cameraName
              detection{
                header{
                  headerid
                  readingat
                  seq
                  node
                }
                  cuboid {
                  centroid{
                    xM
                    yM
                    zM
                  }
                  dimension{
                    widthM
                    depthM
                    heightM
                  }
                  orientation{
                    rollDeg
                    pitchDeg
                    yawDeg
                  }
                }
                roi{
                  x
                  y
                  width
                  height
                  thetaDeg
                }
                label
                confidence
              }
              centroidRpy{
                rollDeg
                pitchDeg
                yawDeg
              }
              centroidLocation{
                xyzCamera{
                  xM
                  yM
                  zM
                }
                xyzStarfire{
                  xM
                  yM
                  zM
                }
                lla{
                  latitudeDeg
                  longitudeDeg
                  altitudeM
                }
                enu{
                  eastM
                  northM
                  upM
                }
                fieldOrigin{
                  latitudeDeg
                  longitudeDeg
                  altitudeM
                }
                ecef{
                  xM
                  yM
                  zM
                }
              }
              objectMessageVertices{
                nodes{
                  xyzCamera{
                    xM
                    yM
                    zM
                  }
                }
              }
            }      
          }
        }
  }
  `

  

/***/ }),

/***/ 74874:
/*!***********************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/detection/objectHeaderIdByVehicleId.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ objectHeaderIdByVehicleId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const objectHeaderIdByVehicleId  = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query ObjectDetectionQuery ($vehicleId: BigInt $cursor:Int $size:Int){
    objects(
          first: $size
          offset: $cursor
          orderBy:ID_DESC 
          condition:{vehicleId:$vehicleId}
          ){
            totalCount
            pageInfo{
              startCursor
              hasNextPage
              hasPreviousPage
            }
            nodes{
                readingat
                id
                topicId
                topic{
                  name
                }
                  vehicleId
                  message{
                  header{
                    headerid
                    readingat
                    seq
                    node
                  }
              }      
            }
        }
  }
  `

  

/***/ }),

/***/ 9708:
/*!****************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/geolocation/byId.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ geolocation)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const geolocation = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query Geolocation ($vehicleId:BigInt){
  starfires(condition:{vehicleId:$vehicleId}){
    nodes{
      vehicle{
        name
        id
        type{
          type
        }
      }
       
      msg{
        latitude
        longitude
      }
    }
  }
}
`



/***/ }),

/***/ 332:
/*!************************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/geolocation/byVehicleIdDateTimestamp.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ byVehicleIdDateTimestamp)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const byVehicleIdDateTimestamp = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query GeolocationByVehicleIdDateTimestamp ($vehicleId:BigInt, $startDateTime:Datetime, $endDateTime:Datetime){
	starfires(filter:{vehicleId:{equalTo:$vehicleId}
    , readingat:{ greaterThanOrEqualTo:$startDateTime
      , lessThanOrEqualTo:$endDateTime} 
  }){
    nodes{
      readingat
      id
      msg {
        latitude
        longitude
    		altitude
        yawRate
        speed
        isGpsLocked
      	header{
          headerId
          readingat
        }
      }
    }
  }
}
`



/***/ }),

/***/ 88418:
/*!*****************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/geolocation/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ById": () => (/* reexport safe */ _byId__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "PreviousLocation": () => (/* reexport safe */ _previousLocation__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "ByVehicleIdDateTimestamp": () => (/* reexport safe */ _byVehicleIdDateTimestamp__WEBPACK_IMPORTED_MODULE_2__.default)
/* harmony export */ });
/* harmony import */ var _byId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byId */ 9708);
/* harmony import */ var _previousLocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./previousLocation */ 73028);
/* harmony import */ var _byVehicleIdDateTimestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./byVehicleIdDateTimestamp */ 332);






/***/ }),

/***/ 73028:
/*!****************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/geolocation/previousLocation.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previousLocation)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const previousLocation = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query Geolocation ($vehicle_id: BigInt) {
    starfires(first:1 orderBy:ID_DESC condition:{vehicleId:$vehicle_id}){
      nodes{
        vehicle{
          name
          id
          type{
            type
          }
        }
         
        msg{
          latitude
          longitude
        }
      }
    }
  }
`


/***/ }),

/***/ 68776:
/*!**************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/cameraMetaByImageId.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cameraMeta)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);

/**
 * const cameraMeta =gql`query CamerMeta ($imageId:BigInt) {
    images(condition: {id: $imageId}) {
      nodes {
        width
        height
        encoding
        step
        isBigendian
        header {
          stamp {
            sec
            nanosec
          }
          frameId
        }
        cameraMessages {
          nodes {
            header{
                readingat
                headerId
                seq
                node
            }
            cameraMeta {
              cameraName
              leftGain
              rightGain
              leftExposure
              rightExposure
              f {
                data
                id
              }
              leftHistogram {
                fullHistogram {
                  data
                }
                smallHistogram {
                  data
                }
              }
              leftIntrinsics {
                dId
                height
                width
                d {
                  data
                }
                k {
                  data
                }
              }
              e {
                data
              }
              extra
              leftRoi {
                doRectify
                height
                width
                xOffset
                yOffset
              }
              p1 {
                data
              }
              p2 {
                data
              }
              q {
                data
              }
              r1 {
                data
              }
              r2 {
                data
              }
              rightHistogram {
                fullHistogram {
                  data
                }
                smallHistogram {
                  data
                }
              }
              rightIntrinsics {
                dId
                height
                width
                d {
                  data
                }
                k {
                  data
                }
              }
              rightRoi {
                doRectify
                height
                width
                xOffset
                yOffset
              }
              stereoExtrinsics {
                r {
                  data
                }
                rRodrigues {
                  data
                }
                t {
                  data
                }
              }
              serialNumber
              tractorExtrinsics {
                r {
                  data
                }
                rRodrigues {
                  data
                }
                t {
                  data
                }
              }
            }
          }
        }
      }
    }
  }
  `
 */
const cameraMeta =apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`query CamerMeta ($imageId:BigInt!) {
  image(id:$imageId){
    cameraMessages{
      nodes{
        camerasByMsgId{
          nodes{
            cameraJson{
              json
            }
          }
        }
      }
    }
  }
}
`

  

/***/ }),

/***/ 95564:
/*!****************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/imagePair.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ imagePairQuery)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const imagePairQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default` 
query ImagePair($topic:String! $cursor:Int!){
        imagePair(topic:$topic cursor:$cursor){
            timestamp
            topic
            pagination{
              position
              pageSize
              length
            }
            msg{
              header{
                  id
                  timestamp
                  seq
                  node
              }
              left_image{
                id
                height
                width
                encoding
                step
                is_bigendian
                data
              }
              right_image{
                id
                height
                width
                encoding
                step
                is_bigendian
                data
              }
            }
          }
  }
  `



/***/ }),

/***/ 82262:
/*!************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewImageByVehicleId": () => (/* reexport safe */ _previewByVehicleId__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "PreviewByVehicleIdTopicId": () => (/* reexport safe */ _previewByVehicleIdTopicId__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "PreviewByVehicleIdTopicName": () => (/* reexport safe */ _previewVehicleIdByTopicName__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "SegmentationMapByHeaderId": () => (/* reexport safe */ _segmentationMapByHeaderId__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "PreviewDetailsByVehicleId": () => (/* reexport safe */ _previewDetailsByVehicleId__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "SegmentationMap": () => (/* reexport safe */ _segmentationMap__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "ImagePair": () => (/* reexport safe */ _imagePair__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "PreviewByMessageHeaderId": () => (/* reexport safe */ _previewByHeaderId__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "ByTopicNamesVehicleId": () => (/* reexport safe */ _selectPreviewsByVehicleId__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "ObjectDetectionImagesByVehicleId": () => (/* reexport safe */ _objectDetectionImagesByVehicleId__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "LatestPreviewVehicleIdByTopicName": () => (/* reexport safe */ _latestPreviewVehicleIdByTopicName__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "CameraMetaByImageId": () => (/* reexport safe */ _cameraMetaByImageId__WEBPACK_IMPORTED_MODULE_11__.default),
/* harmony export */   "PreviewByMessageHeaderIdCameraName": () => (/* reexport safe */ _previewByHeaderIdCameraName__WEBPACK_IMPORTED_MODULE_12__.default),
/* harmony export */   "PreviewViewByMessageHeaderId": () => (/* reexport safe */ _previewViewByHeaderId__WEBPACK_IMPORTED_MODULE_13__.default)
/* harmony export */ });
/* harmony import */ var _previewByVehicleId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./previewByVehicleId */ 9348);
/* harmony import */ var _previewByVehicleIdTopicId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./previewByVehicleIdTopicId */ 55516);
/* harmony import */ var _previewVehicleIdByTopicName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./previewVehicleIdByTopicName */ 59422);
/* harmony import */ var _segmentationMapByHeaderId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./segmentationMapByHeaderId */ 34443);
/* harmony import */ var _previewDetailsByVehicleId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./previewDetailsByVehicleId */ 3793);
/* harmony import */ var _segmentationMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./segmentationMap */ 30557);
/* harmony import */ var _imagePair__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imagePair */ 95564);
/* harmony import */ var _previewByHeaderId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./previewByHeaderId */ 70695);
/* harmony import */ var _selectPreviewsByVehicleId__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selectPreviewsByVehicleId */ 17117);
/* harmony import */ var _objectDetectionImagesByVehicleId__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./objectDetectionImagesByVehicleId */ 53178);
/* harmony import */ var _latestPreviewVehicleIdByTopicName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./latestPreviewVehicleIdByTopicName */ 34295);
/* harmony import */ var _cameraMetaByImageId__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cameraMetaByImageId */ 68776);
/* harmony import */ var _previewByHeaderIdCameraName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./previewByHeaderIdCameraName */ 14817);
/* harmony import */ var _previewViewByHeaderId__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./previewViewByHeaderId */ 100);

















/***/ }),

/***/ 34295:
/*!****************************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/latestPreviewVehicleIdByTopicName.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ latestPreviewVehicleIdByTopicName)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const latestPreviewVehicleIdByTopicName = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query PreviewByVehicleIdTopicName($vehicleId: BigInt, $topicName:String, $cursor:Int, $size:Int){
    topics(filter: {
      name: {
          equalTo: $topicName 
      }
    }){
      nodes{
        cameras(
            first:$size
            offset: $cursor 
            orderBy: ID_DESC 
            condition: {
                vehicleId: $vehicleId
            }
        ){
          totalCount       
              nodes{
                id
                readingat
                vehicle{
                name
              }
              
              msg{
                header{
                  headerId
                  readingat
                }
                cameraMeta{
                  cameraName
                  leftExposure
                  rightExposure
                  leftGain
                  rightGain
                  leftRoi{
                    xOffset
                    yOffset
                  }
                  rightRoi{
                    xOffset
                    yOffset
                  }
                }
                image{
                  id
                  isBigendian
                  encoding
                  height
                  width
                  step
                }
              }
            }
        }
      }
      
    }
  }
  `


/***/ }),

/***/ 53178:
/*!***************************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/objectDetectionImagesByVehicleId.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ objectDetectionImages)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const objectDetectionImages = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query ObjectDetectionImages ($vehicleId: BigInt, $cursor:Int, $size:Int, $startDateTime:Datetime, $endDateTime:Datetime){
    objectDetectionImages(
        first: $size
        offset: $cursor
        orderBy: OBJECT_ID_DESC 
        condition:{vehicleId:$vehicleId}
        filter:{
            readingat:{
              greaterThanOrEqualTo: $startDateTime
              , lessThanOrEqualTo: $endDateTime
            }
        }
    ){
        totalCount
        pageInfo{
          hasNextPage
          hasPreviousPage
          startCursor
        }
        nodes{
          vehicleId
          imageId
          width
          height
          headerId
          objectId
          readingat
          encoding
          cameraName
          leftExposure
          rightExposure
          leftGain
          rightGain
        }
      }
  }
`

 

/***/ }),

/***/ 70695:
/*!************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/previewByHeaderId.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previewByMessageHeaderId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const previewByMessageHeaderId = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query PreviewImage ($headerId: BigInt){
	cameraMessageHeaders(condition:{headerId:$headerId}) {
    nodes{
      node
      readingat
      seq
      cameraMessagesByHeaderId{
        nodes{
          camerasByMsgId{
						nodes{
              msg{
                header{
                  readingat
                  node
                  seq
                  headerId
                }
                image{
                  id
                  nodeId
                  width
                  height
                  step
                  isBigendian
                  encoding
                }
              }
            }
          }
        }
      }
    }
  }
}
`;



/***/ }),

/***/ 14817:
/*!**********************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/previewByHeaderIdCameraName.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previewByMessageHeaderIdCameraName)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const previewByMessageHeaderIdCameraName = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query Images($cameraName: String, $headerId: BigInt) {
    imagesViews(
      filter:{
        cameraName:{equalTo:$cameraName}
        , headerId:{equalTo:$headerId}
      }
    ) {
      nodes{
        id
        width
        height
        isBigendian
        step
        encoding
        readingat
        vehicleId
        topicId
        node
        cameraName
        headerId
        topicName
      }
    }
  }
`



/***/ }),

/***/ 9348:
/*!*************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/previewByVehicleId.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previewByVehicleId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const previewByVehicleId = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query PreviewByVehicleId ($vehicleId:BigInt) {
	cameras(last:1 condition:{vehicleId:$vehicleId}){
    nodes{
      vehicle{
        id
        name
      }
      msg {
        header{
          headerId
        }
        image {
          id
          isBigendian
          segmentationMaps {
            edges {
              node {
                id
              }
            }
          }
          encoding
          height
          width
        }
      }
    }
  }
}
`



/***/ }),

/***/ 55516:
/*!********************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/previewByVehicleIdTopicId.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previewByVehicleIdTopicId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const previewByVehicleIdTopicId = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query PreviewByVehicleId ($vehicleId:BigInt, $topicId: BigInt, $cursor:Int) {
    cameras(
        first:1
        offset:$cursor
        orderBy:ID_DESC 
        condition:{
            vehicleId:$vehicleId
            topicId:$topicId
        }
        ){

        pageInfo{
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
        }
        totalCount
        edges{
        cursor
        }
        nodes{
        vehicle{
            id
            name
        }
        readingat
        topic{
            name
            type {
            module
            class
            }
        }
        msg {
            header {
                headerId
            }
            image {
                id
                isBigendian
                encoding
                height
                width
                step
            }
        }
    }
    }
}
`



/***/ }),

/***/ 3793:
/*!********************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/previewDetailsByVehicleId.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PreviewDetailsByVehicleId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const PreviewDetailsByVehicleId  = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query PreviewImagesByVehicleId($id: BigInt) {
    topicCategories(condition:{name:"images"}){
      nodes{
        topics(filter:{name:{includes:"left/preview"} }){
          nodes{
            cameras(last:1 condition:{vehicleId:$id}){
              totalCount
              nodes {
                id
                topic{
                  name
                  id
                }
                msg{
                  image {
                    cameraMessages{
                      nodes{
                        header{
                          readingat
                          headerId
                        }
  
                        image{
                          id
                          width
                          height
                          step
                          isBigendian
                          encoding
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`


/***/ }),

/***/ 59422:
/*!**********************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/previewVehicleIdByTopicName.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previewByVehicleIdTopicName)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const previewByVehicleIdTopicName = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query PreviewByVehicleIdTopicName($vehicleId: BigInt, $topicName:String, $cursor:Int, $size:Int, $startDateTime:Datetime, $endDateTime:Datetime){
    topics(filter: {
      name: {
          equalTo: $topicName 
      }
    }){
      nodes{
        cameras(
            first:$size
            offset: $cursor 
            orderBy: ID_DESC 
            condition: {
                vehicleId: $vehicleId
            }
            filter:{
              readingat:{
                greaterThanOrEqualTo: $startDateTime
                , lessThanOrEqualTo: $endDateTime
              }
            }
        ){
          totalCount       
              nodes{
                id
                readingat
                vehicle{
                name
              }
              
              msg{
                header{
                  headerId
                  readingat
                }
                cameraMeta{
                  cameraName
                  leftExposure
                  rightExposure
                  leftGain
                  rightGain
                  leftRoi{
                    xOffset
                    yOffset
                  }
                  rightRoi{
                    xOffset
                    yOffset
                  }
                }
                image{
                  id
                  isBigendian
                  encoding
                  height
                  width
                  step
                }
              }
            }
        }
      }
      
    }
  }
  `


/***/ }),

/***/ 100:
/*!****************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/previewViewByHeaderId.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previewViewByMessageHeaderId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const previewViewByMessageHeaderId = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query Images($headerId: BigInt $size:Int $cursor:Int $encoding:String) {
    imagesViews(
      first:$size
      offset:$cursor
      orderBy:ID_DESC
      filter:{
        headerId:{equalTo:$headerId}
        , encoding:{equalTo:$encoding}
      }
    ) {
      nodes{
        id
        width
        height
        isBigendian
        step
        encoding
        readingat
        vehicleId
        topicId
        node
        cameraName
        headerId
        topicName
      }
    }
  }
`



/***/ }),

/***/ 30557:
/*!**********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/segmentationMap.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ segmentationMapQuery)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const segmentationMapQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default` 
query SegmentationMap($topic:String! $cursor:Int! $id:Float!){
    segmentationMap (topic:$topic, cursor:$cursor, id:$id){
        timestamp
        topic
        pagination{
          position
          pageSize
          length
        }
        msg {
          descriptor {
            id
            timestamp
          }
          image {
            id
            header{
              stamp {
                sec
                nanosec
              }
              frame_id
            }
            height
            width
            encoding
            is_bigendian
            step
          }
        }
      }
  }
  `



/***/ }),

/***/ 34443:
/*!********************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/segmentationMapByHeaderId.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ segmentationMapByHeaderId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


// const segmentationMapByHeaderId = gql`
// query Segmentation($imageHeaderId: BigInt) {
//   cameraMessageHeaders(filter:{headerId:{equalTo:$imageHeaderId}}){
//     nodes{
//       cameraMessagesByHeaderId{
//         nodes{
//           image{
//             width
//             height
//           }
//           segmentationMapsByMsgId{
//             nodes{
//               msg{
//                 image{
//                     id
//                     encoding
//                     width
//                     height
//                     step
//                     isBigendian
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }`

const segmentationMapByHeaderId = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`query Segmentation($imageHeaderId: BigInt) {
  segmentationViews(condition:{headerId:$imageHeaderId}){
    nodes{
      imageId
      id
      width
      height
      encoding
      step
      isBigendian
      headerId
      readingat
    }
  }
}`

  

/***/ }),

/***/ 17117:
/*!********************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/selectPreviewsByVehicleId.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ selectPreviewByVehicleId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


// "/side_right/left/preview"
// , "/side_left/left/preview"
// , "/front_right/left/preview"
// , "/front_left/left/preview"
// , "/front_center/left/preview"
// , "/rear/left/preview"

const selectPreviewByVehicleId =apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query MainPreviewImages($vehicleId: BigInt $topicNames:[String!]) {
    topics(
      filter:{name:{in:$topicNames}}){
      nodes{
        vehicleTopics(last: 1){
            nodes{
              topic{
                name
                id
              }
            }
        }
        cameras(orderBy: ID_DESC first:1 condition:{vehicleId:$vehicleId}){
          nodes{
            topic{
              name
              id
            }
            msg{
              header{
                headerId
                readingat
              }
              image{
                id
                nodeId
                width
                height
                step
                isBigendian
                encoding
              }
            }
          }
        }
      }
    }
  }
  `

  

/***/ }),

/***/ 56197:
/*!*****************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Topics": () => (/* reexport module object */ _topics__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "Geolocation": () => (/* reexport module object */ _geolocation__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "Vehicles": () => (/* reexport module object */ _vehicles__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "Images": () => (/* reexport module object */ _images__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "Notifications": () => (/* reexport module object */ _notifications__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "Status": () => (/* reexport module object */ _status__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "Logging": () => (/* reexport module object */ _logging__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "Detection": () => (/* reexport module object */ _detection__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   "Production": () => (/* reexport module object */ _production__WEBPACK_IMPORTED_MODULE_8__)
/* harmony export */ });
/* harmony import */ var _topics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topics */ 60168);
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation */ 88418);
/* harmony import */ var _vehicles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehicles */ 85457);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images */ 82262);
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications */ 75608);
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status */ 17847);
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logging */ 18250);
/* harmony import */ var _detection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detection */ 137);
/* harmony import */ var _production__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./production */ 52575);












/***/ }),

/***/ 68585:
/*!****************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/logging/byVehicleIdDateRange.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ byVehicleIdDateRange)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const byVehicleIdDateRange = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query Logging ($vehicleId:BigInt $size:Int $cursor:Int $startDateTime: Datetime $endDateTime: Datetime){ 
logging: vehicleLogViews(
    first: $size
    offset: $cursor
    orderBy: READINGAT_DESC
    condition:{vehicleId:$vehicleId}
    filter:{
        readingat:{
          lessThanOrEqualTo:$endDateTime
          , greaterThanOrEqualTo:$startDateTime
        }
      }
  ){
    nodes{
      id
      readingat
      topicId
      vehicleId
      name: node
      function
      file
      level
      msg
      sec
      nanosec
    }
  }
}
`



/***/ }),

/***/ 85118:
/*!******************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/logging/currentLogsByVehicleId.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ currentLogsByVehicleId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const currentLogsByVehicleId = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query Logging ($cursor:Int $vehicleId:BigInt $paginationRange:Int $nodes:[String!]){ 
logging: vehicleLogViews(
    first:$paginationRange, 
    orderBy: ID_DESC, 
    offset: $cursor
    condition:{vehicleId:$vehicleId}
    filter:{
      node:{
        in:$nodes
      }
    }
  ){
    nodes{
      id
      readingat
      topicId
      vehicleId
      name: node
      function
      file
      level
      msg
      sec
      nanosec
    }
  }
}
`



/***/ }),

/***/ 18250:
/*!*************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/logging/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "All": () => (/* reexport safe */ _loggingStatusDetection__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "QueryBuilder": () => (/* reexport safe */ _queryBuilders_loggingQueryBuilder__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "NodesByVehicleId": () => (/* reexport safe */ _loggingNodeTypes__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "CurrentLogsByVehicleId": () => (/* reexport safe */ _currentLogsByVehicleId__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "ByVehicleIdDateRange": () => (/* reexport safe */ _byVehicleIdDateRange__WEBPACK_IMPORTED_MODULE_4__.default)
/* harmony export */ });
/* harmony import */ var _loggingStatusDetection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loggingStatusDetection */ 28802);
/* harmony import */ var _queryBuilders_loggingQueryBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryBuilders/loggingQueryBuilder */ 72871);
/* harmony import */ var _loggingNodeTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loggingNodeTypes */ 34641);
/* harmony import */ var _currentLogsByVehicleId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currentLogsByVehicleId */ 85118);
/* harmony import */ var _byVehicleIdDateRange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./byVehicleIdDateRange */ 68585);








/***/ }),

/***/ 34641:
/*!************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/logging/loggingNodeTypes.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ vehicleLogNodeTypes)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const vehicleLogNodeTypes = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query LoggingNodes($vehicleId:BigInt){
  vehicleNodes(orderBy:NODE_ASC condition:{vehicleId:$vehicleId}){
    nodes{
      node
      vehicleId
    }
  }
}
`



/***/ }),

/***/ 28802:
/*!******************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/logging/loggingStatusDetection.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ allLoggingStatusObjectDetection)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const allLoggingStatusObjectDetection = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query Logging ($cursor:Int $vehicleId:BigInt $startDateTime:Datetime $endDateTime:Datetime){
  logging: vehicleLogs(
    	first: 10
    	orderBy:ID_DESC 
    	offset: $cursor
      filter:{
        vehicleId:{equalTo:$vehicleId}
        , readingat:{ 
            greaterThanOrEqualTo: $startDateTime
          , lessThanOrEqualTo: $endDateTime
        } 
      }){
    nodes{
      readingat
      id
      topicId
      topic{
        name
      }
      vehicleId
      topic{
        id
        name
      }
      message {
        id
        name
        function
        file
        msg
        line
        level
        stamp {
          sec
          nanosec
        }
      }
    }
  }
  objectDetection: objects(
    first: 10
    orderBy:ID_DESC 
    offset: $cursor
    filter:{
      vehicleId:{equalTo:$vehicleId}
      , readingat:{ 
          greaterThanOrEqualTo: $startDateTime
        , lessThanOrEqualTo: $endDateTime
      } 
    }){
    	nodes{
      readingat
      id
      topicId
      topic{
        name
      }
      vehicleId
      message{
        header{
          headerid
          readingat
          seq
          node
        }
        detection{
          header{
            headerid
            readingat
            seq
            node
          }
        	cuboid {
            centroid{
              xM
              yM
              zM
            }
            dimension{
              widthM
              depthM
              heightM
            }
            orientation{
              rollDeg
              pitchDeg
              yawDeg
            }
          }
          roi{
            x
            y
            width
            height
            thetaDeg
          }
          label
          confidence
        }
        centroidRpy{
          rollDeg
          pitchDeg
          yawDeg
        }
        centroidLocation{
          xyzCamera{
            xM
            yM
            zM
          }
          xyzStarfire{
            xM
            yM
            zM
          }
          lla{
            latitudeDeg
            longitudeDeg
            altitudeM
          }
          enu{
            eastM
            northM
            upM
          }
          fieldOrigin{
            latitudeDeg
            longitudeDeg
            altitudeM
          }
          ecef{
            xM
            yM
            zM
          }
        }
        objectMessageVertices{
          nodes{
            xyzCamera{
              xM
              yM
              zM
            }
          }
        }
      }      
    }
  }
  vehicleStatus: vehicleStatuses(
    first: 10
    orderBy:ID_DESC 
    offset: $cursor
    filter:{
      vehicleId:{equalTo:$vehicleId}
      , readingat:{ 
          greaterThanOrEqualTo: $startDateTime
        , lessThanOrEqualTo: $endDateTime
      } 
    }){    
    nodes{
      readingat
      id
      topicId
      topic{
        name
      }
      vehicleId
      alerts{
        nodes{
          id
          message
          dismissed
          read
          alertType{
            id
            name
            severity
            
          }
        }
      }
      state{
        name
        description
        id
      }
      vehicleStatusDetails{
        nodes{
          isActive
          isRecoverable
          description
          reason: vehicleStatusReason{
            code
            id
            name
          }
        }
      }
      message: statusMessage{
        id
        header{
          id
          seq
          headerid
          readingat
          node
        }
      }
    }
  }
}
`



/***/ }),

/***/ 72871:
/*!*****************************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/logging/queryBuilders/loggingQueryBuilder.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loggingQueryBuilder)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ 9463);
/* harmony import */ var _partials_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/logging */ 6505);
/* harmony import */ var _partials_objectDetection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/objectDetection */ 12432);
/* harmony import */ var _partials_vehicleStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/vehicleStatus */ 60389);






const checkForType = (type, typeList)=>{
    return typeList.indexOf(type) > -1 || !typeList.length
}

const loggingQueryBuilder = (types=[], paginationRange=25, nodes=[])=>{    
    if(!types)
        types = []
        
    return apollo_angular__WEBPACK_IMPORTED_MODULE_3__.default`
            query Logging ($cursor:Int $vehicleId:BigInt $startDateTime:Datetime $endDateTime:Datetime){ 
            ${ checkForType("logging",types) ? (0,_partials_logging__WEBPACK_IMPORTED_MODULE_0__.logging)(paginationRange,nodes) : `` }
            ${ checkForType("object",types) ? (0,_partials_objectDetection__WEBPACK_IMPORTED_MODULE_1__.objectDetection)(paginationRange) : `` }
            ${ checkForType("status",types) ? (0,_partials_vehicleStatus__WEBPACK_IMPORTED_MODULE_2__.vehicleStatus)(paginationRange) : `` }
            }`
}




/***/ }),

/***/ 6505:
/*!**************************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/logging/queryBuilders/partials/logging.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logging": () => (/* binding */ logging)
/* harmony export */ });
// export const logging = (paginationRange=25)=> `logging: vehicleLogs(
//     first: ${paginationRange}
//     orderBy:ID_DESC 
//     offset: $cursor
//   filter:{
//     vehicleId:{equalTo:$vehicleId}
//     , readingat:{ 
//         greaterThanOrEqualTo: $startDateTime
//       , lessThanOrEqualTo: $endDateTime
//     } 
//   }){
// nodes{
//   readingat
//   id
//   topicId
//   topic{
//     name
//   }
//   vehicleId
//   topic{
//     id
//     name
//   }
//   message {
//     id
//     name
//     function
//     file
//     msg
//     line
//     level
//     stamp {
//       sec
//       nanosec
//     }
//   }
// }
// }`

const logging = (paginationRange=25, nodes=[])=>`
logging: vehicleLogViews(
  first: ${paginationRange}, 
  orderBy: ID_DESC, 
  offset: $cursor
  condition:{vehicleId:$vehicleId}
  filter:{
    node:{
      in:${JSON.stringify(nodes)}
    }
    readingat:{ 
            greaterThanOrEqualTo: $startDateTime
          , lessThanOrEqualTo: $endDateTime
    } 
  }
){
  nodes{
    id
    readingat
    topicId
    vehicleId
    name: node
    function
    file
    level
    msg
    sec
    nanosec
  }
}
`

/***/ }),

/***/ 12432:
/*!**********************************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/logging/queryBuilders/partials/objectDetection.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectDetection": () => (/* binding */ objectDetection)
/* harmony export */ });
const objectDetection = (paginationRange=25)=>`objectDetection: objects(
  first: ${paginationRange}
  orderBy:ID_DESC 
    offset: $cursor
    filter:{
      vehicleId:{equalTo:$vehicleId}
      , readingat:{ 
          greaterThanOrEqualTo: $startDateTime
        , lessThanOrEqualTo: $endDateTime
      } 
    }){
    	nodes{
      readingat
      id
      topicId
      topic{
        name
      }
      vehicleId
      message{
        header{
          headerid
          readingat
          seq
          node
        }
        detection{
          header{
            headerid
            readingat
            seq
            node
          }
        	cuboid {
            centroid{
              xM
              yM
              zM
            }
            dimension{
              widthM
              depthM
              heightM
            }
            orientation{
              rollDeg
              pitchDeg
              yawDeg
            }
          }
          roi{
            x
            y
            width
            height
            thetaDeg
          }
          label
          confidence
        }
        centroidRpy{
          rollDeg
          pitchDeg
          yawDeg
        }
        centroidLocation{
          xyzCamera{
            xM
            yM
            zM
          }
          xyzStarfire{
            xM
            yM
            zM
          }
          lla{
            latitudeDeg
            longitudeDeg
            altitudeM
          }
          enu{
            eastM
            northM
            upM
          }
          fieldOrigin{
            latitudeDeg
            longitudeDeg
            altitudeM
          }
          ecef{
            xM
            yM
            zM
          }
        }
        objectMessageVertices{
          nodes{
            xyzCamera{
              xM
              yM
              zM
            }
          }
        }
      }      
    }
  }`

/***/ }),

/***/ 60389:
/*!********************************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/logging/queryBuilders/partials/vehicleStatus.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vehicleStatus": () => (/* binding */ vehicleStatus)
/* harmony export */ });
const vehicleStatus = (paginationRange=25)=> `vehicleStatus: vehicleStatuses(
    first: ${paginationRange}
    orderBy:ID_DESC 
    offset: $cursor
    filter:{
      vehicleId:{equalTo:$vehicleId}
      , readingat:{ 
          greaterThanOrEqualTo: $startDateTime
        , lessThanOrEqualTo: $endDateTime
      } 
    }){    
    nodes{
      readingat
      id
      topicId
      topic{
        name
      }
      vehicleId
      alerts{
        nodes{
          id
          message
          dismissed
          read
          alertType{
            id
            name
            severity
            
          }
        }
      }
      state{
        name
        description
        id
      }
      vehicleStatusDetails{
        nodes{
          isActive
          isRecoverable
          description
          reason: vehicleStatusReason{
            code
            id
            name
          }
        }
      }
      message: statusMessage{
        id
        header{
          id
          seq
          headerid
          readingat
          node
        }
      }
    }
  }`

/***/ }),

/***/ 31685:
/*!********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/notifications/alerts.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ alertsQuery)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const alertsQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query Alerts{
    alerts (condition:{dismissed:false}){
      nodes{
        id
        alertType{
          name
          severity
        }
        read
        dismissed
        vehicleStatus{
          id
          vehicle{
            name
            id
          }
          state {
            description
            code
            name
          }
          topic{
            name
          }
          vehicleStatusDetails{
            nodes{
              isActive
              vehicleStatusId
              isRecoverable
              vehicleStatusReason{
                name
                id
              }
            }
          }
        }
      }
    }
  }   
`



/***/ }),

/***/ 75608:
/*!*******************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/notifications/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alerts": () => (/* reexport safe */ _alerts__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerts */ 31685);



/***/ }),

/***/ 52575:
/*!****************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/production/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissionsByVehicleId": () => (/* reexport safe */ _missionsByVehicleId__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _missionsByVehicleId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./missionsByVehicleId */ 57362);



/***/ }),

/***/ 57362:
/*!******************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/production/missionsByVehicleId.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ missionsQuery)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const missionsQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default` 
    query Missions($vehicleId: BigInt, $cursor: Int,  $size: Int){
        missions(
            orderBy: ID_DESC
            offset: $cursor
            first: $size
            condition: {vehicleId: $vehicleId}
            filter:{missionStartTime:{greaterThan:"1970-01-01"}}
        ) {
        totalCount
        pageInfo{
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
        }
        nodes{
            autonomyAreaTravelledSqm
            autonomyDistanceTravelledM
            durationAutonomyDriving
            durationAutonomyStopped
            durationNoAutonomy
            durationTeleop
            missionStartTime
            numFalsePositives
            numStateDemotion
            numStops
            numTeleopQueries
            numTruePositives
            id
        }
        }
  }
`



/***/ }),

/***/ 20093:
/*!***************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/status/byVehicleIdDateRange.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ byVehicleIdDateRange)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const byVehicleIdDateRange = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query VehicleStatus($vehicle_id:BigInt $startDateTime:Datetime $endDateTime:Datetime) {
    vehicleStatuses( 
        orderBy:READINGAT_DESC 
        condition:{vehicleId:$vehicle_id}
        filter:{
            readingat:{
              lessThanOrEqualTo:$endDateTime
              , greaterThanOrEqualTo:$startDateTime
            }
          }
    ){
       pageInfo{
         startCursor
         endCursor
         hasNextPage
         hasPreviousPage
         
       }
     totalCount
     edges {
       cursor
       node{
        id
        createdAt
        statusMessage{
          header{
            headerid
            readingat
            node
          }
          missionStats{
            missionStartTime
            durationAutonomyStopped 
            durationAutonomyDriving
            durationNoAutonomy
            durationTeleop
            autonomyDistanceTravelledM 
            autonomyAreaTravelledSqm
            numStops
            numStateDemotion
            numTruePositives
            numFalsePositives
            numTeleopQueries
           }
        }
        topic{
          name
        }
       vehicleStatusDetails{
         nodes{
           id
           isActive
           isRecoverable
           description
           vehicleStatusReasonId
           reason: vehicleStatusReason{
            name
            code
           }
         }
       }
         createdAt
         state{
           name
           description
           id
         }
         alerts{
           totalCount
           pageInfo{
             startCursor
             endCursor
             hasNextPage
             hasPreviousPage
           }
           nodes{
             read
             message
             dismissed
             alertType{
               id
               severity
               name
             }
           }
         }
       }
     }
     }
   }
`



/***/ }),

/***/ 17847:
/*!************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/status/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vehicle": () => (/* reexport safe */ _vehicleStatus__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "MissionCountByVehicleId": () => (/* reexport safe */ _missionCountByVehicle__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "MissionStatsByVehicleIdTimestamp": () => (/* reexport safe */ _missionStatsByVehicleIdTimestamp__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "ByVehicleIdDateRange": () => (/* reexport safe */ _byVehicleIdDateRange__WEBPACK_IMPORTED_MODULE_3__.default)
/* harmony export */ });
/* harmony import */ var _vehicleStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicleStatus */ 55462);
/* harmony import */ var _missionCountByVehicle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./missionCountByVehicle */ 61322);
/* harmony import */ var _missionStatsByVehicleIdTimestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./missionStatsByVehicleIdTimestamp */ 83948);
/* harmony import */ var _byVehicleIdDateRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./byVehicleIdDateRange */ 20093);
 





/***/ }),

/***/ 61322:
/*!****************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/status/missionCountByVehicle.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ missionCountByVehicleId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const missionCountByVehicleId = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`query Missions($vehicleId: BigInt){
    missionPaginationViews(
      condition:{vehicleId:$vehicleId}
      filter:{missionStartTime:{
        greaterThan:"1970-01-01 00:00:00-05"
    }}
      ){
      totalCount
      nodes{
        missionStartTime
        missionReadingCount
      }
    }
  }`

  

/***/ }),

/***/ 83948:
/*!***************************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/status/missionStatsByVehicleIdTimestamp.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ missionStatsByVehicleIdTimestamp)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


// const missionStatsByVehicleIdTimestamp = gql`query MissionStats($vehicleId: BigInt, $timestamp: Datetime) {
//   missionStatsByTimestamps(
//     first:1
//     orderBy: ID_DESC
//     filter:{missionStartTime:{
//         lessThanOrEqualTo:$timestamp
//       , greaterThan:"1970-01-01 00:00:00-05"
//     }}
//     condition: {vehicleId: $vehicleId}
//   ) {
//     totalCount
//     pageInfo{
//       startCursor
//       hasNextPage
//       hasPreviousPage
//       endCursor
//     }
//     nodes {
//       autonomyAreaTravelledSqm
//       autonomyDistanceTravelledM
//       durationAutonomyDriving
//       durationAutonomyStopped
//       durationNoAutonomy
//       durationTeleop
//       id
//       missionStartTime
//       numFalsePositives
//       numStateDemotion
//       numStops
//       numTeleopQueries
//       numTruePositives
//       vehicleId
//       vehicleName
//     }
//   }
// }`

const missionStatsByVehicleIdTimestamp = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`query MissionStats($vehicleId: BigInt, $timestamp: Datetime) {
  missionStatsByTimestamps(
    first:1
    orderBy: ID_DESC
    filter:{
      missionStartTime: {equalTo: $timestamp}
      , vehicleId: {equalTo: $vehicleId}
  }
  ) {
    totalCount
    pageInfo{
      startCursor
      hasNextPage
      hasPreviousPage
      endCursor
    }
    nodes {
      autonomyAreaTravelledSqm
      autonomyDistanceTravelledM
      durationAutonomyDriving
      durationAutonomyStopped
      durationNoAutonomy
      durationTeleop
      id
      missionStartTime
      numFalsePositives
      numStateDemotion
      numStops
      numTeleopQueries
      numTruePositives
      vehicleId
      vehicleName
    }
  }
}`
  

/***/ }),

/***/ 55462:
/*!********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/status/vehicleStatus.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ vehicleStatus)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const vehicleStatus = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query VehicleStatus($vehicle_id:BigInt, $cursor:Int, $size:Int) {
    vehicleStatuses( first:$size offset:$cursor orderBy:READINGAT_DESC condition:{vehicleId:$vehicle_id}){
       pageInfo{
         startCursor
         endCursor
         hasNextPage
         hasPreviousPage
         
       }
     totalCount
     edges {
       cursor
       node{
        id
        createdAt
        statusMessage{
          header{
            headerid
            readingat
            node
          }
          missionStats{
            missionStartTime
            durationAutonomyStopped 
            durationAutonomyDriving
            durationNoAutonomy
            durationTeleop
            autonomyDistanceTravelledM 
            autonomyAreaTravelledSqm
            numStops
            numStateDemotion
            numTruePositives
            numFalsePositives
            numTeleopQueries
           }
        }
        topic{
          name
        }
       vehicleStatusDetails{
         nodes{
           id
           isActive
           isRecoverable
           description
           vehicleStatusReasonId
           reason: vehicleStatusReason{
            name
            code
           }
         }
       }
         createdAt
         state{
           name
           description
           id
         }
         alerts{
           totalCount
           pageInfo{
             startCursor
             endCursor
             hasNextPage
             hasPreviousPage
           }
           nodes{
             read
             message
             dismissed
             alertType{
               id
               severity
               name
             }
           }
         }
       }
     }
     }
   }
`



/***/ }),

/***/ 3446:
/*!**************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/topics/byCategoryVehicleId.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ topics)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


// const topics =gql`
// query TopicsCategoryPreviewImages ($vehicleId: BigInt $category: String $topicName:String){
//     topicCategories(condition:{name:$category}){
//       nodes{
//         topics(filter:{name:{like:$topicName}}){
//           totalCount
//           pageInfo{
//             hasNextPage
//             hasPreviousPage
//             endCursor
//             startCursor
//           }
//           nodes{
//             vehicleTopics(condition:{vehicleId:$vehicleId}){
//               nodes{
//                 topic{
//                   name
//                   id
//                 }
//               }
//             }
//           }  
//         }
//       }
//     }
//   }
// `

const topics =apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`

query TopicsCategoryPreviewImages ($vehicleId: BigInt $category: String $topicName:String, $topicList:[String!]){
  
  list :topics(filter:{name:{in:$topicList}}){
      totalCount
        pageInfo{
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        nodes{
          vehicleTopics(condition:{vehicleId:$vehicleId}){
            nodes{
              topic{
                name
                id
              }
            }
          }
        } 
  }
  category: topicCategories(condition:{name:$category}){
    nodes{
      topics(filter:{name:{like:$topicName}}){
        totalCount
        pageInfo{
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        nodes{
          vehicleTopics(condition:{vehicleId:$vehicleId}){
            nodes{
              topic{
                name
                id
              }
            }
          }
        }  
      }
    }
  }
}
`



/***/ }),

/***/ 60168:
/*!************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/topics/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByVehicleId": () => (/* reexport safe */ _topics_by_vehicle_id__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "All": () => (/* reexport safe */ _topics__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "ByCategoryVehicleId": () => (/* reexport safe */ _byCategoryVehicleId__WEBPACK_IMPORTED_MODULE_2__.default)
/* harmony export */ });
/* harmony import */ var _topics_by_vehicle_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topics-by-vehicle-id */ 36297);
/* harmony import */ var _topics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topics */ 88620);
/* harmony import */ var _byCategoryVehicleId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./byCategoryVehicleId */ 3446);






/***/ }),

/***/ 36297:
/*!***************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/topics/topics-by-vehicle-id.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ topicByVehicleId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const topicByVehicleId = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query VehicleTopics($id:BigInt!){
    topics (filter:{name:{notLike:"%segmentation%"}}) {
          nodes{
          vehicleTopics(filter:{vehicleId:{equalTo:$id}}){
            nodes{
              vehicle{
                name
                ip
                id
                type{
                  type
                }
              }
              topic{
                name
                id
              }
            }
          }
        }
      }
    }
  `

  

/***/ }),

/***/ 88620:
/*!*************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/topics/topics.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ topics)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const topics = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query Topics{
  topics (filter:{name:{notLike:"%segmentation%"}}) {
    nodes{
      id
      name
      type{
        class
        module
      }
    }
  }
}
`



/***/ }),

/***/ 36286:
/*!************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/vehicles/all.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ vehicles)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const vehicles = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query {
    vehicles{
      nodes{
        id
        name
        type {
          type
        }
      }
    }
  }
`



/***/ }),

/***/ 40311:
/*!**************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/vehicles/by-id.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ vehicle)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const vehicle = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
    query Vehicles($id:BigInt){
        vehicles(condition:{id:$id}){
            nodes{
                id
                name
                type {
                    type
                }
            }
        }
    }
`


/***/ }),

/***/ 85457:
/*!**************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/vehicles/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "All": () => (/* reexport safe */ _all__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "ById": () => (/* reexport safe */ _by_id__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Online": () => (/* reexport safe */ _online__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "Offline": () => (/* reexport safe */ _offline__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "OnlineOrOfflineById": () => (/* reexport safe */ _onlineOrOfflineById__WEBPACK_IMPORTED_MODULE_4__.default)
/* harmony export */ });
/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all */ 36286);
/* harmony import */ var _by_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./by-id */ 40311);
/* harmony import */ var _online__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./online */ 12000);
/* harmony import */ var _offline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offline */ 73762);
/* harmony import */ var _onlineOrOfflineById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onlineOrOfflineById */ 88235);








/***/ }),

/***/ 73762:
/*!****************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/vehicles/offline.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ offlineVehicles)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const offlineVehicles  = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query OfflineVehicles {
    vehiclesOfflines(filter:{decommissioned:{notEqualTo :true}}){
      nodes{
        deviceId
        id
        vehicle_id: id
        name
        ip
      }
    }
  }
`



/***/ }),

/***/ 12000:
/*!***************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/vehicles/online.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onlineVehicles)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const onlineVehicles  = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query OnlineVehicles {
    vehiclesOnlines{
      nodes{
        id
        vehicleId
        vehicle{
          vehicleStatuses(first:1,orderBy:ID_DESC) {
            nodes{
              alerts(first:1,orderBy:ID_DESC) {
                nodes{
                  alertType {
                    name
                    severity
                  }
                  message
                  read
                  dismissed
                }
              }
              state {
                description
                name
              }
            }
          }
          id
          vehicle_id: id
          name
          deviceId
          ip
        }
      }
    }
  }
`



/***/ }),

/***/ 88235:
/*!****************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/vehicles/onlineOrOfflineById.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ vehicleStatus)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const vehicleStatus = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query VehicleOnlineOrOffline ($id:BigInt) {
    online: vehiclesOnlines(condition:{vehicleId:$id}){
      nodes{
        id
        vehicle{
          name
        }
      }
    }
    offline: vehiclesOfflines(condition:{id:$id}){
      nodes{
        id
        deviceId
        name
      }
    }
  }
  `
  
  

/***/ }),

/***/ 27401:
/*!****************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/Notifications/alerts.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ alertsSubscriptions)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const alertsSubscriptions = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
subscription sqlAlerts {
    sqlAlerts {
      event
      alerts {
        id
        read
        dismissed
        vehicleStatus {
          id
          vehicle {
            name
            id
          }
          state {
            description
            name
            code
          }
          topic {
            name
          }
          vehicleStatusDetails{
            nodes{
              vehicleStatusId
              isActive
              isRecoverable
              vehicleStatusReason{
                name
                id
              }
            }
          }
        }
      }
    }
  }  
`;



/***/ }),

/***/ 65547:
/*!***************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/Notifications/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alerts": () => (/* reexport safe */ _alerts__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerts */ 27401);




/***/ }),

/***/ 43438:
/*!***********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/detection/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByVehicleId": () => (/* reexport safe */ _objectByVehicleId__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _objectByVehicleId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectByVehicleId */ 60781);




/***/ }),

/***/ 60781:
/*!***********************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/detection/objectByVehicleId.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ objectByVehicleId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const objectByVehicleId  = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
subscription ObjectDetectionSubscription ($vehicleId: BigInt) {
  sqlObjectDetection {
    object(vehicleId:$vehicleId) {
      readingat
      topic{
        name
      }
      message{
        cameraName
        isActivePathSet
        onPath
        circleRadiusM
        detection{
          header{
            readingat
            node
            seq
          }
          cuboid{
            dimension{
              widthM
              depthM
              heightM
            }
          }
        }
        centroidLocation{
          xyzCamera{
            xM
            yM
            zM
          }
          xyzStarfire{
            xM
            yM
            zM
          }
          lla{
            latitudeDeg
            longitudeDeg
            altitudeM
          }
          enu{
            eastM
            northM
            upM
          }
          fieldOrigin{
            latitudeDeg
            longitudeDeg
            altitudeM
          }
          ecef{
            xM
            yM
            zM
          }
        }
        header{
          headerid
          seq
          node
          readingat
        }
      }
    }
  }
}
`



/***/ }),

/***/ 11502:
/*!**********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/device-message.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deviceMessage)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const deviceMessage  = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
subscription deviceMessage {
  deviceMessage{
    timestamp
    topic 
    msg{
      header{
        id
        timestamp
      	seq
        node
      }
      id
      data
    }
    type{
      module
      class
    }
  }
}
`



/***/ }),

/***/ 30758:
/*!*************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/geolocation/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vehicles": () => (/* reexport safe */ _vehicles__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _vehicles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicles */ 62743);




/***/ }),

/***/ 62743:
/*!****************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/geolocation/vehicles.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ vehicleGeographicCoordinates)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const vehicleGeographicCoordinates = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
subscription VehicleGeographicCoordinates($vehicleId:Float) {
  sqlStarfire{
    starfire(vehicleId:$vehicleId){
      msg{
        longitude
        latitude
      }
      vehicle{
        name
        ip
      }
    }
  }
}
`

  

/***/ }),

/***/ 47751:
/*!********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/images/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewImagesByVehicleId": () => (/* reexport safe */ _previewImagesByVehicleId__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "PreviewImagesByVehicleIdTopicId": () => (/* reexport safe */ _previewImageByVehicleIdTopicId__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _previewImagesByVehicleId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./previewImagesByVehicleId */ 72080);
/* harmony import */ var _previewImageByVehicleIdTopicId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./previewImageByVehicleIdTopicId */ 63496);





/***/ }),

/***/ 63496:
/*!*********************************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/images/previewImageByVehicleIdTopicId.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previewImagesByVehicleIdTopicId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const previewImagesByVehicleIdTopicId  =apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
subscription SQLCameraSubscriptionByVehilceIdTopicId($vehicleId:BigInt $topicId:BigInt) {
    sqlCamera {
      event
      camera(vehicleId: $vehicleId) {
        id: nodeId
        vehicle {
          id: nodeId
          vehicleTopics(condition:{topicId:$topicId}) {
            nodes {
              topic{
                name
                id
                cameras(first:1 orderBy:ID_DESC){
                  nodes{
                    id: nodeId
                    readingat
                    msg {
                      header{
                        headerId
                        readingat
                      }
                      image{
                        width
                        height
                        encoding
                        isBigendian
                        step
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`



/***/ }),

/***/ 72080:
/*!***************************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/images/previewImagesByVehicleId.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previewImagesByVehicleId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const previewImagesByVehicleId = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`subscription PreviewImagesByVehicleId($id: BigInt)  {
  sqlCamera {
    event
    id
    camera(vehicleId:$id){
        id
        nodeId
        topic{
          name
          id
        }
        vehicleId
        msg {
          id
          nodeId
          header{
            id
            seq
            readingat
            node
            headerId
          }
          image{
            id
            nodeId
            width
            height
            step
            isBigendian
            encoding
        }
      }
    }
  }
}`


/***/ }),

/***/ 89156:
/*!*************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceMessageSubscription": () => (/* reexport safe */ _device_message__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Geolocation": () => (/* reexport module object */ _geolocation__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "OnlineVehicles": () => (/* reexport safe */ _vehicles_online__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "Notifications": () => (/* reexport module object */ _Notifications__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "Vehicles": () => (/* reexport module object */ _vehicles__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "Images": () => (/* reexport module object */ _images__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "Logging": () => (/* reexport module object */ _logging__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "Detection": () => (/* reexport module object */ _detection__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   "Production": () => (/* reexport module object */ _production__WEBPACK_IMPORTED_MODULE_8__)
/* harmony export */ });
/* harmony import */ var _device_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-message */ 11502);
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation */ 30758);
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notifications */ 65547);
/* harmony import */ var _vehicles_online__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicles-online */ 81000);
/* harmony import */ var _vehicles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicles */ 82555);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images */ 47751);
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logging */ 71938);
/* harmony import */ var _detection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detection */ 43438);
/* harmony import */ var _production__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./production */ 83255);












/***/ }),

/***/ 72396:
/*!***************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/logging/byVehicleId.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loggingByVehicleId)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const loggingByVehicleId  = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
subscription LoggingSubscription ($vehicleId: BigInt) {
    sqlVehicleLogging {
        vehicle_logs(vehicleId:$vehicleId) {
            readingat
            message{
            stamp{
                sec
                nanosec
            }
            msg
            line
            file
            level
            name
            function
            }
        }
    }
}
`



/***/ }),

/***/ 71938:
/*!*********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/logging/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByVehicleId": () => (/* reexport safe */ _byVehicleId__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _byVehicleId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byVehicleId */ 72396);




/***/ }),

/***/ 83255:
/*!************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/production/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissionByVehicleId": () => (/* reexport safe */ _missionByVehicleId__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _missionByVehicleId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./missionByVehicleId */ 92657);



/***/ }),

/***/ 92657:
/*!*************************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/production/missionByVehicleId.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ missionSubscription)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const missionSubscription  = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
subscription MissionSubscription($vehicleId: BigInt){
    sqlMission {
      event
      missions(vehicleId: $vehicleId) {
        autonomyAreaTravelledSqm
        autonomyDistanceTravelledM
        durationAutonomyDriving
        durationAutonomyStopped
        durationNoAutonomy
        durationTeleop
        missionStartTime
        numFalsePositives
        numStateDemotion
        numStops
        numTeleopQueries
        numTruePositives
        id
      }
    }
  }
`



/***/ }),

/***/ 81000:
/*!***********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/vehicles-online.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onlineDevices)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const onlineDevices  = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
subscription {
  listen(topic: "online_vehicles") {
    query{
      vehicles{
        nodes{
          vehiclesOnline {
            vehicleId 
            vehicle{
              name
              type{
                type
              }
            }
          }
        }
      }
    }
  }
}
`



/***/ }),

/***/ 82555:
/*!**********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/vehicles/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Online": () => (/* reexport safe */ _online__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "OnlineOrOfflineById": () => (/* reexport safe */ _onlineOrOfflineById__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "State": () => (/* reexport safe */ _status__WEBPACK_IMPORTED_MODULE_2__.default)
/* harmony export */ });
/* harmony import */ var _online__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./online */ 97510);
/* harmony import */ var _onlineOrOfflineById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onlineOrOfflineById */ 17027);
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status */ 49401);





/***/ }),

/***/ 97510:
/*!***********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/vehicles/online.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onlineDevices)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const onlineDevices  = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
subscription sqlVehiclesOnline {
    sqlVehiclesOnline {
      event
      row {
        id
      }
      vehicle_online {
        vehicle {
          name
          id
          vehicle_id: id
          ip
          type{
            type
          }
          vehicleStatuses(first:1,orderBy:ID_DESC) {
            nodes{
              alerts(first:1,orderBy:ID_DESC, condition:{dismissed:false, read:false}){
                nodes{
                    read
                    dismissed
                    message
                    vehicleStatus{
                        vehicleStatusDetails{
                            nodes{
                                description
                                isActive
                                isRecoverable
                                id
                            }
                        }
                    }
                    alertType {
                        name
                    }
                }
              }
              state {
                description
                code
                name
              }
            }
          }
        }
      }
    }
  }
`



/***/ }),

/***/ 17027:
/*!************************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/vehicles/onlineOrOfflineById.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ vehicleStatus)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const vehicleStatus = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
subscription sqlVehiclesOnlineByVehicle ($id:BigInt){  
    sqlVehiclesOnline {
      event
      row{
        id
      }
      vehicle_online(vehicleId:$id ){
        nodeId
        vehicleId
        vehicle{
          name
          type {
            id
          }
        }
      }
    }
  }`
  
  

/***/ }),

/***/ 49401:
/*!***********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/vehicles/status.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ vehicleStatus)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const vehicleStatus = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
subscription sqlVehicleStatus($vehicleId:BigInt) {
    sqlVehicleStatus{
      event
      vehicle_status(vehicleId:$vehicleId){
        id
        createdAt
        readingat
        statusMessage{
          header{
            headerid
            readingat
            node
          }
          missionStats{
            missionStartTime
            durationAutonomyStopped 
            durationAutonomyDriving
            durationNoAutonomy
            durationTeleop
            autonomyDistanceTravelledM 
            autonomyAreaTravelledSqm
            numStops
            numStateDemotion
            numTruePositives
            numFalsePositives
            numTeleopQueries
          }
        }
        state{
          name
        }
        id
        topic{
          name
        }
         vehicleStatusDetails{
           nodes{
             id
             isActive
             isRecoverable
             description
             vehicleStatusReasonId
             reason: vehicleStatusReason{
                name
                code
            }
           }
         }
        alerts{
           totalCount
           pageInfo{
             startCursor
             endCursor
             hasNextPage
             hasPreviousPage
           }
          nodes{
          id
          message
          read
          dismissed
          alertType{
              name
              severity
            }
            }
        }
      }
    }
  }
`
  
  

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/top-navigation/top-navigation.component */ 56396);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "content"], [1, "content__main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-top-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_0__.TopNavigationComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 50px calc(100vh - 75px);\n  grid-template-areas: \"top-nav\" \"main-content\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsNkNBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCBjYWxjKDEwMHZoIC0gNzVweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0b3AtbmF2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFpbi1jb250ZW50XCI7XG5cbn0iXX0= */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/app-routes.module */ 61364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! apollo-angular */ 550);
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! apollo-angular/http */ 31586);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @apollo/client/core */ 76088);
/* harmony import */ var _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @apollo/client/link/ws */ 39136);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @apollo/client/utilities */ 76333);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @apollo/client/core */ 87328);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation/navigation.component */ 60006);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ 24902);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 24789);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var ng_dynamic_breadcrumb__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ng-dynamic-breadcrumb */ 26661);
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/error/error.component */ 58449);
/* harmony import */ var _components_topics_geolocation_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/topics/geolocation/starfire/starfire.component */ 51721);
/* harmony import */ var _components_topics_images_image_pair_image_pair_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/topics/images/image-pair/image-pair.component */ 11610);
/* harmony import */ var _components_topics_images_image_segmentation_image_segmentation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/topics/images/image-segmentation/image-segmentation.component */ 52785);
/* harmony import */ var _pages_vehicles_pages_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/vehicles/pages/vehicle-list/vehicle-list.component */ 78211);
/* harmony import */ var _pages_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/vehicle/vehicle.component */ 15852);
/* harmony import */ var _components_topics_images_preview_preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/topics/images/preview/preview.component */ 7585);
/* harmony import */ var _components_images_rgb_image_rgb_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/images/rgb-image/rgb-image.component */ 29045);
/* harmony import */ var _components_images_segmentation_image_segmentation_image_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/images/segmentation-image/segmentation-image.component */ 98299);
/* harmony import */ var _components_topics_vehicles_vehicles_online_vehicles_online_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/topics/vehicles/vehicles-online/vehicles-online.component */ 20253);
/* harmony import */ var _components_topics_vehicles_vehicles_offline_vehicles_offline_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/topics/vehicles/vehicles-offline/vehicles-offline.component */ 96680);
/* harmony import */ var _pages_vehicle_pages_vehicle_overview_vehicle_overview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/vehicle/pages/vehicle-overview/vehicle-overview.component */ 32642);
/* harmony import */ var _pages_vehicle_pages_vehicle_geolocation_vehicle_geolocation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/vehicle/pages/vehicle-geolocation/vehicle-geolocation.component */ 97618);
/* harmony import */ var _pages_vehicle_pages_vehicle_images_vehicle_images_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/vehicle/pages/vehicle-images/vehicle-images.component */ 17962);
/* harmony import */ var _pages_vehicle_pages_vehicle_logging_vehicle_logging_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/vehicle/pages/vehicle-logging/vehicle-logging.component */ 81668);
/* harmony import */ var _pages_vehicle_pages_vehicle_system_vehicle_system_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/vehicle/pages/vehicle-system/vehicle-system.component */ 52862);
/* harmony import */ var _components_table_table_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/table/table-utils */ 417);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-infinite-scroll */ 39210);
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ngx-json-viewer */ 41103);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! angularx-social-login */ 37055);
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ 49404);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/button-toggle */ 42542);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/profile/profile.component */ 58220);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/layout/layout.component */ 39520);
/* harmony import */ var _pages_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/vehicles/vehicles.component */ 2815);
/* harmony import */ var _modules_graphql_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modules/graphql.module */ 72504);
/* harmony import */ var _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/top-navigation/top-navigation.component */ 56396);
/* harmony import */ var _services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/navigation/menu.service */ 83536);
/* harmony import */ var _services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/geolocation/geolocation.service */ 39487);
/* harmony import */ var _components_topics_vehicles_vehicle_status_vehicle_status_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/topics/vehicles/vehicle-status/vehicle-status.component */ 48484);
/* harmony import */ var _components_modals_vehicle_status_detail_vehicle_status_detail_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/modals/vehicle-status-detail/vehicle-status-detail.component */ 29082);
/* harmony import */ var _components_images_image_image_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/images/image/image.component */ 89990);
/* harmony import */ var _components_modals_image_expansion_image_expansion_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/modals/image-expansion/image-expansion.component */ 54217);
/* harmony import */ var _components_core_medallion_medallion_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/core/medallion/medallion.component */ 24229);
/* harmony import */ var _components_modals_object_detection_detail_object_detection_detail_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/modals/object-detection-detail/object-detection-detail.component */ 56675);
/* harmony import */ var _components_topics_images_stop_images_stop_images_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/topics/images/stop-images/stop-images.component */ 43613);
/* harmony import */ var _components_topics_vehicles_vehicle_mission_stats_vehicle_mission_stats_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/topics/vehicles/vehicle-mission-stats/vehicle-mission-stats.component */ 68027);
/* harmony import */ var _pages_vehicle_pages_vehicle_share_vehicle_share_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/vehicle/pages/vehicle-share/vehicle-share.component */ 94530);
/* harmony import */ var _pages_vehicle_pages_vehicle_share_pages_vehicle_autonomy_share_vehicle_autonomy_share_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/vehicle/pages/vehicle-share/pages/vehicle-autonomy-share/vehicle-autonomy-share.component */ 83668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/core */ 37716);



































// Enviornment Variables

// Google OAuth



// Material



















// 





// Service













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵdefineInjector"]({ providers: [{
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: true,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_43__.GoogleLoginProvider.PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_43__.GoogleLoginProvider(_environments_environment__WEBPACK_IMPORTED_MODULE_23__.environment.googleAuthClientId)
                    }
                ]
            },
        },
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_44__.APOLLO_OPTIONS,
            // @ts-ignore
            useFactory(httpLink) {
                // Create an http link:
                const http = httpLink.create({
                    uri: `${location.protocol}//${location.host}${_environments_environment__WEBPACK_IMPORTED_MODULE_23__.environment.serviceEndpoint}`,
                });
                // Create a WebSocket link:
                const ws = new _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_45__.WebSocketLink({
                    uri: `${location.protocol === "https:" ? "wss:" : "ws:"}//${location.host}${_environments_environment__WEBPACK_IMPORTED_MODULE_23__.environment.serviceEndpoint}`,
                    options: {
                        reconnect: true,
                    },
                });
                const link = (0,_apollo_client_core__WEBPACK_IMPORTED_MODULE_46__.split)(({ query }) => {
                    let definition = (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_47__.getMainDefinition)(query);
                    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
                }, ws, http);
                const defaultOptions = {
                    watchQuery: {
                        fetchPolicy: 'network-only',
                        nextFetchPolicy: 'cache-first',
                        errorPolicy: 'ignore',
                    },
                    query: {
                        errorPolicy: 'ignore',
                        fetchPolicy: 'network-only',
                        nextFetchPolicy: 'cache-first', //"cache-first" 
                        // errorPolicy: 'all',
                    },
                    subscription: {
                        errorPolicy: 'ignore',
                        fetchPolicy: 'network-only',
                        nextFetchPolicy: 'cache-first' //"cache-first" 
                        // errorPolicy: 'all',
                    },
                };
                return {
                    link,
                    cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_48__.InMemoryCache(),
                    defaultOptions: defaultOptions,
                    // ... options
                };
            },
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_49__.HttpLink],
        }, _services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_30__.MenuService,
        _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__.AuthGuardService,
        _services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_31__.GeolocationService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_50__.BrowserModule,
            _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutes,
            _angular_forms__WEBPACK_IMPORTED_MODULE_51__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_52__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_53__.BrowserAnimationsModule,
            ngx_json_viewer__WEBPACK_IMPORTED_MODULE_54__.NgxJsonViewerModule,
            // Material
            _angular_material_list__WEBPACK_IMPORTED_MODULE_55__.MatListModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_56__.MatCardModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_57__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_58__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_59__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_60__.MatButtonModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_61__.MatSnackBarModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_62__.MatGridListModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_63__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_64__.MatProgressSpinnerModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_65__.MatPaginatorModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_66__.MatSlideToggleModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_67__.MatTableModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_68__.MatButtonToggleModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_69__.MatTabsModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_70__.MatExpansionModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_71__.MatDialogModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_72__.MatRadioModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_73__.MatSelectModule,
            // 
            _modules_graphql_module__WEBPACK_IMPORTED_MODULE_28__.GraphQLModule,
            angularx_social_login__WEBPACK_IMPORTED_MODULE_43__.SocialLoginModule,
            ng_dynamic_breadcrumb__WEBPACK_IMPORTED_MODULE_74__.NgDynamicBreadcrumbModule,
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_22__.InfiniteScrollModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__.NavigationComponent,
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent,
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__.ProfileComponent,
        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_26__.LayoutComponent,
        _pages_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_27__.VehiclesComponent,
        _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_29__.TopNavigationComponent,
        _pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent,
        _components_topics_geolocation_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_6__.StarfireComponent,
        _components_topics_images_image_pair_image_pair_component__WEBPACK_IMPORTED_MODULE_7__.ImagePairComponent,
        _components_topics_images_image_segmentation_image_segmentation_component__WEBPACK_IMPORTED_MODULE_8__.ImageSegmentationComponent,
        _pages_vehicles_pages_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_9__.VehicleListComponent,
        _pages_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_10__.VehicleComponent,
        _components_topics_images_preview_preview_component__WEBPACK_IMPORTED_MODULE_11__.PreviewComponent,
        _components_images_rgb_image_rgb_image_component__WEBPACK_IMPORTED_MODULE_12__.RgbImageComponent,
        _components_images_segmentation_image_segmentation_image_component__WEBPACK_IMPORTED_MODULE_13__.SegmentationImageComponent,
        _components_topics_vehicles_vehicles_online_vehicles_online_component__WEBPACK_IMPORTED_MODULE_14__.VehiclesOnlineComponent,
        _components_topics_vehicles_vehicles_offline_vehicles_offline_component__WEBPACK_IMPORTED_MODULE_15__.VehiclesOfflineComponent,
        _pages_vehicle_pages_vehicle_overview_vehicle_overview_component__WEBPACK_IMPORTED_MODULE_16__.VehicleOverviewComponent,
        _pages_vehicle_pages_vehicle_geolocation_vehicle_geolocation_component__WEBPACK_IMPORTED_MODULE_17__.VehicleGeolocationComponent,
        _pages_vehicle_pages_vehicle_images_vehicle_images_component__WEBPACK_IMPORTED_MODULE_18__.VehicleImagesComponent,
        _pages_vehicle_pages_vehicle_logging_vehicle_logging_component__WEBPACK_IMPORTED_MODULE_19__.VehicleLoggingComponent,
        _pages_vehicle_pages_vehicle_system_vehicle_system_component__WEBPACK_IMPORTED_MODULE_20__.VehicleSystemComponent,
        _components_topics_vehicles_vehicle_status_vehicle_status_component__WEBPACK_IMPORTED_MODULE_32__.VehicleStatusComponent,
        _components_table_table_utils__WEBPACK_IMPORTED_MODULE_21__.TableUtil,
        _components_modals_vehicle_status_detail_vehicle_status_detail_component__WEBPACK_IMPORTED_MODULE_33__.VehicleStatusDetailComponent,
        _components_images_image_image_component__WEBPACK_IMPORTED_MODULE_34__.ImageComponent,
        _components_modals_image_expansion_image_expansion_component__WEBPACK_IMPORTED_MODULE_35__.ImageExpansionComponent,
        _components_core_medallion_medallion_component__WEBPACK_IMPORTED_MODULE_36__.MedallionComponent,
        _components_modals_object_detection_detail_object_detection_detail_component__WEBPACK_IMPORTED_MODULE_37__.ObjectDetectionDetailComponent,
        _components_topics_images_stop_images_stop_images_component__WEBPACK_IMPORTED_MODULE_38__.StopImagesComponent,
        _components_topics_vehicles_vehicle_mission_stats_vehicle_mission_stats_component__WEBPACK_IMPORTED_MODULE_39__.VehicleMissionStatsComponent,
        _pages_vehicle_pages_vehicle_share_vehicle_share_component__WEBPACK_IMPORTED_MODULE_40__.VehicleShareComponent,
        _pages_vehicle_pages_vehicle_share_pages_vehicle_autonomy_share_vehicle_autonomy_share_component__WEBPACK_IMPORTED_MODULE_41__.VehicleAutonomyShareComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_50__.BrowserModule,
        _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutes,
        _angular_forms__WEBPACK_IMPORTED_MODULE_51__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_52__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_53__.BrowserAnimationsModule,
        ngx_json_viewer__WEBPACK_IMPORTED_MODULE_54__.NgxJsonViewerModule,
        // Material
        _angular_material_list__WEBPACK_IMPORTED_MODULE_55__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_56__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_57__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_58__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_59__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_60__.MatButtonModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_61__.MatSnackBarModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_62__.MatGridListModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_63__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_64__.MatProgressSpinnerModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_65__.MatPaginatorModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_66__.MatSlideToggleModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_67__.MatTableModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_68__.MatButtonToggleModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_69__.MatTabsModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_70__.MatExpansionModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_71__.MatDialogModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_72__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_73__.MatSelectModule,
        // 
        _modules_graphql_module__WEBPACK_IMPORTED_MODULE_28__.GraphQLModule,
        angularx_social_login__WEBPACK_IMPORTED_MODULE_43__.SocialLoginModule,
        ng_dynamic_breadcrumb__WEBPACK_IMPORTED_MODULE_74__.NgDynamicBreadcrumbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_22__.InfiniteScrollModule] }); })();


/***/ }),

/***/ 24229:
/*!******************************************************************!*\
  !*** ./src/app/components/core/medallion/medallion.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedallionComponent": () => (/* binding */ MedallionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);


function MedallionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function MedallionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.content, " ");
} }
const _c0 = ["*"];
class MedallionComponent {
    constructor() {
        this.title = "";
        this.content = "";
    }
    ngOnInit() {
    }
}
MedallionComponent.ɵfac = function MedallionComponent_Factory(t) { return new (t || MedallionComponent)(); };
MedallionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MedallionComponent, selectors: [["app-medallion"]], inputs: { title: "title", content: "content" }, ngContentSelectors: _c0, decls: 4, vars: 2, consts: [[1, "medallion"], ["class", "medallion__title", 4, "ngIf"], ["class", "medallion__content", 4, "ngIf"], [1, "medallion__title"], [1, "medallion__content"]], template: function MedallionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MedallionComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MedallionComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRhbGxpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 89990:
/*!************************************************************!*\
  !*** ./src/app/components/images/image/image.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageComponent": () => (/* binding */ ImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ 61319);
/* harmony import */ var _modals_image_expansion_image_expansion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modals/image-expansion/image-expansion.component */ 54217);
/* harmony import */ var src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/images/image.service */ 82329);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _segmentation_image_segmentation_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../segmentation-image/segmentation-image.component */ 98299);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);











function ImageComponent_mat_icon_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "image_not_supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ImageComponent_div_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "image_not_supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ImageComponent_div_1_mat_progress_bar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 8);
} }
function ImageComponent_div_1_mat_progress_bar_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 8);
} }
const _c0 = function (a0) { return { display: a0 }; };
function ImageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ImageComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ImageComponent_div_1_mat_icon_1_Template, 2, 0, "mat-icon", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function ImageComponent_div_1_Template_img_load_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.onLoad($event); })("error", function ImageComponent_div_1_Template_img_error_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.onError($event); })("mouseover", function ImageComponent_div_1_Template_img_mouseover_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.onMouseover($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ImageComponent_div_1_mat_progress_bar_3_Template, 1, 0, "mat-progress-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-segmentation-image", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function ImageComponent_div_1_Template_app_segmentation_image_load_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.onSegmentationLoad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ImageComponent_div_1_mat_progress_bar_6_Template, 1, 0, "mat-progress-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.imageLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("id", ctx_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isImageRendered);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, ctx_r1.isSegmentationImage ? "block" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("imageHeaderId", ctx_r1.headerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isImageRendered && !ctx_r1.segmentationLoaded);
} }
class ImageComponent {
    constructor(imageService, graphQLQuery, dialog) {
        this.imageService = imageService;
        this.graphQLQuery = graphQLQuery;
        this.dialog = dialog;
        this.imageUrl = "";
        this.width = "";
        this.height = "";
        this.resultId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.default)();
        this.lensId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.default)();
        this.zoomAdded = false;
        this.segmentationLoaded = false;
        this.isSegmentationImage = false;
        this.segmentationData = null;
        this.imageLoaded = false;
        this.imageCache = new Image();
        this.isImageRendered = false;
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.default)();
        this.class = "";
        this.label = "";
        this.timestamp = "";
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    subjectHandler(response) {
        switch (response.type) {
            case "pagination":
                this.pagination = response.data;
                break;
            case "geolocationUpdated":
                if (this.geolocation && this.geolocation.coordinates)
                    this.geolocation.coordinates = [];
                this.geolocation = Object.assign({}, response.data);
                break;
        }
    }
    setImageSubscription() {
        if (this.subject) {
            this.imageSubscription = this.subject.subscribe((response) => {
                this.subjectHandler(response);
            });
        }
    }
    getImageMeta() {
        if (this.imageId && !this.meta)
            this.metaDataSubscription = this.graphQLQuery
                .getImageMeta({ imageId: this.imageId })
                .subscribe((response) => {
                if (response)
                    this.meta = response;
            });
    }
    setImage(id) {
        this.imageId = id;
        this.imageUrl = id ? "/api/vehicle/images/" + id : "";
        this.imageLoaded = true;
        this.setImageSubscription();
    }
    ngOnInit() {
        if (this.imageId) {
            this.setImage(this.imageId);
        }
        else if (this.headerId) {
            this.imageByHeaderIdSubscription = this.graphQLQuery.getVehiclePreviewImageByHeaderId({
                headerId: this.headerId,
                size: 1,
                cursor: 0,
                encoding: "rgb8"
            }).subscribe((response) => {
                if (!response.length) {
                    this.setImage();
                    return;
                }
                this.setImage(response[0].id);
            });
        }
        // this.imageCache.addEventListener("load",(e)=>this.onLoad(e))
        // this.imageCache.addEventListener("error",(e)=>this.onError(e))
        // this.imageCache.src = "/api/vehicle/images/" + this.imageId
    }
    ngAfterViewInit() {
        this.getImageMeta();
    }
    ngAfterViewChecked() {
    }
    openDialog() {
        if (!this.imageLoaded)
            return;
        const dialogRef = this.dialog.open(_modals_image_expansion_image_expansion_component__WEBPACK_IMPORTED_MODULE_0__.ImageExpansionComponent, {
            data: {
                headerId: this.headerId,
                label: this.label,
                width: this.width,
                height: this.height,
                imageUrl: this.imageUrl,
                imageId: this.imageId,
                subject: this.subject,
                pagination: this.pagination,
                geolocation: this.geolocation,
                timestamp: this.timestamp,
                meta: this.meta
                // segmentation:{
                //   image:this.data
                //   , segmentation: this.segmentationData
                // }
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog closed: ${result}`);
        });
    }
    onSegmentationLoad(event) {
        this.segmentationLoaded = true;
        switch (event.state) {
            case "no segmentation":
                this.isSegmentationImage = false;
                break;
            case "loaded":
                this.isSegmentationImage = true;
                // this.segmentationData = event.data
                break;
        }
    }
    onLoad(event) {
        this.imageLoaded = true;
        this.isImageRendered = true;
        this.imageUrl = event.target.src;
        this.load.emit(this.imageId);
    }
    onError(event) {
        this.imageLoaded = false;
        this.isImageRendered = true;
        const imgSrc = event.path[0].src;
        event.path[0].src = "";
        this.error.emit(this.imageId);
        // setTimeout(()=>event.path[0].src=imgSrc, 5000)
    }
    onMouseover(event) {
    }
    ngOnDestroy() {
        var _a, _b, _c;
        (_a = this.imageSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.imageByHeaderIdSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.metaDataSubscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    }
}
ImageComponent.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_1__.ImageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_2__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
ImageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ImageComponent, selectors: [["app-image"]], inputs: { id: "id", class: "class", label: "label", headerId: "headerId", imageId: "imageId", subject: "subject", timestamp: "timestamp" }, outputs: { load: "load", error: "error" }, decls: 2, vars: 2, consts: [["aria-hidden", "false", "class", "no-image", "aria-label", "No Image", 4, "ngIf"], ["class", "images__render", 3, "click", 4, "ngIf"], ["aria-hidden", "false", "aria-label", "No Image", 1, "no-image"], [1, "images__render", 3, "click"], [3, "src", "id", "load", "error", "mouseover"], ["mode", "indeterminate", 4, "ngIf"], [1, "segmentation", 3, "ngStyle"], [3, "imageHeaderId", "load"], ["mode", "indeterminate"]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ImageComponent_mat_icon_0_Template, 2, 0, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ImageComponent_div_1_Template, 7, 11, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.imageLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.imageUrl && ctx.imageLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _segmentation_image_segmentation_image_component__WEBPACK_IMPORTED_MODULE_3__.SegmentationImageComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBar], styles: ["img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.images__render[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.images__render[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .images__render[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin: auto;\n}\n\n.images__render[_ngcontent-%COMP%]   .segmentation[_ngcontent-%COMP%] {\n  margin: 0;\n  z-index: 1;\n  width: 100%;\n  margin-top: calc(-50% + -7px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUNDO0VBQ0csZUFBQTtBQUVKOztBQUFJOztFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVSOztBQUdJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFEUiIsImZpbGUiOiJpbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgd2lkdGg6MTAwJTtcbiB9XG4gLmltYWdlc19fcmVuZGVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5pbWFnZSxcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW46YXV0bztcbiAgICAgICAgLy8gXG5cbiAgICB9XG5cbiAgICAuc2VnbWVudGF0aW9ue1xuICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGMoLTUwJSArIC03cHgpO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 29045:
/*!********************************************************************!*\
  !*** ./src/app/components/images/rgb-image/rgb-image.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgbImageComponent": () => (/* binding */ RgbImageComponent)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ 61319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/images/image.service */ 82329);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);




const _c0 = function (a0, a1) { return { maxWidth: a0, maxHeight: a1 }; };
class RgbImageComponent {
    constructor(imageService) {
        this.imageService = imageService;
        this.regexArray = /^(\[)(.*)(\])$/;
        this.imageUrl = "";
        this.width = "";
        this.height = "";
        this.resultId = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.default)();
        this.lensId = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.default)();
        this.zoomAdded = false;
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.default)();
        this.class = "";
    }
    movelens(e) {
        this.result.style.display = "block";
        this.lens.style.display = "block";
        let pos, x, y;
        /* Prevent any other actions that may occur when moving over the image */
        e.preventDefault();
        /* Get the cursor's x and y positions: */
        pos = this.getCursorPos(e);
        /* Calculate the position of the this.lens: */
        x = pos.x - (this.lens.offsetWidth / 2);
        y = pos.y - (this.lens.offsetHeight / 2);
        /* Prevent the this.lens from being positioned outside the image: */
        if (x > this.img.width - this.lens.offsetWidth) {
            x = this.img.width - this.lens.offsetWidth;
        }
        if (x < 0) {
            x = 0;
        }
        if (y > this.img.height - this.lens.offsetHeight) {
            y = this.img.height - this.lens.offsetHeight;
        }
        if (y < 0) {
            y = 0;
        }
        /* Set the position of the this.lens: */
        this.lens.style.left = x + "px";
        this.lens.style.top = y + "px";
        /* Display what the this.lens "sees": */
        if (window.visualViewport.width <= (this.result.offsetWidth + x + 150))
            this.result.style.left = (x - 300) + "px";
        else
            this.result.style.left = (x + 40) + "px";
        this.result.style.top = (y + 40) + "px";
        this.result.style.backgroundPosition = "-" + (x * this.cx) + "px -" + (y * this.cy) + "px";
    }
    getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /* Get the x and y positions of the image: */
        a = this.img.getBoundingClientRect();
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
    hideZoom() {
        this.result.style.display = "none";
        this.lens.style.display = "none";
    }
    setupZoom() {
        this.result = document.getElementById(this.resultId);
        /* Create this.lens: */
        this.lens = document.getElementById(this.lensId);
        /* Insert this.lens: */
        this.img.parentElement.insertBefore(this.lens, this.img);
        /* Calculate the ratio between this.result DIV and this.lens: */
        this.cx = +(window.getComputedStyle(this.result).width.replace("px", "")) / +(window.getComputedStyle(this.lens).width.replace("px", ""));
        this.cy = +(window.getComputedStyle(this.result).height.replace("px", "")) / +(window.getComputedStyle(this.lens).height.replace("px", ""));
        /* Set background properties for the this.result DIV */
        this.result.style.backgroundImage = "url('" + this.img.src + "')";
        this.result.style.backgroundSize = (this.img.width * this.cx) + "px " + (this.img.height * this.cy) + "px";
        /* Execute a function when someone moves the cursor over the image, or the this.lens: */
        this.lens.addEventListener("mousemove", this.movelens.bind(this));
        this.img.addEventListener("mousemove", this.movelens.bind(this));
        this.lens.addEventListener("mouseleave", this.hideZoom.bind(this));
        this.img.addEventListener("mouseleave", this.hideZoom.bind(this));
        /* And also for touch screens: */
        this.lens.addEventListener("touchmove", this.movelens.bind(this));
        this.img.addEventListener("touchmove", this.movelens.bind(this));
    }
    renderImageZoom() {
        if (!this.zoomAdded) {
            this.img = document.getElementById(this.id);
            this.img.removeEventListener("load", this.setupZoom.bind(this));
            this.img.addEventListener("load", this.setupZoom.bind(this));
            this.zoomAdded = true;
        }
    }
    ngOnInit() {
        let parsedData;
        try {
            switch (typeof this.data) {
                case "string":
                    parsedData = Object.assign({}, JSON.parse(this.data));
                    break;
                case "object":
                    parsedData = Object.assign({}, this.data);
                    break;
                default:
                    parsedData = {};
                    break;
            }
            this.width = parsedData.width + "px";
            this.height = parsedData.height + "px";
            this.imageUrl = this.imageService.getDataURL(parsedData);
        }
        catch (e) {
            console.log(e.message);
        }
    }
    ngAfterViewInit() {
    }
    ngAfterViewChecked() {
        if (document.getElementById(this.id))
            this.renderImageZoom();
    }
}
RgbImageComponent.ɵfac = function RgbImageComponent_Factory(t) { return new (t || RgbImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_0__.ImageService)); };
RgbImageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RgbImageComponent, selectors: [["app-rgb-image"]], inputs: { id: "id", class: "class", data: "data" }, decls: 4, vars: 10, consts: [[1, "img-zoom-container"], [3, "src", "id", "ngStyle"], [1, "img-zoom-result", 3, "id"], [1, "img-zoom-lens", 3, "id"]], template: function RgbImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("id", ctx.id)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c0, ctx.width, ctx.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.resultId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.lensId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle], styles: [".img-zoom-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.img-zoom-lens[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  \n  width: 40px;\n  height: 40px;\n  display: block;\n}\n\n.img-zoom-result[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  \n  width: 200px;\n  height: 200px;\n  display: none;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJnYi1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRyxXQUFBO0FBQ0w7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFFSiIsImZpbGUiOiJyZ2ItaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXpvb20tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIGltZyB7XG4gICAgIHdpZHRoOjEwMCU7XG4gIH1cbiAgLmltZy16b29tLWxlbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgIC8qc2V0IHRoZSBzaXplIG9mIHRoZSBsZW5zOiovXG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gIH1cbiAgXG4gIC5pbWctem9vbS1yZXN1bHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgIC8qc2V0IHRoZSBzaXplIG9mIHRoZSByZXN1bHQgZGl2OiovXG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgZGlzcGxheTpub25lO1xuICAgIHotaW5kZXg6IDE7XG4gIH0iXX0= */"] });


/***/ }),

/***/ 98299:
/*!**************************************************************************************!*\
  !*** ./src/app/components/images/segmentation-image/segmentation-image.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentationImageComponent": () => (/* binding */ SegmentationImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ 61319);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/images/image.service */ 82329);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);







function SegmentationImageComponent_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.imageData, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("id", ctx_r3.imgId);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function SegmentationImageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SegmentationImageComponent_div_0_img_1_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, "url(" + ctx_r0.imageData + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.imageData);
} }
function SegmentationImageComponent_ng_template_1_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span");
} }
function SegmentationImageComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 7);
} }
function SegmentationImageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SegmentationImageComponent_ng_template_1_span_0_Template, 1, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SegmentationImageComponent_ng_template_1_ng_template_1_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.noImage)("ngIfElse", _r5);
} }
class SegmentationImageComponent {
    constructor(gqlQueryService, imageService) {
        this.gqlQueryService = gqlQueryService;
        this.imageService = imageService;
        this.querySubscription = null;
        this.imageData = "";
        this.imageUrl = "";
        this.noImage = false;
        this.imgId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();
        this.image = { width: "0px", height: "0px" };
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    getSegmentationImage(argsImageHeaderId) {
        var _a;
        const imageHeaderId = argsImageHeaderId || this.imageHeaderId;
        if (!imageHeaderId) {
            this.load.emit({ state: "unloaded" });
            return;
        }
        (_a = this.querySubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.querySubscription = this.gqlQueryService
            .getSegmentationMapByHeaderId({ imageHeaderId })
            .subscribe((response) => {
            if (!response) {
                this.load.emit({ state: "no segmentation" });
                return;
            }
            // const {segmentation} = response
            this.imageData = `/api/vehicle/images/${response.imageId}?segmentation=true`;
            this.load.emit({ state: "loaded", data: response });
        });
    }
    ngOnInit() {
        this.getSegmentationImage();
    }
    ngOnChanges(changes) {
        if ((changes.imageHeaderId.previousValue !== changes.imageHeaderId.currentValue)) {
            this.getSegmentationImage(changes.imageHeaderId.currentValue);
        }
    }
}
SegmentationImageComponent.ɵfac = function SegmentationImageComponent_Factory(t) { return new (t || SegmentationImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_0__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_1__.ImageService)); };
SegmentationImageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SegmentationImageComponent, selectors: [["app-segmentation-image"]], inputs: { imageHeaderId: "imageHeaderId", data: "data" }, outputs: { load: "load" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [["class", "segmentation-image ", 3, "ngStyle", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "segmentation-image", 3, "ngStyle"], [3, "src", "id", 4, "ngIf"], [3, "src", "id"], [4, "ngIf", "ngIfElse"], ["loader", ""], ["mode", "indeterminate"]], template: function SegmentationImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SegmentationImageComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SegmentationImageComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imageData)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar], styles: [".segmentation-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-size: 300% 100%;\n  background-repeat: no-repeat;\n  position: relative;\n  top: 0;\n  left: 0;\n  opacity: 50%;\n}\n.segmentation-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZ21lbnRhdGlvbi1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDUiIsImZpbGUiOiJzZWdtZW50YXRpb24taW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VnbWVudGF0aW9uLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDEwMCU7ICAgIFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuICAgIG9wYWNpdHk6IDUwJTtcblxuICAgIGltZyB7XG4gICAgICAgIHZpc2liaWxpdHk6aGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgfVxuXG59Il19 */"] });


/***/ }),

/***/ 39520:
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 49976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_notifications_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/notifications/alert.service */ 94481);
/* harmony import */ var _services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation/menu.service */ 83536);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var src_app_services_layout_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/layout/scroll.service */ 9312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-infinite-scroll */ 39210);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation/navigation.component */ 60006);










const _c0 = function (a0) { return { "right_nav": a0 }; };
class LayoutComponent {
    constructor(alertService, menuService, _snackBar, scollService) {
        this.alertService = alertService;
        this.menuService = menuService;
        this._snackBar = _snackBar;
        this.scollService = scollService;
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faBars;
        this.showRightNav = false;
        this.alertSubscription = null;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
    }
    ngOnInit() {
        this.menuService.menu.subscribe((data) => {
            this.showRightNav = data ? true : false;
        });
        // this.alertSubscription = this.alertService.alerts.subscribe(data=>{
        //   this._snackBar.open(data.alertMessage , 'Dismiss', {
        //      duration: 1000,
        //     horizontalPosition: this.horizontalPosition,
        //     verticalPosition: this.verticalPosition,
        //   });
        // })
    }
    ngOnDestroy() {
        var _a;
        (_a = this.alertSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    toggleSideNav() {
        this.showRightNav = !this.showRightNav;
    }
    onScroll() {
        this.scollService.contentScroll.next(true);
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_notifications_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_layout_scroll_service__WEBPACK_IMPORTED_MODULE_2__.ScrollService)); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 4, vars: 5, consts: [[1, "container__content", 3, "ngClass"], ["infiniteScroll", "", 1, "container__content-main", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scrolled", function LayoutComponent_Template_div_scrolled_1_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx.showRightNav));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__.NavigationComponent], styles: [".container__content[_ngcontent-%COMP%] {\n  top: 50px;\n  position: absolute;\n  width: 100%;\n}\n.container__content[_ngcontent-%COMP%]   .container__content-main[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  grid-column: 2;\n  padding-bottom: 20px;\n}\n@media screen and (min-width: 1100px) {\n  .container__content[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 200px auto;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 0px;\n    top: 50px;\n    position: absolute;\n    width: 100%;\n  }\n}\n@media screen and (min-width: 1100px) {\n  .container__content.right_nav[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 200px auto 200px;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 0px;\n    top: 50px;\n    position: absolute;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNSO0FBSUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxpQ0FBQTtJQUNBLDRDQUFBO0lBQ0EscUJBQUE7SUFDQSxhQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQUROO0FBQ0Y7QUFJQTtFQUVRO0lBQ0ksYUFBQTtJQUNBLHVDQUFBO0lBQ0EsNENBQUE7SUFDQSxxQkFBQTtJQUNBLGFBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VBSFY7QUFDRiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyX19jb250ZW50e1xuICAgIHRvcDogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7ICAgIFxuXG4gICAgLmNvbnRhaW5lcl9fY29udGVudC1tYWlue1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbToyMHB4O1xuICAgIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjExMDBweCkge1xuICAgIC5jb250YWluZXJfX2NvbnRlbnR7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlLW5hdiBtYWluLWNvbnRlbnRcIjtcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6ZGVuc2U7XG4gICAgICAgIGdyaWQtZ2FwOiAwcHg7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTEwMHB4KSB7XG4gICAgLmNvbnRhaW5lcl9fY29udGVudHtcbiAgICAgICAgJi5yaWdodF9uYXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCBhdXRvIDIwMHB4O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlLW5hdiBtYWluLWNvbnRlbnRcIjtcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OmRlbnNlO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDBweDtcbiAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 54217:
/*!********************************************************************************!*\
  !*** ./src/app/components/modals/image-expansion/image-expansion.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageExpansionComponent": () => (/* binding */ ImageExpansionComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ 61319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _images_segmentation_image_segmentation_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/segmentation-image/segmentation-image.component */ 98299);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-json-viewer */ 41103);
/* harmony import */ var _topics_geolocation_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../topics/geolocation/starfire/starfire.component */ 51721);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 99692);















function ImageExpansionComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" : ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, ctx_r0.data.timestamp, "medium", "locale"), " ");
} }
function ImageExpansionComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 19);
} }
const _c0 = function (a0) { return { segmented: a0 }; };
function ImageExpansionComponent_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 20);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r3.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.data.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("id", ctx_r3.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r3.loadedSegmentations && ctx_r3.segmentationToggle.checked));
} }
function ImageExpansionComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 19);
} }
function ImageExpansionComponent_mat_expansion_panel_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-expansion-panel", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Meta Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ngx-json-viewer", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("expanded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("json", ctx_r6.meta)("expanded", false);
} }
function ImageExpansionComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 19);
} }
function ImageExpansionComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-expansion-panel", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Geolocation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-starfire", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("expanded", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showTractor", true)("zoom", 16)("coordinates", ctx_r9.data.geolocation.coordinates)("vehicleId", ctx_r9.data.geolocation.vehicleId);
} }
function ImageExpansionComponent_mat_paginator_23_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-paginator", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function ImageExpansionComponent_mat_paginator_23_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.onPaginate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageIndex", ctx_r10.data.pagination.page)("length", ctx_r10.data.pagination.pagesLength)("pageSize", ctx_r10.data.pagination.pageSize)("pageSizeOptions", ctx_r10.data.pagination.pageSizeOptions);
} }
const _c1 = function (a0) { return { display: a0 }; };
class ImageExpansionComponent {
    constructor(data, graphQLQuery) {
        this.data = data;
        this.graphQLQuery = graphQLQuery;
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_4__.default)();
        this.class = "";
        this.metaDataSubscription = null;
        this.loadedSegmentations = null;
        this.segmentationTopic = "";
        this.segmentationQuery = null;
        this.segmentationTopic$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(this.segmentationTopic);
        this.segmentationToggle = {
            color: "primary",
            checked: true,
            disabled: this.loadedSegmentations !== null && !this.loadedSegmentations
        };
        this.pageSize = 1;
        this.pagesLength = 1;
        this.pageSizeOptions = [1];
    }
    subjectHanlder(response) {
        switch (response.type) {
            case "imageUpdated":
                this.data.imageUrl = "/api/vehicle/images/" + response.data.image;
                this.data.imageId = response.data.image;
                this.data.label = response.data.label;
                this.data.headerId = response.data.headerId;
                this.getMetaData();
                break;
            case "geolocationUpdated":
                // if(this.data.geolocation && this.data.geolocation.coordinates)
                //   this.data.geolocation.coordinates = []
                this.data.geolocation = Object.assign({}, response.data);
                break;
            case "pagination":
                this.data.pagination = response.data;
                break;
        }
    }
    getMetaData() {
        var _a;
        if (this.data.meta)
            this.meta = this.data.meta;
        else {
            (_a = this.metaDataSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this.metaDataSubscription = this.graphQLQuery
                .getImageMeta({ imageId: this.data.imageId })
                .subscribe((response) => {
                if (response)
                    this.meta = response;
            });
        }
    }
    ngOnInit() {
        if (this.data.subject) {
            this.segmentationQuery = this.data.subject
                .subscribe(this.subjectHanlder.bind(this));
            this.data.subject.next({ type: "getPagination", data: null });
            this.data.subject.next({ type: "getGeolocation", data: null });
        }
        this.getMetaData();
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.segmentationQuery) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.metaDataSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
    toggleSegmentation(event) {
        this.segmentationToggle.checked = event.checked;
    }
    loadSegmentation() {
        return typeof this.loadedSegmentations === 'boolean';
    }
    onSegmentationLoad(event) {
        switch (event.state) {
            case "loaded":
                this.loadedSegmentations = true;
                this.segmentationToggle.checked = true;
                break;
            case "no segmentation":
            case "unloaded":
            default:
                this.loadedSegmentations = false;
                this.segmentationToggle.checked = false;
                break;
        }
    }
    onPaginate(event) {
        console.log(event);
        if (this.data.page !== event.pageIndex || event.pageSize !== this.data.pageSize) {
            this.data.page = event.pageIndex;
            this.data.imageUrl = "";
            this.data.pageSize = event.pageSize;
            if (this.data.subject)
                this.data.subject.next({ type: "updateImage", data: {
                        page: this.data.page,
                        pageSize: this.data.pageSize
                    } });
            console.log(event);
        }
    }
}
ImageExpansionComponent.ɵfac = function ImageExpansionComponent_Factory(t) { return new (t || ImageExpansionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_0__.GqlQueryService)); };
ImageExpansionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ImageExpansionComponent, selectors: [["app-image-expansion"]], decls: 26, vars: 15, consts: [["mat-dialog-title", ""], [4, "ngIf"], [1, "grid", "gap", "images", "col-2"], [1, "grid__cell", "center-cell-content", "grid__cell__full-width"], [1, "segmentation-toggle", 3, "color", "checked", "disabled", "change"], ["loader", ""], [1, "grid__cell", "center-cell-content"], [1, "segmentation", 3, "ngStyle"], [3, "imageHeaderId", "load"], [3, "src", "id", "class", "ngClass", 4, "ngIf", "ngIfElse"], ["image_loader", ""], [1, "gric__cell", "center-cell-content"], [1, "meta-section"], ["class", "meta", 3, "expanded", 4, "ngIf", "ngIfElse"], ["meta_loader", ""], ["class", "map-wrapper", 4, "ngIf"], ["align", "end", 1, "modal-footer"], [3, "pageIndex", "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], ["mat-button", "", "mat-dialog-close", ""], ["mode", "indeterminate"], [3, "src", "id", "ngClass"], [1, "meta", 3, "expanded"], [3, "json", "expanded"], [1, "map-wrapper"], [3, "expanded"], [1, "map"], [3, "showTractor", "zoom", "coordinates", "vehicleId"], [3, "pageIndex", "length", "pageSize", "pageSizeOptions", "page"]], template: function ImageExpansionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ImageExpansionComponent_span_2_Template, 3, 5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-slide-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ImageExpansionComponent_Template_mat_slide_toggle_change_6_listener($event) { return ctx.toggleSegmentation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Segmentation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ImageExpansionComponent_ng_template_8_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "app-segmentation-image", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("load", function ImageExpansionComponent_Template_app_segmentation_image_load_12_listener($event) { return ctx.onSegmentationLoad($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ImageExpansionComponent_img_13_Template, 1, 7, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ImageExpansionComponent_ng_template_14_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ImageExpansionComponent_mat_expansion_panel_18_Template, 5, 3, "mat-expansion-panel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ImageExpansionComponent_ng_template_19_Template, 1, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ImageExpansionComponent_div_21_Template, 7, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-dialog-actions", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ImageExpansionComponent_mat_paginator_23_Template, 1, 4, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.timestamp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.segmentationToggle.color)("checked", ctx.segmentationToggle.checked)("disabled", !ctx.loadedSegmentations);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c1, ctx.loadedSegmentations && ctx.segmentationToggle.checked ? "inline-block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("imageHeaderId", ctx.data.headerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.imageUrl)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.meta)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.geolocation && ctx.data.geolocation.coordinates && ctx.data.geolocation.coordinates.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.pagination);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggle, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _images_segmentation_image_segmentation_image_component__WEBPACK_IMPORTED_MODULE_1__.SegmentationImageComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelTitle, ngx_json_viewer__WEBPACK_IMPORTED_MODULE_12__.NgxJsonViewerComponent, _topics_geolocation_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_2__.StarfireComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nimg.segmented[_ngcontent-%COMP%] {\n  margin-top: calc(-50% + -5px);\n}\n.segmentation[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.meta[_ngcontent-%COMP%] {\n  overflow: scroll;\n  width: 100%;\n  text-align: left;\n  word-wrap: break-word;\n  max-width: 500px;\n  max-height: 250px;\n  margin-bottom: 10px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.map-wrapper[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin-bottom: 10px;\n}\n.map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLWV4cGFuc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjtBQUFJO0VBQ0ksNkJBQUE7QUFFUjtBQU9DO0VBQ0csV0FBQTtBQUpKO0FBV0M7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBUkw7QUFXQztFQUNJLGlCQUFBO0FBUkw7QUFXQztFQUNHLGdCQUFBO0VBQ0EsbUJBQUE7QUFSSjtBQVVDO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFQTCIsImZpbGUiOiJpbWFnZS1leHBhbnNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgJi5zZWdtZW50ZWR7XG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGMoLTUwJSArIC01cHgpO1xuXG4gICAgfVxuXG4gICAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3MzBweCkge1xuICAgIC8vICAgICB3aWR0aDo1MHZ3O1xuICAgIC8vIH1cbiB9XG5cbiAuc2VnbWVudGF0aW9uIHtcbiAgICB3aWR0aDoxMDAlO1xuXG4gICAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3MzBweCkge1xuICAgIC8vICAgICB3aWR0aDo1MHZ3O1xuICAgIC8vIH1cbiB9XG5cbiAubWV0YSB7XG4gICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgIHdpZHRoOjEwMCU7XG4gICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiB9XG5cbiAubW9kYWwtZm9vdGVye1xuICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiB9XG5cbiAubWFwLXdyYXBwZXJ7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuIH1cbiAubWFwIHtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGhlaWdodDogMjUwcHg7XG4gfVxuIl19 */"] });


/***/ }),

/***/ 56675:
/*!************************************************************************************************!*\
  !*** ./src/app/components/modals/object-detection-detail/object-detection-detail.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectDetectionDetailComponent": () => (/* binding */ ObjectDetectionDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-json-viewer */ 41103);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _images_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/image/image.component */ 89990);
/* harmony import */ var _topics_geolocation_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../topics/geolocation/starfire/starfire.component */ 51721);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);











function ObjectDetectionDetailComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-starfire", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showTractor", true)("zoom", 16)("coordinates", ctx_r3.coordinates)("vehicleId", ctx_r3.vehicleId);
} }
function ObjectDetectionDetailComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-image", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ObjectDetectionDetailComponent_div_8_div_3_Template, 2, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("imageId", ctx_r0.image.id)("label", ctx_r0.data.topic.name)("headerId", ctx_r0.data.message.header.headerid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.vehicleId && ctx_r0.coordinates.length);
} }
function ObjectDetectionDetailComponent_ng_template_9_mat_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 20);
} }
function ObjectDetectionDetailComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "image_not_supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ObjectDetectionDetailComponent_ng_template_9_mat_progress_bar_2_Template, 1, 0, "mat-progress-bar", 19);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.isImageLoaded);
} }
class ObjectDetectionDetailComponent {
    constructor(id, data, graphQLQuery) {
        this.id = id;
        this.data = data;
        this.graphQLQuery = graphQLQuery;
        this.imageSubscription = null;
        this.image = null;
        this.isImageLoaded = false;
        this.coordinates = [];
        this.vehicleId = null;
        this.json = {};
        const fieldOrigin = data.message.centroidLocation.fieldOrigin;
        const xyzCamera = data.message.centroidLocation.xyzCamera;
        this.json = { fieldOrigin, xyzCamera };
        this.vehicleId = data.vehicleId;
        this.coordinates = [
            [
                parseFloat(fieldOrigin.longitudeDeg),
                parseFloat(fieldOrigin.latitudeDeg)
            ]
        ];
    }
    ngOnInit() {
        this.imageSubscription = this.graphQLQuery.getPreviewImageByCameraMessageHeaderId({ headerId: parseInt(this.data.message.header.headerid) })
            .subscribe((response) => {
            this.isImageLoaded = true;
            if (!response)
                return;
            this.image = response;
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.imageSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
ObjectDetectionDetailComponent.ɵfac = function ObjectDetectionDetailComponent_Factory(t) { return new (t || ObjectDetectionDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_0__.GqlQueryService)); };
ObjectDetectionDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ObjectDetectionDetailComponent, selectors: [["app-object-detection-detail"]], decls: 19, vars: 5, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [1, "grid", "gap", "col-2"], [1, "grid__cell", "sticky"], [1, "grid__cell--label"], [1, "grid__cell--content"], [4, "ngIf", "ngIfElse"], ["loader", ""], [1, "grid__cell"], [1, "grid__cell--label", "sticky"], [1, "grid__cell--content", "json"], [3, "json", "expanded"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], [3, "imageId", "label", "headerId"], ["class", "map", 4, "ngIf"], [1, "map"], [3, "showTractor", "zoom", "coordinates", "vehicleId"], ["aria-hidden", "false", "aria-label", "No Image", 1, "no-image"], ["mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate"]], template: function ObjectDetectionDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Image & Geolocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ObjectDetectionDetailComponent_div_8_Template, 4, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ObjectDetectionDetailComponent_ng_template_9_Template, 3, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Raw Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "ngx-json-viewer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-dialog-actions", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.topic.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.image)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("json", ctx.data)("expanded", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_json_viewer__WEBPACK_IMPORTED_MODULE_6__.NgxJsonViewerComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _images_image_image_component__WEBPACK_IMPORTED_MODULE_1__.ImageComponent, _topics_geolocation_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_2__.StarfireComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBar], styles: [".json[_ngcontent-%COMP%] {\n  max-height: 600px;\n  overflow-y: scroll;\n}\n\n.no-image[_ngcontent-%COMP%] {\n  opacity: 50%;\n  height: 200px;\n  width: 200px;\n  font-size: 5rem;\n}\n\n.map[_ngcontent-%COMP%] {\n  height: 256px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9iamVjdC1kZXRlY3Rpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6Im9iamVjdC1kZXRlY3Rpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpzb257XG4gICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubm8taW1hZ2Uge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBmb250LXNpemU6IDVyZW07XG59XG5cbi5tYXAge1xuICAgIGhlaWdodDogMjU2cHg7XG59Il19 */"] });


/***/ }),

/***/ 29082:
/*!********************************************************************************************!*\
  !*** ./src/app/components/modals/vehicle-status-detail/vehicle-status-detail.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleStatusDetailComponent": () => (/* binding */ VehicleStatusDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 76627);









function VehicleStatusDetailComponent_mat_expansion_panel_33_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "priority_high");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { active: a0 }; };
function VehicleStatusDetailComponent_mat_expansion_panel_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VehicleStatusDetailComponent_mat_expansion_panel_33_mat_icon_3_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "isActive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "isRecoverable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reason_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, reason_r1.isActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reason_r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", reason_r1.reason.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reason_r1.isActive, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reason_r1.isRecoverable, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reason_r1.description, " ");
} }
class VehicleStatusDetailComponent {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
    ngOnInit() {
    }
}
VehicleStatusDetailComponent.ɵfac = function VehicleStatusDetailComponent_Factory(t) { return new (t || VehicleStatusDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
VehicleStatusDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleStatusDetailComponent, selectors: [["app-vehicle-status-detail"]], decls: 37, vars: 8, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [1, "grid", "gap", "col-2"], [1, "grid__cell"], [1, "grid__cell--label"], [1, "grid__cell--content"], ["mat-line", ""], [1, "reasons"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], [3, "ngClass"], [4, "ngIf"]], template: function VehicleStatusDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Node ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Topic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Timestamp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Reasons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-accordion", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, VehicleStatusDetailComponent_mat_expansion_panel_33_Template, 24, 8, "mat-expansion-panel", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-dialog-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.node, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.topic, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 5, ctx.data.timestamp || ctx.data.readingat, "medium"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.vehicleStatusDetails);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatLine, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatAccordion, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanelTitle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: [".reasons[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: var(--error);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtc3RhdHVzLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDhCQUFBO0FBQVIiLCJmaWxlIjoidmVoaWNsZS1zdGF0dXMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlYXNvbnN7XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVycm9yKTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 60006:
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ 37055);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 77746);







const _c0 = function (a0, a1) { return { show: a0, hide: a1 }; };
const _c1 = function () { return ["/"]; };
const _c2 = function () { return { exact: false }; };
class NavigationComponent {
    constructor(socialAuthService, router) {
        this.socialAuthService = socialAuthService;
        this.router = router;
        this.showLeftNav = null;
    }
    ngOnInit() {
    }
    toggleSideNav() {
        this.showLeftNav = !this.showLeftNav;
    }
    ngOnDestroy() {
        this.showLeftNav = null;
    }
    logOut() {
        this.socialAuthService.signOut();
        this.router.navigate(["/login"]);
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__.SocialAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 15, vars: 13, consts: [[1, "nav__side-nav", 3, "ngClass"], [1, "nav__side-nav--toggle-btn", 3, "ngClass", "click"], ["matSuffix", "", "aria-label", "toggle mobile menu view"], [3, "click"], ["routerLinkActive", "active", 1, "nav__side-nav--link", 3, "routerLink", "routerLinkActiveOptions"], [1, "example-tab-icon", "nav__side-nav--link-icon"], [1, "nav__side-nav--link-label"], [1, "nav__side-nav--profile"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_1_listener() { return ctx.toggleSideNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_mat_list_click_4_listener() { return ctx.toggleSideNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "agriculture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Vehicles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_12_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.showLeftNav === true, ctx.showLeftNav === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx.showLeftNav === true, ctx.showLeftNav === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx.showLeftNav ? "menu" : "menu_open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatList, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListItem], styles: [".nav__side-nav[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: calc(100vh + 50px);\n  top: 0px;\n  border-right: 1px solid var(--lightgray);\n  overflow: hidden;\n  position: fixed;\n  left: -200px;\n  background-color: var(--white);\n  z-index: 2;\n  grid-column: 1;\n}\n.nav__side-nav.show[_ngcontent-%COMP%] {\n  left: 0px;\n  animation: show-left-navigation 500ms 1;\n}\n.nav__side-nav.hide[_ngcontent-%COMP%] {\n  left: -200px;\n  animation: hide-left-navigation 500ms 1;\n}\n.nav__side-nav[_ngcontent-%COMP%]   .nav__side-nav--profile[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n}\n.nav__side-nav[_ngcontent-%COMP%]   .nav__side-nav--profile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nav__side-nav[_ngcontent-%COMP%]   .nav__side-nav--toggle-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 4px;\n  left: 10px;\n  z-index: 1;\n  background: var(--white);\n  border: none;\n  font-size: 2rem;\n  font-weight: lighter;\n  cursor: pointer;\n}\n.nav__side-nav[_ngcontent-%COMP%]   .nav__side-nav--toggle-btn.show[_ngcontent-%COMP%] {\n  left: 200px;\n  animation: move-right-main-hamburger 500ms 1;\n}\n.nav__side-nav[_ngcontent-%COMP%]   .nav__side-nav--toggle-btn.hide[_ngcontent-%COMP%] {\n  left: 10px;\n  animation: move-left-main-hamburger 500ms 1;\n}\n.nav__side-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  border-bottom: 1px solid var(--lightgray);\n}\n.nav__side-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-of-type {\n  border: none;\n}\n.nav__side-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .nav__side-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--blueriver);\n}\n.nav__side-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%], .nav__side-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .mat-list-item[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.nav__side-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .nav__side-nav--link-label[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nav__side-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .nav__side-nav--link-icon[_ngcontent-%COMP%] {\n  width: 50px;\n}\n@keyframes show-left-navigation {\n  0% {\n    left: -200px;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes hide-left-navigation {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -200;\n  }\n}\n@keyframes move-right-main-hamburger {\n  0% {\n    left: 10px;\n  }\n  100% {\n    left: 200px;\n  }\n}\n@keyframes move-left-main-hamburger {\n  0% {\n    left: 200px;\n  }\n  100% {\n    left: 10px;\n  }\n}\n@media screen and (min-width: 1100px) {\n  .nav__side-nav[_ngcontent-%COMP%], .nav__side-nav.hide[_ngcontent-%COMP%], .nav__side-nav.show[_ngcontent-%COMP%] {\n    display: block;\n    top: 50px;\n    animation: none;\n    background: transparent;\n    z-index: 0;\n    height: calc(100vh - 50px);\n    left: 0 !important;\n  }\n  .nav__side-nav[_ngcontent-%COMP%]   .nav__side-nav--toggle-btn[_ngcontent-%COMP%], .nav__side-nav.hide[_ngcontent-%COMP%]   .nav__side-nav--toggle-btn[_ngcontent-%COMP%], .nav__side-nav.show[_ngcontent-%COMP%]   .nav__side-nav--toggle-btn[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDSSxTQUFBO0VBQ0EsdUNBQUE7QUFDUjtBQUNJO0VBQ0ksWUFBQTtFQUNBLHVDQUFBO0FBQ1I7QUFFSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQVI7QUFFUTtFQUNJLGVBQUE7QUFBWjtBQUtJO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFIUjtBQUtRO0VBQ0ksV0FBQTtFQUNBLDRDQUFBO0FBSFo7QUFNUTtFQUNJLFVBQUE7RUFDQSwyQ0FBQTtBQUpaO0FBU0k7RUFDSSxjQUFBO0VBQ0EseUNBQUE7QUFQUjtBQVFRO0VBQ0ksWUFBQTtBQU5aO0FBUVE7RUFFSSxrQ0FBQTtBQVBaO0FBUVk7RUFDSSxtQkFBQTtBQU5oQjtBQVVRO0VBQ0ksV0FBQTtBQVJaO0FBVVE7RUFDSSxXQUFBO0FBUlo7QUFlSTtFQUNJO0lBQ0EsWUFBQTtFQWJOO0VBZU07SUFDQSxPQUFBO0VBYk47QUFDRjtBQWVJO0VBQ0k7SUFDQSxPQUFBO0VBYk47RUFlTTtJQUNBLFVBQUE7RUFiTjtBQUNGO0FBZ0JJO0VBQ0k7SUFDQSxVQUFBO0VBZE47RUFnQk07SUFDQSxXQUFBO0VBZE47QUFDRjtBQWdCSTtFQUNJO0lBQ0EsV0FBQTtFQWROO0VBZ0JNO0lBQ0EsVUFBQTtFQWROO0FBQ0Y7QUFtQkE7RUFFSTs7O0lBR0ksY0FBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxrQkFBQTtFQWpCTjtFQW1CTTs7O0lBQ0ksd0JBQUE7RUFmVjtBQUNGIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2X19zaWRlLW5hdntcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoICsgNTBweCk7XG4gICAgdG9wOiAwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tbGlnaHRncmF5KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0Oi0yMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgei1pbmRleDogMjtcbiAgICBncmlkLWNvbHVtbjogMTtcblxuICAgICYuc2hvd3tcbiAgICAgICAgbGVmdDowcHg7XG4gICAgICAgIGFuaW1hdGlvbjogc2hvdy1sZWZ0LW5hdmlnYXRpb24gNTAwbXMgMTtcbiAgICB9XG4gICAgJi5oaWRle1xuICAgICAgICBsZWZ0Oi0yMDBweDtcbiAgICAgICAgYW5pbWF0aW9uOiBoaWRlLWxlZnQtbmF2aWdhdGlvbiA1MDBtcyAxO1xuICAgIH1cblxuICAgIC5uYXZfX3NpZGUtbmF2LS1wcm9maWxle1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMjBweDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLm5hdl9fc2lkZS1uYXYtLXRvZ2dsZS1idG57XG4gICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICB0b3A6NHB4O1xuICAgICAgICBsZWZ0OjEwcHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJi5zaG93e1xuICAgICAgICAgICAgbGVmdDoyMDBweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodC1tYWluLWhhbWJ1cmdlciA1MDBtcyAxO1xuXG4gICAgICAgIH1cbiAgICAgICAgJi5oaWRle1xuICAgICAgICAgICAgbGVmdDoxMHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBtb3ZlLWxlZnQtbWFpbi1oYW1idXJnZXIgNTAwbXMgMTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYSB7IFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRncmF5KTtcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlcml2ZXIpO1xuICAgICAgICAgICAgLm1hdC1saXN0LWl0ZW17XG4gICAgICAgICAgICAgICAgY29sb3I6dmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm5hdl9fc2lkZS1uYXYtLWxpbmstbGFiZWx7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZfX3NpZGUtbmF2LS1saW5rLWljb257XG4gICAgICAgICAgICB3aWR0aDo1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgQGtleWZyYW1lcyBzaG93LWxlZnQtbmF2aWdhdGlvbiB7XG4gICAgICAgIDAle1xuICAgICAgICBsZWZ0Oi0yMDBweDtcbiAgICAgICAgfVxuICAgICAgICAxMDAle1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBoaWRlLWxlZnQtbmF2aWdhdGlvbiB7XG4gICAgICAgIDAle1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJXtcbiAgICAgICAgbGVmdDotMjAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LW1haW4taGFtYnVyZ2VyIHtcbiAgICAgICAgMCV7XG4gICAgICAgIGxlZnQ6MTBweDtcbiAgICAgICAgfVxuICAgICAgICAxMDAle1xuICAgICAgICBsZWZ0OjIwMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LW1haW4taGFtYnVyZ2VyIHtcbiAgICAgICAgMCV7XG4gICAgICAgIGxlZnQ6MjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJXtcbiAgICAgICAgbGVmdDoxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTEwMHB4KSB7XG4gICAgXG4gICAgLm5hdl9fc2lkZS1uYXYsXG4gICAgLm5hdl9fc2lkZS1uYXYuaGlkZSxcbiAgICAubmF2X19zaWRlLW5hdi5zaG93e1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICB0b3A6NTBweDtcbiAgICAgICAgYW5pbWF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgei1pbmRleDowO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgICAgICAgbGVmdDowICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLm5hdl9fc2lkZS1uYXYtLXRvZ2dsZS1idG57XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 417:
/*!*************************************************!*\
  !*** ./src/app/components/table/table-utils.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableUtil": () => (/* binding */ TableUtil)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ 32091);



class TableUtil {
    constructor() {
        this.tableList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__.MatTableDataSource([]);
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    updateList(data) {
        this.tableList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__.MatTableDataSource(data);
    }
    rowClick(row) {
        this.onClick.emit(row.vehicle_id || row.id);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.tableList.filter = filterValue.trim().toLowerCase();
        if (this.tableList.paginator) {
            this.tableList.paginator.firstPage();
        }
    }
}
TableUtil.ɵfac = function TableUtil_Factory(t) { return new (t || TableUtil)(); };
TableUtil.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableUtil, selectors: [["app-table-util"]], outputs: { onClick: "onClick" }, decls: 0, vars: 0, template: function TableUtil_Template(rf, ctx) { }, styles: ["(()[_ngcontent-%COMP%]   =[_ngcontent-%COMP%] >  { // webpackBootstrap\n \t\"use strict\";\n \t\n \t\n })()[_ngcontent-%COMP%]\n;"] });


/***/ }),

/***/ 56396:
/*!***********************************************************************!*\
  !*** ./src/app/components/top-navigation/top-navigation.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopNavigationComponent": () => (/* binding */ TopNavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/navigation/menu.service */ 83536);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 98295);







function TopNavigationComponent_div_3_h5_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r2.menu.header));
} }
function TopNavigationComponent_div_3_ul_2_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopNavigationComponent_div_3_ul_2_li_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const menuItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); menuItem_r5.callback($event); return ctx_r8.toggleSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r5.label, " ");
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { exact: true }; };
function TopNavigationComponent_div_3_ul_2_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, menuItem_r5.url))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r5.label, " ");
} }
function TopNavigationComponent_div_3_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopNavigationComponent_div_3_ul_2_li_1_a_1_Template, 2, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TopNavigationComponent_div_3_ul_2_li_1_a_2_Template, 2, 6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r5.callback);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r5.url);
} }
function TopNavigationComponent_div_3_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopNavigationComponent_div_3_ul_2_li_1_Template, 3, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.menu.links);
} }
const _c2 = function (a0, a1) { return { show: a0, hide: a1 }; };
function TopNavigationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopNavigationComponent_div_3_h5_1_Template, 3, 3, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TopNavigationComponent_div_3_ul_2_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c2, ctx_r0.showRightNav === true, ctx_r0.showRightNav === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.menu.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.menu.links.length);
} }
function TopNavigationComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopNavigationComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.toggleSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c2, ctx_r1.showRightNav === true, ctx_r1.showRightNav === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !ctx_r1.showRightNav ? "menu" : "menu_open", " ");
} }
const _c3 = function () { return ["/"]; };
class TopNavigationComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.showRightNav = null;
    }
    ngOnInit() {
        this.showRightNav = null;
        this.menuService.menu.subscribe((data) => {
            this.menu = data;
        });
    }
    toggleSideNav() {
        this.showRightNav = !this.showRightNav;
    }
    ngOnDestroy() {
        this.showRightNav = null;
    }
}
TopNavigationComponent.ɵfac = function TopNavigationComponent_Factory(t) { return new (t || TopNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService)); };
TopNavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopNavigationComponent, selectors: [["app-top-navigation"]], decls: 5, vars: 4, consts: [[1, "nav__top"], ["routerLinkActive", "active", 1, "nav__logo", 3, "routerLink"], ["src", "/assets/brt-icon-sm.png"], ["class", "nav__top-menu", 3, "ngClass", 4, "ngIf"], ["class", "nav__top-nav--toggle-btn", 3, "ngClass", "click", 4, "ngIf"], [1, "nav__top-menu", 3, "ngClass"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-flat-button", "", "tooltip", "menuItem.tooltip", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "routerLinkActive", "active", "class", "nav__side-nav--link", "tooltip", "menuItem.tooltip", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["mat-flat-button", "", "tooltip", "menuItem.tooltip", 3, "click"], ["mat-flat-button", "", "routerLinkActive", "active", "tooltip", "menuItem.tooltip", 1, "nav__side-nav--link", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav__top-nav--toggle-btn", 3, "ngClass", "click"], ["matSuffix", "", "aria-label", "toggle mobile menu view"]], template: function TopNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TopNavigationComponent_div_3_Template, 3, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TopNavigationComponent_button_4_Template, 3, 5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.menu && ctx.menu.links.length);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe], styles: [".nav__top[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.25);\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  padding: 20px 0;\n  position: -webkit-sticky;\n  position: fixed;\n  top: 0px;\n  height: 50px;\n  width: 100%;\n  background-color: var(--white);\n  padding: 0 20px;\n  z-index: 2;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__logo[_ngcontent-%COMP%] {\n  justify-self: center;\n  display: block;\n  margin: auto;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-nav--toggle-btn[_ngcontent-%COMP%] {\n  align-self: center;\n  float: right;\n  position: fixed;\n  right: 10px;\n  top: 0px;\n  cursor: pointer;\n  transform: rotate(180deg);\n  background-color: var(--white);\n  font-size: 2rem;\n  background-color: var(--white);\n  border: none;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-nav--toggle-btn.show[_ngcontent-%COMP%] {\n  right: 200px;\n  animation: move-right-hamburger 500ms 1;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-nav--toggle-btn.hide[_ngcontent-%COMP%] {\n  right: 10px;\n  animation: move-left-hamburger 500ms 1;\n}\n@media screen and (min-width: 1100px) {\n  .nav__top[_ngcontent-%COMP%]   .nav__top-nav--toggle-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  right: -200px;\n  top: 0px;\n  width: 200px;\n  background-color: var(--white);\n  border-left: 1px solid var(--lightgray);\n  height: 100vh;\n  margin-top: 0;\n  padding-inline-start: 10px;\n  word-break: break-all;\n  overflow-y: auto;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  padding: 0;\n  margin-left: 20px;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin-right: 10px;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  width: 100%;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  white-space: pre-wrap;\n  font-size: 1rem;\n  text-align: left;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: var(--blueriver);\n  color: var(--white);\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::before {\n  content: \" \";\n  width: 15px;\n  margin-right: 10px;\n  height: 36px;\n  display: inline-block;\n  background-color: var(--blueriver);\n  position: relative;\n  margin-left: -26px;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu.show[_ngcontent-%COMP%] {\n  right: 0px;\n  animation: show-right-navigation 500ms 1;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu.hide[_ngcontent-%COMP%] {\n  right: -200px;\n  animation: hide-right-navigation 500ms 1;\n}\n@media screen and (min-width: 1100px) {\n  .nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%] {\n    width: 200px;\n    top: 50px;\n    right: 0px;\n    background-color: transparent;\n  }\n  .nav__top[_ngcontent-%COMP%]   .nav__top-menu.show[_ngcontent-%COMP%], .nav__top[_ngcontent-%COMP%]   .nav__top-menu.hide[_ngcontent-%COMP%] {\n    right: 0px;\n    animation: none;\n  }\n}\n@keyframes show-right-navigation {\n  0% {\n    right: -200px;\n  }\n  100% {\n    right: 0;\n  }\n}\n@keyframes hide-right-navigation {\n  0% {\n    right: 0;\n  }\n  100% {\n    right: -250;\n  }\n}\n@keyframes move-right-hamburger {\n  0% {\n    right: 10px;\n  }\n  100% {\n    right: 200px;\n  }\n}\n@keyframes move-left-hamburger {\n  0% {\n    right: 200px;\n  }\n  100% {\n    right: 10px;\n  }\n}\n@media screen and (min-width: 800px) {\n  .nav__top[_ngcontent-%COMP%]   .nav__logo[_ngcontent-%COMP%] {\n    justify-self: flex-start;\n    margin: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksZ0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQ1I7QUFHUTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFEWjtBQUdZO0VBQ0ksV0FBQTtBQURoQjtBQU1RO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBSlo7QUFNWTtFQUNJLFlBQUE7RUFDQSx1Q0FBQTtBQUpoQjtBQU9ZO0VBQ0ksV0FBQTtFQUNBLHNDQUFBO0FBTGhCO0FBUVk7RUF2Qko7SUF3QlEsYUFBQTtFQUxkO0FBQ0Y7QUFRUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFOWjtBQVFZO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFOaEI7QUFTWTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFQaEI7QUFTZ0I7RUFDSSxzQkFBQTtFQUVBLFdBQUE7QUFScEI7QUFVb0I7RUFDSSxtQkFBQTtBQVJ4QjtBQVdvQjtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVR4QjtBQVd3QjtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7QUFUNUI7QUFXNEI7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBVGhDO0FBZ0JZO0VBQ0ksVUFBQTtFQUNBLHdDQUFBO0FBZGhCO0FBZ0JZO0VBQ0ksYUFBQTtFQUNBLHdDQUFBO0FBZGhCO0FBaUJZO0VBdEVKO0lBdUVZLFlBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLDZCQUFBO0VBZGxCO0VBZ0JrQjtJQUVJLFVBQUE7SUFDQSxlQUFBO0VBZnRCO0FBQ0Y7QUFxQlE7RUFDSTtJQUNJLGFBQUE7RUFuQmQ7RUFxQlU7SUFDSSxRQUFBO0VBbkJkO0FBQ0Y7QUFzQlE7RUFDSTtJQUNJLFFBQUE7RUFwQmQ7RUFzQlU7SUFDSSxXQUFBO0VBcEJkO0FBQ0Y7QUFzQlE7RUFDSTtJQUNJLFdBQUE7RUFwQmQ7RUFzQlU7SUFDSSxZQUFBO0VBcEJkO0FBQ0Y7QUFzQlE7RUFDSTtJQUNJLFlBQUE7RUFwQmQ7RUFzQlU7SUFDSSxXQUFBO0VBcEJkO0FBQ0Y7QUF5Qkk7RUFFUTtJQUNJLHdCQUFBO0lBQ0EsWUFBQTtFQXZCZDtBQUNGIiwiZmlsZSI6InRvcC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5uYXZfX3RvcHtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4yNSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBoZWlnaHQ6NTBweDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgIHotaW5kZXg6IDI7XG5cblxuXG4gICAgICAgIC5uYXZfX2xvZ297XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46YXV0bztcblxuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAubmF2X190b3AtbmF2LS10b2dnbGUtYnRue1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICByaWdodDoxMHB4O1xuICAgICAgICAgICAgdG9wOjBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcblxuICAgICAgICAgICAgJi5zaG93e1xuICAgICAgICAgICAgICAgIHJpZ2h0OjIwMHB4O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodC1oYW1idXJnZXIgNTAwbXMgMTtcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuaGlkZXtcbiAgICAgICAgICAgICAgICByaWdodDoxMHB4O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0LWhhbWJ1cmdlciA1MDBtcyAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjExMDBweCl7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZfX3RvcC1tZW51IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHJpZ2h0Oi0yMDBweDtcbiAgICAgICAgICAgIHRvcDowcHg7XG4gICAgICAgICAgICB3aWR0aDoyMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCB2YXIoLS1saWdodGdyYXkpO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OjEwcHg7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVse1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgICAgICAgICAgICAgIGxpe1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRncmF5KTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZXJpdmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWVyaXZlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaG93e1xuICAgICAgICAgICAgICAgIHJpZ2h0OjBweDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHNob3ctcmlnaHQtbmF2aWdhdGlvbiA1MDBtcyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5oaWRle1xuICAgICAgICAgICAgICAgIHJpZ2h0Oi0yMDBweDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGhpZGUtcmlnaHQtbmF2aWdhdGlvbiA1MDBtcyAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjExMDBweCl7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6NTBweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJi5zaG93LFxuICAgICAgICAgICAgICAgICAgICAmLmhpZGV7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDowcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBAa2V5ZnJhbWVzIHNob3ctcmlnaHQtbmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAwJXtcbiAgICAgICAgICAgICAgICByaWdodDotMjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAle1xuICAgICAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBAa2V5ZnJhbWVzIGhpZGUtcmlnaHQtbmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAwJXtcbiAgICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJXtcbiAgICAgICAgICAgICAgICByaWdodDotMjUwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1oYW1idXJnZXIge1xuICAgICAgICAgICAgMCV7XG4gICAgICAgICAgICAgICAgcmlnaHQ6MTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCV7XG4gICAgICAgICAgICAgICAgcmlnaHQ6MjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtaGFtYnVyZ2VyIHtcbiAgICAgICAgICAgIDAle1xuICAgICAgICAgICAgICAgIHJpZ2h0OjIwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJXtcbiAgICAgICAgICAgICAgICByaWdodDoxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjgwMHB4KXtcbiAgICAgICAgLm5hdl9fdG9wIHtcbiAgICAgICAgICAgIC5uYXZfX2xvZ297XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbjpub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAubWF0LWljb257XG4gICAgICAgICAgICAvLyAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gdWx7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAvLyAgICAgJi5oaWRleyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAvLyAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAvLyAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAvLyAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIC8vICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGJvcmRlci1sZWZ0Om5vbmU7XG4gICAgICAgICAgICAvLyAgICAgICAgIHdpZHRoOmF1dG87XG4gICAgICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmlnaHQ6aW5oZXJpdDtcbiAgICAgICAgICAgIC8vICAgICAgICAgdG9wOmluaGVyaXQ7XG4gICAgICAgICAgICAvLyAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmlnaHQ6MHB4O1xuXG4gICAgICAgICAgICAvLyAgICAgICAgIGxpe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ 51721:
/*!******************************************************************************!*\
  !*** ./src/app/components/topics/geolocation/starfire/starfire.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarfireComponent": () => (/* binding */ StarfireComponent)
/* harmony export */ });
/* harmony import */ var _Users_anthonycrawford_Documents_Jupiter_JupiterWebService_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ 61319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var src_app_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/geolocation/geolocation.service */ 39487);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);










function StarfireComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function StarfireComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 4);
  }
}

class StarfireComponent {
  constructor(gqlQueryService, gisService, graphQLSubscription) {
    this.gqlQueryService = gqlQueryService;
    this.gisService = gisService;
    this.graphQLSubscription = graphQLSubscription;
    this.querySubscription = null;
    this.mapNodeId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.default)();
    this.hasCoordinates = false;
    this.isLoading = true;
    this.startDateTime = "";
    this.endDateTime = "";
    this.playback = "static";
    this.showTractor = false;
    this.zoom = 15;
    this.lastPosition = false;
  }

  formatTimestamps(datetime) {
    if (datetime) return new Date(datetime).toISOString();
    this.startDateTime = this.startDateTime ? new Date(this.startDateTime).toISOString() : new Date(new Date().valueOf() - 1000 * 60 * 60).toISOString();
    this.endDateTime = this.endDateTime ? new Date(this.endDateTime).toISOString() : new Date().toISOString();
  }

  setupDynamicMap(config) {
    var _this = this;

    return (0,_Users_anthonycrawford_Documents_Jupiter_JupiterWebService_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this.gisService.getLiveMap(config);
    })();
  }

  setupStaticMap(coordinates) {
    var _this2 = this;

    return (0,_Users_anthonycrawford_Documents_Jupiter_JupiterWebService_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.hasCoordinates = true;
      _this2.isLoading = false;

      _this2.gisService[_this2.playback === "static" ? "getStaticMap" : "getReplayMap"]({
        container: _this2.mapNodeId,
        coordinates: coordinates || _this2.coordinates || [],
        showTractor: _this2.showTractor,
        zoom: _this2.zoom,
        lineColor: _this2.lineColor,
        lineSize: _this2.lineSize
      });
    })();
  }

  generateLiveMap() {
    var _this3 = this;

    return (0,_Users_anthonycrawford_Documents_Jupiter_JupiterWebService_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const config = {
        container: _this3.mapNodeId,
        showTractor: _this3.showTractor,
        coordinates: _this3.coordinates || [],
        zoom: _this3.zoom
      };

      _this3.setupDynamicMap(config).then(mapConfig => {
        const {
          map,
          geoJson,
          image
        } = mapConfig;
        const variables = _this3.vehicleId ? {
          vehicleId: parseInt(_this3.vehicleId)
        } : {};
        _this3.querySubscription = _this3.graphQLSubscription.getGeolocationStream(variables).subscribe(response => {
          _this3.hasCoordinates = true;
          _this3.isLoading = false;
          const {
            longitude,
            latitude
          } = response.data.sqlStarfire ? response.data.sqlStarfire.starfire.msg : response.data.geographicCoordinates;
          const newCoordinates = [longitude, latitude]; // @ts-ignore

          geoJson.data.features[0].geometry.coordinates.push(newCoordinates);
          map.getSource('trace').setData(geoJson.data);

          if (_this3.showTractor) {
            const imagePosition = _this3.gisService.getFeaturesGEOJSON({
              type: 'geojson',
              dataType: 'FeatureCollection',
              geometryType: 'Feature',
              coordinateType: "LineString",
              coordinates: [newCoordinates]
            });

            map.getSource(image).setData(imagePosition.data);
          }

          map.panTo(newCoordinates);
        }, error => {
          console.log(error);
        });
      });
    })();
  }

  generateStaticMap() {
    var _this4 = this;

    return (0,_Users_anthonycrawford_Documents_Jupiter_JupiterWebService_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this4.coordinates instanceof Array) _this4.setupStaticMap();else if (_this4.vehicleId) _this4.querySubscription = _this4.gqlQueryService[_this4.lastPosition || _this4.coordinates && _this4.coordinates.length ? "getGeolocaton" : "getVehicleLocationByDateTimestamp"]({
        vehicleId: parseInt(_this4.vehicleId.toString()),
        startDateTime: _this4.startDateTime,
        endDateTime: _this4.endDateTime
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(geoData => geoData.map(geo => geo.msg ? [geo.msg.longitude, geo.msg.latitude] : []))).subscribe(coordinates => {
        if (coordinates.length) _this4.setupStaticMap(coordinates);else _this4.isLoading = false;
      });
    })();
  }

  queryGeoLocation() {
    switch (this.playback) {
      case "static":
      case "replay":
        this.generateStaticMap();
        break;

      case "live":
        this.generateLiveMap();
        break;

      default:
        break;
    }
  }

  updateGeolocationOnDateTimeChange(event) {
    if ("startDateTime" in event || "endDateTime" in event) {
      if (event.startDateTime) this.startDateTime = this.formatTimestamps(event.startDateTime.currentValue);
      if (event.endDateTime) this.endDateTime = this.formatTimestamps(event.endDateTime.currentValue);
      this.queryGeoLocation();
    }
  }

  ngOnInit() {
    this.formatTimestamps();
  }

  ngAfterViewInit() {
    this.queryGeoLocation();
  }

  ngOnDestroy() {
    var _a;

    (_a = this.querySubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
  }

  ngOnChanges(event) {
    this.updateGeolocationOnDateTimeChange(event);
  }

}

StarfireComponent.ɵfac = function StarfireComponent_Factory(t) {
  return new (t || StarfireComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_2__.GeolocationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_3__.GqlSubscriptionService));
};

StarfireComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: StarfireComponent,
  selectors: [["app-starfire"]],
  inputs: {
    startDateTime: "startDateTime",
    endDateTime: "endDateTime",
    playback: "playback",
    showTractor: "showTractor",
    zoom: "zoom",
    coordinates: "coordinates",
    lineColor: "lineColor",
    lineSize: "lineSize",
    vehicleId: "vehicleId",
    lastPosition: "lastPosition"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 3,
  consts: [[1, "map", 3, "id"], [4, "ngIf", "ngIfElse"], ["loader", ""], [1, "nomap"], ["mode", "indeterminate"]],
  template: function StarfireComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StarfireComponent_div_1_Template, 2, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, StarfireComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx.mapNodeId);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.hasCoordinates && !ctx.isLoading)("ngIfElse", _r1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBar],
  styles: [".map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.nomap[_ngcontent-%COMP%] {\n  background: url(/assets/location_off_black_24dp.svg) no-repeat center center;\n  background-size: contain;\n  width: 100px;\n  height: 100px;\n  opacity: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJmaXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQVlJLDRFQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFWSiIsImZpbGUiOiJzdGFyZmlyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubm9tYXB7XG4gICAgLy8gYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9sb2NhdGlvbl9vZmZfYmxhY2tfMjRkcC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XG4gICAgLy8gd2lkdGg6IDEwMHB4O1xuICAgIC8vIGhlaWdodDogMTAwcHg7XG4gICAgLy8gLyogQ2VudGVyIHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseSAqL1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyB0b3A6IDUwJTtcbiAgICAvLyBsZWZ0OiA1MCU7XG4gICAgLy8gbWFyZ2luOiA1MHB4IDAgMCAtNTBweDtcbiAgICAvLyBvcGFjaXR5OiA1MCU7XG5cbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9sb2NhdGlvbl9vZmZfYmxhY2tfMjRkcC5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBvcGFjaXR5OiA1MCU7XG59Il19 */"]
});

/***/ }),

/***/ 11610:
/*!*****************************************************************************!*\
  !*** ./src/app/components/topics/images/image-pair/image-pair.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePairComponent": () => (/* binding */ ImagePairComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ 61319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/images/image.service */ 82329);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _image_segmentation_image_segmentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-segmentation/image-segmentation.component */ 52785);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);










function ImagePairComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-slide-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ImagePairComponent_div_0_div_2_Template_mat_slide_toggle_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r6.toggleSegmentation($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Segmentation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx_r3.segmentationToggle.color)("checked", ctx_r3.segmentationToggle.checked)("disabled", ctx_r3.loadedSegmentations.length < 2);
  }
}

function ImagePairComponent_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-progress-bar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Segmentation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0) {
  return {
    visibility: a0
  };
};

function ImagePairComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ImagePairComponent_div_0_div_2_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ImagePairComponent_div_0_ng_template_3_Template, 3, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "app-image-segmentation", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("load", function ImagePairComponent_div_0_Template_app_image_segmentation_load_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r8.onSegmentationLoad($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "app-image-segmentation", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("load", function ImagePairComponent_div_0_Template_app_image_segmentation_load_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r10.onSegmentationLoad($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.loadedSegmentations.length == 2)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c0, ctx_r0.segmentationToggle.checked ? "visible" : "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("imageId", ctx_r0.imageHeaderId)("topic", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 12, ctx_r0.segmentationTopic$));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.leftImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("id", ctx_r0.leftImageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c0, ctx_r0.segmentationToggle.checked ? "visible" : "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("imageId", ctx_r0.imageHeaderId)("topic", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 14, ctx_r0.segmentationTopic$));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.rightImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("id", ctx_r0.rightImageId);
  }
}

function ImagePairComponent_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No image were found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function ImagePairComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 11);
  }
}

function ImagePairComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ImagePairComponent_ng_template_1_span_0_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ImagePairComponent_ng_template_1_ng_template_1_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.noImage)("ngIfElse", _r12);
  }
}

class ImagePairComponent {
  constructor(gqlQueryService, imageService) {
    this.gqlQueryService = gqlQueryService;
    this.imageService = imageService;
    this.loadedSegmentations = [];
    this.querySubscription = null;
    this.leftImageUrl = "";
    this.leftImageId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__.default)();
    this.imageHeaderId = undefined;
    this.rightImageUrl = "";
    this.rightImageId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__.default)();
    this.segmentationTopic = "";
    this.noImage = false;
    this.pageSize = 1;
    this.pagesLength = 0; // leftImageUrl$ = new BehaviorSubject<string | null>(this.leftImageUrl);
    // rightImageUrl$ = new BehaviorSubject<string | null>(this.rightImageUrl);

    this.segmentationTopic$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(this.segmentationTopic); // imageHeaderId$ = new BehaviorSubject<number | undefined>(this.imageHeaderId);

    this.segmentationToggle = {
      color: "primary",
      checked: false,
      disabled: this.loadedSegmentations.length < 2 || this.loadedSegmentations.indexOf("no segmentation") !== -1
    };
    this.topic = "";
    this.cursor = 0;
  }

  getImagePair(argTopic, argCursor) {
    const topic = argTopic || this.topic;
    const cursor = argCursor && argCursor >= 0 ? argCursor : this.cursor; // this.leftImageUrl$.next("")
    // this.rightImageUrl$.next("")

    if (!topic) return;
    this.querySubscription = this.gqlQueryService.getImagePair({
      topic,
      cursor
    }).subscribe(response => {
      this.noImage = true;

      if (!response.data.imagePair || !response.data.imagePair.length) {
        return;
      }

      this.noImage = false;
      const imagePair = response.data.imagePair[0];
      this.pageSize = imagePair.pagination.pageSize;
      this.pagesLength = imagePair.pagination.length;
      this.cursor = imagePair.pagination.position;
      this.imageHeaderId = imagePair.msg.header.id;
      this.leftImageUrl = this.imageService.getDataURL(imagePair.msg.left_image);
      this.rightImageUrl = this.imageService.getDataURL(imagePair.msg.right_image); // this.imageHeaderId$.next(this.imageHeaderId)
      // this.leftImageUrl$.next(this.leftImageUrl)
      // this.rightImageUrl$.next(this.rightImageUrl)

      this.segmentationTopic$.next(this.topic.split("/").slice(0, 2).concat(["segmentation_map"]).join("/"));
    });
  }

  toggleSegmentation(event) {
    console.log(event);
    this.segmentationToggle.checked = event.checked;
  }

  getCurrentImage(event) {
    if (this.cursor !== event.pageIndex) {
      this.cursor = event.pageIndex;
      this.getImagePair();
      console.log(event);
    }
  }

  onSegmentationLoad(event) {
    switch (event) {
      case "no segmentation":
      case "loaded":
        this.loadedSegmentations.push(event);
        break;

      case "unloaded":
        this.loadedSegmentations.pop();
        break;
    }
  }

  ngOnInit() {
    this.getImagePair();
  }

  ngOnChanges(changes) {// if (changes.topic.previousValue !== changes.topic.currentValue) {
    //   this.getImagePair(changes.topic.currentValue)
    // }
  }

  ngOnDestroy() {
    var _a;

    (_a = this.querySubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
  }

}

ImagePairComponent.ɵfac = function ImagePairComponent_Factory(t) {
  return new (t || ImagePairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_0__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_1__.ImageService));
};

ImagePairComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ImagePairComponent,
  selectors: [["app-image-pair"]],
  inputs: {
    topic: "topic",
    cursor: "cursor"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "grid", "gap", "images"], ["class", "grid__cell", 4, "ngIf", "ngIfElse"], ["segmentationLoader", ""], [1, "grid__cell"], [1, "segmentation", 3, "ngStyle"], [3, "imageId", "topic", "load"], [1, "grid__cell--label"], [3, "src", "id"], [1, "segmentation-toggle", 3, "color", "checked", "disabled", "change"], ["mode", "indeterminate"], ["loader", ""]],
  template: function ImagePairComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ImagePairComponent_div_0_Template, 19, 20, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ImagePairComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.leftImageUrl && ctx.rightImageUrl)("ngIfElse", _r1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _image_segmentation_image_segmentation_component__WEBPACK_IMPORTED_MODULE_2__.ImageSegmentationComponent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBar],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: [".images[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  min-width: 300px;\n  max-width: 1024px;\n  margin: auto;\n}\n.images[_ngcontent-%COMP%]   .segmentation[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-right: 20px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXBhaXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7QUFDSTs7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ1I7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQVIiLCJmaWxlIjoiaW1hZ2UtcGFpci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmltYWdlLFxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgICAgICBtYXJnaW46YXV0bztcbiAgICB9XG5cbiAgICAuc2VnbWVudGF0aW9ue1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZy1yaWdodDoyMHB4O1xuICAgICAgICBtYXJnaW46YXV0bztcblxuICAgIH1cbn0iXX0= */"]
});

/***/ }),

/***/ 52785:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/topics/images/image-segmentation/image-segmentation.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageSegmentationComponent": () => (/* binding */ ImageSegmentationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ 61319);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/images/image.service */ 82329);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);







function ImageSegmentationComponent_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("id", ctx_r3.imgId);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function ImageSegmentationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ImageSegmentationComponent_div_0_img_1_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, "url(" + ctx_r0.imageUrl + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.imageUrl);
} }
function ImageSegmentationComponent_ng_template_1_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span");
} }
function ImageSegmentationComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 7);
} }
function ImageSegmentationComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ImageSegmentationComponent_ng_template_1_span_0_Template, 1, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ImageSegmentationComponent_ng_template_1_ng_template_1_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.noImage)("ngIfElse", _r5);
} }
class ImageSegmentationComponent {
    constructor(gqlQueryService, imageService) {
        this.gqlQueryService = gqlQueryService;
        this.imageService = imageService;
        this.querySubscription = null;
        this.imageUrl = "";
        this.noImage = false;
        this.imgId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();
        this.topic = "";
        this.cursor = 0;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    getSegmentationImage(argTopic, argImageId) {
        var _a;
        const topic = argTopic || this.topic;
        const imageId = argImageId || this.imageId;
        if (!imageId || !topic) {
            this.load.emit("unloaded");
            return;
        }
        (_a = this.querySubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.querySubscription = this.gqlQueryService
            .getSegmentationMap({ topic, cursor: this.cursor, id: imageId })
            .subscribe(response => {
            if (!response.data.segmentationMap || !response.data.segmentationMap.length) {
                this.noImage = true;
                this.load.emit("no segmentation");
                return;
            }
            const segmentationMap = response.data.segmentationMap[0];
            this.imageUrl = this.imageService.getDataURL(Object.assign(Object.assign({}, segmentationMap.msg.image), { isSegmentation: true }));
            this.load.emit("loaded");
        });
    }
    ngOnInit() {
        this.getSegmentationImage();
    }
    ngOnChanges(changes) {
        if ((changes.topic.previousValue !== changes.topic.currentValue)
            || (changes.imageId.previousValue !== changes.imageId.currentValue)) {
            this.getSegmentationImage(changes.topic.currentValue, changes.imageId.currentValue);
        }
    }
    ngOnDestroy() {
        var _a;
        (_a = this.querySubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
ImageSegmentationComponent.ɵfac = function ImageSegmentationComponent_Factory(t) { return new (t || ImageSegmentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_0__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_1__.ImageService)); };
ImageSegmentationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ImageSegmentationComponent, selectors: [["app-image-segmentation"]], inputs: { topic: "topic", cursor: "cursor", imageId: "imageId" }, outputs: { load: "load" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [["class", "segmentation-image ", 3, "ngStyle", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "segmentation-image", 3, "ngStyle"], [3, "src", "id", 4, "ngIf"], [3, "src", "id"], [4, "ngIf", "ngIfElse"], ["loader", ""], ["mode", "indeterminate"]], template: function ImageSegmentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ImageSegmentationComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ImageSegmentationComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imageUrl)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar], styles: [".segmentation-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-size: 100% 100%;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.segmentation-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 100%;\n  height: auto;\n  min-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXNlZ21lbnRhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNSIiwiZmlsZSI6ImltYWdlLXNlZ21lbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWdtZW50YXRpb24taW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgICAgXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuXG4gICAgaW1nIHtcbiAgICAgICAgdmlzaWJpbGl0eTpoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6YXV0bztcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICB9XG5cbn0iXX0= */"] });


/***/ }),

/***/ 7585:
/*!***********************************************************************!*\
  !*** ./src/app/components/topics/images/preview/preview.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewComponent": () => (/* binding */ PreviewComponent)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ 61319);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/images/image.service */ 82329);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _images_image_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../images/image/image.component */ 89990);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);









function PreviewComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Camera:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Vehicle:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Encoding:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Height:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Width:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Left Exposure:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Right Exposure:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Left Gain:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Right Gain:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Left ROI:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Right ROI:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Descriptor ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "app-image", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" #", (ctx_r3.pageSize === 1 ? ctx_r3.cursor : i_r5) + 1, " : Meta Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", image_r4.timestamp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", image_r4.meta.cameraName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", image_r4.vehicle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", image_r4.encoding, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", image_r4.height, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", image_r4.width, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", image_r4.meta.leftExposure, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", image_r4.meta.rightExposure, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", image_r4.meta.leftGain, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", image_r4.meta.rightGain, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("( x: ", image_r4.meta.leftRoi.xOffset, ", y: ", image_r4.meta.leftRoi.xOffset, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("( x: ", image_r4.meta.rightRoi.xOffset, ", y: ", image_r4.meta.rightRoi.xOffset, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("( x: ", image_r4.headerId, ", y: ", image_r4.meta.rightRoi.xOffset, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("imageId", image_r4.id)("headerId", image_r4.headerId)("id", image_r4.id);
} }
function PreviewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PreviewComponent_div_0_div_3_Template, 59, 20, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.imageData);
} }
function PreviewComponent_ng_template_1_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No image were found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PreviewComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 12);
} }
function PreviewComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PreviewComponent_ng_template_1_span_0_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PreviewComponent_ng_template_1_ng_template_1_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.noImage)("ngIfElse", _r7);
} }
class PreviewComponent {
    constructor(imageService, gqlQueryService) {
        this.imageService = imageService;
        this.gqlQueryService = gqlQueryService;
        this.loadedSegmentations = null;
        this.querySubscription = null;
        this.imageUrl = "";
        this.imageData = [];
        this.imageId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__.default)();
        this.segmentationTopic = "";
        this.noImage = false;
        this.pageSize = 1;
        this.pageSizeOptions = [1, 5, 10];
        this.pagesLength = 0;
        this.segmentationTopic$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(this.segmentationTopic);
        this.segmentationToggle = {
            color: "primary",
            checked: false,
            disabled: this.loadedSegmentations !== null && !this.loadedSegmentations
        };
        this.topic = "";
        this.cursor = 0;
        this.topicId = null;
    }
    ngOnInit() {
        this.getImage();
    }
    ngOnDestroy() {
        var _a;
        (_a = this.querySubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    getImage(argCursor) {
        const cursor = argCursor && argCursor >= 0 ? argCursor : this.cursor;
        if (!this.topic || !this.vehicleId)
            return;
        this.querySubscription = this
            .gqlQueryService
            .getImagePreview({
            vehicleId: this.vehicleId,
            topicName: this.topic,
            cursor: this.cursor,
            size: this.pageSize
        })
            .subscribe(response => {
            this.noImage = true;
            this.pagesLength = response.totalCount;
            this.imageData = response.images;
        });
    }
    toggleSegmentation(event) {
        console.log(event);
        this.segmentationToggle.checked = event.checked;
    }
    getCurrentImage(event) {
        if (this.cursor !== event.pageIndex || event.pageSize !== this.pageSize) {
            this.cursor = event.pageIndex;
            this.imageData = [];
            this.noImage = false;
            this.pageSize = event.pageSize;
            this.loadedSegmentations = null;
            this.getImage();
            console.log(event);
        }
    }
    loadSegmentation() {
        return typeof this.loadedSegmentations === 'boolean';
    }
    onSegmentationLoad(event) {
        switch (event) {
            case "loaded":
                this.loadedSegmentations = true;
                break;
            case "no segmentation":
            case "unloaded":
                this.loadedSegmentations = false;
                break;
        }
    }
}
PreviewComponent.ɵfac = function PreviewComponent_Factory(t) { return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_0__.ImageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__.GqlQueryService)); };
PreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PreviewComponent, selectors: [["app-preview"]], inputs: { topic: "topic", cursor: "cursor", vehicleId: "vehicleId", topicId: "topicId" }, decls: 5, vars: 5, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [3, "length", "pageSize", "pageSizeOptions", "page"], [1, "grid", "gap", "images"], [1, "grid__cell", "center-cell-content"], ["class", "image-wrapper", 4, "ngFor", "ngForOf"], [1, "image-wrapper"], [1, "images__meta-data"], [1, "images__meta-title"], [1, "images__render"], [1, "images", 3, "imageId", "headerId", "id"], ["loader", ""], ["mode", "indeterminate"]], template: function PreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PreviewComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PreviewComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-paginator", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function PreviewComponent_Template_mat_paginator_page_4_listener($event) { return ctx.getCurrentImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.imageData)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.pagesLength)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _images_image_image_component__WEBPACK_IMPORTED_MODULE_2__.ImageComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBar], styles: [".images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  padding: 10px;\n  margin: 10px;\n  border: 1px solid #ccc;\n}\n.images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%] {\n  justify-self: flex-start;\n  padding: 20px 0px;\n  border-top: 1px solid #ccc;\n  margin-top: 10px;\n}\n.images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%]   .images__meta-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\n.images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0px;\n}\n.images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__render[_ngcontent-%COMP%] {\n  justify-self: flex-end;\n}\n.images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__render[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__render[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  max-width: 512px;\n  margin: auto;\n  position: absolute;\n}\n.images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__render[_ngcontent-%COMP%]   .segmentation[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  margin-right: 20px;\n  padding-right: 20px;\n  z-index: 1;\n}\n@media screen and (min-width: 1375px) {\n  .images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    padding: 10px;\n    margin: 10px;\n    border: 1px solid #ccc;\n  }\n  .images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%] {\n    justify-self: flex-start;\n    padding: 0px 20px;\n    border-left: 1px solid #ccc;\n    border-top: none;\n    margin-left: 10px;\n    margin-top: 0px;\n  }\n  .images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%]   .images__meta-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    font-weight: bold;\n  }\n  .images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n    padding-left: 0px;\n  }\n  .images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBRFI7QUFHUTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBRFo7QUFFWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUFoQjtBQUVZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUFoQjtBQUVnQjtFQUNJLGlCQUFBO0FBQXBCO0FBSVE7RUFDSSxzQkFBQTtBQUZaO0FBR1k7O0VBR0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRmhCO0FBS1k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUhoQjtBQVlBO0VBR1E7SUFDSSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0VBWFY7RUFhVTtJQUNJLHdCQUFBO0lBQ0EsaUJBQUE7SUFDQSwyQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBWGQ7RUFhYztJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7RUFYbEI7RUFhYztJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUFYbEI7RUFha0I7SUFDSSxlQUFBO0VBWHRCO0FBQ0YiLCJmaWxlIjoicHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXMge1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIC5pbWFnZS13cmFwcGVye1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXG4gICAgICAgIC5pbWFnZXNfX21ldGEtZGF0YSB7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIC5pbWFnZXNfX21ldGEtdGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWx7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MHB4O1xuXG4gICAgICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pbWFnZXNfX3JlbmRlcntcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICAuaW1hZ2UsXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUxMnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuc2VnbWVudGF0aW9ue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMzc1cHgpIHtcbiAgICAuaW1hZ2VzIHtcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgICAgIC5pbWFnZS13cmFwcGVye1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cbiAgICAgICAgICAgIC5pbWFnZXNfX21ldGEtZGF0YSB7XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOm5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuXG4gICAgICAgICAgICAgICAgLmltYWdlc19fbWV0YS10aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjBweDtcblxuICAgICAgICAgICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 43613:
/*!*******************************************************************************!*\
  !*** ./src/app/components/topics/images/stop-images/stop-images.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopImagesComponent": () => (/* binding */ StopImagesComponent)
/* harmony export */ });
/* harmony import */ var _Users_anthonycrawford_Documents_Jupiter_JupiterWebService_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var src_app_components_table_table_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/table/table-utils */ 417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_notifications_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notifications/alert.service */ 94481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _images_image_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../images/image/image.component */ 89990);
/* harmony import */ var _geolocation_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geolocation/starfire/starfire.component */ 51721);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
















function StopImagesComponent_app_image_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-image", 7);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("imageId", ctx_r0.image)("label", ctx_r0.label)("headerId", ctx_r0.headerid)("subject", ctx_r0.objectDetectionSubject);
  }
}

function StopImagesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-starfire", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showTractor", true)("zoom", 16)("coordinates", ctx_r1.coordinates)("vehicleId", ctx_r1.vehicleId);
  }
}

function StopImagesComponent_ng_template_8_mat_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "image_not_supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function StopImagesComponent_ng_template_8_mat_progress_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-progress-bar", 13);
  }
}

function StopImagesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, StopImagesComponent_ng_template_8_mat_icon_0_Template, 2, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, StopImagesComponent_ng_template_8_mat_progress_bar_1_Template, 1, 0, "mat-progress-bar", 11);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isImageLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.isImageLoaded);
  }
}

class StopImagesComponent extends src_app_components_table_table_utils__WEBPACK_IMPORTED_MODULE_1__.TableUtil {
  constructor(gqlSubscription, gqlQuery, route, alertService) {
    super();
    this.gqlSubscription = gqlSubscription;
    this.gqlQuery = gqlQuery;
    this.route = route;
    this.alertService = alertService;
    this.objectQuery = null;
    this.objectDetectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.stopImageQuery = [];
    this.objectSubscription = null;
    this.pageSize = 1;
    this.page = 0;
    this.image = null;
    this.isImageLoaded = false;
    this.headerid = "";
    this.label = "";
    this.pagesLength = 0;
    this.objectDetection = {};
    this.latitude = 0;
    this.longitude = 0;
    this.coordinates = [[]];
    this.paginationInit = false;
    this.vehicleId = "";
    this.live = false;
    this.data = null;
  }

  unsubscribeQueryies() {
    var _a;

    (_a = this.objectQuery) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    this.stopImageQuery.forEach(subscription => subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe());
  }

  notifyPaginationChange() {
    if (this.pagesLength) this.objectDetectionSubject.next({
      type: "pagination",
      data: {
        pagesLength: this.pagesLength,
        page: this.page,
        pageSize: this.pageSize
      }
    });
  }

  notifyImageChange() {
    this.objectDetectionSubject.next({
      type: "imageUpdated",
      data: {
        image: this.image,
        label: this.label,
        headerId: this.headerid
      }
    });
  }

  notifyGeolocationChange() {
    this.objectDetectionSubject.next({
      type: "geolocationUpdated",
      data: {
        latitude: this.latitude,
        longitude: this.longitude,
        coordinates: this.coordinates,
        vehicleId: this.vehicleId
      }
    });
  }

  recursiveImageHandler(stopInfo, currentHeaderId) {
    const header = currentHeaderId ? currentHeaderId : this.currentHeaderId;

    if (this.page === 0 && header === this.currentHeaderId) {
      this.isImageLoaded = false;
      setTimeout(() => this.imageHandler(stopInfo, true, header), 1000);
    }
  }

  imageHandler(stopInfo, isLiveUpdate = false, currentHeaderId) {
    let counter = 0;
    this.gqlQuery.getPreviewImageByCameraMessageIdCameraName({
      headerId: stopInfo.message.header.headerid,
      cameraName: stopInfo.message.cameraName
    }).subscribe(response => {
      if (!response) {
        if (isLiveUpdate) {
          this.recursiveImageHandler(stopInfo, currentHeaderId);
        } else {
          this.isImageLoaded = true;
        }

        return;
      }

      this.image = response.id;
      this.label = `${stopInfo.topic.name} | ${new Date(stopInfo.readingat).toLocaleString()}`;
      this.headerid = stopInfo.message.header.headerid;
      this.notifyPaginationChange();
      this.notifyImageChange();
    });
  }

  updateObjectDetection(data) {
    if (!data) return;
    this.coordinates = [[]];
    this.objectDetection = data;
    const centroid_location = data.message.centroidLocation;
    this.latitude = parseFloat(centroid_location.fieldOrigin.latitudeDeg);
    this.longitude = parseFloat(centroid_location.fieldOrigin.longitudeDeg);
    this.coordinates = [[this.longitude, this.latitude]];
    this.notifyGeolocationChange();
  }

  getImage() {
    this.isImageLoaded = false;
    this.coordinates = [[]];
    this.unsubscribeQueryies();
    this.objectQuery = this.gqlQuery.getObjectDetectionByVehicleId({
      vehicleId: this.vehicleId,
      cursor: this.page,
      size: this.pageSize
    }).subscribe(response => {
      if (!response || !response.nodes.length) {
        this.isImageLoaded = true;
        return;
      }

      this.currentHeaderId = response.nodes[0].message.header.headerid;
      this.updateObjectDetection(response.nodes[0]);
      this.pagesLength = response.totalCount;
      this.stopImageQuery = response.nodes.map(stopInfo => this.imageHandler(stopInfo));
      this.notifyPaginationChange();
    });
  }

  initiateLiveObjectDetection() {
    if (this.live) {
      this.objectSubscription = this.gqlSubscription.getObjectDetectionByVehicleId({
        vehicleId: this.vehicleId
      }).subscribe(response => {
        if (!response) return;
        this.pagesLength++;

        if (this.page) {
          this.page++;
          this.notifyPaginationChange();
        } else {
          this.image = "";
          this.isImageLoaded = false;
          this.currentHeaderId = response.message.header.headerid;
          this.updateObjectDetection(response);
          this.imageHandler(response, true);
        }
      });
    }
  }

  ngOnInit() {
    // @ts-ignore
    if (isNaN(this.vehicleId) && !this.data) return;else if (this.data) {
      this.updateObjectDetection(this.data);
      this.imageHandler(this.data);
    } else if (this.vehicleId) {
      this.getImage();
      this.initiateLiveObjectDetection();
    }
    this.objectDetectionSubject.subscribe(response => {
      switch (response.type) {
        case "updateImage":
          this.getCurrentImage({
            pageIndex: response.data.page,
            pageSize: response.data.pageSize
          });
          break;

        case "getPagination":
          this.notifyPaginationChange();
          break;

        case "getGeolocation":
          this.notifyGeolocationChange();
          break;
      }
    });
  }

  onShare() {
    var _this = this;

    return (0,_Users_anthonycrawford_Documents_Jupiter_JupiterWebService_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // const temp = await navigator.clipboard.writeText(Math.random().toString())
      navigator.clipboard.writeText(`${location.origin}/vehicles/${_this.vehicleId}/share/autonomy-state/${_this.objectDetection.id}`).then(() => {
        console.log("Yep", _this.objectDetection);

        _this.alertService.displayNotification("Copied!");
      }, err => {
        console.log("Nope");

        _this.alertService.displayNotification("Copy Failed!");
      });
    })();
  }

  getCurrentImage(event) {
    if (this.page !== event.pageIndex || event.pageSize !== this.pageSize) {
      this.page = event.pageIndex;
      this.image = "";
      this.pageSize = event.pageSize;
      this.getImage();
      console.log(event);
    }
  }

  ngOnDestroy() {
    var _a;

    this.unsubscribeQueryies();
    (_a = this.objectSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
  }

}

StopImagesComponent.ɵfac = function StopImagesComponent_Factory(t) {
  return new (t || StopImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_2__.GqlSubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_3__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_notifications_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService));
};

StopImagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: StopImagesComponent,
  selectors: [["app-stop-images"]],
  inputs: {
    vehicleId: "vehicleId",
    live: "live",
    data: "data"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 10,
  vars: 6,
  consts: [[3, "imageId", "label", "headerId", "subject", 4, "ngIf", "ngIfElse"], ["class", "map", 4, "ngIf"], [1, "footer"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Share button for stop images", 3, "click"], ["aria-hidden", "false", "aria-label", "stop image share"], [1, "paginations", 3, "length", "pageSize", "pageIndex", "page"], ["loader", ""], [3, "imageId", "label", "headerId", "subject"], [1, "map"], [3, "showTractor", "zoom", "coordinates", "vehicleId"], ["aria-hidden", "false", "class", "no-image", "aria-label", "No Image", 4, "ngIf"], ["mode", "indeterminate", 4, "ngIf"], ["aria-hidden", "false", "aria-label", "No Image", 1, "no-image"], ["mode", "indeterminate"]],
  template: function StopImagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, StopImagesComponent_app_image_0_Template, 1, 4, "app-image", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, StopImagesComponent_div_2_Template, 2, 4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StopImagesComponent_Template_button_click_4_listener() {
        return ctx.onShare();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "share");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-paginator", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function StopImagesComponent_Template_mat_paginator_page_7_listener($event) {
        return ctx.getCurrentImage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, StopImagesComponent_ng_template_8_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.image)("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.coordinates[0].length);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("length", ctx.pagesLength)("pageSize", ctx.pageSize)("pageIndex", ctx.page);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _images_image_image_component__WEBPACK_IMPORTED_MODULE_5__.ImageComponent, _geolocation_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_6__.StarfireComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBar],
  styles: [".map[_ngcontent-%COMP%] {\n  height: 256px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.footer[_ngcontent-%COMP%]   .paginations[_ngcontent-%COMP%] {\n  justify-self: flex-end;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3AtaW1hZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUk7RUFDSSxzQkFBQTtFQUNBLFdBQUE7QUFFUiIsImZpbGUiOiJzdG9wLWltYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXB7XG4gICAgaGVpZ2h0OjI1NnB4O1xufVxuLmZvb3RlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAucGFnaW5hdGlvbnN7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgfVxufSJdfQ== */"]
});

/***/ }),

/***/ 68027:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/topics/vehicles/vehicle-mission-stats/vehicle-mission-stats.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleMissionStatsComponent": () => (/* binding */ VehicleMissionStatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _core_medallion_medallion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/medallion/medallion.component */ 24229);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 99692);







function VehicleMissionStatsComponent_div_0_app_medallion_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-medallion", 17);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r6.getMissionStartTime());
} }
function VehicleMissionStatsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VehicleMissionStatsComponent_div_0_app_medallion_1_Template, 1, 1, "app-medallion", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-medallion", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-medallion", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-medallion", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-medallion", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-medallion", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-medallion", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-medallion", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-medallion", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "app-medallion", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-medallion", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-medallion", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.missionStats.missionStartTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r0.getUpTime());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r0.getAreaDone());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r0.getMovingPercentage());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r0.getAutonomyStopped());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r0.getAutonomyDriving());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r0.getStops());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r0.getTeleopDuration());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r0.getTelesupport());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r0.getFalsePositives());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r0.getTruePositives());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx_r0.getSupport());
} }
function VehicleMissionStatsComponent_ng_template_1_app_medallion_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-medallion", 20);
} }
function VehicleMissionStatsComponent_ng_template_1_mat_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 21);
} }
function VehicleMissionStatsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VehicleMissionStatsComponent_ng_template_1_app_medallion_1_Template, 1, 0, "app-medallion", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, VehicleMissionStatsComponent_ng_template_1_mat_progress_bar_2_Template, 1, 0, "mat-progress-bar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isDataLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.isDataLoaded);
} }
function VehicleMissionStatsComponent_mat_paginator_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-paginator", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function VehicleMissionStatsComponent_mat_paginator_3_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.onPaginate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageIndex", ctx_r3.cursor)("length", ctx_r3.pageLength)("pageSize", ctx_r3.pageSize)("pageSizeOptions", ctx_r3.pageSizeOptions);
} }
function VehicleMissionStatsComponent_ng_template_4_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 21);
} }
function VehicleMissionStatsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, VehicleMissionStatsComponent_ng_template_4_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 19);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.isDataLoaded);
} }
class VehicleMissionStatsComponent {
    constructor(graphQLSubscription, graphQLQuery) {
        this.graphQLSubscription = graphQLSubscription;
        this.graphQLQuery = graphQLQuery;
        this.gqlOnlineQuery = null;
        this.gqlOnlineSubscription = null;
        this.gqlVehicleStatusQuery = null;
        this.gqlMissionCount = null;
        this.gqlMissionStats = null;
        this.missions = [];
        this.pageSize = 1;
        this.pageSizeOptions = [1];
        this.pageLength = 0;
        this.isDataLoaded = false;
        this.isPaginationLoaded = false;
        this.cursor = 0;
    }
    convertToSeconds(time) {
        return parseFloat(((time * 1.0E-9)).toFixed(2));
    }
    convertToMinutes(time) {
        return +((this.convertToSeconds(parseFloat(time)) / 60).toFixed(2));
    }
    convertToHours(time) {
        return +((this.convertToMinutes(parseFloat(time)) / 60).toFixed(2));
    }
    formatData(data = {}) {
        const missionStats = data.missionStats;
        return Object.assign({}, missionStats);
    }
    getStatusSubscription() {
        this.gqlOnlineSubscription = this.graphQLSubscription
            .getMissionByVehicleId({ vehicleId: this.vehicleId })
            .subscribe((response) => {
            if (!response || !response.mission || new Date(response.mission.missionStartTime).getFullYear() < 1971)
                return;
            const event = response.event;
            const stats = response.mission;
            switch (event) {
                case "INSERT":
                    this.pageLength++;
                    if (stats.id !== this.missionStats.id && !this.cursor) {
                        this.missionStats = stats;
                    }
                    else {
                        this.cursor++;
                    }
                    break;
                case "UPDATE":
                    if (!this.missionStats || stats.id === this.missionStats.id) {
                        this.missionStats = stats;
                    }
                    break;
            }
        });
    }
    getVehicleStatus() {
        if (this.gqlVehicleStatusQuery)
            this.gqlVehicleStatusQuery.unsubscribe();
        this.gqlVehicleStatusQuery = this.graphQLQuery
            .getMissionByVehicleId({ vehicleId: this.vehicleId, cursor: this.cursor, size: this.pageSize })
            .subscribe((response) => {
            this.missions = response.nodes;
            this.missionStats = response.nodes[0];
            this.pageLength = response.totalCount;
            this.isDataLoaded = true;
            this.isPaginationLoaded = true;
        });
    }
    getUpTime() {
        const { durationAutonomyDriving, durationAutonomyStopped, durationNoAutonomy } = this.missionStats;
        const totalTimeSeconds = +(durationAutonomyDriving) + +(durationAutonomyStopped) + +(durationNoAutonomy);
        return `${this.convertToSeconds(totalTimeSeconds)} sec`;
        // return !totalTime ? totalTime.toString() : `${(totalTime / +(durationNoAutonomy)).toFixed(2)} hrs`
    }
    getMissionStartTime() {
        return new Date(this.missionStats.missionStartTime).valueOf() ? new Date(this.missionStats.missionStartTime).toLocaleString() : "N/A";
    }
    getAcresDone() {
        const metersPerAcre = 4047;
        const { autonomyAreaTravelledSqm } = this.missionStats;
        if (autonomyAreaTravelledSqm < metersPerAcre)
            return "0";
        return `${autonomyAreaTravelledSqm / metersPerAcre} ac`;
    }
    getFalsePositives() {
        return this.missionStats.numFalsePositives;
    }
    getTruePositives() {
        return this.missionStats.numTruePositives;
    }
    getStops() {
        return this.missionStats.numStops;
    }
    getAreaDone() {
        const metersPerAcre = 4047;
        const { autonomyAreaTravelledSqm } = this.missionStats;
        if (autonomyAreaTravelledSqm < metersPerAcre)
            return "0";
        return `${(autonomyAreaTravelledSqm / metersPerAcre).toFixed(2)} ac`;
    }
    getTeleopDuration() {
        return `${this.convertToSeconds(this.missionStats.durationTeleop)} sec`;
    }
    getMovingPercentage() {
        // Add All 3
        const { durationAutonomyDriving, durationAutonomyStopped, durationNoAutonomy } = this.missionStats;
        const totalTime = +(durationAutonomyDriving) + +(durationAutonomyStopped) + +(durationNoAutonomy);
        if (!+(totalTime))
            return `${0} %`;
        const driveTimePerc = (durationAutonomyDriving * 100) / +(totalTime);
        return `${driveTimePerc.toFixed(2)} % `;
    }
    getAutonomyStopped() {
        return `${this.convertToSeconds(this.missionStats.durationAutonomyStopped)} sec`;
    }
    getAutonomyDriving() {
        return `${this.convertToSeconds(this.missionStats.durationAutonomyDriving)} sec`;
    }
    getTelesupport() {
        const { durationAutonomyDriving, durationAutonomyStopped, durationNoAutonomy } = this.missionStats;
        const totalTime = +(durationAutonomyDriving) + +(durationAutonomyStopped) + +(durationNoAutonomy);
        if (!+(totalTime))
            return `${0} %`;
        return `${(+(this.missionStats.durationTeleop) * 100 / +(totalTime)).toFixed(2)} %`;
    }
    getSupport() {
        if (!parseFloat(this.getAreaDone()) || !+(this.missionStats.numTeleopQueries))
            return `${0}`;
        const support = (+(this.missionStats.numTeleopQueries) * 100) / parseFloat(this.getAreaDone());
        return support.toFixed(2);
    }
    ngOnInit() {
        if (!isNaN(this.vehicleId)) {
            this.getStatusSubscription();
            this.getVehicleStatus();
            // this.getMissionStatsCount()
        }
    }
    ngOnDestroy() {
        var _a, _b, _c, _d, _e;
        (_a = this.gqlOnlineQuery) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.gqlOnlineSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.gqlVehicleStatusQuery) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        (_d = this.gqlMissionCount) === null || _d === void 0 ? void 0 : _d.unsubscribe();
        (_e = this.gqlMissionStats) === null || _e === void 0 ? void 0 : _e.unsubscribe();
    }
    onPaginate(event) {
        this.cursor = event.pageIndex;
        this.pageLength = event.length;
        this.missionStats = null;
        this.isDataLoaded = false;
        this.getVehicleStatus();
    }
}
VehicleMissionStatsComponent.ɵfac = function VehicleMissionStatsComponent_Factory(t) { return new (t || VehicleMissionStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_0__.GqlSubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__.GqlQueryService)); };
VehicleMissionStatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VehicleMissionStatsComponent, selectors: [["app-vehicle-mission-stats"]], inputs: { vehicleId: "vehicleId", cursor: "cursor" }, decls: 6, vars: 4, consts: [["class", "mission-stats", 4, "ngIf", "ngIfElse"], ["nostats", ""], [3, "pageIndex", "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf", "ngIfElse"], ["paginationloader", ""], [1, "mission-stats"], ["class", "stats large", "title", "Mission Start", 3, "content", 4, "ngIf"], ["title", "Uptime", 1, "stats", 3, "content"], ["title", "Done", 1, "stats", 3, "content"], ["title", "Moving", 1, "stats", 3, "content"], ["title", "Auto Stop", 1, "stats", 3, "content"], ["title", "Auto Driving", 1, "stats", 3, "content"], ["title", "Stops", 1, "stats", 3, "content"], ["title", "Telesupport Duration", 1, "stats", 3, "content"], ["title", "Telesupport", 1, "stats", 3, "content"], ["title", "# False positive", 1, "stats", 3, "content"], ["title", "# True positive", 1, "stats", 3, "content"], ["title", "Support", 1, "stats", "medium-large", 3, "content"], ["title", "Mission Start", 1, "stats", "large", 3, "content"], ["class", "stats large", "title", "No stats for vehicle.", "content", "", 4, "ngIf"], ["mode", "indeterminate", 4, "ngIf"], ["title", "No stats for vehicle.", "content", "", 1, "stats", "large"], ["mode", "indeterminate"], [3, "pageIndex", "length", "pageSize", "pageSizeOptions", "page"]], template: function VehicleMissionStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, VehicleMissionStatsComponent_div_0_Template, 13, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VehicleMissionStatsComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, VehicleMissionStatsComponent_mat_paginator_3_Template, 1, 4, "mat-paginator", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, VehicleMissionStatsComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.missionStats)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isPaginationLoaded)("ngIfElse", _r4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _core_medallion_medallion_component__WEBPACK_IMPORTED_MODULE_2__.MedallionComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator], styles: [".mission-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.mission-stats[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 10px;\n  width: calc(50% - 10px);\n  height: auto;\n}\n.mission-stats[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]:last-of-type {\n  margin-right: 0px;\n}\n@media screen and (min-width: 400px) {\n  .mission-stats[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n    width: calc(33.3% - 10px);\n  }\n  .mission-stats[_ngcontent-%COMP%]   .stats.medium[_ngcontent-%COMP%] {\n    min-width: 175px;\n  }\n  .mission-stats[_ngcontent-%COMP%]   .stats.medium-large[_ngcontent-%COMP%] {\n    min-width: 175px;\n    width: calc(66.6% - 10px);\n  }\n  .mission-stats[_ngcontent-%COMP%]   .stats.large[_ngcontent-%COMP%] {\n    min-width: 300px;\n    width: calc(100% - 10px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtbWlzc2lvbi1zdGF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUVSO0FBRFE7RUFDSSxpQkFBQTtBQUdaO0FBQ0k7RUFDSTtJQUNJLHlCQUFBO0VBQ1Y7RUFDVTtJQUNJLGdCQUFBO0VBQ2Q7RUFDVTtJQUNJLGdCQUFBO0lBQ0EseUJBQUE7RUFDZDtFQUNVO0lBQ0ksZ0JBQUE7SUFDQSx3QkFBQTtFQUNkO0FBQ0YiLCJmaWxlIjoidmVoaWNsZS1taXNzaW9uLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pc3Npb24tc3RhdHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAuc3RhdHN7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgJjpsYXN0LW9mLXR5cGV7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDAwcHgpIHtcbiAgICAgICAgLnN0YXRze1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMzMuMyUgLSAxMHB4KTtcblxuICAgICAgICAgICAgJi5tZWRpdW0ge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTc1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLm1lZGl1bS1sYXJnZSB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNzVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg2Ni42JSAtIDEwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5sYXJnZSB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7ICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 48484:
/*!***************************************************************************************!*\
  !*** ./src/app/components/topics/vehicles/vehicle-status/vehicle-status.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleStatusComponent": () => (/* binding */ VehicleStatusComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_table_table_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/table/table-utils */ 417);
/* harmony import */ var src_app_components_modals_vehicle_status_detail_vehicle_status_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/modals/vehicle-status-detail/vehicle-status-detail.component */ 29082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 51095);












const _c0 = ["statusContainer"];
function VehicleStatusComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VehicleStatusComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", col_r11.status, " ");
} }
function VehicleStatusComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Alert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VehicleStatusComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r12 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.renderAlertsColumn(col_r12), " ");
} }
function VehicleStatusComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Timestamp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VehicleStatusComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, col_r13.readingat, "medium"), " ");
} }
function VehicleStatusComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 15);
} }
function VehicleStatusComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VehicleStatusComponent_tr_13_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const row_r14 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.openDialog(row_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r8.renderAlertsColumn(row_r14));
} }
function VehicleStatusComponent_mat_progress_bar_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 17);
} }
function VehicleStatusComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VehicleStatusComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.onScroll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r10.downloadButtonDisabled);
} }
class VehicleStatusComponent extends src_app_components_table_table_utils__WEBPACK_IMPORTED_MODULE_0__.TableUtil {
    constructor(graphQLSubscription, graphQLQuery, route, dialog) {
        super();
        this.graphQLSubscription = graphQLSubscription;
        this.graphQLQuery = graphQLQuery;
        this.route = route;
        this.dialog = dialog;
        this.gqlOnlineQuery = null;
        this.gqlOnlineSubscription = null;
        this.statusList = [];
        this.columns = ['alerts', 'status', 'timestamp'];
        this.pageSize = 5;
        this.pageSizeOptions = [5];
        this.pagesLength = 0;
        this.isDataLoaded = false;
        this.isInitDataLoaded = false;
        this.downloadButtonDisabled = false;
        this.cursor = 0;
    }
    sortStatus(val) {
        const list = [val, ...this.statusList];
        const marker = Math.ceil(list.length / 2) < 20 ? Math.ceil(list.length / 2) : 20;
        const sortedPortion = list.slice(0, marker).sort((a, b) => {
            const aTime = new Date(a.readingat).valueOf();
            const bTime = new Date(b.readingat).valueOf();
            if (aTime > bTime)
                return -1;
            else if (aTime < bTime)
                return 1;
            else
                return 0;
        });
        this.statusList = [...sortedPortion, ...list.slice(marker, list.length)];
    }
    getStatus() {
        if (this.gqlOnlineQuery)
            this.gqlOnlineQuery.unsubscribe();
        this.gqlOnlineQuery = this.graphQLQuery[this.startDateTime && this.endDateTime ? "getVehicleStatusByDateRange" : "getVehicleStatus"]({
            vehicle_id: this.vehicleId,
            cursor: this.cursor,
            size: this.pageSize,
            startDateTime: this.startDateTime,
            endDateTime: this.endDateTime
        })
            .subscribe((response) => {
            var _a;
            this.isInitDataLoaded = true;
            const results = response.nodes.map((result) => {
                return Object.assign(Object.assign({}, result), { status: result.state.name, alerts: result.alerts.length ? result.alerts[0] : null });
            });
            this.pagesLength = response.totalCount;
            this.statusList = this.statusList.concat(results);
            this.isDataLoaded = true;
            this.cursor = !this.cursor ? this.pageSize - 1 : this.cursor + 5;
            this.updateList(this.statusList);
            if (!results.length)
                this.downloadButtonDisabled = !results.length;
            // @ts-ignore
            (_a = this.statusContainer) === null || _a === void 0 ? void 0 : _a.nativeElement.scrollTop = this.statusContainer.nativeElement.scrollHeight;
        });
        if (!this.startDateTime && !this.endDateTime)
            this.gqlOnlineSubscription = this.graphQLSubscription
                .getVehicleStatus({ vehicleId: this.vehicleId })
                .subscribe((response) => {
                if (!response || !this.isInitDataLoaded)
                    return;
                this.sortStatus(response);
                // this.statusList.unshift(response)
                this.cursor++;
                this.updateList(this.statusList);
            });
    }
    ngOnInit() {
        if (!isNaN(this.vehicleId)) {
            this.getStatus();
        }
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.gqlOnlineQuery) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.gqlOnlineSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
    ngAfterViewInit() {
    }
    onScroll() {
        this.isDataLoaded = false;
        this.cursor = this.statusList.length;
        this.getStatus();
    }
    openDialog(row) {
        const dialogRef = this.dialog.open(src_app_components_modals_vehicle_status_detail_vehicle_status_detail_component__WEBPACK_IMPORTED_MODULE_1__.VehicleStatusDetailComponent, { data: row });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog closed: ${result}`);
        });
    }
    renderAlertsColumn(row) {
        if (!row.alerts)
            return 'information';
        switch (row.alerts.alertType.severity) {
            case 1:
                return 'priority_high';
                break;
            case 2:
                return row.alerts.alertType.name;
                break;
            default:
                return 'information';
        }
    }
}
VehicleStatusComponent.ɵfac = function VehicleStatusComponent_Factory(t) { return new (t || VehicleStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_2__.GqlSubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_3__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
VehicleStatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VehicleStatusComponent, selectors: [["app-vehicle-status"]], viewQuery: function VehicleStatusComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.statusContainer = _t.first);
    } }, inputs: { vehicleId: "vehicleId", cursor: "cursor", startDateTime: "startDateTime", endDateTime: "endDateTime" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 5, consts: [[1, "vehicle-status__container"], ["statusContainer", ""], ["mat-table", "", 1, "vehicles__status", 3, "dataSource"], ["matColumnDef", "status"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "alerts"], ["matColumnDef", "timestamp"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "class", "click", 4, "matRowDef", "matRowDefColumns"], ["mode", "indeterminate", 4, "ngIf"], ["class", "download", "mat-mini-fab", "", "color", "primary", "aria-label", "Load next set of status", 3, "disabled", "click", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["inline", "", 1, "icon"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["mode", "indeterminate"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Load next set of status", 1, "download", 3, "disabled", "click"], ["aria-hidden", "false", "aria-label", "Example home icon"]], template: function VehicleStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, VehicleStatusComponent_th_4_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, VehicleStatusComponent_td_5_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, VehicleStatusComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, VehicleStatusComponent_td_8_Template, 3, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, VehicleStatusComponent_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, VehicleStatusComponent_td_11_Template, 3, 4, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, VehicleStatusComponent_tr_12_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, VehicleStatusComponent_tr_13_Template, 1, 2, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, VehicleStatusComponent_mat_progress_bar_14_Template, 1, 0, "mat-progress-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, VehicleStatusComponent_button_15_Template, 3, 1, "button", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.tableList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isDataLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.startDateTime && !ctx.endDateTime);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n.vehicles__status[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 24px;\n}\n.vehicles__status[_ngcontent-%COMP%]   .critical[_ngcontent-%COMP%], .vehicles__status[_ngcontent-%COMP%]   .priority_high[_ngcontent-%COMP%] {\n  background-color: var(--critical);\n}\n.vehicles__status[_ngcontent-%COMP%]   .critical[_ngcontent-%COMP%]:hover, .vehicles__status[_ngcontent-%COMP%]   .priority_high[_ngcontent-%COMP%]:hover {\n  background-color: var(--critical-hover);\n}\n.vehicles__status[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  background-color: var(--error);\n}\n.vehicles__status[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]:hover {\n  background-color: var(--error-hover);\n}\n.vehicles__status[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\n  background-color: var(--warning);\n}\n.vehicles__status[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]:hover {\n  background-color: var(--warning-hover);\n}\n.vehicles__status[_ngcontent-%COMP%]   .logging[_ngcontent-%COMP%], .vehicles__status[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  background-color: var(--success);\n}\n.vehicles__status[_ngcontent-%COMP%]   .logging[_ngcontent-%COMP%]:hover, .vehicles__status[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]:hover {\n  background-color: var(--success-hover);\n}\n.vehicle-status__container[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  max-height: calc(350px - 19px);\n  margin-bottom: 10px;\n}\n.download[_ngcontent-%COMP%] {\n  float: right;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0FBQ1I7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBQ0o7QUFFSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQUNSO0FBRUk7O0VBRUksaUNBQUE7QUFBUjtBQUNROztFQUNJLHVDQUFBO0FBRVo7QUFFSTtFQUNJLDhCQUFBO0FBQVI7QUFDUTtFQUNJLG9DQUFBO0FBQ1o7QUFHSTtFQUNJLGdDQUFBO0FBRFI7QUFFUTtFQUNJLHNDQUFBO0FBQVo7QUFJSTs7RUFFSSxnQ0FBQTtBQUZSO0FBR1E7O0VBQ0ksc0NBQUE7QUFBWjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBRko7QUFLQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUZKIiwiZmlsZSI6InZlaGljbGUtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAubWF0LXJvdyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi52ZWhpY2xlc19fc3RhdHVzIHtcbiAgICAuaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB3aWR0aDoyNHB4O1xuICAgIH1cblxuICAgIC5jcml0aWNhbCxcbiAgICAucHJpb3JpdHlfaGlnaCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNyaXRpY2FsKTtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNyaXRpY2FsLWhvdmVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuZXJyb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvcik7XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1ob3Zlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAud2FybmluZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmluZy1ob3Zlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubG9nZ2luZyxcbiAgICAuaW5mb3JtYXRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3MtaG92ZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udmVoaWNsZS1zdGF0dXNfX2NvbnRhaW5lcntcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgbWF4LWhlaWdodDogY2FsYygzNTBweCAtIDE5cHgpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5kb3dubG9hZHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 96680:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/topics/vehicles/vehicles-offline/vehicles-offline.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiclesOfflineComponent": () => (/* binding */ VehiclesOfflineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_components_table_table_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/table/table-utils */ 417);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);








function VehiclesOfflineComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VehiclesOfflineComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r10.vehicle_id, " ");
} }
function VehiclesOfflineComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VehiclesOfflineComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, col_r11.name), " ");
} }
function VehiclesOfflineComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "IP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VehiclesOfflineComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, col_r12.ip), " ");
} }
function VehiclesOfflineComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 14);
} }
function VehiclesOfflineComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function VehiclesOfflineComponent_tr_16_Template_tr_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const row_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.rowClick(row_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VehiclesOfflineComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("No data found; ", _r0.value, "");
} }
class VehiclesOfflineComponent extends src_app_components_table_table_utils__WEBPACK_IMPORTED_MODULE_0__.TableUtil {
    constructor(gqlQuery) {
        super();
        this.gqlQuery = gqlQuery;
        // Private
        this.trackedVehicles = [];
        this.columns = ['id', 'name', 'ip'];
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.update = "";
    }
    ngOnInit() {
        this.offlineVehiclesQuery = this.gqlQuery
            .getOfflineVehicles()
            .subscribe((response) => {
            this.trackedVehicles = response;
            this.updateList(this.trackedVehicles);
        });
    }
    ngOnChanges(changes) {
        console.log(changes.update.currentValue);
        if (changes.update.currentValue.event)
            switch (changes.update.currentValue.event) {
                case "INSERT":
                    const offlineIndex = this.trackedVehicles.findIndex((vehicle) => {
                        return vehicle.vehicle_id === changes.update.currentValue.vehicle_id;
                    });
                    if (offlineIndex !== -1)
                        this.trackedVehicles.splice(offlineIndex, 1);
                    this.updateList(this.trackedVehicles);
                    break;
                case "DELETE":
                    this.trackedVehicles.push(changes.update.currentValue);
                    this.updateList(this.trackedVehicles);
                    break;
            }
    }
    ngAfterViewInit() { }
    ngOnDestroy() {
        var _a;
        (_a = this.offlineVehiclesQuery) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
VehiclesOfflineComponent.ɵfac = function VehiclesOfflineComponent_Factory(t) { return new (t || VehiclesOfflineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__.GqlQueryService)); };
VehiclesOfflineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VehiclesOfflineComponent, selectors: [["app-vehicles-offline"]], inputs: { update: "update" }, outputs: { onClick: "onClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 3, consts: [["appearance", "standard"], ["matInput", "", "placeholder", "Ex. Tractor", 3, "keyup"], ["input", ""], ["mat-table", "", 1, "vehicles__offline", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "ip"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "dblclick", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "dblclick"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function VehiclesOfflineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function VehiclesOfflineComponent_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, VehiclesOfflineComponent_th_7_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, VehiclesOfflineComponent_td_8_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, VehiclesOfflineComponent_th_10_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, VehiclesOfflineComponent_td_11_Template, 3, 3, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, VehiclesOfflineComponent_th_13_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, VehiclesOfflineComponent_td_14_Template, 3, 3, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, VehiclesOfflineComponent_tr_15_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, VehiclesOfflineComponent_tr_16_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, VehiclesOfflineComponent_tr_17_Template, 3, 1, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.tableList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatNoDataRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe], styles: [".mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 24px;\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .priority_high[_ngcontent-%COMP%] {\n  background-color: var(--critical);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  background-color: var(--error);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\n  background-color: var(--warning);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .logging[_ngcontent-%COMP%], .vehicles__online[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  background-color: var(--success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGVzLW9mZmxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUlJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FBRFI7O0FBR0k7RUFDSSxpQ0FBQTtBQURSOztBQUlJO0VBQ0ksOEJBQUE7QUFGUjs7QUFLSTtFQUNJLGdDQUFBO0FBSFI7O0FBTUk7O0VBRUksZ0NBQUE7QUFKUiIsImZpbGUiOiJ2ZWhpY2xlcy1vZmZsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG50ZCwgdGgge1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxudHIubWF0LXJvdywgdHIubWF0LWZvb3Rlci1yb3d7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udmVoaWNsZXNfX29ubGluZSB7XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB3aWR0aDoyNHB4O1xuICAgIH1cbiAgICAucHJpb3JpdHlfaGlnaCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNyaXRpY2FsKTtcbiAgICB9XG5cbiAgICAuZXJyb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvcik7XG4gICAgfVxuXG4gICAgLndhcm5pbmcge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICB9XG5cbiAgICAubG9nZ2luZyxcbiAgICAuaW5mb3JtYXRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 20253:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/topics/vehicles/vehicles-online/vehicles-online.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiclesOnlineComponent": () => (/* binding */ VehiclesOnlineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_components_table_table_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/table/table-utils */ 417);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);










function VehiclesOnlineComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Alert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehiclesOnlineComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.renderAlertsColumn(col_r12), " ");
} }
function VehiclesOnlineComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehiclesOnlineComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r13.vehicle_id, " ");
} }
function VehiclesOnlineComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehiclesOnlineComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, col_r14.name), " ");
} }
function VehiclesOnlineComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "IP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehiclesOnlineComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, col_r15.ip), " ");
} }
function VehiclesOnlineComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 16);
} }
function VehiclesOnlineComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dblclick", function VehiclesOnlineComponent_tr_19_Template_tr_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const row_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.rowClick(row_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r10.renderAlertsColumn(row_r16));
} }
function VehiclesOnlineComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("No data found; ", _r0.value, "");
} }
class VehiclesOnlineComponent extends src_app_components_table_table_utils__WEBPACK_IMPORTED_MODULE_0__.TableUtil {
    constructor(gqlSubscription, gqlQuery) {
        super();
        this.gqlSubscription = gqlSubscription;
        this.gqlQuery = gqlQuery;
        // Private
        this.trackedVehicles = [];
        this.columns = ['alert', 'id', 'name', 'ip'];
        // Events
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        // Query Vehicles Currently Online
        this.onlineVehiclesQuery = this.gqlQuery
            .getOnlineVehicles()
            .subscribe((response) => {
            this.trackedVehicles = response;
            this.updateList(this.trackedVehicles);
        });
        // Subscribe to Live onUpdates to Online Vehicles
        this.onlineVehicleSubscription = this.gqlSubscription
            .getOnlineVehicles()
            .subscribe(this.onlineVehicleSubscriptionHandler.bind(this));
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.onlineVehiclesQuery) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.onlineVehicleSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
    onlineVehicleSubscriptionHandler(response) {
        switch (response.event) {
            case "INSERT":
                this.trackedVehicles.push(response);
                this.trackedVehicles.sort((a, b) => a.alerts.alertType.severity - b.alerts.alertType.severity);
                this.updateList(this.trackedVehicles);
                this.onUpdate.emit(response);
                break;
            case "UPDATE":
                const foundIndex = this.trackedVehicles.findIndex((vehicle) => vehicle.vehicle_id === response.vehicle_id);
                if (foundIndex !== -1
                    && JSON.stringify(this.trackedVehicles[foundIndex]) !== JSON.stringify(response)) {
                    this.trackedVehicles[foundIndex] = response;
                    this.updateList(this.trackedVehicles);
                }
                break;
            case "DELETE":
                const onlineIndex = this.trackedVehicles.findIndex((vehicle) => {
                    return vehicle.id === response.id;
                });
                if (onlineIndex !== -1) {
                    const deletedVehicle = this.trackedVehicles.splice(onlineIndex, 1);
                    deletedVehicle[0].event = response.event;
                    this.onUpdate.emit(Object.assign({}, deletedVehicle[0]));
                }
                this.updateList(this.trackedVehicles);
                break;
        }
    }
    renderAlertsColumn(row) {
        if (!row.alerts)
            return 'information';
        switch (row.alerts.alertType.severity) {
            case 1:
                return 'priority_high';
                break;
            case 2:
                return row.alerts.alertType.name;
                break;
            default:
                return 'information';
        }
    }
}
VehiclesOnlineComponent.ɵfac = function VehiclesOnlineComponent_Factory(t) { return new (t || VehiclesOnlineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_1__.GqlSubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_2__.GqlQueryService)); };
VehiclesOnlineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VehiclesOnlineComponent, selectors: [["app-vehicles-online"]], outputs: { onUpdate: "onUpdate", onClick: "onClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 3, consts: [["appearance", "standard"], ["matInput", "", "placeholder", "Ex. Tractor", 3, "keyup"], ["input", ""], ["mat-table", "", 1, "vehicles__online", 3, "dataSource"], ["matColumnDef", "alert"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["matColumnDef", "name"], ["matColumnDef", "ip"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "class", "dblclick", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["mat-cell", ""], ["inline", "", 1, "icon"], ["mat-header-row", ""], ["mat-row", "", 3, "dblclick"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function VehiclesOnlineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function VehiclesOnlineComponent_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, VehiclesOnlineComponent_th_7_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, VehiclesOnlineComponent_td_8_Template, 3, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, VehiclesOnlineComponent_th_10_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, VehiclesOnlineComponent_td_11_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, VehiclesOnlineComponent_th_13_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, VehiclesOnlineComponent_td_14_Template, 3, 3, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, VehiclesOnlineComponent_th_16_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, VehiclesOnlineComponent_td_17_Template, 3, 3, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, VehiclesOnlineComponent_tr_18_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, VehiclesOnlineComponent_tr_19_Template, 1, 2, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, VehiclesOnlineComponent_tr_20_Template, 3, 1, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.tableList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatNoDataRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe], styles: [".mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 24px;\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .critical[_ngcontent-%COMP%], .vehicles__online[_ngcontent-%COMP%]   .priority_high[_ngcontent-%COMP%] {\n  background-color: var(--critical);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  background-color: var(--error);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\n  background-color: var(--warning);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .logging[_ngcontent-%COMP%], .vehicles__online[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  background-color: var(--success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGVzLW9ubGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBSUk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUFEUjs7QUFHSTs7RUFFSSxpQ0FBQTtBQURSOztBQUlJO0VBQ0ksOEJBQUE7QUFGUjs7QUFLSTtFQUNJLGdDQUFBO0FBSFI7O0FBTUk7O0VBRUksZ0NBQUE7QUFKUiIsImZpbGUiOiJ2ZWhpY2xlcy1vbmxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLCB0aCB7XG4gICAgd2lkdGg6IDI1JTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG50ci5tYXQtcm93LCB0ci5tYXQtZm9vdGVyLXJvd3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52ZWhpY2xlc19fb25saW5lIHtcblxuICAgIC5pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIHdpZHRoOjI0cHg7XG4gICAgfVxuICAgIC5jcml0aWNhbCxcbiAgICAucHJpb3JpdHlfaGlnaCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNyaXRpY2FsKTtcbiAgICB9XG5cbiAgICAuZXJyb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvcik7XG4gICAgfVxuXG4gICAgLndhcm5pbmcge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICB9XG5cbiAgICAubG9nZ2luZyxcbiAgICAuaW5mb3JtYXRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 72504:
/*!*******************************************!*\
  !*** ./src/app/modules/graphql.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApollo": () => (/* binding */ createApollo),
/* harmony export */   "GraphQLModule": () => (/* binding */ GraphQLModule)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ 550);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client/core */ 87328);
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular/http */ 31586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const uri = 'http://localhost:4000/graphql'; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri }),
        cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),
    };
}
class GraphQLModule {
}
GraphQLModule.ɵfac = function GraphQLModule_Factory(t) { return new (t || GraphQLModule)(); };
GraphQLModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GraphQLModule });
GraphQLModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__.APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__.HttpLink],
        },
    ] });


/***/ }),

/***/ 24789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);


class DashboardComponent {
    constructor(gqlSubsctiption) {
        this.gqlSubsctiption = gqlSubsctiption;
    }
    ngOnInit() {
    }
    ngAfterViewInit() { }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_0__.GqlSubscriptionService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 3, vars: 0, consts: [["id", "map"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 0);
    } }, styles: ["#map[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcbiAgICB3aWR0aDphdXRvO1xuICAgIGhlaWdodDogMTAwdmg7XG59Il19 */"] });


/***/ }),

/***/ 58449:
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 2, vars: 0, template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 24902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ 37055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 98295);











function LoginComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.loginWithGoogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login with Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(socialAuthService, router, route, snackBar) {
        this.socialAuthService = socialAuthService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.isLoggedin = false;
    }
    ngOnInit() {
        this.socialAuthService.authState.subscribe((user) => {
            this.googleUser = user;
            this.isLoggedin = (user != null);
            if (this.isLoggedin) {
                this.router.navigate(["/"]);
            }
            // else
            //   this.snackBar.open("LogIn Failed");
        });
    }
    loginWithGoogle() {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__.GoogleLoginProvider.PROVIDER_ID);
    }
    logOut() {
        this.socialAuthService.signOut();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__.SocialAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 8, vars: 1, consts: [[1, "login"], [1, "login__card"], [1, "login__card--logo"], ["src", "/assets/brt-icon-sm.png"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], ["matSuffix", "", "aria-label", "Log into Google"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_button_7_Template, 4, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedin === false);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardActions, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix], styles: [".login[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(100vh - 50px);\n  background-color: var(--blueriver);\n}\n.login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%] {\n  width: 100vw;\n  max-width: 500px;\n  max-height: 700px;\n  margin: auto;\n  align-self: center;\n  justify-self: center;\n  top: 50px;\n  display: flex;\n  flex-direction: column;\n}\n.login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%]   .login__card--logo[_ngcontent-%COMP%] {\n  justify-self: center;\n  align-self: center;\n  margin-bottom: 10px;\n  flex-basis: 1;\n  display: flex;\n  flex-direction: column;\n  justify-self: center;\n  align-items: center;\n  padding: 20px 0;\n  width: 100%;\n}\n.login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  margin: auto;\n  flex-basis: 1;\n  width: 100%;\n}\n.login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 20px 0;\n}\n@media screen and (min-width: 800px) {\n  .login[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%] {\n    top: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7QUFDSjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFEUjtBQUdRO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQURaO0FBSVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFGWjtBQUtRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUhaO0FBUUE7RUFDSTtJQUNJLGFBQUE7RUFMTjtFQU9NO0lBQ0ksUUFBQTtFQUxWO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlcml2ZXIpO1xuXG5cblxuICAgIC5sb2dpbl9fY2FyZCB7XG4gICAgICAgIHdpZHRoOjEwMHZ3O1xuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA3MDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICB0b3A6NTBweDtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5sb2dpbl9fY2FyZC0tbG9nb3tcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgICAgICAgICAgZmxleC1iYXNpczogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICAgICAgZmxleC1iYXNpczogMTtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWNhcmQtYWN0aW9uc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MDBweCkge1xuICAgIC5sb2dpbiB7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcblxuICAgICAgICAubG9naW5fX2NhcmQge1xuICAgICAgICAgICAgdG9wOjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 58220:
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 0, template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 97618:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/vehicle/pages/vehicle-geolocation/vehicle-geolocation.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleGeolocationComponent": () => (/* binding */ VehicleGeolocationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _components_topics_geolocation_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/topics/geolocation/starfire/starfire.component */ 51721);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);














function VehicleGeolocationComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function VehicleGeolocationComponent_form_0_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-radio-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-radio-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Static ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Replay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-slide-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VehicleGeolocationComponent_form_0_Template_mat_slide_toggle_click_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.onLiveToggle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.fgGeolocationFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.fgGeolocationFilter.get("isLive").value);
} }
function VehicleGeolocationComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-starfire", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showTractor", true)("zoom", 16)("vehicleId", ctx_r7.vehicleId);
} }
function VehicleGeolocationComponent_div_1_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-starfire", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("startDateTime", ctx_r10.startDateTime)("endDateTime", ctx_r10.endDateTime)("showTractor", true)("zoom", 16)("vehicleId", ctx_r10.vehicleId);
} }
function VehicleGeolocationComponent_div_1_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-starfire", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("startDateTime", ctx_r11.startDateTime)("endDateTime", ctx_r11.endDateTime)("showTractor", true)("zoom", 16)("vehicleId", ctx_r11.vehicleId);
} }
function VehicleGeolocationComponent_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, VehicleGeolocationComponent_div_1_ng_template_2_div_0_Template, 5, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VehicleGeolocationComponent_div_1_ng_template_2_div_1_Template, 5, 5, "div", 21);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.fgGeolocationFilter.get("map").value === "static");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.fgGeolocationFilter.get("map").value === "replay");
} }
function VehicleGeolocationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VehicleGeolocationComponent_div_1_div_1_Template, 5, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VehicleGeolocationComponent_div_1_ng_template_2_Template, 2, 2, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.fgGeolocationFilter.get("isLive").value)("ngIfElse", _r8);
} }
function VehicleGeolocationComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 24);
} }
class VehicleGeolocationComponent {
    constructor(route) {
        this.route = route;
        this.vehicleId = "";
        this.startDateTime = "";
        this.endDateTime = "";
        this.refresh = false;
        this.formatTimestampForInputs();
    }
    formatTimestampForInputs() {
        const format = 'YYYY-MM-DDTHH:mm:ss';
        this.startDateTime = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'hours').format(format);
        this.endDateTime = moment__WEBPACK_IMPORTED_MODULE_0___default()().format(format);
    }
    ngOnInit() {
        this.vehicleId = this.route.parent.snapshot.params.id;
        this.fgGeolocationFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            startDateTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.startDateTime, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            endDateTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.endDateTime, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            map: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("static", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            isLive: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
        });
        console.log(this.fgGeolocationFilter.get('map'));
    }
    refreshMap() {
        this.refresh = !this.refresh;
        setTimeout(() => this.refresh = !this.refresh, 0);
    }
    onLiveToggle(event) {
        const isLive = !event.currentTarget.querySelector("input").checked;
        if (isLive) {
            this.fgGeolocationFilter.controls.startDateTime.disable();
            this.fgGeolocationFilter.controls.endDateTime.disable();
            this.fgGeolocationFilter.controls.map.disable();
        }
        else {
            this.fgGeolocationFilter.controls.startDateTime.enable();
            this.fgGeolocationFilter.controls.endDateTime.enable();
            this.fgGeolocationFilter.controls.map.enable();
        }
    }
    onSubmit() {
        this.startDateTime = this.fgGeolocationFilter.value.startDateTime;
        this.endDateTime = this.fgGeolocationFilter.value.endDateTime;
        this.refreshMap();
    }
}
VehicleGeolocationComponent.ɵfac = function VehicleGeolocationComponent_Factory(t) { return new (t || VehicleGeolocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
VehicleGeolocationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VehicleGeolocationComponent, selectors: [["app-vehicle-geolocation"]], decls: 4, vars: 3, consts: [["class", "geolocation__form", 3, "formGroup", "submit", 4, "ngIf"], ["class", "grid gap", 4, "ngIf", "ngIfElse"], ["loader", ""], [1, "geolocation__form", 3, "formGroup", "submit"], [1, "geolocation__form--field"], ["appearance", "fill", 1, "example-form-field", "datetime"], ["matInput", "", "type", "datetime-local", "formControlName", "startDateTime"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear"], ["matInput", "", "type", "datetime-local", "formControlName", "endDateTime"], ["aria-label", "Change Map View", "formControlName", "map"], ["value", "static", 1, "geolocation__form--radio"], ["value", "replay", 1, "geolocation__form--radio"], ["formControlName", "isLive", 3, "click"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Submit geolocation query", 3, "disabled"], [1, "grid", "gap"], ["class", "grid__cell map", 4, "ngIf", "ngIfElse"], ["history", ""], [1, "grid__cell", "map"], [1, "grid__cell--label"], [1, "grid__cell--content"], ["playback", "live", 3, "showTractor", "zoom", "vehicleId"], ["class", "grid__cell map", 4, "ngIf"], [3, "startDateTime", "endDateTime", "showTractor", "zoom", "vehicleId"], ["playback", "replay", 3, "startDateTime", "endDateTime", "showTractor", "zoom", "vehicleId"], ["mode", "indeterminate"]], template: function VehicleGeolocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, VehicleGeolocationComponent_form_0_Template, 30, 2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VehicleGeolocationComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VehicleGeolocationComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fgGeolocationFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.refresh)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioButton, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggle, _components_topics_geolocation_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_1__.StarfireComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBar], styles: [".geolocation__form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  flex-wrap: wrap;\n}\n.geolocation__form[_ngcontent-%COMP%]   .geolocation__form--field[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.geolocation__form[_ngcontent-%COMP%]   .geolocation__form--field[_ngcontent-%COMP%]:last-of-type {\n  margin-right: 0px;\n}\n.geolocation__form[_ngcontent-%COMP%]   .geolocation__form--field[_ngcontent-%COMP%]   .geolocation__form--radio[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.map[_ngcontent-%COMP%]   .grid__cell--content[_ngcontent-%COMP%] {\n  height: 400px;\n}\n.datetime[_ngcontent-%COMP%] {\n  width: 280px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtZ2VvbG9jYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFDUTtFQUNJLGlCQUFBO0FBQ1o7QUFFUTtFQUNJLGtCQUFBO0FBQVo7QUFLSTtFQUNJLGFBQUE7QUFGUjtBQU1BO0VBQ0ksWUFBQTtBQUhKIiwiZmlsZSI6InZlaGljbGUtZ2VvbG9jYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2VvbG9jYXRpb25fX2Zvcm17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5nZW9sb2NhdGlvbl9fZm9ybS0tZmllbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZ2VvbG9jYXRpb25fX2Zvcm0tLXJhZGlve1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLm1hcCB7XG4gICAgLmdyaWRfX2NlbGwtLWNvbnRlbnR7XG4gICAgICAgIGhlaWdodDo0MDBweDtcbiAgICB9XG59XG5cbi5kYXRldGltZXtcbiAgICB3aWR0aDoyODBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 17962:
/*!********************************************************************************!*\
  !*** ./src/app/pages/vehicle/pages/vehicle-images/vehicle-images.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleImagesComponent": () => (/* binding */ VehicleImagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var src_app_services_form_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/form/filter.service */ 94707);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var src_app_services_layout_scroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/layout/scroll.service */ 9312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _components_images_image_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/images/image/image.component */ 89990);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);



















function VehicleImagesComponent_div_0_form_1_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", topic_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", topic_r7.name, " ");
} }
function VehicleImagesComponent_div_0_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function VehicleImagesComponent_div_0_form_1_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r8.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Image Topics");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, VehicleImagesComponent_div_0_form_1_mat_option_16_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r4.fgImageFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.topics);
} }
function VehicleImagesComponent_div_0_div_3_app_image_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-image", 22);
} if (rf & 2) {
    const image_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("imageId", image_r10.image.id)("label", image_r10.header.readingat)("headerId", image_r10.header.headerId);
} }
function VehicleImagesComponent_div_0_div_3_mat_expansion_panel_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Meta Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Camera:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Encoding:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Height:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Width:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Left Exposure:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Right Exposure:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Left Gain:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Right Gain:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Descriptor ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", image_r10.header.readingat, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", image_r10.cameraMeta.cameraName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", image_r10.image.encoding, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", image_r10.image.height, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", image_r10.image.width, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", image_r10.cameraMeta.leftExposure, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", image_r10.cameraMeta.rightExposure, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", image_r10.cameraMeta.leftGain, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", image_r10.cameraMeta.rightGain, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](image_r10.header.headerId);
} }
function VehicleImagesComponent_div_0_div_3_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "image_not_supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function VehicleImagesComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, VehicleImagesComponent_div_0_div_3_app_image_5_Template, 1, 3, "app-image", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, VehicleImagesComponent_div_0_div_3_mat_expansion_panel_6_Template, 45, 10, "mat-expansion-panel", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, VehicleImagesComponent_div_0_div_3_ng_template_7_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r10 = ctx.$implicit;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 4, image_r10.header.readingat, "medium", "locale"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", image_r10.header.headerId && image_r10.image.id)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", image_r10.cameraMeta);
} }
const _c0 = function (a0) { return { "col-2": a0 }; };
function VehicleImagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, VehicleImagesComponent_div_0_form_1_Template, 21, 2, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, VehicleImagesComponent_div_0_div_3_Template, 9, 8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.fgImageFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r0.pageSize > 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
function VehicleImagesComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " There are no images associated with this vehicle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function VehicleImagesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, VehicleImagesComponent_ng_template_1_div_0_Template, 2, 0, "div", 2);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.topics.length);
} }
function VehicleImagesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-progress-bar", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class VehicleImagesComponent {
    constructor(route, gqlQuery, filterService, _snackBar, scrollService) {
        this.route = route;
        this.gqlQuery = gqlQuery;
        this.filterService = filterService;
        this._snackBar = _snackBar;
        this.scrollService = scrollService;
        this.topicsSubscription = null;
        this.imageQuery = null;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.infiniteScrollSubscription = null;
        this.timeFormat = 'YYYY-MM-DDTHH:mm:ss';
        this.vehicleId = "";
        this.startDateTime = "";
        this.endDateTime = "";
        this.fgImageFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({});
        this.topics = [];
        this.selectedTopic = "";
        this.pageSize = 10;
        this.pageSizeOptions = [10, 20, 40];
        this.cursor = 0;
        this.images = [];
        this.imagesLoaded = false;
        this.topicsLoaded = false;
        this.formatTimestampForInputs();
    }
    formatTimestampForInputs() {
        const format = 'YYYY-MM-DDTHH:mm:ss';
        this.startDateTime = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'hours').format(format);
        this.endDateTime = moment__WEBPACK_IMPORTED_MODULE_0___default()().format(format);
    }
    noResultsNotification() {
        this._snackBar.open("No results found.", 'Dismiss', {
            duration: 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
    setupInfiniteScroll() {
        this.infiniteScrollSubscription = this.scrollService.contentScroll.subscribe((scrolled) => {
            if (scrolled) {
                this.cursor = this.images.length;
                this.onSubmit(scrolled);
            }
        });
    }
    ngOnInit() {
        this.vehicleId = this.route.parent.snapshot.params.id;
        this.topicsSubscription = this.gqlQuery
            .getTopicsByCategoryVehicleId({
            vehicleId: this.vehicleId,
            topicName: "%/left/preview",
            topicList: ["/toUI/closest_on_path_object"],
            category: "images"
        })
            .subscribe((response) => {
            if (!response.length) {
                this.imagesLoaded = true;
            }
            this.topics = response;
            this.fgImageFilter = this.filterService.getFilterState(`images-${this.vehicleId}`) || new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
                startDateTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.startDateTime, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
                endDateTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.endDateTime, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
                topics: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.topics.length ? this.topics[0].name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
                isLive: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
            });
            if (this.topics.length)
                this.onSubmit();
            this.setupInfiniteScroll();
            this.topicsLoaded = true;
        });
    }
    onSubmit(scrolled) {
        if (!this.fgImageFilter.valid)
            return;
        if (!scrolled)
            this.images = [];
        this.imagesLoaded = false;
        const variables = {
            vehicleId: this.vehicleId,
            topicName: this.fgImageFilter.controls.topics.value,
            startDateTime: moment__WEBPACK_IMPORTED_MODULE_0___default()(this.fgImageFilter.controls.startDateTime.value).utc(),
            endDateTime: moment__WEBPACK_IMPORTED_MODULE_0___default()(this.fgImageFilter.controls.endDateTime.value).utc(),
            cursor: this.cursor,
            size: this.pageSize
        };
        switch (this.fgImageFilter.controls.topics.value) {
            case "/toUI/closest_on_path_object":
                this.imageQuery = this
                    .gqlQuery.getObjectDetectionImages(variables)
                    .subscribe((response) => {
                    if (!response.nodes.length) {
                        this.noResultsNotification();
                        // if(!scrolled)
                        //   this.images = []
                        return;
                    }
                    // if(scrolled)
                    this.images = this.images.concat(response.nodes);
                    // else 
                    //   this.images = response.nodes
                    this.imagesLoaded = true;
                });
                break;
            default:
                if (!this.filterService.getFilterState(`images-${this.vehicleId}`)) {
                    this.imageQuery = this
                        .gqlQuery.getLatestImagePreview(variables)
                        .subscribe((response) => {
                        if (!response || !response.cameraData.nodes.length) {
                            this.noResultsNotification();
                            // if(!scrolled)
                            //   this.images = []
                        }
                        const results = response.cameraData.nodes.map((item) => item.msg);
                        const startTime = results[results.length - 1] ? results[results.length - 1].header.readingat : new Date();
                        this.fgImageFilter
                            .controls.startDateTime
                            .patchValue(moment__WEBPACK_IMPORTED_MODULE_0___default()(startTime).subtract(2, 'day')
                            .format(this.timeFormat));
                        this.fgImageFilter
                            .controls.endDateTime
                            .patchValue(moment__WEBPACK_IMPORTED_MODULE_0___default()().format(this.timeFormat));
                        this.filterService.saveFilterState(`images-${this.vehicleId}`, this.fgImageFilter);
                        // if(scrolled)
                        this.images = this.images.concat(results);
                        // else 
                        //   this.images = results
                        this.imagesLoaded = true;
                    });
                }
                else
                    this.imageQuery = this
                        .gqlQuery
                        .getImagePreview(variables)
                        .subscribe((response) => {
                        if (!response || !response.cameraData.nodes.length) {
                            this.noResultsNotification();
                            // if(!scrolled)
                            //   this.images = []
                            this.imagesLoaded = true;
                            return;
                        }
                        const results = response.cameraData.nodes.map((item) => item.msg);
                        // if(scrolled)
                        this.images = this.images.concat(results);
                        // else 
                        //   this.images = results
                        this.imagesLoaded = true;
                    });
                break;
        }
    }
    ngOnDestroy() {
        var _a, _b, _c;
        this.filterService.saveFilterState(`images-${this.vehicleId}`, this.fgImageFilter);
        (_a = this.imageQuery) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.topicsSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.infiniteScrollSubscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    }
}
VehicleImagesComponent.ɵfac = function VehicleImagesComponent_Factory(t) { return new (t || VehicleImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_form_filter_service__WEBPACK_IMPORTED_MODULE_2__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_layout_scroll_service__WEBPACK_IMPORTED_MODULE_3__.ScrollService)); };
VehicleImagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: VehicleImagesComponent, selectors: [["app-vehicle-images"]], decls: 4, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["loader", ""], [4, "ngIf"], ["class", "image__form", 3, "formGroup", "submit", 4, "ngIf"], [1, "grid", "gap", 3, "ngClass"], ["class", "grid__cell", 4, "ngFor", "ngForOf"], [1, "image__form", 3, "formGroup", "submit"], [1, "image__form--field"], ["appearance", "fill", 1, "example-form-field", "datetime"], ["matInput", "", "type", "datetime-local", "formControlName", "startDateTime"], ["matInput", "", "type", "datetime-local", "formControlName", "endDateTime"], ["appearance", "fill"], ["formControlName", "topics"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Submit geolocation query"], [3, "value"], [1, "grid__cell"], [1, "grid__cell--label"], [1, "grid__cell--content"], [3, "imageId", "label", "headerId", 4, "ngIf", "ngIfElse"], ["hideToggle", "", 4, "ngIf"], ["noimage", ""], [3, "imageId", "label", "headerId"], ["hideToggle", ""], ["aria-hidden", "false", "aria-label", "No Image", 1, "no-image"], ["mode", "indeterminate"]], template: function VehicleImagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, VehicleImagesComponent_div_0_Template, 4, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, VehicleImagesComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, VehicleImagesComponent_div_3_Template, 2, 0, "div", 2);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fgImageFilter && ctx.topics.length)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.imagesLoaded || !ctx.topicsLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _components_images_image_image_component__WEBPACK_IMPORTED_MODULE_4__.ImageComponent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelTitle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBar], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".image__form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  flex-wrap: wrap;\n  padding: 20px;\n}\n.image__form[_ngcontent-%COMP%]   .image__form--field[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.image__form[_ngcontent-%COMP%]   .image__form--field[_ngcontent-%COMP%]:last-of-type {\n  margin-right: 0px;\n}\n.image__form[_ngcontent-%COMP%]   .image__form--field[_ngcontent-%COMP%]   .image__form--radio[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.datetime[_ngcontent-%COMP%] {\n  width: 280px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtaW1hZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQUNRO0VBQ0ksaUJBQUE7QUFDWjtBQUVRO0VBQ0ksa0JBQUE7QUFBWjtBQUtBO0VBQ0ksWUFBQTtBQUZKIiwiZmlsZSI6InZlaGljbGUtaW1hZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlX19mb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIC5pbWFnZV9fZm9ybS0tZmllbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2VfX2Zvcm0tLXJhZGlve1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGF0ZXRpbWV7XG4gICAgd2lkdGg6MjgwcHg7XG59Il19 */"] });


/***/ }),

/***/ 81668:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/vehicle/pages/vehicle-logging/vehicle-logging.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleLoggingComponent": () => (/* binding */ VehicleLoggingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_components_table_table_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/table/table-utils */ 417);
/* harmony import */ var src_app_components_modals_vehicle_status_detail_vehicle_status_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/modals/vehicle-status-detail/vehicle-status-detail.component */ 29082);
/* harmony import */ var src_app_components_modals_object_detection_detail_object_detection_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/modals/object-detection-detail/object-detection-detail.component */ 56675);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_services_layout_scroll_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/layout/scroll.service */ 9312);
/* harmony import */ var src_app_services_form_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/form/filter.service */ 94707);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
























function VehicleLoggingComponent_form_0_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Start date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function VehicleLoggingComponent_form_0_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " End date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function VehicleLoggingComponent_form_0_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opts_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", opts_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", opts_r11, " ");
} }
function VehicleLoggingComponent_form_0_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opts_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", opts_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", opts_r12.label, " ");
} }
function VehicleLoggingComponent_form_0_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Log type selection is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function VehicleLoggingComponent_form_0_div_26_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opts_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", opts_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", opts_r15, " ");
} }
function VehicleLoggingComponent_form_0_div_26_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " A node selection is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function VehicleLoggingComponent_form_0_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Nodes");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, VehicleLoggingComponent_form_0_div_26_mat_option_5_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleLoggingComponent_form_0_div_26_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r16.onClearAllNodes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleLoggingComponent_form_0_div_26_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r18.onSelectAllNodes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, VehicleLoggingComponent_form_0_div_26_mat_error_12_Template, 4, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r10.nodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.fgLoggingFilter.get("nodes").hasError("required"));
} }
function VehicleLoggingComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submit", function VehicleLoggingComponent_form_0_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r19.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, VehicleLoggingComponent_form_0_mat_error_6_Template, 4, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, VehicleLoggingComponent_form_0_mat_error_12_Template, 4, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Results / type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, VehicleLoggingComponent_form_0_mat_option_18_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Log Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function VehicleLoggingComponent_form_0_Template_mat_select_selectionChange_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r21.onTypeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, VehicleLoggingComponent_form_0_mat_option_24_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, VehicleLoggingComponent_form_0_mat_error_25_Template, 4, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, VehicleLoggingComponent_form_0_div_26_Template, 13, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-slide-toggle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleLoggingComponent_form_0_Template_mat_slide_toggle_click_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r22.onLiveToggle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0.fgLoggingFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.fgLoggingFilter.get("startDateTime").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.fgLoggingFilter.get("endDateTime").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.paginationRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.logTypeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.fgLoggingFilter.get("logType").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.fgLoggingFilter.get("logType").value.indexOf("logging") > -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.fgLoggingFilter.get("isLive").value);
} }
function VehicleLoggingComponent_div_6_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function VehicleLoggingComponent_div_6_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r35 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r24.renderAlertsColumn(col_r35), " ");
} }
function VehicleLoggingComponent_div_6_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Timestamp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function VehicleLoggingComponent_div_6_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, col_r36.readingat, "medium"), " ");
} }
function VehicleLoggingComponent_div_6_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function VehicleLoggingComponent_div_6_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r37 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r28.renderTypeColumn(col_r37), " ");
} }
function VehicleLoggingComponent_div_6_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Node ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function VehicleLoggingComponent_div_6_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r38 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r30.renderNodeColumn(col_r38), " ");
} }
function VehicleLoggingComponent_div_6_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function VehicleLoggingComponent_div_6_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r39 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r32.renderDescriptionColumn(col_r39), " ");
} }
function VehicleLoggingComponent_div_6_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 44);
} }
function VehicleLoggingComponent_div_6_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleLoggingComponent_div_6_tr_18_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42); const row_r40 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r41.openDialog(row_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r34.renderAlertsColumn(row_r40));
} }
function VehicleLoggingComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](2, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, VehicleLoggingComponent_div_6_th_3_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, VehicleLoggingComponent_div_6_td_4_Template, 3, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](5, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, VehicleLoggingComponent_div_6_th_6_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, VehicleLoggingComponent_div_6_td_7_Template, 3, 4, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](8, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, VehicleLoggingComponent_div_6_th_9_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, VehicleLoggingComponent_div_6_td_10_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](11, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, VehicleLoggingComponent_div_6_th_12_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, VehicleLoggingComponent_div_6_td_13_Template, 2, 1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](14, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, VehicleLoggingComponent_div_6_th_15_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, VehicleLoggingComponent_div_6_td_16_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, VehicleLoggingComponent_div_6_tr_17_Template, 1, 0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, VehicleLoggingComponent_div_6_tr_18_Template, 1, 2, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx_r1.tableList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r1.columns);
} }
function VehicleLoggingComponent_ng_template_7_Template(rf, ctx) { }
function VehicleLoggingComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-progress-bar", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
class VehicleLoggingComponent extends src_app_components_table_table_utils__WEBPACK_IMPORTED_MODULE_0__.TableUtil {
    constructor(graphQLSubscription, graphQLQuery, route, dialog, scrollService, filterService, _snackBar) {
        super();
        this.graphQLSubscription = graphQLSubscription;
        this.graphQLQuery = graphQLQuery;
        this.route = route;
        this.dialog = dialog;
        this.scrollService = scrollService;
        this.filterService = filterService;
        this._snackBar = _snackBar;
        this.logQuery = null;
        this.loggingSubscription = null;
        this.objectSubscription = null;
        this.statusSubscription = null;
        this.infiniteScrollSubscription = null;
        this.nodesSubscription = null;
        this.initialDataLoadSubscription = null;
        this.timeFormat = 'YYYY-MM-DDTHH:mm:ss';
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.vehicleId = "";
        this.startDateTime = "";
        this.endDateTime = "";
        this.logType = [
            "logging"
        ];
        this.refresh = false;
        this.description = "";
        this.logTypeOptions = [
            { value: "logging", label: "Logs" },
            { value: "status", label: "Autonomy State" },
            { value: "object", label: "Object Detection" }
        ];
        this.nodes = [];
        this.isLive = false;
        this.columns = [
            'status',
            'timestamp',
            'type',
            'node',
            'description'
        ];
        this.cursor = 0;
        this.isScrollDataLoading = false;
        this.savedResults = [];
        this.paginationRange = [25, 50, 100];
        this.isQuerying = false;
        this.vehicleId = this.route.parent.snapshot.params.id;
        this.formatTimestampForInputs();
    }
    sort(a, b) {
        const aTime = new Date(a.readingat).valueOf();
        const bTime = new Date(b.readingat).valueOf();
        if (aTime > bTime)
            return -1;
        else if (aTime < bTime)
            return 1;
        else
            return 0;
    }
    updateTable({ data, action } = { data: [], action: "replace" }) {
        switch (action) {
            case "concat":
                this.savedResults = this.savedResults.concat(data).sort(this.sort);
                break;
            case "prepend":
                this.savedResults.unshift(data);
                break;
            case "append":
                this.savedResults.push(data);
                break;
            case "replace":
            default:
                this.savedResults = [...data];
                this.isQuerying = false;
                break;
        }
        this.updateList(this.savedResults);
    }
    formatTimestampForInputs() {
        this.startDateTime = moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(1, 'hours').format(this.timeFormat);
        this.endDateTime = moment__WEBPACK_IMPORTED_MODULE_3___default()().format(this.timeFormat);
    }
    initialDataLoad(variables) {
        if (!variables.nodes.length) {
            this.isScrollDataLoading = false;
            return;
        }
        this.initialDataLoadSubscription = this.graphQLQuery
            .getCurrentLogsByVehicleId(variables)
            .subscribe((response) => {
            this.isScrollDataLoading = false;
            if (!response.length)
                return;
            this.updateTable({ data: response, action: "replace" });
            this.fgLoggingFilter
                .controls.startDateTime
                .patchValue(moment__WEBPACK_IMPORTED_MODULE_3___default()(response[response.length - 1].readingat).subtract(2, 'day')
                .format(this.timeFormat));
            this.fgLoggingFilter
                .controls.endDateTime
                .patchValue(moment__WEBPACK_IMPORTED_MODULE_3___default()().format(this.timeFormat));
        });
    }
    getDataLoad(variables, action = "replace") {
        this.logQuery = this.graphQLQuery
            .getAllVehicleLogsStatusDetection(variables)
            .subscribe((response) => {
            this.isScrollDataLoading = false;
            if (!response.length) {
                this.noResultsNotification();
            }
            this.updateTable({ data: response, action });
        });
    }
    loadData(scroll, init = false) {
        if (this.logQuery)
            this.logQuery.unsubscribe();
        this.isScrollDataLoading = true;
        const variables = {
            vehicleId: this.vehicleId,
            cursor: this.cursor,
            startDateTime: moment__WEBPACK_IMPORTED_MODULE_3___default()(this.fgLoggingFilter.value.startDateTime).utc().format(this.timeFormat),
            endDateTime: moment__WEBPACK_IMPORTED_MODULE_3___default()(this.fgLoggingFilter.value.endDateTime).utc().format(this.timeFormat),
            logType: this.fgLoggingFilter.value.logType,
            paginationRange: this.fgLoggingFilter.value.paginationRange,
            nodes: this.fgLoggingFilter.value.nodes
        };
        if (init) {
            this.initialDataLoad(variables);
        }
        else {
            if (scroll)
                this.getDataLoad(variables, "concat");
            else {
                if (!variables.nodes.length && variables.logType.length === 1 && variables.logType.indexOf("logging") > -1) {
                    this.isScrollDataLoading = false;
                    return;
                }
                this.getDataLoad(variables, "replace");
            }
        }
    }
    // 
    initLiveLogging() {
        const addData = (response) => {
            this.updateTable({ data: Object.assign(Object.assign(Object.assign({ readingat: response.readingat }, response.message), response.message.stamp), { __typename: "VehicleLogView", stamp: null }), action: "prepend" });
        };
        this.loggingSubscription = this.graphQLSubscription
            .getLoggingByVehicleId({ vehicleId: this.vehicleId })
            .subscribe((response) => {
            if (response &&
                (this.fgLoggingFilter.value.logType.indexOf("logging") !== -1 &&
                    this.fgLoggingFilter.value.isLive)) {
                if (this.fgLoggingFilter.value.nodes.indexOf(response.message.name) > -1) {
                    addData(response);
                }
                else if (this.nodes.indexOf(response.message.name) === -1) {
                    this.nodes.push(response.message.name);
                    this.nodes = this.nodes.sort((a, b) => {
                        if (a < b)
                            return -1;
                        else if (a > a)
                            return 1;
                        else
                            return 0;
                    });
                    addData(response);
                }
                else { }
            }
        });
    }
    initLiveStatus() {
        this.statusSubscription = this.graphQLSubscription
            .getVehicleStatus({ vehicleId: this.vehicleId })
            .subscribe((response) => {
            if (response && this.fgLoggingFilter.value.logType.indexOf("status") !== -1 && this.fgLoggingFilter.value.isLive)
                this.updateTable({ data: response, action: "prepend" });
        });
    }
    initLiveObject() {
        this.objectSubscription = this.graphQLSubscription
            .getObjectDetectionByVehicleId({ vehicleId: this.vehicleId })
            .subscribe((response) => {
            if (response && this.fgLoggingFilter.value.logType.indexOf("object") !== -1 && this.fgLoggingFilter.value.isLive)
                this.updateTable({ data: response, action: "prepend" });
        });
    }
    // 
    unsubscribeLiveSubscriptions() {
        var _a, _b, _c;
        (_a = this.loggingSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.objectSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.statusSubscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    }
    noResultsNotification() {
        this._snackBar.open("No results found.", 'Dismiss', {
            duration: 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
    setupFilter(savedForm) {
        this.fgLoggingFilter = savedForm || new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            startDateTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.startDateTime, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
            endDateTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.endDateTime, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
            logType: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.logType, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
            paginationRange: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.paginationRange[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
            nodes: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.nodes, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
            isLive: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.isLive, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])
        });
    }
    setupInfiniteScroll() {
        this.infiniteScrollSubscription = this.scrollService.contentScroll.subscribe((scrolled) => {
            if (scrolled) {
                this.cursor = this.tableList.data.length;
                this.loadData(scrolled);
            }
        });
    }
    nodeSubscriptionHandler(response, isSavedForm) {
        this.nodes = response.map((result) => result.node);
        if (!isSavedForm
            && this.nodes.length
            && this.fgLoggingFilter.controls.logType.value.indexOf("logging") > -1) {
            this.isScrollDataLoading = true;
            this.fgLoggingFilter.controls.nodes.patchValue(this.nodes);
            this.loadData(false, !isSavedForm);
        }
    }
    isFormValid() {
        return (this.fgLoggingFilter.valid
            || (!this.fgLoggingFilter.valid
                && !this.fgLoggingFilter.controls.nodes.valid
                && this.fgLoggingFilter.controls.logType.value.indexOf('logging') === -1
                && this.fgLoggingFilter.controls.startDateTime.valid
                && this.fgLoggingFilter.controls.endDateTime.valid));
    }
    onTypeChange() {
    }
    ngOnInit() {
        const savedForm = this.filterService.getFilterState(`logging-${this.vehicleId}`);
        this.nodesSubscription = this.graphQLQuery
            .getLoggingNodes({ vehicleId: this.vehicleId })
            .subscribe((response) => {
            this.nodeSubscriptionHandler(response, savedForm);
            this.loadData(false, !savedForm);
        });
        this.setupFilter(savedForm);
        this.setupInfiniteScroll();
        this.initLiveLogging();
        this.initLiveObject();
        this.initLiveStatus();
    }
    ngOnDestroy() {
        var _a, _b, _c, _d;
        (_a = this.logQuery) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.unsubscribeLiveSubscriptions();
        (_b = this.infiniteScrollSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        this.filterService.saveFilterState(`logging-${this.vehicleId}`, this.fgLoggingFilter);
        (_c = this.nodesSubscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        (_d = this.initialDataLoadSubscription) === null || _d === void 0 ? void 0 : _d.unsubscribe();
    }
    ngAfterViewInit() { }
    refreshMap() {
        this.refresh = !this.refresh;
        setTimeout(() => this.refresh = !this.refresh, 0);
    }
    onLiveToggle(event) {
        const isLive = !event.currentTarget.querySelector("input").checked;
        if (isLive) {
            this.initLiveLogging();
            this.initLiveObject();
            this.initLiveStatus();
        }
        else {
            this.unsubscribeLiveSubscriptions();
        }
    }
    onSubmit() {
        if (!this.isFormValid())
            return;
        this.isQuerying = true;
        this.cursor = 0;
        this.startDateTime = this.fgLoggingFilter.value.startDateTime;
        this.endDateTime = this.fgLoggingFilter.value.endDateTime;
        this.loadData();
        this.refreshMap();
    }
    openDialog(row) {
        let dialogRef;
        switch (row.__typename) {
            case "VehicleStatus":
                dialogRef = this.dialog.open(src_app_components_modals_vehicle_status_detail_vehicle_status_detail_component__WEBPACK_IMPORTED_MODULE_1__.VehicleStatusDetailComponent, {
                    data: {
                        node: (row.message || row.statusMessage).header.node,
                        timestamp: (row.message || row.statusMessage).header.readingat,
                        topic: row.topic.name,
                        alerts: row.alerts.nodes[0],
                        vehicleStatusDetails: row.vehicleStatusDetails.nodes
                    }
                });
                dialogRef.afterClosed().subscribe(result => {
                    console.log(`Dialog closed: ${result}`);
                });
                break;
            case "Object":
                dialogRef = this.dialog.open(src_app_components_modals_object_detection_detail_object_detection_detail_component__WEBPACK_IMPORTED_MODULE_2__.ObjectDetectionDetailComponent, {
                    data: row
                });
                dialogRef.afterClosed().subscribe(result => {
                    console.log(`Dialog closed: ${result}`);
                });
                break;
            case "VehicleLogView":
                break;
        }
    }
    renderNodeColumn(col) {
        switch (col.__typename) {
            case "VehicleStatus":
                return (col.message || col.statusMessage).header.node;
                break;
            case "Object":
                return col.message.header.node;
                break;
            case "VehicleLogView":
                return col.name;
                break;
        }
    }
    renderDescriptionColumn(col) {
        switch (col.__typename) {
            case "VehicleStatus":
                const reason = (col.vehicleStatusDetails.nodes || col.vehicleStatusDetails).filter((item) => {
                    return item.isActive;
                });
                return `${col.state.name}  ${reason.length ? "(" + reason[0].reason.name + ")" : ""}`;
                break;
            case "Object":
                return col.message.header.node;
                break;
            case "VehicleLogView":
                return col.msg;
                break;
        }
    }
    renderTypeColumn(col) {
        let type = "";
        switch (col.__typename) {
            case "VehicleStatus":
                type = "Autonomy";
                break;
            case "Object":
                type = "Object";
                break;
            case "VehicleLogView":
                type = "Log";
                break;
        }
        return type;
    }
    renderAlertsColumn(col) {
        switch (col.__typename) {
            case "VehicleStatus":
                return (col.alerts.alertType || col.alerts.nodes[0].alertType).name;
                break;
            case "Object":
            case "VehicleLogView":
                return "info";
                break;
        }
    }
    onSelectAllNodes() {
        this.fgLoggingFilter.controls.nodes.patchValue(this.nodes);
    }
    onClearAllNodes() {
        this.fgLoggingFilter.controls.nodes.patchValue([]);
    }
}
VehicleLoggingComponent.ɵfac = function VehicleLoggingComponent_Factory(t) { return new (t || VehicleLoggingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_4__.GqlSubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_5__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_layout_scroll_service__WEBPACK_IMPORTED_MODULE_6__.ScrollService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_form_filter_service__WEBPACK_IMPORTED_MODULE_7__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar)); };
VehicleLoggingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: VehicleLoggingComponent, selectors: [["app-vehicle-logging"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 4, consts: [["class", "logging__form", 3, "formGroup", "submit", 4, "ngIf"], [1, "grid", "gap"], [1, "grid__cell", "table"], [1, "grid__cell--label"], [1, "grid__cell--content", "scollable"], [4, "ngIf", "ngIfElse"], ["loader", ""], [4, "ngIf"], [1, "logging__form", 3, "formGroup", "submit"], [1, "logging__form--field"], ["appearance", "fill", 1, "example-form-field", "datetime"], ["matInput", "", "type", "datetime-local", "formControlName", "startDateTime"], ["matInput", "", "type", "datetime-local", "formControlName", "endDateTime"], ["appearance", "fill", 2, "width", "120px"], ["formControlName", "paginationRange", 2, "width", "100px"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill"], ["formControlName", "logType", "multiple", "", 3, "selectionChange"], ["class", "logging__form--field", 4, "ngIf"], ["formControlName", "isLive", 3, "click"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Submit logging filter", 3, "disabled"], [3, "value"], ["formControlName", "nodes", "multiple", ""], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear nodes selection", 3, "click"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Select all nodes", 3, "click"], ["mat-table", "", 1, "vehicles__status", 3, "dataSource"], ["matColumnDef", "status"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "timestamp"], ["matColumnDef", "type"], ["mat-cell", "", "class", "type", 4, "matCellDef"], ["matColumnDef", "node"], ["mat-cell", "", "class", "node", 4, "matCellDef"], ["matColumnDef", "description"], ["mat-cell", "", "class", "description", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "class", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["inline", "", 1, "icon"], ["mat-cell", "", 1, "type"], ["mat-cell", "", 1, "node"], ["mat-cell", "", 1, "description"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["mode", "indeterminate"]], template: function VehicleLoggingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, VehicleLoggingComponent_form_0_Template, 34, 8, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, VehicleLoggingComponent_div_6_Template, 19, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, VehicleLoggingComponent_ng_template_7_Template, 0, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, VehicleLoggingComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.fgLoggingFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.savedResults.length && !ctx.isQuerying)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isScrollDataLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatRow, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__.MatProgressBar], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: [".logging__form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  flex-wrap: wrap;\n  padding: 20px;\n}\n.logging__form[_ngcontent-%COMP%]   .logging__form--field[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.logging__form[_ngcontent-%COMP%]   .logging__form--field[_ngcontent-%COMP%]:last-of-type {\n  margin-right: 0px;\n}\n.logging__form[_ngcontent-%COMP%]   .logging__form--field[_ngcontent-%COMP%]   .logging__form--radio[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.datetime[_ngcontent-%COMP%] {\n  width: 280px;\n}\n.mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vehicles__status[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.vehicles__status[_ngcontent-%COMP%]   td.description[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n.vehicles__status[_ngcontent-%COMP%]   td.node[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.vehicles__status[_ngcontent-%COMP%]   td.type[_ngcontent-%COMP%] {\n  min-width: 50px;\n}\n.vehicles__status[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 24px;\n}\n.vehicles__status[_ngcontent-%COMP%]   .priority_high[_ngcontent-%COMP%] {\n  background-color: var(--critical);\n}\n.vehicles__status[_ngcontent-%COMP%]   .priority_high[_ngcontent-%COMP%]:hover {\n  background-color: var(--critical-hover);\n}\n.vehicles__status[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  background-color: var(--error);\n}\n.vehicles__status[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]:hover {\n  background-color: var(--error-hover);\n}\n.vehicles__status[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\n  background-color: var(--warning);\n}\n.vehicles__status[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]:hover {\n  background-color: var(--warning-hover);\n}\n.vehicles__status[_ngcontent-%COMP%]   .logging[_ngcontent-%COMP%], .vehicles__status[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  background-color: var(--success);\n}\n.vehicles__status[_ngcontent-%COMP%]   .logging[_ngcontent-%COMP%]:hover, .vehicles__status[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]:hover {\n  background-color: var(--success-hover);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtbG9nZ2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFDUTtFQUNJLGlCQUFBO0FBQ1o7QUFFUTtFQUNJLGtCQUFBO0FBQVo7QUFLQTtFQUNJLFlBQUE7QUFGSjtBQUtBO0VBQ0ksV0FBQTtBQUZKO0FBSUk7RUFDSSxlQUFBO0FBRlI7QUFPSTtFQUNJLFlBQUE7QUFKUjtBQUtRO0VBQ0ksZ0JBQUE7QUFIWjtBQU1RO0VBQ0ksWUFBQTtBQUpaO0FBT1E7RUFDSSxlQUFBO0FBTFo7QUFTSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQVBSO0FBVUk7RUFDSSxpQ0FBQTtBQVJSO0FBU1E7RUFDSSx1Q0FBQTtBQVBaO0FBV0k7RUFDSSw4QkFBQTtBQVRSO0FBVVE7RUFDSSxvQ0FBQTtBQVJaO0FBWUk7RUFDSSxnQ0FBQTtBQVZSO0FBV1E7RUFDSSxzQ0FBQTtBQVRaO0FBYUk7O0VBRUksZ0NBQUE7QUFYUjtBQVlROztFQUNJLHNDQUFBO0FBVFoiLCJmaWxlIjoidmVoaWNsZS1sb2dnaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2dpbmdfX2Zvcm17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLmxvZ2dpbmdfX2Zvcm0tLWZpZWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ2dpbmdfX2Zvcm0tLXJhZGlve1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGF0ZXRpbWV7XG4gICAgd2lkdGg6MjgwcHg7XG59XG5cbi5tYXQtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLm1hdC1yb3cge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4udmVoaWNsZXNfX3N0YXR1cyB7XG4gICAgdGR7XG4gICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICAmLmRlc2NyaXB0aW9ue1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubm9kZXtcbiAgICAgICAgICAgIHBhZGRpbmc6NXB4XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYudHlwZXtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC5pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIHdpZHRoOjI0cHg7XG4gICAgfVxuXG4gICAgLnByaW9yaXR5X2hpZ2gge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcml0aWNhbCk7XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcml0aWNhbC1ob3Zlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZXJyb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvcik7XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1ob3Zlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAud2FybmluZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmluZy1ob3Zlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubG9nZ2luZyxcbiAgICAuaW5mb3JtYXRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3MtaG92ZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19 */"] });


/***/ }),

/***/ 32642:
/*!************************************************************************************!*\
  !*** ./src/app/pages/vehicle/pages/vehicle-overview/vehicle-overview.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleOverviewComponent": () => (/* binding */ VehicleOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/geolocation/geolocation.service */ 39487);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_topics_vehicles_vehicle_mission_stats_vehicle_mission_stats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/topics/vehicles/vehicle-mission-stats/vehicle-mission-stats.component */ 68027);
/* harmony import */ var _components_topics_vehicles_vehicle_status_vehicle_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/topics/vehicles/vehicle-status/vehicle-status.component */ 48484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _components_topics_images_stop_images_stop_images_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/topics/images/stop-images/stop-images.component */ 43613);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _components_images_image_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/images/image/image.component */ 89990);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);














function VehicleOverviewComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "button", 14);
} }
function VehicleOverviewComponent_div_21_div_1_div_1_app_image_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-image", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("load", function VehicleOverviewComponent_div_21_div_1_div_1_app_image_5_Template_app_image_load_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4); return ctx_r10.onImageLoaded($event); })("error", function VehicleOverviewComponent_div_21_div_1_div_1_app_image_5_Template_app_image_error_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4); return ctx_r12.onImageLoaded($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imageInfo_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("imageId", imageInfo_r5.image.id)("label", imageInfo_r5.topic.name)("headerId", imageInfo_r5.header.headerId)("timestamp", imageInfo_r5.header.readingat);
} }
function VehicleOverviewComponent_div_21_div_1_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "image_not_supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function VehicleOverviewComponent_div_21_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, VehicleOverviewComponent_div_21_div_1_div_1_app_image_5_Template, 1, 4, "app-image", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, VehicleOverviewComponent_div_21_div_1_div_1_ng_template_6_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
    const imageInfo_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, imageInfo_r5.topic.name.replace("/left/preview", "").replace("/", "").replace("/", "").replace("_", " ")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", imageInfo_r5.header && imageInfo_r5.image)("ngIfElse", _r8);
} }
function VehicleOverviewComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, VehicleOverviewComponent_div_21_div_1_div_1_Template, 8, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imageInfo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", imageInfo_r5);
} }
function VehicleOverviewComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, VehicleOverviewComponent_div_21_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.vehicleImages);
} }
function VehicleOverviewComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-progress-bar", 23);
} }
class VehicleOverviewComponent {
    constructor(gisService, graphQLSubscription, graphQLQuery, route) {
        this.gisService = gisService;
        this.graphQLSubscription = graphQLSubscription;
        this.graphQLQuery = graphQLQuery;
        this.route = route;
        this.geoUpdateSubscription = null;
        this.onlineStatusQuery = null;
        this.onlineStatusSubscription = null;
        this.previousCoordinatesQuery = null;
        this.previewImagesSubscription = null;
        this.imageSubscriptions = [];
        this.allImageSubscriptions = null;
        this.vehiclesLastCoordinates = [];
        this.vehicleImages = [];
        this.isImagesLoaded = false;
        this.vehicleId = "";
        this.isVehicleOnline = false;
    }
    findImageByTopicId(value) {
        return this.vehicleImages.findIndex((item) => {
            return !item ? false : item.topic.id === value;
        });
    }
    findImageByImageId(value) {
        return this.vehicleImages.findIndex((item) => {
            return !item ? false : item.image.id === value;
        });
    }
    setupLiveImageSubscription() {
        this.allImageSubscriptions =
            this.graphQLSubscription
                .getVehiclePreviewImages({ vehicleId: this.vehicleId })
                .subscribe((response) => {
                if (response.vehicleId !== this.vehicleId)
                    return;
                const imageIndex = this.findImageByTopicId(response.topicId);
                if (imageIndex !== -1 && this.vehicleImages[imageIndex].done) {
                    this.vehicleImages[imageIndex] = {
                        topic: {
                            name: response.topic,
                            id: response.topicId
                        },
                        header: response.header,
                        image: response.image
                    };
                }
            });
    }
    setupOnlineSubscription() {
        this.onlineStatusQuery = this.graphQLQuery
            .getVehicleOnlineStatus({ id: this.vehicleId })
            .subscribe((response) => {
            this.isVehicleOnline = response.online ? true : false;
        });
        this.onlineStatusSubscription = this.graphQLSubscription
            .getVehicleOnlineStatus({ id: this.vehicleId })
            .subscribe((response) => {
            if (response)
                this.isVehicleOnline = response.online;
        });
    }
    setupVehicleGeolocationSubscription() {
        this.previousCoordinatesQuery = this.graphQLQuery
            .getVehiclePreviousLocation({ vehicle_id: this.vehicleId })
            .subscribe((response) => {
            if (response)
                this.vehiclesLastCoordinates = [[response.longitude, response.latitude]];
        });
    }
    previewImageQuery() {
        this.previewImagesSubscription = this.graphQLQuery
            .getPreviewImagesByTopicNameVehicleId({
            vehicleId: this.vehicleId,
            topicNames: ["/side_right/left/preview",
                "/side_left/left/preview",
                "/front_right/left/preview",
                "/front_left/left/preview",
                "/front_center/left/preview",
                "/rear/left/preview"]
        }).subscribe((response) => {
            this.isImagesLoaded = true;
            if (response)
                this.vehicleImages = response;
        });
    }
    onImageLoaded(imageId) {
        const imageIndex = this.findImageByImageId(imageId);
        if (this.vehicleImages[imageIndex])
            this.vehicleImages[imageIndex].done = true;
    }
    ngOnInit() {
        this.vehicleId = this.route.parent.snapshot.params.id;
        this.setupVehicleGeolocationSubscription();
        this.setupOnlineSubscription();
        this.previewImageQuery();
        this.setupLiveImageSubscription();
    }
    ngOnDestroy() {
        var _a, _b, _c, _d, _e;
        (_a = this.onlineStatusSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.onlineStatusQuery) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.previousCoordinatesQuery) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        (_d = this.previewImagesSubscription) === null || _d === void 0 ? void 0 : _d.unsubscribe();
        (_e = this.allImageSubscriptions) === null || _e === void 0 ? void 0 : _e.unsubscribe();
        this.imageSubscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }
    ngAfterViewInit() {
    }
}
VehicleOverviewComponent.ɵfac = function VehicleOverviewComponent_Factory(t) { return new (t || VehicleOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_0__.GeolocationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_1__.GqlSubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_2__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); };
VehicleOverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: VehicleOverviewComponent, selectors: [["app-vehicle-overview"]], decls: 24, vars: 7, consts: [[1, "header"], [1, "header__title"], ["class", "live-pulse", "mat-mini-fab", "", "color", "warn", "aria-label", "Section is live", 4, "ngIf"], [1, "grid", "gap", "col-2"], [1, "grid__cell"], [3, "vehicleId"], [1, "grid__cell--label"], [1, "grid__cell--content", "status-section"], [1, "grid__cell", "grid__cell__full-width"], [1, "divider"], [1, "grid__cell--content"], [3, "vehicleId", "live"], ["class", "preview-images", 4, "ngIf", "ngIfElse"], ["loader", ""], ["mat-mini-fab", "", "color", "warn", "aria-label", "Section is live", 1, "live-pulse"], [1, "preview-images"], ["class", "preview-images__img", 4, "ngFor", "ngForOf"], [1, "preview-images__img"], [4, "ngIf"], [3, "imageId", "label", "headerId", "timestamp", "load", "error", 4, "ngIf", "ngIfElse"], ["noimage", ""], [3, "imageId", "label", "headerId", "timestamp", "load", "error"], ["aria-hidden", "false", "aria-label", "No Image", 1, "no-image"], ["mode", "indeterminate"]], template: function VehicleOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, VehicleOverviewComponent_button_4_Template, 1, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-vehicle-mission-stats", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "app-vehicle-status", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "mat-divider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Stop Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "app-stop-images", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, VehicleOverviewComponent_div_21_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, VehicleOverviewComponent_ng_template_22_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isVehicleOnline);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("vehicleId", ctx.vehicleId);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("vehicleId", ctx.vehicleId);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("vehicleId", ctx.vehicleId)("live", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isImagesLoaded)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_topics_vehicles_vehicle_mission_stats_vehicle_mission_stats_component__WEBPACK_IMPORTED_MODULE_3__.VehicleMissionStatsComponent, _components_topics_vehicles_vehicle_status_vehicle_status_component__WEBPACK_IMPORTED_MODULE_4__.VehicleStatusComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, _components_topics_images_stop_images_stop_images_component__WEBPACK_IMPORTED_MODULE_5__.StopImagesComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _components_images_image_image_component__WEBPACK_IMPORTED_MODULE_6__.ImageComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBar], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe], styles: [".grid__cell[_ngcontent-%COMP%]   .grid__cell--content[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n  height: 352px;\n}\n.grid__cell[_ngcontent-%COMP%]   .preview-images[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.grid__cell[_ngcontent-%COMP%]   .preview-images[_ngcontent-%COMP%]   .preview-images__img[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n}\n@media screen and (min-width: 570px) {\n  .grid__cell[_ngcontent-%COMP%]   .preview-images[_ngcontent-%COMP%]   .preview-images__img[_ngcontent-%COMP%] {\n    width: calc(50% - 10px);\n  }\n}\n@media screen and (min-width: 1024px) {\n  .grid__cell[_ngcontent-%COMP%]   .preview-images[_ngcontent-%COMP%]   .preview-images__img[_ngcontent-%COMP%] {\n    width: calc(50% - 10px);\n  }\n}\n.grid__cell[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  min-height: 150px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  word-break: break-all;\n}\n.header[_ngcontent-%COMP%]   .header__title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.header[_ngcontent-%COMP%]   .header__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.header[_ngcontent-%COMP%]   .header__title[_ngcontent-%COMP%]   .live-pulse[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  animation: pulse 1000ms infinite;\n  position: relative;\n  top: -5px;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(0);\n    box-shadow: 0 0 0 1px solid red;\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: 1 2 3 20px solid red;\n  }\n}\n.divider[_ngcontent-%COMP%] {\n  background-color: #777;\n  margin: 15px 0;\n}\n.status-section[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVVE7RUFDSSxhQUFBO0FBVFo7QUFjSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBWlI7QUFjUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBWlo7QUFnQlE7RUFDSTtJQUNJLHVCQUFBO0VBZGQ7QUFDRjtBQWlCUTtFQUNJO0lBQ0ksdUJBQUE7RUFmZDtBQUNGO0FBbUJJO0VBQ0ksaUJBQUE7QUFqQlI7QUFxQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQWxCSjtBQW9CSTtFQUNJLFdBQUE7QUFsQlI7QUFvQlE7RUFDQyxxQkFBQTtBQWxCVDtBQXFCUTtFQUNJLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFuQlo7QUFzQlE7RUFDSTtJQUNJLG1CQUFBO0lBQ0EsK0JBQUE7RUFwQmQ7RUFzQlU7SUFDSSxtQkFBQTtJQUNBLGdDQUFBO0VBcEJkO0FBQ0Y7QUEwQkE7RUFDSSxzQkFBQTtFQUNBLGNBQUE7QUF2Qko7QUEwQkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBdkJKIiwiZmlsZSI6InZlaGljbGUtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZF9fY2VsbCB7XG5cbiAgICAvLyAmOm50aC1jaGlsZChvZGQpe1xuICAgIC8vICAgICAmOm5vdCguZ3JpZF9fY2VsbF9fZnVsbC13aWR0aCl7XG4gICAgLy8gICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCkge1xuICAgIC8vICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0Z3JheSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLmdyaWRfX2NlbGwtLWNvbnRlbnQge1xuICAgICAgICAubWFwe1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTJweDsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC5wcmV2aWV3LWltYWdlc3tcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6d3JhcDtcblxuICAgICAgICAucHJldmlldy1pbWFnZXNfX2ltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1NzBweCkge1xuICAgICAgICAgICAgLnByZXZpZXctaW1hZ2VzX19pbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCkge1xuICAgICAgICAgICAgLnByZXZpZXctaW1hZ2VzX19pbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubG9hZGVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgfVxufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuXG4gICAgLmhlYWRlcl9fdGl0bGV7XG4gICAgICAgIHdpZHRoOjEwMCU7XG5cbiAgICAgICAgaDJ7XG4gICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXZlLXB1bHNle1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHB1bHNlIDEwMDBtcyBpbmZpbml0ZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAgICAgICAgIDAle1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDAgMCAxcHggc29saWQgcmdiYSgyNTUsMCwwLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJXtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MSAyIDMgMjBweCBzb2xpZCByZ2JhKDI1NSwwLDAsMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLmRpdmlkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgICBtYXJnaW46IDE1cHggMDtcbn1cblxuLnN0YXR1cy1zZWN0aW9ue1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn0iXX0= */"] });


/***/ }),

/***/ 83668:
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/vehicle/pages/vehicle-share/pages/vehicle-autonomy-share/vehicle-autonomy-share.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleAutonomyShareComponent": () => (/* binding */ VehicleAutonomyShareComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_images_image_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../components/images/image/image.component */ 89990);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _components_topics_geolocation_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../components/topics/geolocation/starfire/starfire.component */ 51721);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _components_topics_vehicles_vehicle_status_vehicle_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../components/topics/vehicles/vehicle-status/vehicle-status.component */ 48484);














function VehicleAutonomyShareComponent_div_4_app_image_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-image", 15);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("imageId", ctx_r1.image)("label", ctx_r1.label)("headerId", ctx_r1.headerid);
} }
function VehicleAutonomyShareComponent_div_4_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "image_not_supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function VehicleAutonomyShareComponent_div_4_div_12_app_starfire_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-starfire", 19);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showTractor", true)("zoom", 16)("coordinates", ctx_r11.coordinates)("vehicleId", ctx_r11.vehicleId);
} }
function VehicleAutonomyShareComponent_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, VehicleAutonomyShareComponent_div_4_div_12_app_starfire_1_Template, 1, 4, "app-starfire", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.vehicleId);
} }
function VehicleAutonomyShareComponent_div_4_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-progress-bar", 20);
} }
function VehicleAutonomyShareComponent_div_4_app_vehicle_status_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-vehicle-status", 21);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("vehicleId", ctx_r7.vehicleId)("startDateTime", ctx_r7.timeframe.startDateTime)("endDateTime", ctx_r7.timeframe.endDateTime);
} }
function VehicleAutonomyShareComponent_div_4_table_24_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Node ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function VehicleAutonomyShareComponent_div_4_table_24_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r22.name, " ");
} }
function VehicleAutonomyShareComponent_div_4_table_24_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function VehicleAutonomyShareComponent_div_4_table_24_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r23.level, " ");
} }
function VehicleAutonomyShareComponent_div_4_table_24_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function VehicleAutonomyShareComponent_div_4_table_24_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r24.msg, " ");
} }
function VehicleAutonomyShareComponent_div_4_table_24_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Timestamp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function VehicleAutonomyShareComponent_div_4_table_24_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, col_r25.readingat, "medium"), " ");
} }
function VehicleAutonomyShareComponent_div_4_table_24_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 39);
} }
function VehicleAutonomyShareComponent_div_4_table_24_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 40);
} }
function VehicleAutonomyShareComponent_div_4_table_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, VehicleAutonomyShareComponent_div_4_table_24_th_2_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, VehicleAutonomyShareComponent_div_4_table_24_td_3_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](4, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, VehicleAutonomyShareComponent_div_4_table_24_th_5_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, VehicleAutonomyShareComponent_div_4_table_24_td_6_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](7, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, VehicleAutonomyShareComponent_div_4_table_24_th_8_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, VehicleAutonomyShareComponent_div_4_table_24_td_9_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](10, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, VehicleAutonomyShareComponent_div_4_table_24_th_11_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, VehicleAutonomyShareComponent_div_4_table_24_td_12_Template, 3, 4, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, VehicleAutonomyShareComponent_div_4_table_24_tr_13_Template, 1, 0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, VehicleAutonomyShareComponent_div_4_table_24_tr_14_Template, 1, 0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r8.logs);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.logsColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r8.logsColumns);
} }
function VehicleAutonomyShareComponent_div_4_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-progress-bar", 20);
} }
function VehicleAutonomyShareComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, VehicleAutonomyShareComponent_div_4_app_image_5_Template, 1, 3, "app-image", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, VehicleAutonomyShareComponent_div_4_ng_template_6_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Geolocation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, VehicleAutonomyShareComponent_div_4_div_12_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, VehicleAutonomyShareComponent_div_4_ng_template_13_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Autonomy State");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, VehicleAutonomyShareComponent_div_4_app_vehicle_status_19_Template, 1, 3, "app-vehicle-status", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, VehicleAutonomyShareComponent_div_4_table_24_Template, 15, 3, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, VehicleAutonomyShareComponent_div_4_ng_template_25_Template, 1, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](26);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.image)("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.vehicleId && ctx_r0.coordinates)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.vehicleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isLogLoaded)("ngIfElse", _r9);
} }
class VehicleAutonomyShareComponent {
    constructor(gqlSubscription, gqlQuery, route) {
        this.gqlSubscription = gqlSubscription;
        this.gqlQuery = gqlQuery;
        this.route = route;
        this.objectQuery = null;
        this.logsQuery = null;
        this.imageQuery = null;
        this.image = null;
        this.isImageLoaded = false;
        this.headerid = "";
        this.label = "";
        this.pagesLength = 0;
        this.objectDetection = null;
        this.latitude = 0;
        this.longitude = 0;
        this.coordinates = [[]];
        this.paginationInit = false;
        this.timeframe = {};
        this.logs = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource([]);
        this.isLogLoaded = false;
    }
    setImage(stopInfo, isLiveUpdate = false, currentHeaderId) {
        this.imageQuery = this.gqlQuery
            .getPreviewImageByCameraMessageIdCameraName({
            headerId: stopInfo.message.header.headerid,
            cameraName: stopInfo.message.cameraName
        })
            .subscribe((response) => {
            if (!response)
                return;
            this.image = response.id;
            this.label = `${stopInfo.topic.name} | ${new Date(stopInfo.readingat)}`;
            this.headerid = stopInfo.message.header.headerid;
        });
    }
    setGeolocation(data) {
        if (!data)
            return;
        this.coordinates = [[]];
        const centroid_location = data.message.centroidLocation;
        this.latitude = parseFloat(centroid_location.fieldOrigin.latitudeDeg);
        this.longitude = parseFloat(centroid_location.fieldOrigin.longitudeDeg);
        this.coordinates = [[this.longitude, this.latitude]];
    }
    getLogs() {
        this.logsQuery = this.gqlQuery.getLogsByVehicleIdDateRange(Object.assign(Object.assign({ vehicleId: this.vehicleId }, this.timeframe), { cursor: 0, size: 20 })).subscribe((response) => {
            this.isLogLoaded = true;
            this.logs = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(response);
            this.logsColumns = ["node",
                "level",
                "description",
                "timestamp"
            ];
        });
    }
    getObjectDection(id) {
        this.objectQuery = this.gqlQuery
            .getObjectDetectionById({ id })
            .subscribe((response) => {
            const readingat = response.message.header.readingat;
            this.objectDetection = response;
            this.timeframe = {
                startDateTime: moment__WEBPACK_IMPORTED_MODULE_0___default()(readingat).subtract(1, "minute").format(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.timestampFormat).toString(),
                endDateTime: moment__WEBPACK_IMPORTED_MODULE_0___default()(readingat).add(1, "minute").format(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.timestampFormat).toString()
            };
            this.vehicleId = response.vehicleId;
            this.setGeolocation(response);
            this.setImage(response);
            this.getLogs();
        });
    }
    ngOnInit() {
        if (this.id && !isNaN(this.id))
            this.getObjectDection(this.id);
    }
    ngOnDestroy() {
        var _a, _b, _c;
        (_a = this.objectQuery) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.logsQuery) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.imageQuery) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    }
}
VehicleAutonomyShareComponent.ɵfac = function VehicleAutonomyShareComponent_Factory(t) { return new (t || VehicleAutonomyShareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_2__.GqlSubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_3__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute)); };
VehicleAutonomyShareComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: VehicleAutonomyShareComponent, selectors: [["app-vehicle-autonomy-share"]], inputs: { id: "id" }, decls: 5, vars: 1, consts: [[1, "header"], [1, "header__title"], ["class", "grid gap col-2", 4, "ngIf"], [1, "grid", "gap", "col-2"], [1, "grid__cell"], [1, "grid__cell--label"], [1, "grid__cell--content", "status-section"], [3, "imageId", "label", "headerId", 4, "ngIf", "ngIfElse"], ["noimage", ""], ["class", "map", "style", "height:400px;", 4, "ngIf", "ngIfElse"], ["geoloader", ""], [3, "vehicleId", "startDateTime", "endDateTime", 4, "ngIf"], [1, "grid__cell--content", "status-section", 2, "max-height", "400px", "overflow-y", "scroll"], ["mat-table", "", "class", "vehicles__status", 3, "dataSource", 4, "ngIf", "ngIfElse"], ["logsloader", ""], [3, "imageId", "label", "headerId"], ["aria-hidden", "false", "aria-label", "No Image", 1, "no-image"], [1, "map", 2, "height", "400px"], [3, "showTractor", "zoom", "coordinates", "vehicleId", 4, "ngIf"], [3, "showTractor", "zoom", "coordinates", "vehicleId"], ["mode", "indeterminate"], [3, "vehicleId", "startDateTime", "endDateTime"], ["mat-table", "", 1, "vehicles__status", 3, "dataSource"], ["matColumnDef", "node"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "node", 4, "matCellDef"], ["matColumnDef", "level"], ["mat-cell", "", "class", "type", 4, "matCellDef"], ["matColumnDef", "description"], ["mat-cell", "", "class", "description", 4, "matCellDef"], ["matColumnDef", "timestamp"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "node"], ["mat-cell", "", 1, "type"], ["mat-cell", "", 1, "description"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function VehicleAutonomyShareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Autonomy Share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, VehicleAutonomyShareComponent_div_4_Template, 27, 7, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.objectDetection);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _components_images_image_image_component__WEBPACK_IMPORTED_MODULE_4__.ImageComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _components_topics_geolocation_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_5__.StarfireComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBar, _components_topics_vehicles_vehicle_status_vehicle_status_component__WEBPACK_IMPORTED_MODULE_6__.VehicleStatusComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLWF1dG9ub215LXNoYXJlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 94530:
/*!******************************************************************************!*\
  !*** ./src/app/pages/vehicle/pages/vehicle-share/vehicle-share.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleShareComponent": () => (/* binding */ VehicleShareComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _pages_vehicle_autonomy_share_vehicle_autonomy_share_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/vehicle-autonomy-share/vehicle-autonomy-share.component */ 83668);




function VehicleShareComponent_app_vehicle_autonomy_share_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-vehicle-autonomy-share", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r0.id);
} }
function VehicleShareComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Share not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class VehicleShareComponent {
    constructor(route) {
        this.route = route;
        this.type = "";
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.type = this.route.snapshot.params.type;
    }
    ngOnDestroy() {
    }
}
VehicleShareComponent.ɵfac = function VehicleShareComponent_Factory(t) { return new (t || VehicleShareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
VehicleShareComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VehicleShareComponent, selectors: [["app-vehicle-share"]], decls: 3, vars: 2, consts: [[3, "ngSwitch"], [3, "id", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "id"]], template: function VehicleShareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VehicleShareComponent_app_vehicle_autonomy_share_1_Template, 1, 1, "app-vehicle-autonomy-share", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VehicleShareComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "autonomy-state");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchDefault, _pages_vehicle_autonomy_share_vehicle_autonomy_share_component__WEBPACK_IMPORTED_MODULE_0__.VehicleAutonomyShareComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLXNoYXJlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 52862:
/*!********************************************************************************!*\
  !*** ./src/app/pages/vehicle/pages/vehicle-system/vehicle-system.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleSystemComponent": () => (/* binding */ VehicleSystemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class VehicleSystemComponent {
    constructor() { }
    ngOnInit() {
    }
}
VehicleSystemComponent.ɵfac = function VehicleSystemComponent_Factory(t) { return new (t || VehicleSystemComponent)(); };
VehicleSystemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleSystemComponent, selectors: [["app-vehicle-system"]], decls: 2, vars: 0, template: function VehicleSystemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "vehicle-system works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLXN5c3RlbS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 94723:
/*!*****************************************************************!*\
  !*** ./src/app/pages/vehicle/services/current-topic.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentVehicleTopic": () => (/* binding */ CurrentVehicleTopic)
/* harmony export */ });
class CurrentVehicleTopic {
    constructor() {
        this.topic = { name: "", id: null };
    }
    set topicInfo(data) {
        this.topic = { name: data.topic.name, id: data.topic.id };
    }
    get topicInfo() {
        return this.topic;
    }
}



/***/ }),

/***/ 15852:
/*!****************************************************!*\
  !*** ./src/app/pages/vehicle/vehicle.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleComponent": () => (/* binding */ VehicleComponent)
/* harmony export */ });
/* harmony import */ var _services_current_topic_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/current-topic.service */ 94723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/navigation/menu.service */ 83536);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);






class VehicleComponent {
    constructor(menuService, router, route, graphqlQueryService, currentVehicleTopicService) {
        this.menuService = menuService;
        this.router = router;
        this.route = route;
        this.graphqlQueryService = graphqlQueryService;
        this.currentVehicleTopicService = currentVehicleTopicService;
        this.geoUpdateSubscription = null;
        this.currentRoute = "";
        this.vehicleId = "";
        this.paramSubscription = this.route.params.subscribe(data => {
            this.vehicleId = data.id;
        });
    }
    loadMenu(obj) {
        const { data, loading } = obj;
        if (!loading)
            this.menuService.menu.next({
                header: `${data.vehicles.nodes[0].name}`,
                links: [
                    {
                        label: "Overview",
                        url: `/vehicles/${this.vehicleId}/overview`,
                        tooltip: `Vehicle: ${this.vehicleId} Overview Page`
                    },
                    // {
                    //   label:"Geolocation"
                    //   , url:`/vehicles/${this.vehicleId}/geolocation`
                    //   , tooltip:`Vehicle: ${this.vehicleId} Geolocation Page`
                    // },
                    {
                        label: "Images",
                        url: `/vehicles/${this.vehicleId}/images`,
                        tooltip: `Vehicle: ${this.vehicleId} Images Page`
                    },
                    {
                        label: "Logging",
                        url: `/vehicles/${this.vehicleId}/logging`,
                        tooltip: `Vehicle: ${this.vehicleId} Logging Page`
                    },
                    // {
                    //   label:"System"
                    //   , url:`/vehicles/${this.vehicleId}/system`
                    //   , tooltip:`Vehicle: ${this.vehicleId} System Page`
                    // },
                    // ...data.topics.nodes.map((vehicleTopic:any)=>{
                    //     if(!vehicleTopic.vehicleTopics.nodes.length)
                    //       return {}
                    //     const topicType = vehicleTopic.vehicleTopics.nodes.map((topic:any)=>{
                    //           return topic
                    //       })[0]
                    //     return  {
                    //       label: topicType.topic.name,
                    //       callback:()=> {
                    //         this.currentVehicleTopicService.topicInfo = topicType
                    //         this.loadTopic(topicType.topic)
                    //       }
                    //     }
                    //   })
                ]
            });
    }
    loadTopic(topic) {
        // @ts-ignore
        this.router.navigateByUrl(`/${this.vehicleId}`, { skipLocationChange: false })
            .then(() => {
            this.router.navigate([this.vehicleId, ...topic.name.replace(/\//, "").split("/")]);
        });
    }
    ngOnInit() {
        this.currentRoute = this.route.url.value.join("/");
        this.graphqlQueryService
            .getVehicleById({ id: this.vehicleId })
            .subscribe(response => this.loadMenu(response));
    }
    ngOnDestroy() {
        var _a;
        this.menuService.menu.next(null);
        (_a = this.paramSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    ngDoCheck() {
    }
}
VehicleComponent.ɵfac = function VehicleComponent_Factory(t) { return new (t || VehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_2__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_current_topic_service__WEBPACK_IMPORTED_MODULE_0__.CurrentVehicleTopic)); };
VehicleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VehicleComponent, selectors: [["app-vehicle"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_services_current_topic_service__WEBPACK_IMPORTED_MODULE_0__.CurrentVehicleTopic])], decls: 1, vars: 0, template: function VehicleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 78211:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/vehicles/pages/vehicle-list/vehicle-list.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleListComponent": () => (/* binding */ VehicleListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _components_topics_vehicles_vehicles_online_vehicles_online_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/topics/vehicles/vehicles-online/vehicles-online.component */ 20253);
/* harmony import */ var _components_topics_vehicles_vehicles_offline_vehicles_offline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/topics/vehicles/vehicles-offline/vehicles-offline.component */ 96680);





class VehicleListComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.updates = {};
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
    }
    onRowClick(id) {
        this.router.navigate([id], { relativeTo: this.route });
    }
    onLiveUpdate(event) {
        this.updates = event;
    }
}
VehicleListComponent.ɵfac = function VehicleListComponent_Factory(t) { return new (t || VehicleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
VehicleListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VehicleListComponent, selectors: [["app-vehicle-list"]], decls: 5, vars: 1, consts: [["mat-align-tabs", "center"], ["label", "Online"], [3, "onClick", "onUpdate"], ["label", "Offline"], [3, "update", "onClick"]], template: function VehicleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-vehicles-online", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function VehicleListComponent_Template_app_vehicles_online_onClick_2_listener($event) { return ctx.onRowClick($event); })("onUpdate", function VehicleListComponent_Template_app_vehicles_online_onUpdate_2_listener($event) { return ctx.onLiveUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "app-vehicles-offline", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function VehicleListComponent_Template_app_vehicles_offline_onClick_4_listener($event) { return ctx.onRowClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("update", ctx.updates);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _components_topics_vehicles_vehicles_online_vehicles_online_component__WEBPACK_IMPORTED_MODULE_0__.VehiclesOnlineComponent, _components_topics_vehicles_vehicles_offline_vehicles_offline_component__WEBPACK_IMPORTED_MODULE_1__.VehiclesOfflineComponent], styles: [".mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 24px;\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .priority_high[_ngcontent-%COMP%] {\n  background-color: var(--critical);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  background-color: var(--error);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\n  background-color: var(--warning);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .logging[_ngcontent-%COMP%], .vehicles__online[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  background-color: var(--success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBSUk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUFEUjs7QUFHSTtFQUNJLGlDQUFBO0FBRFI7O0FBSUk7RUFDSSw4QkFBQTtBQUZSOztBQUtJO0VBQ0ksZ0NBQUE7QUFIUjs7QUFNSTs7RUFFSSxnQ0FBQTtBQUpSIiwiZmlsZSI6InZlaGljbGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudGQsIHRoIHtcbiAgICB3aWR0aDogMjUlO1xufVxuXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbnRyLm1hdC1yb3csIHRyLm1hdC1mb290ZXItcm93e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnZlaGljbGVzX19vbmxpbmUge1xuXG4gICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgd2lkdGg6MjRweDtcbiAgICB9XG4gICAgLnByaW9yaXR5X2hpZ2gge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcml0aWNhbCk7XG4gICAgfVxuXG4gICAgLmVycm9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3IpO1xuICAgIH1cblxuICAgIC53YXJuaW5nIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgfVxuXG4gICAgLmxvZ2dpbmcsXG4gICAgLmluZm9ybWF0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 2815:
/*!******************************************************!*\
  !*** ./src/app/pages/vehicles/vehicles.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiclesComponent": () => (/* binding */ VehiclesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng_dynamic_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-dynamic-breadcrumb */ 26661);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);




const _c0 = function () { return { "breadcrumb": true }; };
class VehiclesComponent {
    constructor() {
        this.breadcrumbConfig = {
            bgColor: 'inherit',
            fontSize: 'inherit',
            fontColor: 'inherit',
            lastLinkColor: 'inherit',
            symbol: ' > ',
        };
    }
    ngOnInit() { }
}
VehiclesComponent.ɵfac = function VehiclesComponent_Factory(t) { return new (t || VehiclesComponent)(); };
VehiclesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehiclesComponent, selectors: [["app-vehicles"]], decls: 7, vars: 7, consts: [[1, "header"], [1, "header__title"], [3, "bgColor", "fontSize", "fontColor", "lastLinkColor", "symbol", "ngClass"]], template: function VehiclesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Vehicles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-ng-dynamic-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bgColor", ctx.breadcrumbConfig["bgColor"])("fontSize", ctx.breadcrumbConfig["fontSize"])("fontColor", ctx.breadcrumbConfig["fontColor"])("lastLinkColor", ctx.breadcrumbConfig["lastLinkColor"])("symbol", ctx.breadcrumbConfig["symbol"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [ng_dynamic_breadcrumb__WEBPACK_IMPORTED_MODULE_1__.NgDynamicBreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: [".header {\n  display: flex;\n  align-items: center;\n  word-break: break-all;\n}\n.header .header__title {\n  width: 100%;\n}\n.header .header__title h1 {\n  display: inline-block;\n}\n.header .header__title .live-pulse {\n  margin-left: 20px;\n  animation: pulse 1000ms infinite;\n  position: absolute;\n  top: 20px;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(0);\n    box-shadow: 0 0 0 1px solid red;\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: 1 2 3 20px solid red;\n  }\n}\n.header .header__topic {\n  width: 100%;\n}\n.breadcrumb [class*=custom-bread-crumb] {\n  color: var(--blueriver);\n  padding: 10px 0px !important;\n  font-size: 1rem;\n}\n.breadcrumb [class*=custom-bread-crumb] span li:last-of-type span {\n  color: var(--black) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0ksV0FBQTtBQUNSO0FBQ1E7RUFDQyxxQkFBQTtBQUNUO0FBQ1E7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ1o7QUFFUTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSwrQkFBQTtFQUFkO0VBRVU7SUFDSSxtQkFBQTtJQUNBLGdDQUFBO0VBQWQ7QUFDRjtBQUdJO0VBQ0ksV0FBQTtBQURSO0FBUUk7RUFDSSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQUxSO0FBU29CO0VBQ0ksOEJBQUE7QUFQeEIiLCJmaWxlIjoidmVoaWNsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuXG4gICAgLmhlYWRlcl9fdGl0bGV7XG4gICAgICAgIHdpZHRoOjEwMCU7XG5cbiAgICAgICAgaDF7XG4gICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAubGl2ZS1wdWxzZXtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAxMDAwbXMgaW5maW5pdGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XG4gICAgICAgICAgICAwJXtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAwIDAgMXB4IHNvbGlkIHJnYmEoMjU1LDAsMCwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCV7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OjEgMiAzIDIwcHggc29saWQgcmdiYSgyNTUsMCwwLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5oZWFkZXJfX3RvcGlje1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgICBcbn1cblxuXG4uYnJlYWRjcnVtYiB7XG4gICAgW2NsYXNzKj0nY3VzdG9tLWJyZWFkLWNydW1iJ10ge1xuICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZXJpdmVyKTtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGxpe1xuICAgICAgICAgICAgICAgICY6bGFzdC1vZi10eXBle1xuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 61364:
/*!*********************************************!*\
  !*** ./src/app/routes/app-routes.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": () => (/* binding */ AppRoutes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/login/login.component */ 24902);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/profile/profile.component */ 58220);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/layout.component */ 39520);
/* harmony import */ var _pages_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/vehicles/vehicles.component */ 2815);
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/auth-guard.service */ 49404);
/* harmony import */ var src_app_pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/error/error.component */ 58449);
/* harmony import */ var _pages_vehicles_pages_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/vehicles/pages/vehicle-list/vehicle-list.component */ 78211);
/* harmony import */ var _pages_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/vehicle/vehicle.component */ 15852);
/* harmony import */ var _pages_vehicle_pages_vehicle_overview_vehicle_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/vehicle/pages/vehicle-overview/vehicle-overview.component */ 32642);
/* harmony import */ var _pages_vehicle_pages_vehicle_geolocation_vehicle_geolocation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/vehicle/pages/vehicle-geolocation/vehicle-geolocation.component */ 97618);
/* harmony import */ var _pages_vehicle_pages_vehicle_images_vehicle_images_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/vehicle/pages/vehicle-images/vehicle-images.component */ 17962);
/* harmony import */ var _pages_vehicle_pages_vehicle_logging_vehicle_logging_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/vehicle/pages/vehicle-logging/vehicle-logging.component */ 81668);
/* harmony import */ var _pages_vehicle_pages_vehicle_system_vehicle_system_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/vehicle/pages/vehicle-system/vehicle-system.component */ 52862);
/* harmony import */ var _pages_vehicle_pages_vehicle_share_vehicle_share_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/vehicle/pages/vehicle-share/vehicle-share.component */ 94530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);

















const routes = [
    {
        path: "",
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent,
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__.AuthGuardService],
        runGuardsAndResolvers: 'always',
        children: [
            {
                path: "",
                redirectTo: "vehicles",
                pathMatch: "full"
            },
            {
                path: "profile",
                component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent
            },
            {
                // Main / Home Page
                path: "vehicles",
                component: _pages_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_3__.VehiclesComponent,
                children: [
                    {
                        // Vehicle List is degailt page on Main / Home Page
                        path: "",
                        component: _pages_vehicles_pages_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_6__.VehicleListComponent,
                        data: {
                            title: 'Vehicle List',
                            breadcrumb: [
                                {
                                    label: 'Vehices',
                                    url: ''
                                }
                            ]
                        },
                    },
                    {
                        path: ":id",
                        component: _pages_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__.VehicleComponent,
                        data: {
                            title: 'Vehicle',
                            breadcrumb: [
                                {
                                    label: 'Vehicle',
                                    url: ':id'
                                }
                            ]
                        },
                        children: [
                            {
                                path: "",
                                redirectTo: "overview",
                                pathMatch: "full"
                            },
                            {
                                path: "overview",
                                component: _pages_vehicle_pages_vehicle_overview_vehicle_overview_component__WEBPACK_IMPORTED_MODULE_8__.VehicleOverviewComponent,
                                data: {
                                    title: 'Overview',
                                    breadcrumb: [
                                        {
                                            label: 'Vehices',
                                            url: '../'
                                        },
                                        {
                                            label: 'Overview',
                                            url: ''
                                        }
                                    ]
                                },
                            },
                            {
                                path: "geolocation",
                                component: _pages_vehicle_pages_vehicle_geolocation_vehicle_geolocation_component__WEBPACK_IMPORTED_MODULE_9__.VehicleGeolocationComponent,
                                data: {
                                    title: 'Geolocation',
                                    breadcrumb: [
                                        {
                                            label: 'Vehices',
                                            url: '../'
                                        },
                                        {
                                            label: ' Geolocation',
                                            url: ''
                                        }
                                    ]
                                },
                            },
                            {
                                path: "images",
                                component: _pages_vehicle_pages_vehicle_images_vehicle_images_component__WEBPACK_IMPORTED_MODULE_10__.VehicleImagesComponent,
                                data: {
                                    title: 'Images',
                                    breadcrumb: [
                                        {
                                            label: 'Vehices',
                                            url: '../'
                                        },
                                        {
                                            label: 'Images',
                                            url: ''
                                        }
                                    ]
                                },
                            },
                            {
                                path: "logging",
                                component: _pages_vehicle_pages_vehicle_logging_vehicle_logging_component__WEBPACK_IMPORTED_MODULE_11__.VehicleLoggingComponent,
                                data: {
                                    title: 'Logging',
                                    breadcrumb: [
                                        {
                                            label: 'Vehices',
                                            url: '../'
                                        },
                                        {
                                            label: 'Logging',
                                            url: ''
                                        }
                                    ]
                                },
                            },
                            {
                                path: "system",
                                component: _pages_vehicle_pages_vehicle_system_vehicle_system_component__WEBPACK_IMPORTED_MODULE_12__.VehicleSystemComponent,
                                data: {
                                    title: 'Configuration',
                                    breadcrumb: [
                                        {
                                            label: 'Vehices',
                                            url: '../'
                                        },
                                        {
                                            label: 'Configuration',
                                            url: ''
                                        }
                                    ]
                                },
                            },
                            {
                                path: "share/:type/:id",
                                component: _pages_vehicle_pages_vehicle_share_vehicle_share_component__WEBPACK_IMPORTED_MODULE_13__.VehicleShareComponent,
                                data: {
                                    title: 'Vehicle Share',
                                    breadcrumb: [
                                        {
                                            label: 'Vehices',
                                            url: '../'
                                        },
                                        {
                                            label: 'Share',
                                            url: ''
                                        }
                                    ]
                                },
                            },
                            {
                                path: "**",
                                component: src_app_pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent
                            }
                        ]
                    }
                ]
            },
            // {
            //     path: "vehicles",
            //     component: VehiclesComponent,
            //     children: [
            //         {
            //             path: "",
            //             component: VehicleListComponent
            //         },
            //         {
            //             path: ":id",
            //             component: VehicleComponent,
            //             children:[
            //                 {
            //                     path:"",
            //                     component:VehicleLiveComponent
            //                 },
            //                 {
            //                     path: "**"
            //                     , component: VehicleTopicComponent
            //                 }]
            //         }
            //     ]
            // },
        ]
    },
    {
        path: "login",
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    }
];
class AppRoutes {
}
AppRoutes.ɵfac = function AppRoutes_Factory(t) { return new (t || AppRoutes)(); };
AppRoutes.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppRoutes });
AppRoutes.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutes, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] }); })();


/***/ }),

/***/ 49404:
/*!*****************************************************!*\
  !*** ./src/app/services/auth/auth-guard.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ 37055);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



class AuthGuardService {
    constructor(socialAuthService, router) {
        this.socialAuthService = socialAuthService;
        this.router = router;
    }
    canActivate(route, state) {
        return new Promise((resolve) => {
            this.socialAuthService.authState.subscribe((user) => {
                if (user != null)
                    resolve(user != null);
                else
                    this.router.navigate(["/login"]);
            });
        });
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__.SocialAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 94707:
/*!*************************************************!*\
  !*** ./src/app/services/form/filter.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterService": () => (/* binding */ FilterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class FilterService {
    constructor() {
        this.fgLoggingFilters = {};
    }
    saveFilterState(key, filterGroup) {
        this.fgLoggingFilters[key] = filterGroup;
    }
    getFilterState(key) {
        return this.fgLoggingFilters[key];
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(); };
FilterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 39487:
/*!*************************************************************!*\
  !*** ./src/app/services/geolocation/geolocation.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationService": () => (/* binding */ GeolocationService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ 550);



// import {geographicCoordinates} from '../../graphql/query-syntax/subscriptions/geographic-coordinates'
const mapboxgl = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.js */ 82958);
mapboxgl.accessToken = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mapboxAPIKey;
class GeolocationService {
    constructor(apollo) {
        this.apollo = apollo;
        this.mapboxgl = mapboxgl;
        this.tractorName = 'tractor';
        mapboxgl.accessToken = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mapboxAPIKey;
    }
    setupMap(container, center, zoom) {
        return new mapboxgl.Map({
            container,
            style: 'mapbox://styles/mapbox/satellite-v9',
            center,
            zoom // starting zoom
        });
    }
    addImage({ coordinates = [], map }) {
        map.loadImage('/assets/tractor.png', (error, image) => {
            if (error)
                throw error;
            // Add the image to the map style.
            map.addImage(this.tractorName, image);
            // Add a data source containing one point feature.
            map.addSource(this.tractorName, this.getFeaturesGEOJSON({ type: 'geojson', dataType: 'FeatureCollection', geometryType: 'Feature', coordinates }));
            // Add a layer to use the image to represent the data.
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': this.tractorName,
                'layout': {
                    'icon-image': this.tractorName,
                    'icon-size': 0.05
                }
            });
        });
    }
    paintLine(config, map) {
        const { lineSize = 5, lineColor = "red", source = "route" } = config;
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': source,
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': lineColor,
                'line-width': lineSize,
                'line-opacity': 0.8
            }
        });
    }
    onLoadStaticMapHandler(config, map) {
        const { coordinates, showTractor, lineColor, lineSize } = config;
        map.addSource('route', this.getGEOJSON({ type: "geojson", dataType: 'Feature', geometryType: 'LineString', coordinates }));
        if (showTractor)
            this.addImage({ coordinates: coordinates[coordinates.length - 1], map });
        this.paintLine({ source: "route", lineColor, lineSize }, map);
    }
    getGEOJSON(config) {
        const { type, dataType, geometryType, coordinates } = config;
        return {
            'type': type,
            'data': {
                'type': dataType,
                'properties': {},
                'geometry': {
                    'type': geometryType,
                    'coordinates': coordinates
                }
            }
        };
    }
    getFeaturesGEOJSON(config) {
        const { type, dataType, geometryType, coordinateType = "Point", coordinates } = config;
        return {
            'type': type,
            'data': {
                'type': dataType,
                'features': [
                    {
                        'type': geometryType,
                        'geometry': {
                            'type': coordinateType,
                            'coordinates': coordinates
                        }
                    }
                ]
            }
        };
    }
    getStaticMap(config) {
        const { container = "map", coordinates = [[]], center = coordinates[0], showTractor = false, zoom = 10, lineColor, lineSize } = config;
        const map = this.setupMap(container, center, zoom);
        map.on("load", () => {
            this.onLoadStaticMapHandler({ container, coordinates, center, showTractor, lineColor, lineSize }, map);
        });
    }
    getReplayMap(config) {
        const { container = "map", coordinates = [[]], center = coordinates[0], showTractor = false, zoom = 10, lineColor, lineSize } = config;
        const map = this.setupMap(container, center, zoom);
        map.on("load", () => {
            const geoJson = this.getFeaturesGEOJSON({
                type: 'geojson',
                dataType: 'FeatureCollection',
                geometryType: 'Feature',
                coordinateType: "LineString",
                coordinates: [coordinates[0]]
            });
            map.addSource('trace', geoJson);
            this.paintLine({ source: "trace", lineColor, lineSize }, map);
            if (showTractor)
                this.addImage({ coordinates, map });
            map.jumpTo({ 'center': coordinates[0], 'zoom': 14 });
            map.setPitch(30);
            let i = 0;
            let timer = window.setInterval(() => {
                if (i < coordinates.length) {
                    geoJson.data.features[0].geometry.coordinates.push(
                    // @ts-ignore
                    coordinates[i]);
                    map.getSource('trace').setData(geoJson.data);
                    map.panTo(coordinates[i]);
                    if (showTractor) {
                        const imagePosition = this.getFeaturesGEOJSON({
                            type: 'geojson',
                            dataType: 'FeatureCollection',
                            geometryType: 'Feature',
                            coordinateType: "LineString",
                            coordinates: [coordinates[i]]
                        });
                        map.getSource(this.tractorName).setData(imagePosition.data);
                    }
                    i++;
                }
                else {
                    window.clearInterval(timer);
                }
            }, 1000);
        });
    }
    getLiveMap(config) {
        const { container = "map", coordinates = [[]], showTractor = false, center, zoom = 10, lineColor, lineSize } = config;
        const map = this.setupMap(container, center, zoom);
        return new Promise((resolve, reject) => {
            map.on("load", () => {
                const geoJson = this.getFeaturesGEOJSON({
                    type: 'geojson',
                    dataType: 'FeatureCollection',
                    geometryType: 'Feature',
                    coordinateType: "LineString",
                    coordinates: []
                });
                map.addSource('trace', geoJson);
                this.paintLine({ source: "trace", lineColor, lineSize }, map);
                if (showTractor)
                    this.addImage({ coordinates, map });
                map.setPitch(30);
                resolve({ map, geoJson, image: this.tractorName });
            });
        });
    }
}
GeolocationService.ɵfac = function GeolocationService_Factory(t) { return new (t || GeolocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__.Apollo)); };
GeolocationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GeolocationService, factory: GeolocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 91776:
/*!*******************************************************!*\
  !*** ./src/app/services/graphql/gql-query.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GqlQueryService": () => (/* binding */ GqlQueryService)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ 61319);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ 550);
/* harmony import */ var src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/images/image.service */ 82329);





const QueryQL = __webpack_require__(/*! src/app/graphql/query-syntax/query */ 56197);
class GqlQueryService {
    constructor(graphService, imageService) {
        this.graphService = graphService;
        this.imageService = imageService;
    }
    basicFilteredQuery(Query, variables = {}) {
        return this.graphService
            .watchQuery({
            query: Query,
            errorPolicy: 'all',
            variables
        })
            .valueChanges;
    }
    getTopics() {
        return this.graphService
            .watchQuery({ query: QueryQL.Topics.All })
            .valueChanges;
    }
    getTopicsByVehicleId(variables) {
        return this.basicFilteredQuery(QueryQL.Topics.ByVehicleId, variables);
    }
    getGeolocaton(variables) {
        // return this.graphService
        //   .watchQuery<any>({ query: QueryQL.Geolocation.ById,variables })
        //   .valueChanges
        return this.basicFilteredQuery(QueryQL.Geolocation.ById, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data.starfires.nodes;
        }));
    }
    getImagePair(variables) {
        return this.basicFilteredQuery(QueryQL.Images.ImagePair, variables);
    }
    getSegmentationMap(variables) {
        return this.basicFilteredQuery(QueryQL.Images.SegmentationMap, variables);
    }
    getAllVehicles() {
        return this.basicFilteredQuery(QueryQL.Vehicles.All)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            return response.data.vehicles.nodes.map((vehicle) => {
                return Object.assign(Object.assign({}, vehicle), { type: vehicle.type.type });
            });
        }));
    }
    getOnlineVehicles({ sort = "" } = {}) {
        return this.basicFilteredQuery(QueryQL.Vehicles.Online)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            const results = !response.data.vehiclesOnlines ? [] : response.data.vehiclesOnlines.nodes.map((vehicle) => {
                const result = Object.assign({}, vehicle.vehicle);
                result.id = vehicle.id;
                if (result.vehicleStatuses.nodes.length) {
                    result.alerts = result.vehicleStatuses.nodes[0].alerts.nodes[0];
                    result.state = result.vehicleStatuses.nodes[0].state;
                }
                return result;
            });
            switch (sort) {
                case "alert":
                    return results.sort((a, b) => a.alerts.alertType.severity - b.alerts.alertType.severity);
                    break;
                default:
                    return results;
                    break;
            }
        }));
    }
    getOfflineVehicles() {
        return this.basicFilteredQuery(QueryQL.Vehicles.Offline)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            return response.data.vehiclesOfflines.nodes.map((vehicle) => {
                return Object.assign({}, vehicle);
            });
        }));
    }
    getVehicleOnlineStatus(variables) {
        return this.basicFilteredQuery(QueryQL.Vehicles.OnlineOrOfflineById, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            const results = response.data;
            return { online: !results.online.nodes.length ?
                    null : Object.assign({}, results.online.nodes[0]),
                offline: !results.offline.nodes.length ?
                    null : Object.assign({}, results.offline.nodes[0])
            };
        }));
    }
    getVehicleById(variables) {
        return this.basicFilteredQuery(QueryQL.Vehicles.ById, variables);
    }
    getSegmentationMapByHeaderId(variables) {
        return this
            .basicFilteredQuery(QueryQL.Images.SegmentationMapByHeaderId, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            // if(!response.data.cameraMessageHeaders)
            //   return []
            // return response.data.cameraMessageHeaders.nodes.filter((msg:any, index:number, array:any[]) =>{
            //   if(!msg.cameraMessagesByHeaderId.nodes.length)
            //     return false
            //   const segmentation = msg.cameraMessagesByHeaderId.nodes[0].segmentationMapsByMsgId.nodes[0]
            //   return !!segmentation && segmentation.msg.image.encoding === "mono8"
            // }).map((msg:any)=>{
            //     const segmentation = msg.cameraMessagesByHeaderId.nodes[0].segmentationMapsByMsgId.nodes[0]
            //     return {segmentation:segmentation.msg.image}
            // })[0]
            if (!response.data.segmentationViews.nodes.length)
                return null;
            return response.data.segmentationViews.nodes[0];
        }));
    }
    getImagePreview(variables) {
        return this.basicFilteredQuery(QueryQL.Images.PreviewByVehicleIdTopicName, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            const cameraData = response.data.topics.nodes[0].cameras;
            const totalCount = cameraData.totalCount;
            const images = cameraData.nodes.map((info) => {
                const image = Object.assign(Object.assign({}, info.msg.image), { timestamp: new Date(info.readingat).toUTCString(), vehicle: info.vehicle.name, id: info.id, imageId: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.default)(), headerId: info.msg.header.headerId, meta: info.msg.cameraMeta });
                return image;
            });
            return { cameraData, totalCount, images };
        }));
    }
    getLatestImagePreview(variables) {
        return this.basicFilteredQuery(QueryQL.Images.LatestPreviewVehicleIdByTopicName, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            const cameraData = response.data.topics.nodes[0].cameras;
            const totalCount = cameraData.totalCount;
            const images = cameraData.nodes.map((info) => {
                const image = Object.assign(Object.assign({}, info.msg.image), { timestamp: new Date(info.readingat).toUTCString(), vehicle: info.vehicle.name, id: info.id, imageId: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.default)(), headerId: info.msg.header.headerId, meta: info.msg.cameraMeta });
                return image;
            });
            return { cameraData, totalCount, images };
        }));
    }
    getAlerts() {
        return this.graphService
            .watchQuery({ query: QueryQL.Notifications.Alerts })
            .valueChanges;
    }
    getVehiclePreviousLocation(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Geolocation.PreviousLocation, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data.starfires.nodes.length ? response.data.starfires.nodes[0].msg : null;
        }));
    }
    getVehicleStatus(variables) {
        return this.basicFilteredQuery(QueryQL.Status.Vehicle, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            const nodes = response.data.vehicleStatuses ? response.data.vehicleStatuses.edges.map((results) => {
                const node = results.node;
                return {
                    id: node.id,
                    missionStats: node.statusMessage.missionStats,
                    readingat: node.statusMessage.header.readingat,
                    headerId: node.statusMessage.header.headerid,
                    node: node.statusMessage.header.node,
                    topic: node.topic.name,
                    state: node.state,
                    alerts: node.alerts.nodes,
                    vehicleStatusDetails: node.vehicleStatusDetails.nodes
                };
            }) : [];
            return Object.assign(Object.assign({}, response.data.vehicleStatuses.pageInfo), { totalCount: response.data.vehicleStatuses.totalCount, nodes });
        }));
    }
    getVehicleStatusByDateRange(variables) {
        return this.basicFilteredQuery(QueryQL.Status.ByVehicleIdDateRange, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            const nodes = response.data.vehicleStatuses ? response.data.vehicleStatuses.edges.map((results) => {
                const node = results.node;
                return {
                    id: node.id,
                    missionStats: node.statusMessage.missionStats,
                    readingat: node.statusMessage.header.readingat,
                    headerId: node.statusMessage.header.headerid,
                    node: node.statusMessage.header.node,
                    topic: node.topic.name,
                    state: node.state,
                    alerts: node.alerts.nodes,
                    vehicleStatusDetails: node.vehicleStatusDetails.nodes
                };
            }) : [];
            return Object.assign(Object.assign({}, response.data.vehicleStatuses.pageInfo), { totalCount: response.data.vehicleStatuses.totalCount, nodes });
        }));
    }
    getVehiclePreviewImages(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Images.PreviewDetailsByVehicleId, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data.topicCategories.nodes[0].topics.nodes.map((item) => {
                const preview = item.cameras.nodes[0];
                if (!preview)
                    return null;
                const cameraMessages = preview.msg.image.cameraMessages.nodes[0];
                const image = cameraMessages.image;
                const header = cameraMessages.header;
                return {
                    topic: preview.topic.name,
                    topicId: preview.topic.id,
                    image,
                    header: header
                };
            });
        }));
    }
    getVehiclePreviewImageByHeaderId(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Images.PreviewViewByMessageHeaderId, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data.imagesViews.nodes;
        }));
    }
    getVehicleLocationByDateTimestamp(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Geolocation.ByVehicleIdDateTimestamp, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data.starfires.nodes;
            // ? null :
            //   response.data.starfires.nodes.map((geo:any)=>{
            //     return {
            //       readingat: geo.readingat
            //       , id : geo.id
            //       , ...geo.msg
            //       , headerId: geo.msg.headerId
            //     }
            //   })
        }));
    }
    getAllVehicleLogsStatusDetection(variables = { logType: [], paginationRange: 25, nodes: [] }) {
        return this.basicFilteredQuery(QueryQL.Logging.QueryBuilder(variables.logType, variables.paginationRange, variables.nodes), variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            // const logging:any = []
            if (!response || !response.data)
                return [];
            // response.data.logging ? response.data.logging.nodes.map((item:any)=>item.vehicleLogsByMessageId.nodes.forEach((innerItem:any)=>{logging.push(innerItem)})) :null
            return [].concat(response.data.logging ? response.data.logging.nodes : [])
                .concat(response.data.objectDetection ? response.data.objectDetection.nodes : [])
                .concat(response.data.vehicleStatus ? response.data.vehicleStatus.nodes : [])
                .sort((a, b) => new Date(b.readingat).valueOf() - new Date(a.readingat).valueOf());
        }));
    }
    getPreviewImageByCameraMessageHeaderId(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Images.PreviewByMessageHeaderId, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            const result = response.data.cameraMessageHeaders.nodes.map((node) => {
                return node.cameraMessagesByHeaderId.nodes[0].camerasByMsgId.nodes[0];
            }).filter((result) => !!result);
            if (!result.length)
                return null;
            const recentResult = result[result.length - 1].msg;
            const header = recentResult.header;
            return {
                seq: header.seq,
                node: header.node,
                readingat: header.readingat,
                image: recentResult.image
            };
        }));
    }
    getObjectDetectionByVehicleId(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Detection.ByVehicleId, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data.objects;
        }));
    }
    getObjectDetectionById(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Detection.ById, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            if (!response.data.objects || !response.data.objects.nodes.length)
                return null;
            return response.data.objects.nodes[0];
        }));
    }
    getLoggingNodes(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Logging.NodesByVehicleId, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data.vehicleNodes.nodes;
        }));
    }
    getTopicsByCategoryVehicleId(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Topics.ByCategoryVehicleId, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            const byList = [];
            response.data.list.nodes.filter((item) => {
                return item.vehicleTopics.nodes.length;
            }).forEach((item) => {
                return item.vehicleTopics.nodes.map((vehicleTopic) => {
                    byList.push(vehicleTopic.topic);
                });
            });
            const byCategory = response.data
                .category.nodes[0]
                .topics.nodes.map((result) => {
                if (result.vehicleTopics.nodes.length)
                    return result.vehicleTopics.nodes[0].topic;
                return null;
            }).filter((results) => !!results);
            return [...byCategory, ...byList];
        }));
    }
    getPreviewImagesByTopicNameVehicleId(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Images.ByTopicNamesVehicleId, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            if (!response.data.topics)
                return null;
            return response.data.topics.nodes.map((result, index, array) => {
                if (!result.cameras.nodes.length)
                    return { topic: result.vehicleTopics.nodes[0].topic };
                const msg = result.cameras.nodes.length ? Object.assign({}, result.cameras.nodes[0].msg) : null;
                const topic = result.cameras.nodes[0].topic;
                const header = msg.header;
                return {
                    topic,
                    header,
                    image: msg.image
                };
            });
        }));
    }
    getObjectDetectionHeaderIdByVehicleId(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Detection.HeaderIdByVehicleId, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data.objects;
        }));
    }
    getObjectDetectionImages(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Images.ObjectDetectionImagesByVehicleId, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return {
                totalCount: response.data.objectDetectionImages.totalCount,
                nodes: response.data.objectDetectionImages.nodes.map((data) => {
                    return {
                        image: {
                            id: data.imageId,
                            encoding: data,
                            height: data.height,
                            width: data.width
                        },
                        header: {
                            headerId: data.headerId,
                            readingat: data.readingat
                        },
                        cameraMeta: {
                            cameraName: data.cameraName,
                            leftExposure: data.leftExposure,
                            rightExposure: data.rightExposure,
                            leftGain: data.leftGain,
                            rightGain: data.rightGain
                        }
                    };
                })
            };
        }));
    }
    getCurrentLogsByVehicleId(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Logging.CurrentLogsByVehicleId, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            // const logging:any = []
            if (!response || !response.data)
                return [];
            // response.data.logging ? response.data.logging.nodes.map((item:any)=>item.vehicleLogsByMessageId.nodes.forEach((innerItem:any)=>{logging.push(innerItem)})) :null
            return response.data.logging.nodes;
        }));
    }
    getLogsByVehicleIdDateRange(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Logging.ByVehicleIdDateRange, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            if (!response || !response.data)
                return [];
            return response.data.logging.nodes;
        }));
    }
    // getImageMeta(variables={}){
    //   return this.basicFilteredQuery(QueryQL.Images.CameraMetaByImageId, variables)
    //   .pipe(map((response:any)=>{
    //     if(!response.data.images.nodes.length)
    //       return null;
    //     const cameraData = response.data.images.nodes[0]
    //     const cameraMetaData = cameraData.cameraMessages.nodes[0].cameraMeta
    //     return { 
    //       width:cameraData.width
    //       , height: cameraData.height
    //       , step: cameraData.step
    //       , encoding: cameraData.encoding
    //       , isBigendian: cameraData.isBigendian
    //       , header: cameraData.cameraMessages.nodes[0].header
    //       , ...cameraData.cameraMessages.nodes[0].cameraMeta
    //     }
    //   }))
    // }
    getImageMeta(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Images.CameraMetaByImageId, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            const result = response.data.image.cameraMessages.nodes[0].camerasByMsgId.nodes[0].cameraJson;
            if (!result)
                return {};
            return JSON.parse(result.json);
        }));
    }
    getPreviewImageByCameraMessageIdCameraName(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Images.PreviewByMessageHeaderIdCameraName, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            if (!response.data.imagesViews.nodes.length)
                null;
            return response.data.imagesViews.nodes[0];
        }));
    }
    getMissonCountByVehicleId(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Status.MissionCountByVehicleId, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            if (!response.data.missionPaginationViews || !response.data.missionPaginationViews.nodes.length)
                return [];
            return response.data.missionPaginationViews.nodes;
        }));
    }
    getMissonStatsByVehicleIdTimestamp(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Status.MissionStatsByVehicleIdTimestamp, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            if (!response.data.missionStatsByTimestamps || !response.data.missionStatsByTimestamps.nodes.length)
                null;
            return response.data.missionStatsByTimestamps.nodes[0];
        }));
    }
    getMissionByVehicleId(variables = {}) {
        return this.basicFilteredQuery(QueryQL.Production.MissionsByVehicleId, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            if (!response.data.missions || !response.data.missions.nodes.length)
                [];
            return Object.assign({}, response.data.missions);
        }));
    }
}
GqlQueryService.ɵfac = function GqlQueryService_Factory(t) { return new (t || GqlQueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_4__.Apollo), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_0__.ImageService)); };
GqlQueryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: GqlQueryService, factory: GqlQueryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 86427:
/*!**************************************************************!*\
  !*** ./src/app/services/graphql/gql-subscription.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GqlSubscriptionService": () => (/* binding */ GqlSubscriptionService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ 550);



const SubscriptionQL = __webpack_require__(/*! src/app/graphql/query-syntax/subscriptions */ 89156);
class GqlSubscriptionService {
    constructor(graphService) {
        this.graphService = graphService;
    }
    getDeviceStream() {
        return this.graphService.subscribe({
            query: SubscriptionQL.DeviceMessageSubscription
        });
    }
    getGeolocationStream(variables = {}) {
        return this.graphService.subscribe({
            query: SubscriptionQL.Geolocation.Vehicles,
            variables
        });
    }
    getOnlineVehicles() {
        return this.graphService.subscribe({
            query: SubscriptionQL.Vehicles.Online
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            const vehicle = response.data.sqlVehiclesOnline.vehicle_online ?
                response.data.sqlVehiclesOnline.vehicle_online.vehicle : null;
            const result = {
                event: response.data.sqlVehiclesOnline.event,
                id: response.data.sqlVehiclesOnline.row.id
            };
            if (vehicle) {
                result.name = vehicle.name;
                result.ip = vehicle.ip;
                result.vehicle_id = vehicle.vehicle_id;
                result.type = vehicle.type.type;
                if (vehicle.vehicleStatuses.nodes.length) {
                    result.alerts = vehicle.vehicleStatuses.nodes[0].alerts.nodes[0];
                    result.state = vehicle.vehicleStatuses.nodes[0].state;
                }
            }
            return result;
        }));
    }
    getVehicleOnlineStatus(variables = {}) {
        return this.graphService.subscribe({
            query: SubscriptionQL.Vehicles.OnlineOrOfflineById,
            variables
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            const result = response.data.sqlVehiclesOnline;
            if (!result.vehicle_online)
                return null;
            switch (result.event) {
                case "INSERT":
                case "UPDATE":
                    return {
                        online: true,
                        rowId: result.row.id,
                        vehicleId: result.vehicle_online.vehicleid,
                        name: result.vehicle_online.vehicle.name
                    };
                    break;
                default:
                    return { online: false };
                    break;
            }
        }));
    }
    getAlerts() {
        return this.graphService.subscribe({
            query: SubscriptionQL.Notifications.Alerts
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            const alert = response.data.sqlAlerts.alerts;
            const event = response.data.sqlAlerts.event;
            return Object.assign(Object.assign({}, alert), { event, alertMessage: `${alert.vehicleStatus.topic.name} : ${alert.vehicleStatus.state.name}` });
        }));
    }
    getVehicleStatus(variables = {}) {
        return this.graphService.subscribe({
            query: SubscriptionQL.Vehicles.State,
            variables
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            if (!response.data.sqlVehicleStatus.vehicle_status)
                return null;
            const results = response.data.sqlVehicleStatus.vehicle_status;
            return Object.assign(Object.assign({}, results), { statusMessage: results.statusMessage, missionStats: results.statusMessage.missionStats, topic: results.topic.name, node: results.statusMessage.header.node, headerId: results.statusMessage.header.headerid, status: results.state.name, readingat: results.statusMessage.header.readingat, state: results.state, vehicleStatusDetails: results.vehicleStatusDetails.nodes, alerts: results.alerts.nodes.length ? results.alerts.nodes[0] : null });
        }));
    }
    getVehiclePreviewImages(variables = {}) {
        return this.graphService.subscribe({
            query: SubscriptionQL.Images.PreviewImagesByVehicleId,
            variables
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            const camera = response.data.sqlCamera.camera;
            return {
                topic: camera.topic.name,
                topicId: camera.topic.id,
                vehicleId: camera.vehicleId,
                image: Object.assign({}, camera.msg.image),
                header: camera.msg.header
            };
            // return response.data.topicCategories.nodes[0].topics.nodes.map((item:any)=>{
            //     const preview = item.cameras.nodes[0]
            //     const cameraMessages = preview.msg.image.cameraMessages.nodes[0]
            //     const image = cameraMessages.image
            //     const header = cameraMessages.header
            //     return {
            //       topic: preview.topic.name
            //       , image: {...image, data: JSON.parse(image.data.data)}
            //       , header: header
            //     }
            // })
        }));
    }
    getPreviewImageByVehicleIdTopicId(variables = {}) {
        return this.graphService.subscribe({
            query: SubscriptionQL.Images.PreviewImagesByVehicleIdTopicId,
            variables
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            if (!response.data.sqlCamera.camera)
                return null;
            const topic = response.data.sqlCamera.camera.vehicle.vehicleTopics.nodes[0].topic;
            const msg = topic.cameras.nodes[0].msg;
            const image = msg.image;
            const header = msg.header;
            return {
                topic: topic.name,
                topicId: topic.id,
                image,
                header
            };
        }));
    }
    getLoggingByVehicleId(variables = {}) {
        return this.graphService.subscribe({
            query: SubscriptionQL.Logging.ByVehicleId,
            variables
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            return response.data.sqlVehicleLogging.vehicle_logs;
        }));
    }
    getObjectDetectionByVehicleId(variables = {}) {
        return this.graphService.subscribe({
            query: SubscriptionQL.Detection.ByVehicleId,
            variables
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            return response.data.sqlObjectDetection.object;
        }));
    }
    getMissionByVehicleId(variables = {}) {
        return this.graphService.subscribe({
            query: SubscriptionQL.Production.MissionByVehicleId,
            variables
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            const result = response.data.sqlMission;
            return {
                event: result.event,
                mission: result.missions
            };
        }));
    }
}
GqlSubscriptionService.ɵfac = function GqlSubscriptionService_Factory(t) { return new (t || GqlSubscriptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__.Apollo)); };
GqlSubscriptionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GqlSubscriptionService, factory: GqlSubscriptionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 82329:
/*!**************************************************!*\
  !*** ./src/app/services/images/image.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageService": () => (/* binding */ ImageService)
/* harmony export */ });
/* harmony import */ var image_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! image-js */ 96386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class ImageService {
    constructor() { }
    mapRGBChannels(data, index, red, green, blue, reverse) {
        if (!reverse) {
            data[index] = red; // red
            data[index + 1] = green; // green
            data[index + 2] = blue; // blue
        }
        else {
            data[index + 2] = blue; // blue
            data[index + 1] = green; // green
            data[index] = red; // red
        }
    }
    generateSegmentationColor(data, index, step, value, reverse) {
        const code = value[step];
        switch (code) {
            // ‘Drivable’: (0, 0, 0), # Black
            case 0:
                this.mapRGBChannels(data, index, 0, 0, 0, reverse);
                break;
            // ‘Obstacle’: (1.0, 0, 0), # Red
            case 1:
                this.mapRGBChannels(data, index, 255, 0, 0, reverse);
                break;
            // ‘Sky’: (0, 0, 1.0), # Blue
            case 2:
                this.mapRGBChannels(data, index, 0, 0, 255, reverse);
                break;
            // ‘Trees’: (0, 1.0, 0), # Green
            case 3:
                this.mapRGBChannels(data, index, 0, 255, 0, reverse);
                break;
            // ‘Implement’: (1.0, 1.0, 0.0), # Yellow 
            case 4:
                this.mapRGBChannels(data, index, 255, 255, 0, reverse);
                break;
            // ‘Human’: (0.0, 1.0, 1.0), # Teal
            case 5:
                this.mapRGBChannels(data, index, 0, 255, 255, reverse);
                break;
        }
        data[index + 3] = !code ? 0 : 125; // alpha
    }
    generateRgbColor(data, index, step, value, reverse) {
        this.mapRGBChannels(data, index, value[step], value[step + 1], value[step + 2], reverse);
        data[index + 3] = 255; // alpha
    }
    reMapData(config) {
        const { width = 0, height = 0, step = 1, is_bigendian = 0, data = [], bitDepth = 8, isSegmentation = false } = config;
        const parsedData = [];
        let i = 0, j, y = 0, x;
        while (y < height) {
            j = y * step;
            for (x = 0; x < width; x++) {
                if (isSegmentation) {
                    this.generateSegmentationColor(parsedData, i, j, data, is_bigendian);
                }
                else
                    this.generateRgbColor(parsedData, i, j, data, is_bigendian);
                i += 4;
                j += 3;
            }
            y++;
        }
        return new image_js__WEBPACK_IMPORTED_MODULE_0__.Image(width, height, parsedData, {
            bitDepth,
        });
    }
    getDataURL(config) {
        return this.reMapData(config).toDataURL();
    }
}
ImageService.ɵfac = function ImageService_Factory(t) { return new (t || ImageService)(); };
ImageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImageService, factory: ImageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9312:
/*!***************************************************!*\
  !*** ./src/app/services/layout/scroll.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollService": () => (/* binding */ ScrollService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class ScrollService {
    constructor() {
        this.contentScroll = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
}
ScrollService.ɵfac = function ScrollService_Factory(t) { return new (t || ScrollService)(); };
ScrollService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScrollService, factory: ScrollService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 83536:
/*!*****************************************************!*\
  !*** ./src/app/services/navigation/menu.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class MenuService {
    constructor() {
        this.menu = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
MenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 94481:
/*!*********************************************************!*\
  !*** ./src/app/services/notifications/alert.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);






class AlertService {
    constructor(gqlQueryService, gqlSubscriptionService, _snackBar) {
        this.gqlQueryService = gqlQueryService;
        this.gqlSubscriptionService = gqlSubscriptionService;
        this._snackBar = _snackBar;
        this.currentAlerts = [];
        this.horizontalPosition = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.alert.position.horizontal;
        this.verticalPosition = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.alert.position.vertical;
        this.alerts = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.gqlSubscriptionService
            .getAlerts()
            .subscribe(response => {
            switch (response.event) {
                case "INSERT":
                    // this.currentAlerts.push(response.data.sqlAlerts.alerts)
                    // this.alerts.next(this.currentAlerts)
                    this.alerts.next(response);
                    break;
                case "UPDATE":
                    // const index = this.currentAlerts.findIndex((alert:any)=>{
                    //   alert.id === response.data.sqlAlerts.alerts
                    // })
                    // if(response.data.sqlAlerts.alerts.dismissed)
                    //   this.currentAlerts.splice(index,1)
                    // else
                    //   this.currentAlerts[index] = response.data.sqlAlerts.alerts
                    // this.alerts.next(this.currentAlerts)
                    this.alerts.next(response);
                    break;
            }
        });
    }
    getAlerts() {
        this.gqlQueryService
            .getAlerts()
            .subscribe(response => {
            this.currentAlerts = response.data.alerts.nodes;
            // this.alerts.next(this.currentAlerts)
        });
    }
    displayNotification(message) {
        this._snackBar.open(message, 'Dismiss', {
            duration: 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_2__.GqlSubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar)); };
AlertService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _shared_confg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.confg */ 23500);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = Object.assign({ production: false }, _shared_confg__WEBPACK_IMPORTED_MODULE_0__.default);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 23500:
/*!******************************************!*\
  !*** ./src/environments/shared.confg.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sharedConfig)
/* harmony export */ });
const sharedConfig = {
    googleAuthClientId: '1068443878218-kk375e4311cc3r2rk3b0hn9ukm900tjo.apps.googleusercontent.com',
    mapboxAPIKey: "pk.eyJ1IjoiYW50Ymx1ZXJpdmVydGVjaCIsImEiOiJja295a3IwemowbjMwMndwZ2RkdHY2bmJjIn0.xpY0kRQNFTeFgc5l6hqRtQ",
    serviceEndpoint: "/graphql",
    timestampFormat: "YYYY-MM-DDTHH:mm:ss",
    alert: {
        position: {
            horizontal: "center",
            vertical: "bottom"
        }
    }
};



/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 26431,
	"./af.js": 26431,
	"./ar": 81286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 43160,
	"./ar-ly.js": 43160,
	"./ar-ma": 62551,
	"./ar-ma.js": 62551,
	"./ar-sa": 79989,
	"./ar-sa.js": 79989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 81286,
	"./az": 15887,
	"./az.js": 15887,
	"./be": 14572,
	"./be.js": 14572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 93344,
	"./bm.js": 93344,
	"./bn": 58985,
	"./bn-bd": 83990,
	"./bn-bd.js": 83990,
	"./bn.js": 58985,
	"./bo": 94391,
	"./bo.js": 94391,
	"./br": 46728,
	"./br.js": 46728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 41043,
	"./ca.js": 41043,
	"./cs": 70420,
	"./cs.js": 70420,
	"./cv": 33513,
	"./cv.js": 33513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 47978,
	"./da.js": 47978,
	"./de": 46061,
	"./de-at": 25204,
	"./de-at.js": 25204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 46061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-au": 25724,
	"./en-au.js": 25724,
	"./en-ca": 10525,
	"./en-ca.js": 10525,
	"./en-gb": 52847,
	"./en-gb.js": 52847,
	"./en-ie": 67216,
	"./en-ie.js": 67216,
	"./en-il": 39305,
	"./en-il.js": 39305,
	"./en-in": 73364,
	"./en-in.js": 73364,
	"./en-nz": 79130,
	"./en-nz.js": 79130,
	"./en-sg": 11161,
	"./en-sg.js": 11161,
	"./eo": 50802,
	"./eo.js": 50802,
	"./es": 40328,
	"./es-do": 45551,
	"./es-do.js": 45551,
	"./es-mx": 83585,
	"./es-mx.js": 83585,
	"./es-us": 64790,
	"./es-us.js": 64790,
	"./es.js": 40328,
	"./et": 96389,
	"./et.js": 96389,
	"./eu": 52961,
	"./eu.js": 52961,
	"./fa": 26151,
	"./fa.js": 26151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fil": 58898,
	"./fil.js": 58898,
	"./fo": 37779,
	"./fo.js": 37779,
	"./fr": 28174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 38867,
	"./fr-ch.js": 38867,
	"./fr.js": 28174,
	"./fy": 50452,
	"./fy.js": 50452,
	"./ga": 45014,
	"./ga.js": 45014,
	"./gd": 74127,
	"./gd.js": 74127,
	"./gl": 72124,
	"./gl.js": 72124,
	"./gom-deva": 6444,
	"./gom-deva.js": 6444,
	"./gom-latn": 37953,
	"./gom-latn.js": 37953,
	"./gu": 76604,
	"./gu.js": 76604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 74235,
	"./hi.js": 74235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 37735,
	"./hu.js": 37735,
	"./hy-am": 90402,
	"./hy-am.js": 90402,
	"./id": 59187,
	"./id.js": 59187,
	"./is": 30536,
	"./is.js": 30536,
	"./it": 35007,
	"./it-ch": 94667,
	"./it-ch.js": 94667,
	"./it.js": 35007,
	"./ja": 62093,
	"./ja.js": 62093,
	"./jv": 80059,
	"./jv.js": 80059,
	"./ka": 66870,
	"./ka.js": 66870,
	"./kk": 80880,
	"./kk.js": 80880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 68785,
	"./kn.js": 68785,
	"./ko": 21721,
	"./ko.js": 21721,
	"./ku": 37851,
	"./ku.js": 37851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 40346,
	"./lb.js": 40346,
	"./lo": 93002,
	"./lo.js": 93002,
	"./lt": 64035,
	"./lt.js": 64035,
	"./lv": 56927,
	"./lv.js": 56927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 94173,
	"./mi.js": 94173,
	"./mk": 86320,
	"./mk.js": 86320,
	"./ml": 11705,
	"./ml.js": 11705,
	"./mn": 31062,
	"./mn.js": 31062,
	"./mr": 92805,
	"./mr.js": 92805,
	"./ms": 11341,
	"./ms-my": 59900,
	"./ms-my.js": 59900,
	"./ms.js": 11341,
	"./mt": 37734,
	"./mt.js": 37734,
	"./my": 19034,
	"./my.js": 19034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 46495,
	"./ne.js": 46495,
	"./nl": 70673,
	"./nl-be": 85697,
	"./nl-be.js": 85697,
	"./nl.js": 70673,
	"./nn": 72486,
	"./nn.js": 72486,
	"./oc-lnc": 46219,
	"./oc-lnc.js": 46219,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 78444,
	"./pl.js": 78444,
	"./pt": 53170,
	"./pt-br": 66117,
	"./pt-br.js": 66117,
	"./pt.js": 53170,
	"./ro": 96587,
	"./ro.js": 96587,
	"./ru": 39264,
	"./ru.js": 39264,
	"./sd": 42135,
	"./sd.js": 42135,
	"./se": 95366,
	"./se.js": 95366,
	"./si": 93379,
	"./si.js": 93379,
	"./sk": 46143,
	"./sk.js": 46143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 21082,
	"./sq.js": 21082,
	"./sr": 91621,
	"./sr-cyrl": 98963,
	"./sr-cyrl.js": 98963,
	"./sr.js": 91621,
	"./ss": 41404,
	"./ss.js": 41404,
	"./sv": 55685,
	"./sv.js": 55685,
	"./sw": 3872,
	"./sw.js": 3872,
	"./ta": 54106,
	"./ta.js": 54106,
	"./te": 39204,
	"./te.js": 39204,
	"./tet": 83692,
	"./tet.js": 83692,
	"./tg": 86361,
	"./tg.js": 86361,
	"./th": 31735,
	"./th.js": 31735,
	"./tk": 1568,
	"./tk.js": 1568,
	"./tl-ph": 96129,
	"./tl-ph.js": 96129,
	"./tlh": 13759,
	"./tlh.js": 13759,
	"./tr": 81644,
	"./tr.js": 81644,
	"./tzl": 90875,
	"./tzl.js": 90875,
	"./tzm": 16878,
	"./tzm-latn": 11041,
	"./tzm-latn.js": 11041,
	"./tzm.js": 16878,
	"./ug-cn": 74357,
	"./ug-cn.js": 74357,
	"./uk": 74810,
	"./uk.js": 74810,
	"./ur": 86794,
	"./ur.js": 86794,
	"./uz": 28966,
	"./uz-latn": 77959,
	"./uz-latn.js": 77959,
	"./uz.js": 28966,
	"./vi": 35386,
	"./vi.js": 35386,
	"./x-pseudo": 23156,
	"./x-pseudo.js": 23156,
	"./yo": 68028,
	"./yo.js": 68028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 89380,
	"./zh-hk.js": 89380,
	"./zh-mo": 60874,
	"./zh-mo.js": 60874,
	"./zh-tw": 96508,
	"./zh-tw.js": 96508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map