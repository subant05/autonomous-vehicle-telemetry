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

/***/ 93866:
/*!***********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/geolocation/geolocation.js ***!
  \***********************************************************************/
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

/***/ 88418:
/*!*****************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/geolocation/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ById": () => (/* reexport safe */ _geolocation__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "PreviousLocation": () => (/* reexport safe */ _previousLocation__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geolocation */ 93866);
/* harmony import */ var _previousLocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./previousLocation */ 73028);





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
query Geolocation {
    starfires(first:1 orderBy:ID_DESC condition:{vehicleId:"3666"}){
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

/***/ 18517:
/*!**********************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/image-pair.js ***!
  \**********************************************************/
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
                height
                width
                encoding
                step
                is_bigendian
                data
              }
              right_image{
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
/* harmony export */   "PreviewByVehicleIdTopicName": () => (/* reexport safe */ _previewByTopicName__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "SegmentationMapByHeaderId": () => (/* reexport safe */ _segmentationMapByHeaderId__WEBPACK_IMPORTED_MODULE_3__.default)
/* harmony export */ });
/* harmony import */ var _previewByVehicleId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./previewByVehicleId */ 9348);
/* harmony import */ var _previewByVehicleIdTopicId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./previewByVehicleIdTopicId */ 55516);
/* harmony import */ var _previewByTopicName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./previewByTopicName */ 18201);
/* harmony import */ var _segmentationMapByHeaderId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./segmentationMapByHeaderId */ 34443);







/***/ }),

/***/ 18201:
/*!*************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/images/previewByTopicName.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previewByVehicleIdTopicName)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 9463);


const previewByVehicleIdTopicName = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
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
                  isBigendian
                  encoding
                  height
                  width
                  step
                  data{
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
          data{
            data
          }
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
            isBigendian
            encoding
            height
            width
            step
            data{
                data
            }
            }
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


const segmentationMapByHeaderId = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.default`
query Segmentation($imageHeaderId: BigInt) {
  cameraMessageHeaders(filter:{headerId:{equalTo:$imageHeaderId}}){
    nodes{
      cameraMessagesByHeaderId{
        nodes{
          id
          image{
						encoding
            width
            height
            step
            isBigendian
             data{
               data
             }
          }
        }
      }
    }
  }
}`

  

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
/* harmony export */   "ImagePair": () => (/* reexport safe */ _image_pair__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "SegmentationMap": () => (/* reexport safe */ _segmentation_map__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "Vehicles": () => (/* reexport module object */ _vehicles__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "Images": () => (/* reexport module object */ _images__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "Notifications": () => (/* reexport module object */ _notifications__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "Status": () => (/* reexport module object */ _status__WEBPACK_IMPORTED_MODULE_7__)
/* harmony export */ });
/* harmony import */ var _topics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topics */ 60168);
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation */ 88418);
/* harmony import */ var _image_pair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-pair */ 18517);
/* harmony import */ var _segmentation_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./segmentation-map */ 67636);
/* harmony import */ var _vehicles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicles */ 85457);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images */ 82262);
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications */ 75608);
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./status */ 17847);











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

/***/ 67636:
/*!****************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/segmentation-map.js ***!
  \****************************************************************/
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
            data
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
/* harmony export */   "Vehicle": () => (/* reexport safe */ _vehicleStatus__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _vehicleStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicleStatus */ 55462);
 



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
    vehicleStatuses( first:$size offset:$cursor orderBy:ID_DESC condition:{vehicleId:$vehicle_id}){
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

/***/ 60168:
/*!************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/topics/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByVehicleId": () => (/* reexport safe */ _topics_by_vehicle_id__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "All": () => (/* reexport safe */ _topics__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _topics_by_vehicle_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topics-by-vehicle-id */ 36297);
/* harmony import */ var _topics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topics */ 88620);





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


const vehicle = `
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
    vehiclesOfflines{
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
/* harmony export */   "Vehicles": () => (/* reexport module object */ _vehicles__WEBPACK_IMPORTED_MODULE_4__)
/* harmony export */ });
/* harmony import */ var _device_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-message */ 11502);
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation */ 30758);
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notifications */ 65547);
/* harmony import */ var _vehicles_online__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicles-online */ 81000);
/* harmony import */ var _vehicles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicles */ 82555);








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
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status */ 62);





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

/***/ 62:
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
        statusMessage{
          header{
            headerid
            readingat
            node
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/app-routes.module */ 61364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! apollo-angular */ 550);
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! apollo-angular/http */ 31586);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @apollo/client/core */ 76088);
/* harmony import */ var _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @apollo/client/link/ws */ 39136);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @apollo/client/utilities */ 76333);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @apollo/client/core */ 87328);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation/navigation.component */ 60006);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ 24902);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 24789);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var ng_dynamic_breadcrumb__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ng-dynamic-breadcrumb */ 26661);
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/error/error.component */ 58449);
/* harmony import */ var _pages_vehicles_pages_vehicle_topic_vehicle_topic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/vehicles/pages/vehicle-topic/vehicle-topic.component */ 94266);
/* harmony import */ var _pages_vehicles_pages_vehicle_live_vehicle_live_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/vehicles/pages/vehicle-live/vehicle-live.component */ 61095);
/* harmony import */ var _components_topics_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/topics/starfire/starfire.component */ 93254);
/* harmony import */ var _components_topics_image_pair_image_pair_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/topics/image-pair/image-pair.component */ 29448);
/* harmony import */ var _components_topics_image_segmentation_image_segmentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/topics/image-segmentation/image-segmentation.component */ 3245);
/* harmony import */ var _pages_vehicles_pages_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/vehicles/pages/vehicle-list/vehicle-list.component */ 78211);
/* harmony import */ var _pages_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/vehicle/vehicle.component */ 15852);
/* harmony import */ var _components_topics_images_preview_preview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/topics/images/preview/preview.component */ 7585);
/* harmony import */ var _components_images_rgb_image_rgb_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/images/rgb-image/rgb-image.component */ 29045);
/* harmony import */ var _components_images_segmentation_image_segmentation_image_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/images/segmentation-image/segmentation-image.component */ 98299);
/* harmony import */ var _components_vehicles_vehicles_online_vehicles_online_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/vehicles/vehicles-online/vehicles-online.component */ 23161);
/* harmony import */ var _components_vehicles_vehicles_offline_vehicles_offline_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/vehicles/vehicles-offline/vehicles-offline.component */ 92784);
/* harmony import */ var _pages_vehicle_pages_vehicle_overview_vehicle_overview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/vehicle/pages/vehicle-overview/vehicle-overview.component */ 32642);
/* harmony import */ var _pages_vehicle_pages_vehicle_geolocation_vehicle_geolocation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/vehicle/pages/vehicle-geolocation/vehicle-geolocation.component */ 97618);
/* harmony import */ var _pages_vehicle_pages_vehicle_images_vehicle_images_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/vehicle/pages/vehicle-images/vehicle-images.component */ 17962);
/* harmony import */ var _pages_vehicle_pages_vehicle_logging_vehicle_logging_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/vehicle/pages/vehicle-logging/vehicle-logging.component */ 81668);
/* harmony import */ var _pages_vehicle_pages_vehicle_system_vehicle_system_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/vehicle/pages/vehicle-system/vehicle-system.component */ 52862);
/* harmony import */ var _components_Table_table_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/Table/table-utils */ 55949);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! angularx-social-login */ 37055);
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ 49404);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/button-toggle */ 42542);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/profile/profile.component */ 58220);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/layout/layout.component */ 39520);
/* harmony import */ var _pages_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/vehicles/vehicles.component */ 2815);
/* harmony import */ var _modules_graphql_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modules/graphql.module */ 72504);
/* harmony import */ var _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/top-navigation/top-navigation.component */ 56396);
/* harmony import */ var _services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/navigation/menu.service */ 83536);
/* harmony import */ var _services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/geolocation/geolocation.service */ 39487);
/* harmony import */ var _components_vehicles_vehicle_status_vehicle_status_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/vehicles/vehicle-status/vehicle-status.component */ 4587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ 37716);



































// Enviornment Variables

// Google OAuth



// Material

















// 





// Service




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ providers: [{
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: true,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_35__.GoogleLoginProvider.PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_35__.GoogleLoginProvider(_environments_environment__WEBPACK_IMPORTED_MODULE_24__.environment.googleAuthClientId)
                    }
                ]
            },
        },
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_36__.APOLLO_OPTIONS,
            // @ts-ignore
            useFactory(httpLink) {
                // Create an http link:
                const http = httpLink.create({
                    uri: `${location.protocol}//${location.host}${_environments_environment__WEBPACK_IMPORTED_MODULE_24__.environment.serviceEndpoint}`,
                });
                // Create a WebSocket link:
                const ws = new _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_37__.WebSocketLink({
                    uri: `${location.protocol === "https:" ? "wss:" : "ws:"}//${location.host}${_environments_environment__WEBPACK_IMPORTED_MODULE_24__.environment.serviceEndpoint}`,
                    options: {
                        reconnect: true,
                    },
                });
                const link = (0,_apollo_client_core__WEBPACK_IMPORTED_MODULE_38__.split)(({ query }) => {
                    let definition = (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_39__.getMainDefinition)(query);
                    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
                }, ws, http);
                const defaultOptions = {
                    watchQuery: {
                        fetchPolicy: 'network-only',
                        errorPolicy: 'ignore',
                    },
                    query: {
                        fetchPolicy: 'network-only',
                        errorPolicy: 'all',
                    },
                    subscription: {
                        fetchPolicy: 'network-only',
                        errorPolicy: 'all',
                    },
                };
                return {
                    link,
                    cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_40__.InMemoryCache(),
                    defaultOptions: defaultOptions,
                    // ... options
                };
            },
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_41__.HttpLink],
        }, _services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_31__.MenuService,
        _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__.AuthGuardService,
        _services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_32__.GeolocationService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_42__.BrowserModule,
            _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutes,
            _angular_forms__WEBPACK_IMPORTED_MODULE_43__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__.BrowserAnimationsModule,
            // Material
            _angular_material_list__WEBPACK_IMPORTED_MODULE_46__.MatListModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_47__.MatCardModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_49__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_50__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_51__.MatButtonModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__.MatSnackBarModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_53__.MatGridListModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_54__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_55__.MatProgressSpinnerModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_56__.MatPaginatorModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_57__.MatSlideToggleModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_58__.MatTableModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_59__.MatButtonToggleModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_60__.MatTabsModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_61__.MatExpansionModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_62__.MatDialogModule,
            // 
            _modules_graphql_module__WEBPACK_IMPORTED_MODULE_29__.GraphQLModule,
            angularx_social_login__WEBPACK_IMPORTED_MODULE_35__.SocialLoginModule,
            ng_dynamic_breadcrumb__WEBPACK_IMPORTED_MODULE_63__.NgDynamicBreadcrumbModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__.NavigationComponent,
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent,
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__.ProfileComponent,
        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_27__.LayoutComponent,
        _pages_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_28__.VehiclesComponent,
        _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_30__.TopNavigationComponent,
        _pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent,
        _pages_vehicles_pages_vehicle_topic_vehicle_topic_component__WEBPACK_IMPORTED_MODULE_6__.VehicleTopicComponent,
        _pages_vehicles_pages_vehicle_live_vehicle_live_component__WEBPACK_IMPORTED_MODULE_7__.VehicleLiveComponent,
        _components_topics_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_8__.StarfireComponent,
        _components_topics_image_pair_image_pair_component__WEBPACK_IMPORTED_MODULE_9__.ImagePairComponent,
        _components_topics_image_segmentation_image_segmentation_component__WEBPACK_IMPORTED_MODULE_10__.ImageSegmentationComponent,
        _pages_vehicles_pages_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_11__.VehicleListComponent,
        _pages_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_12__.VehicleComponent,
        _components_topics_images_preview_preview_component__WEBPACK_IMPORTED_MODULE_13__.PreviewComponent,
        _components_images_rgb_image_rgb_image_component__WEBPACK_IMPORTED_MODULE_14__.RgbImageComponent,
        _components_images_segmentation_image_segmentation_image_component__WEBPACK_IMPORTED_MODULE_15__.SegmentationImageComponent,
        _components_vehicles_vehicles_online_vehicles_online_component__WEBPACK_IMPORTED_MODULE_16__.VehiclesOnlineComponent,
        _components_vehicles_vehicles_offline_vehicles_offline_component__WEBPACK_IMPORTED_MODULE_17__.VehiclesOfflineComponent,
        _pages_vehicle_pages_vehicle_overview_vehicle_overview_component__WEBPACK_IMPORTED_MODULE_18__.VehicleOverviewComponent,
        _pages_vehicle_pages_vehicle_geolocation_vehicle_geolocation_component__WEBPACK_IMPORTED_MODULE_19__.VehicleGeolocationComponent,
        _pages_vehicle_pages_vehicle_images_vehicle_images_component__WEBPACK_IMPORTED_MODULE_20__.VehicleImagesComponent,
        _pages_vehicle_pages_vehicle_logging_vehicle_logging_component__WEBPACK_IMPORTED_MODULE_21__.VehicleLoggingComponent,
        _pages_vehicle_pages_vehicle_system_vehicle_system_component__WEBPACK_IMPORTED_MODULE_22__.VehicleSystemComponent,
        _components_vehicles_vehicle_status_vehicle_status_component__WEBPACK_IMPORTED_MODULE_33__.VehicleStatusComponent,
        _components_Table_table_utils__WEBPACK_IMPORTED_MODULE_23__.TableUtil], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_42__.BrowserModule,
        _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutes,
        _angular_forms__WEBPACK_IMPORTED_MODULE_43__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__.BrowserAnimationsModule,
        // Material
        _angular_material_list__WEBPACK_IMPORTED_MODULE_46__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_47__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_49__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_50__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_51__.MatButtonModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__.MatSnackBarModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_53__.MatGridListModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_54__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_55__.MatProgressSpinnerModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_56__.MatPaginatorModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_57__.MatSlideToggleModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_58__.MatTableModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_59__.MatButtonToggleModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_60__.MatTabsModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_61__.MatExpansionModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_62__.MatDialogModule,
        // 
        _modules_graphql_module__WEBPACK_IMPORTED_MODULE_29__.GraphQLModule,
        angularx_social_login__WEBPACK_IMPORTED_MODULE_35__.SocialLoginModule,
        ng_dynamic_breadcrumb__WEBPACK_IMPORTED_MODULE_63__.NgDynamicBreadcrumbModule] }); })();


/***/ }),

/***/ 55949:
/*!*************************************************!*\
  !*** ./src/app/components/Table/table-utils.ts ***!
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("id", ctx_r3.imgId);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.imageUrl);
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
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    getSegmentationImage(argsImageHeaderId) {
        var _a;
        const imageHeaderId = argsImageHeaderId || this.imageHeaderId;
        if (!imageHeaderId) {
            this.load.emit("unloaded");
            return;
        }
        (_a = this.querySubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.querySubscription = this.gqlQueryService
            .getSegmentationMapByHeaderId({ imageHeaderId })
            .subscribe(response => {
            const image = response.find((msg) => msg.encoding === "rgb8");
            const segmentation = response.find((msg) => msg.encoding === "mono8");
            if (!response.length || !segmentation) {
                this.load.emit("no segmentation");
                return;
            }
            this.imageData = this.imageService.getDataURL(Object.assign(Object.assign({}, segmentation), { isSegmentation: true }));
            this.imageUrl = this.imageService.getDataURL(Object.assign({}, image));
            this.load.emit("loaded");
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
SegmentationImageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SegmentationImageComponent, selectors: [["app-segmentation-image"]], inputs: { imageHeaderId: "imageHeaderId" }, outputs: { load: "load" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [["class", "segmentation-image ", 3, "ngStyle", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "segmentation-image", 3, "ngStyle"], [3, "src", "id", 4, "ngIf"], [3, "src", "id"], [4, "ngIf", "ngIfElse"], ["loader", ""], ["mode", "indeterminate"]], template: function SegmentationImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SegmentationImageComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SegmentationImageComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imageData)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar], styles: [".segmentation-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-size: 300% 100%;\n  background-repeat: no-repeat;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.segmentation-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZ21lbnRhdGlvbi1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNSIiwiZmlsZSI6InNlZ21lbnRhdGlvbi1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWdtZW50YXRpb24taW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMTAwJTsgICAgXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG5cbiAgICBpbWcge1xuICAgICAgICB2aXNpYmlsaXR5OmhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDphdXRvO1xuICAgIH1cblxufSJdfQ== */"] });


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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 49976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_notifications_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/notifications/alert.service */ 94481);
/* harmony import */ var _services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation/menu.service */ 83536);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation/navigation.component */ 60006);








const _c0 = function (a0) { return { "right_nav": a0 }; };
class LayoutComponent {
    constructor(alertService, menuService, _snackBar) {
        this.alertService = alertService;
        this.menuService = menuService;
        this._snackBar = _snackBar;
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faBars;
        this.showRightNav = false;
        this.alertSubscription = null;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
    }
    ngOnInit() {
        this.menuService.menu.subscribe((data) => {
            this.showRightNav = data ? true : false;
        });
        this.alertSubscription = this.alertService.alerts.subscribe(data => {
            this._snackBar.open(data.alertMessage, 'Dismiss', {
                duration: 1000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
            });
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.alertSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    toggleSideNav() {
        this.showRightNav = !this.showRightNav;
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_notifications_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar)); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 4, vars: 3, consts: [[1, "container__content", 3, "ngClass"], [1, "container__content-main"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, ctx.showRightNav));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__.NavigationComponent], styles: [".container__content[_ngcontent-%COMP%] {\n  top: 50px;\n  position: absolute;\n  width: 100%;\n}\n.container__content[_ngcontent-%COMP%]   .container__content-main[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  grid-column: 2;\n}\n@media screen and (min-width: 800px) {\n  .container__content[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 200px auto;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 0px;\n    top: 50px;\n    position: absolute;\n    width: 100%;\n  }\n}\n@media screen and (min-width: 1100px) {\n  .container__content.right_nav[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 200px auto 250px;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 0px;\n    top: 50px;\n    position: absolute;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFDUjtBQUlBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsaUNBQUE7SUFDQSw0Q0FBQTtJQUNBLHFCQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUFETjtBQUNGO0FBSUE7RUFFUTtJQUNJLGFBQUE7SUFDQSx1Q0FBQTtJQUNBLDRDQUFBO0lBQ0EscUJBQUE7SUFDQSxhQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQUhWO0FBQ0YiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9fY29udGVudHtcbiAgICB0b3A6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlOyAgICBcblxuICAgIC5jb250YWluZXJfX2NvbnRlbnQtbWFpbntcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICBncmlkLWNvbHVtbjogMjtcbiAgICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MDBweCkge1xuICAgIC5jb250YWluZXJfX2NvbnRlbnR7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlLW5hdiBtYWluLWNvbnRlbnRcIjtcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6ZGVuc2U7XG4gICAgICAgIGdyaWQtZ2FwOiAwcHg7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTEwMHB4KSB7XG4gICAgLmNvbnRhaW5lcl9fY29udGVudHtcbiAgICAgICAgJi5yaWdodF9uYXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCBhdXRvIDI1MHB4O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlLW5hdiBtYWluLWNvbnRlbnRcIjtcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OmRlbnNlO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDBweDtcbiAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatList, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListItem], styles: [".nav__side-nav[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: calc(100vh + 50px);\n  top: 0px;\n  border-right: 1px solid var(--lightgray);\n  overflow: hidden;\n  position: fixed;\n  left: -200px;\n  background-color: var(--white);\n  z-index: 2;\n  grid-column: 1;\n}\n.nav__side-nav.show[_ngcontent-%COMP%] {\n  left: 0px;\n  animation: show-left-navigation 500ms 1;\n}\n.nav__side-nav.hide[_ngcontent-%COMP%] {\n  left: -200px;\n  animation: hide-left-navigation 500ms 1;\n}\n.nav__side-nav[_ngcontent-%COMP%]   .nav__side-nav--profile[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n}\n.nav__side-nav[_ngcontent-%COMP%]   .nav__side-nav--profile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nav__side-nav[_ngcontent-%COMP%]   .nav__side-nav--toggle-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 4px;\n  left: 10px;\n  z-index: 1;\n  background: var(--white);\n  border: none;\n  font-size: 2rem;\n  font-weight: lighter;\n  cursor: pointer;\n}\n.nav__side-nav[_ngcontent-%COMP%]   .nav__side-nav--toggle-btn.show[_ngcontent-%COMP%] {\n  left: 200px;\n  animation: move-right-main-hamburger 500ms 1;\n}\n.nav__side-nav[_ngcontent-%COMP%]   .nav__side-nav--toggle-btn.hide[_ngcontent-%COMP%] {\n  left: 10px;\n  animation: move-left-main-hamburger 500ms 1;\n}\n.nav__side-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  border-bottom: 1px solid var(--lightgray);\n}\n.nav__side-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-of-type {\n  border: none;\n}\n.nav__side-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .nav__side-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--blueriver);\n}\n.nav__side-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%], .nav__side-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .mat-list-item[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.nav__side-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .nav__side-nav--link-label[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nav__side-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .nav__side-nav--link-icon[_ngcontent-%COMP%] {\n  width: 50px;\n}\n@keyframes show-left-navigation {\n  0% {\n    left: -200px;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes hide-left-navigation {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -200;\n  }\n}\n@keyframes move-right-main-hamburger {\n  0% {\n    left: 10px;\n  }\n  100% {\n    left: 200px;\n  }\n}\n@keyframes move-left-main-hamburger {\n  0% {\n    left: 200px;\n  }\n  100% {\n    left: 10px;\n  }\n}\n@media screen and (min-width: 800px) {\n  .nav__side-nav[_ngcontent-%COMP%], .nav__side-nav.hide[_ngcontent-%COMP%], .nav__side-nav.show[_ngcontent-%COMP%] {\n    display: block;\n    position: sticky !important;\n    top: 50px;\n    animation: none;\n    background: transparent;\n    z-index: 0;\n    height: calc(100vh - 50px);\n  }\n  .nav__side-nav[_ngcontent-%COMP%]   .nav__side-nav--toggle-btn[_ngcontent-%COMP%], .nav__side-nav.hide[_ngcontent-%COMP%]   .nav__side-nav--toggle-btn[_ngcontent-%COMP%], .nav__side-nav.show[_ngcontent-%COMP%]   .nav__side-nav--toggle-btn[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDSSxTQUFBO0VBQ0EsdUNBQUE7QUFDUjtBQUNJO0VBQ0ksWUFBQTtFQUNBLHVDQUFBO0FBQ1I7QUFFSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQVI7QUFFUTtFQUNJLGVBQUE7QUFBWjtBQUtJO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFIUjtBQUtRO0VBQ0ksV0FBQTtFQUNBLDRDQUFBO0FBSFo7QUFNUTtFQUNJLFVBQUE7RUFDQSwyQ0FBQTtBQUpaO0FBU0k7RUFDSSxjQUFBO0VBQ0EseUNBQUE7QUFQUjtBQVFRO0VBQ0ksWUFBQTtBQU5aO0FBUVE7RUFFSSxrQ0FBQTtBQVBaO0FBUVk7RUFDSSxtQkFBQTtBQU5oQjtBQVVRO0VBQ0ksV0FBQTtBQVJaO0FBVVE7RUFDSSxXQUFBO0FBUlo7QUFlSTtFQUNJO0lBQ0EsWUFBQTtFQWJOO0VBZU07SUFDQSxPQUFBO0VBYk47QUFDRjtBQWVJO0VBQ0k7SUFDQSxPQUFBO0VBYk47RUFlTTtJQUNBLFVBQUE7RUFiTjtBQUNGO0FBZ0JJO0VBQ0k7SUFDQSxVQUFBO0VBZE47RUFnQk07SUFDQSxXQUFBO0VBZE47QUFDRjtBQWdCSTtFQUNJO0lBQ0EsV0FBQTtFQWROO0VBZ0JNO0lBQ0EsVUFBQTtFQWROO0FBQ0Y7QUFtQkE7RUFFSTs7O0lBR0ksY0FBQTtJQUNBLDJCQUFBO0lBQ0EsU0FBQTtJQUNBLGVBQUE7SUFDQSx1QkFBQTtJQUNBLFVBQUE7SUFDQSwwQkFBQTtFQWpCTjtFQW9CTTs7O0lBQ0ksd0JBQUE7RUFoQlY7QUFDRiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdl9fc2lkZS1uYXZ7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCArIDUwcHgpO1xuICAgIHRvcDogMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0Z3JheSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDotMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIHotaW5kZXg6IDI7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG5cbiAgICAmLnNob3d7XG4gICAgICAgIGxlZnQ6MHB4O1xuICAgICAgICBhbmltYXRpb246IHNob3ctbGVmdC1uYXZpZ2F0aW9uIDUwMG1zIDE7XG4gICAgfVxuICAgICYuaGlkZXtcbiAgICAgICAgbGVmdDotMjAwcHg7XG4gICAgICAgIGFuaW1hdGlvbjogaGlkZS1sZWZ0LW5hdmlnYXRpb24gNTAwbXMgMTtcbiAgICB9XG5cbiAgICAubmF2X19zaWRlLW5hdi0tcHJvZmlsZXtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDIwcHg7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC5uYXZfX3NpZGUtbmF2LS10b2dnbGUtYnRue1xuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgdG9wOjRweDtcbiAgICAgICAgbGVmdDoxMHB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICYuc2hvd3tcbiAgICAgICAgICAgIGxlZnQ6MjAwcHg7XG4gICAgICAgICAgICBhbmltYXRpb246IG1vdmUtcmlnaHQtbWFpbi1oYW1idXJnZXIgNTAwbXMgMTtcblxuICAgICAgICB9XG4gICAgICAgICYuaGlkZXtcbiAgICAgICAgICAgIGxlZnQ6MTBweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0LW1haW4taGFtYnVyZ2VyIDUwMG1zIDE7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGEgeyBcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0Z3JheSk7XG4gICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIGJvcmRlcjpub25lO1xuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlLFxuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZXJpdmVyKTtcbiAgICAgICAgICAgIC5tYXQtbGlzdC1pdGVte1xuICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZfX3NpZGUtbmF2LS1saW5rLWxhYmVse1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgfVxuICAgICAgICAubmF2X19zaWRlLW5hdi0tbGluay1pY29ue1xuICAgICAgICAgICAgd2lkdGg6NTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cblxuICAgIFxuICAgIEBrZXlmcmFtZXMgc2hvdy1sZWZ0LW5hdmlnYXRpb24ge1xuICAgICAgICAwJXtcbiAgICAgICAgbGVmdDotMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJXtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgaGlkZS1sZWZ0LW5hdmlnYXRpb24ge1xuICAgICAgICAwJXtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICB9XG4gICAgICAgIDEwMCV7XG4gICAgICAgIGxlZnQ6LTIwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1tYWluLWhhbWJ1cmdlciB7XG4gICAgICAgIDAle1xuICAgICAgICBsZWZ0OjEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJXtcbiAgICAgICAgbGVmdDoyMDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1tYWluLWhhbWJ1cmdlciB7XG4gICAgICAgIDAle1xuICAgICAgICBsZWZ0OjIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIDEwMCV7XG4gICAgICAgIGxlZnQ6MTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjgwMHB4KSB7XG4gICAgXG4gICAgLm5hdl9fc2lkZS1uYXYsXG4gICAgLm5hdl9fc2lkZS1uYXYuaGlkZSxcbiAgICAubmF2X19zaWRlLW5hdi5zaG93e1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICBwb3NpdGlvbjpzdGlja3kgIWltcG9ydGFudDtcbiAgICAgICAgdG9wOjUwcHg7XG4gICAgICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHotaW5kZXg6MDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG5cblxuICAgICAgICAubmF2X19zaWRlLW5hdi0tdG9nZ2xlLWJ0bntcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.menu.header);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopNavigationComponent_div_3_h5_1_Template, 2, 1, "h5", 6);
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix], styles: [".nav__top[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.25);\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  padding: 20px 0;\n  position: -webkit-sticky;\n  position: fixed;\n  top: 0px;\n  height: 50px;\n  width: 100%;\n  background-color: var(--white);\n  padding: 0 20px;\n  z-index: 2;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__logo[_ngcontent-%COMP%] {\n  justify-self: center;\n  display: block;\n  margin: auto;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-nav--toggle-btn[_ngcontent-%COMP%] {\n  align-self: center;\n  float: right;\n  position: fixed;\n  right: 10px;\n  top: 0px;\n  cursor: pointer;\n  transform: rotate(180deg);\n  background-color: var(--white);\n  font-size: 2rem;\n  background-color: var(--white);\n  border: none;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-nav--toggle-btn.show[_ngcontent-%COMP%] {\n  right: 250px;\n  animation: move-right-hamburger 500ms 1;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-nav--toggle-btn.hide[_ngcontent-%COMP%] {\n  right: 10px;\n  animation: move-left-hamburger 500ms 1;\n}\n@media screen and (min-width: 1100px) {\n  .nav__top[_ngcontent-%COMP%]   .nav__top-nav--toggle-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  right: -250px;\n  top: 0px;\n  width: 250px;\n  background-color: var(--white);\n  border-left: 1px solid var(--lightgray);\n  height: 100vh;\n  margin-top: 0;\n  padding-inline-start: 10px;\n  word-break: break-all;\n  overflow-y: auto;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  padding: 0;\n  margin-left: 20px;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin-right: 10px;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  width: 100%;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  white-space: pre-wrap;\n  font-size: 1rem;\n  text-align: left;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: var(--blueriver);\n  color: var(--white);\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::before {\n  content: \" \";\n  width: 15px;\n  margin-right: 10px;\n  height: 36px;\n  display: inline-block;\n  background-color: var(--blueriver);\n  position: relative;\n  margin-left: -26px;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu.show[_ngcontent-%COMP%] {\n  right: 0px;\n  animation: show-right-navigation 500ms 1;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu.hide[_ngcontent-%COMP%] {\n  right: -250px;\n  animation: hide-right-navigation 500ms 1;\n}\n@media screen and (min-width: 1100px) {\n  .nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%] {\n    width: 250px;\n    top: 50px;\n    right: 0px;\n    background-color: transparent;\n  }\n  .nav__top[_ngcontent-%COMP%]   .nav__top-menu.show[_ngcontent-%COMP%], .nav__top[_ngcontent-%COMP%]   .nav__top-menu.hide[_ngcontent-%COMP%] {\n    right: 0px;\n    animation: none;\n  }\n}\n@keyframes show-right-navigation {\n  0% {\n    right: -250px;\n  }\n  100% {\n    right: 0;\n  }\n}\n@keyframes hide-right-navigation {\n  0% {\n    right: 0;\n  }\n  100% {\n    right: -250;\n  }\n}\n@keyframes move-right-hamburger {\n  0% {\n    right: 10px;\n  }\n  100% {\n    right: 250px;\n  }\n}\n@keyframes move-left-hamburger {\n  0% {\n    right: 250px;\n  }\n  100% {\n    right: 10px;\n  }\n}\n@media screen and (min-width: 800px) {\n  .nav__top[_ngcontent-%COMP%]   .nav__logo[_ngcontent-%COMP%] {\n    justify-self: flex-start;\n    margin: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksZ0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQ1I7QUFHUTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFEWjtBQUdZO0VBQ0ksV0FBQTtBQURoQjtBQU1RO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBSlo7QUFNWTtFQUNJLFlBQUE7RUFDQSx1Q0FBQTtBQUpoQjtBQU9ZO0VBQ0ksV0FBQTtFQUNBLHNDQUFBO0FBTGhCO0FBUVk7RUF2Qko7SUF3QlEsYUFBQTtFQUxkO0FBQ0Y7QUFRUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFOWjtBQVFZO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFOaEI7QUFTWTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFQaEI7QUFTZ0I7RUFDSSxzQkFBQTtFQUVBLFdBQUE7QUFScEI7QUFVb0I7RUFDSSxtQkFBQTtBQVJ4QjtBQVdvQjtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVR4QjtBQVd3QjtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7QUFUNUI7QUFXNEI7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBVGhDO0FBZ0JZO0VBQ0ksVUFBQTtFQUNBLHdDQUFBO0FBZGhCO0FBZ0JZO0VBQ0ksYUFBQTtFQUNBLHdDQUFBO0FBZGhCO0FBaUJZO0VBdEVKO0lBdUVZLFlBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLDZCQUFBO0VBZGxCO0VBZ0JrQjtJQUVJLFVBQUE7SUFDQSxlQUFBO0VBZnRCO0FBQ0Y7QUFxQlE7RUFDSTtJQUNJLGFBQUE7RUFuQmQ7RUFxQlU7SUFDSSxRQUFBO0VBbkJkO0FBQ0Y7QUFzQlE7RUFDSTtJQUNJLFFBQUE7RUFwQmQ7RUFzQlU7SUFDSSxXQUFBO0VBcEJkO0FBQ0Y7QUFzQlE7RUFDSTtJQUNJLFdBQUE7RUFwQmQ7RUFzQlU7SUFDSSxZQUFBO0VBcEJkO0FBQ0Y7QUFzQlE7RUFDSTtJQUNJLFlBQUE7RUFwQmQ7RUFzQlU7SUFDSSxXQUFBO0VBcEJkO0FBQ0Y7QUF5Qkk7RUFFUTtJQUNJLHdCQUFBO0lBQ0EsWUFBQTtFQXZCZDtBQUNGIiwiZmlsZSI6InRvcC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5uYXZfX3RvcHtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4yNSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBoZWlnaHQ6NTBweDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgIHotaW5kZXg6IDI7XG5cblxuXG4gICAgICAgIC5uYXZfX2xvZ297XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46YXV0bztcblxuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAubmF2X190b3AtbmF2LS10b2dnbGUtYnRue1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICByaWdodDoxMHB4O1xuICAgICAgICAgICAgdG9wOjBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcblxuICAgICAgICAgICAgJi5zaG93e1xuICAgICAgICAgICAgICAgIHJpZ2h0OjI1MHB4O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodC1oYW1idXJnZXIgNTAwbXMgMTtcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuaGlkZXtcbiAgICAgICAgICAgICAgICByaWdodDoxMHB4O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0LWhhbWJ1cmdlciA1MDBtcyAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjExMDBweCl7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZfX3RvcC1tZW51IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHJpZ2h0Oi0yNTBweDtcbiAgICAgICAgICAgIHRvcDowcHg7XG4gICAgICAgICAgICB3aWR0aDoyNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCB2YXIoLS1saWdodGdyYXkpO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OjEwcHg7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVse1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgICAgICAgICAgICAgIGxpe1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRncmF5KTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZXJpdmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWVyaXZlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaG93e1xuICAgICAgICAgICAgICAgIHJpZ2h0OjBweDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHNob3ctcmlnaHQtbmF2aWdhdGlvbiA1MDBtcyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5oaWRle1xuICAgICAgICAgICAgICAgIHJpZ2h0Oi0yNTBweDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGhpZGUtcmlnaHQtbmF2aWdhdGlvbiA1MDBtcyAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjExMDBweCl7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjI1MHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6NTBweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJi5zaG93LFxuICAgICAgICAgICAgICAgICAgICAmLmhpZGV7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDowcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBAa2V5ZnJhbWVzIHNob3ctcmlnaHQtbmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAwJXtcbiAgICAgICAgICAgICAgICByaWdodDotMjUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAle1xuICAgICAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBAa2V5ZnJhbWVzIGhpZGUtcmlnaHQtbmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAwJXtcbiAgICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJXtcbiAgICAgICAgICAgICAgICByaWdodDotMjUwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1oYW1idXJnZXIge1xuICAgICAgICAgICAgMCV7XG4gICAgICAgICAgICAgICAgcmlnaHQ6MTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCV7XG4gICAgICAgICAgICAgICAgcmlnaHQ6MjUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtaGFtYnVyZ2VyIHtcbiAgICAgICAgICAgIDAle1xuICAgICAgICAgICAgICAgIHJpZ2h0OjI1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJXtcbiAgICAgICAgICAgICAgICByaWdodDoxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjgwMHB4KXtcbiAgICAgICAgLm5hdl9fdG9wIHtcbiAgICAgICAgICAgIC5uYXZfX2xvZ297XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbjpub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAubWF0LWljb257XG4gICAgICAgICAgICAvLyAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gdWx7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAvLyAgICAgJi5oaWRleyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAvLyAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAvLyAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAvLyAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIC8vICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGJvcmRlci1sZWZ0Om5vbmU7XG4gICAgICAgICAgICAvLyAgICAgICAgIHdpZHRoOmF1dG87XG4gICAgICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmlnaHQ6aW5oZXJpdDtcbiAgICAgICAgICAgIC8vICAgICAgICAgdG9wOmluaGVyaXQ7XG4gICAgICAgICAgICAvLyAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmlnaHQ6MHB4O1xuXG4gICAgICAgICAgICAvLyAgICAgICAgIGxpe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ 29448:
/*!**********************************************************************!*\
  !*** ./src/app/components/topics/image-pair/image-pair.component.ts ***!
  \**********************************************************************/
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
/* harmony import */ var _image_segmentation_image_segmentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-segmentation/image-segmentation.component */ 3245);
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

/***/ 3245:
/*!**************************************************************************************!*\
  !*** ./src/app/components/topics/image-segmentation/image-segmentation.component.ts ***!
  \**************************************************************************************/
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar], styles: [".segmentation-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-size: 300% 100%;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.segmentation-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 100%;\n  height: auto;\n  min-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXNlZ21lbnRhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNSIiwiZmlsZSI6ImltYWdlLXNlZ21lbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWdtZW50YXRpb24taW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMTAwJTsgICAgXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuXG4gICAgaW1nIHtcbiAgICAgICAgdmlzaWJpbGl0eTpoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6YXV0bztcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICB9XG5cbn0iXX0= */"] });


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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ 61319);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/images/image.service */ 82329);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _images_segmentation_image_segmentation_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../images/segmentation-image/segmentation-image.component */ 98299);
/* harmony import */ var _images_rgb_image_rgb_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/rgb-image/rgb-image.component */ 29045);











function PreviewComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-slide-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PreviewComponent_div_0_div_2_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.toggleSegmentation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Segmentation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx_r3.segmentationToggle.color)("checked", ctx_r3.segmentationToggle.checked)("disabled", !ctx_r3.loadedSegmentations);
} }
function PreviewComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-progress-bar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Segmentation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { visibility: a0 }; };
function PreviewComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Camera:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Vehicle:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Encoding:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Height:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Width:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Left Exposure:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Right Exposure:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Left Gain:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Right Gain:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Left ROI:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Right ROI:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "app-segmentation-image", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function PreviewComponent_div_0_div_6_Template_app_segmentation_image_load_55_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.onSegmentationLoad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "app-rgb-image", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" #", (ctx_r6.pageSize === 1 ? ctx_r6.cursor : i_r10) + 1, " : Meta Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", image_r9.timestamp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", image_r9.meta.cameraName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", image_r9.vehicle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", image_r9.encoding, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", image_r9.height, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", image_r9.width, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", image_r9.meta.leftExposure, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", image_r9.meta.rightExposure, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", image_r9.meta.leftGain, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", image_r9.meta.rightGain, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("( x: ", image_r9.meta.leftRoi.xOffset, ", y: ", image_r9.meta.leftRoi.xOffset, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("( x: ", image_r9.meta.rightRoi.xOffset, ", y: ", image_r9.meta.rightRoi.xOffset, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c0, ctx_r6.segmentationToggle.checked ? "visible" : "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("imageHeaderId", image_r9.headerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", image_r9)("id", image_r9.imageId);
} }
function PreviewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PreviewComponent_div_0_div_2_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PreviewComponent_div_0_ng_template_3_Template, 3, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, PreviewComponent_div_0_div_6_Template, 57, 21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.loadSegmentation())("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.imageData);
} }
function PreviewComponent_ng_template_1_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No image were found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PreviewComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 9);
} }
function PreviewComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PreviewComponent_ng_template_1_span_0_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PreviewComponent_ng_template_1_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.noImage)("ngIfElse", _r14);
} }
class PreviewComponent {
    constructor(imageService, gqlQueryService) {
        this.imageService = imageService;
        this.gqlQueryService = gqlQueryService;
        this.loadedSegmentations = null;
        this.querySubscription = null;
        this.imageUrl = "";
        this.imageData = [];
        this.imageId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.default)();
        this.segmentationTopic = "";
        this.noImage = false;
        this.pageSize = 1;
        this.pageSizeOptions = [1, 5, 10];
        this.pagesLength = 0;
        this.segmentationTopic$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(this.segmentationTopic);
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
PreviewComponent.ɵfac = function PreviewComponent_Factory(t) { return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_images_image_service__WEBPACK_IMPORTED_MODULE_0__.ImageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__.GqlQueryService)); };
PreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PreviewComponent, selectors: [["app-preview"]], inputs: { topic: "topic", cursor: "cursor", vehicleId: "vehicleId", topicId: "topicId" }, decls: 5, vars: 5, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [3, "length", "pageSize", "pageSizeOptions", "page"], [1, "grid", "gap", "images"], ["class", "grid__cell center-cell-content", 4, "ngIf", "ngIfElse"], ["segmentationLoader", ""], [1, "grid__cell", "center-cell-content"], ["class", "image-wrapper", 4, "ngFor", "ngForOf"], [1, "segmentation-toggle", 3, "color", "checked", "disabled", "change"], ["mode", "indeterminate"], [1, "image-wrapper"], [1, "images__meta-data"], [1, "images__meta-title"], [1, "images__render"], [1, "segmentation", 3, "ngStyle"], [3, "imageHeaderId", "load"], [1, "images", 3, "data", "id"], ["loader", ""]], template: function PreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PreviewComponent_div_0_Template, 7, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PreviewComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-paginator", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function PreviewComponent_Template_mat_paginator_page_4_listener($event) { return ctx.getCurrentImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.imageData)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx.pagesLength)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _images_segmentation_image_segmentation_image_component__WEBPACK_IMPORTED_MODULE_2__.SegmentationImageComponent, _images_rgb_image_rgb_image_component__WEBPACK_IMPORTED_MODULE_3__.RgbImageComponent], styles: [".images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  padding: 10px;\n  margin: 10px;\n  border: 1px solid #ccc;\n}\n.images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%] {\n  justify-self: flex-start;\n  padding: 20px 0px;\n  border-top: 1px solid #ccc;\n  margin-top: 10px;\n}\n.images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%]   .images__meta-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\n.images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0px;\n}\n.images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__render[_ngcontent-%COMP%] {\n  justify-self: flex-end;\n}\n.images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__render[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__render[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  max-width: 512px;\n  margin: auto;\n  position: absolute;\n}\n.images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__render[_ngcontent-%COMP%]   .segmentation[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  margin-right: 20px;\n  padding-right: 20px;\n  z-index: 1;\n}\n@media screen and (min-width: 1375px) {\n  .images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    padding: 10px;\n    margin: 10px;\n    border: 1px solid #ccc;\n  }\n  .images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%] {\n    justify-self: flex-start;\n    padding: 0px 20px;\n    border-left: 1px solid #ccc;\n    border-top: none;\n    margin-left: 10px;\n    margin-top: 0px;\n  }\n  .images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%]   .images__meta-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    font-weight: bold;\n  }\n  .images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n    padding-left: 0px;\n  }\n  .images[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .images__meta-data[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBRFI7QUFHUTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBRFo7QUFFWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUFoQjtBQUVZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUFoQjtBQUVnQjtFQUNJLGlCQUFBO0FBQXBCO0FBSVE7RUFDSSxzQkFBQTtBQUZaO0FBR1k7O0VBR0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRmhCO0FBS1k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUhoQjtBQVlBO0VBR1E7SUFDSSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0VBWFY7RUFhVTtJQUNJLHdCQUFBO0lBQ0EsaUJBQUE7SUFDQSwyQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBWGQ7RUFhYztJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7RUFYbEI7RUFhYztJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUFYbEI7RUFha0I7SUFDSSxlQUFBO0VBWHRCO0FBQ0YiLCJmaWxlIjoicHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXMge1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIC5pbWFnZS13cmFwcGVye1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXG4gICAgICAgIC5pbWFnZXNfX21ldGEtZGF0YSB7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIC5pbWFnZXNfX21ldGEtdGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWx7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MHB4O1xuXG4gICAgICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pbWFnZXNfX3JlbmRlcntcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICAuaW1hZ2UsXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUxMnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuc2VnbWVudGF0aW9ue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMzc1cHgpIHtcbiAgICAuaW1hZ2VzIHtcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgICAgIC5pbWFnZS13cmFwcGVye1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cbiAgICAgICAgICAgIC5pbWFnZXNfX21ldGEtZGF0YSB7XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOm5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuXG4gICAgICAgICAgICAgICAgLmltYWdlc19fbWV0YS10aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjBweDtcblxuICAgICAgICAgICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 93254:
/*!******************************************************************!*\
  !*** ./src/app/components/topics/starfire/starfire.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarfireComponent": () => (/* binding */ StarfireComponent)
/* harmony export */ });
/* harmony import */ var _Users_anthonycrawford_Documents_Jupiter_JupiterWebService_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ 61319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var src_app_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/geolocation/geolocation.service */ 39487);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);







class StarfireComponent {
  constructor(gqlQueryService, gisService, graphQLSubscription) {
    this.gqlQueryService = gqlQueryService;
    this.gisService = gisService;
    this.graphQLSubscription = graphQLSubscription;
    this.querySubscription = null;
    this.mapNodeId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__.default)();
    this.playback = "static";
    this.showTractor = false;
    this.zoom = 15;
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
      if (_this4.coordinates instanceof Array) _this4.setupStaticMap();else if (_this4.vehicleId) _this4.querySubscription = _this4.gqlQueryService.getGeolocaton({
        vehicleId: parseInt(_this4.vehicleId.toString())
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(geoData => !geoData.loading ? geoData.data.starfires.nodes.map(geo => geo.msg ? [geo.msg.longitude, geo.msg.latitude] : []) : [])).subscribe(coordinates => {
        if (coordinates.length) _this4.setupStaticMap(coordinates);
      });
    })();
  }

  ngOnInit() {}

  ngAfterViewInit() {
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

  ngOnDestroy() {
    var _a;

    (_a = this.querySubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
  }

}

StarfireComponent.ɵfac = function StarfireComponent_Factory(t) {
  return new (t || StarfireComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_2__.GeolocationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_3__.GqlSubscriptionService));
};

StarfireComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: StarfireComponent,
  selectors: [["app-starfire"]],
  inputs: {
    playback: "playback",
    showTractor: "showTractor",
    zoom: "zoom",
    coordinates: "coordinates",
    lineColor: "lineColor",
    lineSize: "lineSize",
    vehicleId: "vehicleId"
  },
  decls: 1,
  vars: 1,
  consts: [[1, "map", 3, "id"]],
  template: function StarfireComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", ctx.mapNodeId);
    }
  },
  styles: [".map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJmaXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzdGFyZmlyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"]
});

/***/ }),

/***/ 4587:
/*!********************************************************************************!*\
  !*** ./src/app/components/vehicles/vehicle-status/vehicle-status.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleStatusComponent": () => (/* binding */ VehicleStatusComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_Table_table_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/Table/table-utils */ 55949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);










function VehicleStatusComponent_div_0_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehicleStatusComponent_div_0_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, col_r11.status), " ");
} }
function VehicleStatusComponent_div_0_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Alert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehicleStatusComponent_div_0_td_7_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", col_r12.alerts.alertType.name, " ");
} }
function VehicleStatusComponent_div_0_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VehicleStatusComponent_div_0_td_7_mat_icon_1_Template, 2, 1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r12.alerts);
} }
function VehicleStatusComponent_div_0_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Timestamp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehicleStatusComponent_div_0_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, col_r15.timestamp, "medium"), " ");
} }
function VehicleStatusComponent_div_0_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 15);
} }
function VehicleStatusComponent_div_0_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehicleStatusComponent_div_0_tr_12_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const row_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r17.openDialog(row_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](row_r16.alerts.alertType.name);
} }
function VehicleStatusComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, VehicleStatusComponent_div_0_th_3_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, VehicleStatusComponent_div_0_td_4_Template, 3, 3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](5, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, VehicleStatusComponent_div_0_th_6_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, VehicleStatusComponent_div_0_td_7_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, VehicleStatusComponent_div_0_th_9_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, VehicleStatusComponent_div_0_td_10_Template, 3, 4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, VehicleStatusComponent_div_0_tr_11_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, VehicleStatusComponent_div_0_tr_12_Template, 1, 2, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r0.tableList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r0.columns);
} }
function VehicleStatusComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-spinner");
} }
class VehicleStatusComponent extends src_app_components_Table_table_utils__WEBPACK_IMPORTED_MODULE_0__.TableUtil {
    constructor(graphQLSubscription, graphQLQuery, route) {
        super();
        this.graphQLSubscription = graphQLSubscription;
        this.graphQLQuery = graphQLQuery;
        this.route = route;
        this.gqlOnlineQuery = null;
        this.gqlOnlineSubscription = null;
        this.statusList = [];
        this.columns = ['alerts', 'status', 'timestamp'];
        this.pageSize = 7;
        this.pageSizeOptions = [7];
        this.pagesLength = 0;
        this.isDataLoaded = false;
        this.cursor = 0;
    }
    getStatus() {
        if (this.gqlOnlineQuery)
            this.gqlOnlineQuery.unsubscribe();
        this.gqlOnlineQuery = this.graphQLQuery
            .getVehicleStatus({ vehicle_id: this.vehicleId, cursor: this.cursor, size: this.pageSize })
            .subscribe((response) => {
            this.pagesLength = response.totalCount;
            this.statusList = response.nodes.map((result) => {
                return Object.assign(Object.assign({}, result), { status: result.state.name, alerts: result.alerts.length ? result.alerts[0] : null });
            });
            this.isDataLoaded = true;
            this.updateList(this.statusList);
        });
        this.gqlOnlineSubscription = this.graphQLSubscription
            .getVehicleState({ vehicleId: this.vehicleId })
            .subscribe((response) => {
            this.statusList.unshift(response);
            this.statusList.pop();
            this.updateList(this.statusList);
        });
    }
    ngOnInit() {
        if (!isNaN(this.vehicleId)) {
            this.getStatus();
        }
    }
    ngOnDestroy() {
        var _a;
        (_a = this.gqlOnlineQuery) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    ngAfterViewInit() { }
    onPagination(event) {
        if (this.cursor !== event.pageIndex || event.pageSize !== this.pageSize) {
            this.isDataLoaded = false;
            this.cursor = event.pageIndex;
            this.statusList = [];
            this.pageSize = event.pageSize;
            this.updateList(this.statusList);
            this.getStatus();
        }
    }
    openDialog(row) {
        console.log(row);
    }
}
VehicleStatusComponent.ɵfac = function VehicleStatusComponent_Factory(t) { return new (t || VehicleStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_1__.GqlSubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_2__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
VehicleStatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VehicleStatusComponent, selectors: [["app-vehicle-status"]], inputs: { vehicleId: "vehicleId", cursor: "cursor" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 6, consts: [[4, "ngIf", "ngIfElse"], ["loader", ""], [3, "length", "pageSize", "hidePageSize", "pageSizeOptions", "page"], ["mat-table", "", 1, "vehicles__status", 3, "dataSource"], ["matColumnDef", "status"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "alerts"], ["matColumnDef", "timestamp"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "class", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["class", "icon", "inline", "", 4, "ngIf"], ["inline", "", 1, "icon"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function VehicleStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, VehicleStatusComponent_div_0_Template, 13, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VehicleStatusComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-paginator", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function VehicleStatusComponent_Template_mat_paginator_page_3_listener($event) { return ctx.onPagination($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isDataLoaded)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.pagesLength)("pageSize", ctx.pageSize)("hidePageSize", true)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatSpinner], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: [".mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\n.vehicles__status[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 24px;\n}\n\n.vehicles__status[_ngcontent-%COMP%]   .priority_high[_ngcontent-%COMP%] {\n  background-color: var(--critical);\n}\n\n.vehicles__status[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  background-color: var(--error);\n}\n\n.vehicles__status[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\n  background-color: var(--warning);\n}\n\n.vehicles__status[_ngcontent-%COMP%]   .logging[_ngcontent-%COMP%], .vehicles__status[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  background-color: var(--success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFFSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQUNSOztBQUNJO0VBQ0ksaUNBQUE7QUFDUjs7QUFFSTtFQUNJLDhCQUFBO0FBQVI7O0FBR0k7RUFDSSxnQ0FBQTtBQURSOztBQUlJOztFQUVJLGdDQUFBO0FBRlIiLCJmaWxlIjoidmVoaWNsZS1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnZlaGljbGVzX19zdGF0dXMge1xuXG4gICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgd2lkdGg6MjRweDtcbiAgICB9XG4gICAgLnByaW9yaXR5X2hpZ2gge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcml0aWNhbCk7XG4gICAgfVxuXG4gICAgLmVycm9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3IpO1xuICAgIH1cblxuICAgIC53YXJuaW5nIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgfVxuXG4gICAgLmxvZ2dpbmcsXG4gICAgLmluZm9ybWF0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 92784:
/*!************************************************************************************!*\
  !*** ./src/app/components/vehicles/vehicles-offline/vehicles-offline.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiclesOfflineComponent": () => (/* binding */ VehiclesOfflineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_components_Table_table_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/Table/table-utils */ 55949);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VehiclesOfflineComponent_tr_16_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const row_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.rowClick(row_r13); });
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
class VehiclesOfflineComponent extends src_app_components_Table_table_utils__WEBPACK_IMPORTED_MODULE_0__.TableUtil {
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
VehiclesOfflineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VehiclesOfflineComponent, selectors: [["app-vehicles-offline"]], inputs: { update: "update" }, outputs: { onClick: "onClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 3, consts: [["appearance", "standard"], ["matInput", "", "placeholder", "Ex. Tractor", 3, "keyup"], ["input", ""], ["mat-table", "", 1, "vehicles__offline", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "ip"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function VehiclesOfflineComponent_Template(rf, ctx) { if (rf & 1) {
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

/***/ 23161:
/*!**********************************************************************************!*\
  !*** ./src/app/components/vehicles/vehicles-online/vehicles-online.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiclesOnlineComponent": () => (/* binding */ VehiclesOnlineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_components_Table_table_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/Table/table-utils */ 55949);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", col_r12.alerts.alertType.name, " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehiclesOnlineComponent_tr_19_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const row_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.rowClick(row_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](row_r16.alerts.alertType.name);
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
class VehiclesOnlineComponent extends src_app_components_Table_table_utils__WEBPACK_IMPORTED_MODULE_0__.TableUtil {
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
}
VehiclesOnlineComponent.ɵfac = function VehiclesOnlineComponent_Factory(t) { return new (t || VehiclesOnlineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_1__.GqlSubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_2__.GqlQueryService)); };
VehiclesOnlineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VehiclesOnlineComponent, selectors: [["app-vehicles-online"]], outputs: { onUpdate: "onUpdate", onClick: "onClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 3, consts: [["appearance", "standard"], ["matInput", "", "placeholder", "Ex. Tractor", 3, "keyup"], ["input", ""], ["mat-table", "", 1, "vehicles__online", 3, "dataSource"], ["matColumnDef", "alert"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["matColumnDef", "name"], ["matColumnDef", "ip"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "class", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["mat-cell", ""], ["inline", "", 1, "icon"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function VehiclesOnlineComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatNoDataRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe], styles: [".mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 24px;\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .priority_high[_ngcontent-%COMP%] {\n  background-color: var(--critical);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  background-color: var(--error);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\n  background-color: var(--warning);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .logging[_ngcontent-%COMP%], .vehicles__online[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  background-color: var(--success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGVzLW9ubGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBSUk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUFEUjs7QUFHSTtFQUNJLGlDQUFBO0FBRFI7O0FBSUk7RUFDSSw4QkFBQTtBQUZSOztBQUtJO0VBQ0ksZ0NBQUE7QUFIUjs7QUFNSTs7RUFFSSxnQ0FBQTtBQUpSIiwiZmlsZSI6InZlaGljbGVzLW9ubGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudGQsIHRoIHtcbiAgICB3aWR0aDogMjUlO1xufVxuXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbnRyLm1hdC1yb3csIHRyLm1hdC1mb290ZXItcm93e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnZlaGljbGVzX19vbmxpbmUge1xuXG4gICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgd2lkdGg6MjRweDtcbiAgICB9XG4gICAgLnByaW9yaXR5X2hpZ2gge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcml0aWNhbCk7XG4gICAgfVxuXG4gICAgLmVycm9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3IpO1xuICAgIH1cblxuICAgIC53YXJuaW5nIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgfVxuXG4gICAgLmxvZ2dpbmcsXG4gICAgLmluZm9ybWF0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgfVxufSJdfQ== */"] });


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error works!");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class VehicleGeolocationComponent {
    constructor() { }
    ngOnInit() {
    }
}
VehicleGeolocationComponent.ɵfac = function VehicleGeolocationComponent_Factory(t) { return new (t || VehicleGeolocationComponent)(); };
VehicleGeolocationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleGeolocationComponent, selectors: [["app-vehicle-geolocation"]], decls: 2, vars: 0, template: function VehicleGeolocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "vehicle-geolocation works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLWdlb2xvY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class VehicleImagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
VehicleImagesComponent.ɵfac = function VehicleImagesComponent_Factory(t) { return new (t || VehicleImagesComponent)(); };
VehicleImagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleImagesComponent, selectors: [["app-vehicle-images"]], decls: 2, vars: 0, template: function VehicleImagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "vehicle-images works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLWltYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class VehicleLoggingComponent {
    constructor() { }
    ngOnInit() {
    }
}
VehicleLoggingComponent.ɵfac = function VehicleLoggingComponent_Factory(t) { return new (t || VehicleLoggingComponent)(); };
VehicleLoggingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleLoggingComponent, selectors: [["app-vehicle-logging"]], decls: 2, vars: 0, template: function VehicleLoggingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "vehicle-logging works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLWxvZ2dpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/geolocation/geolocation.service */ 39487);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_vehicles_vehicle_status_vehicle_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/vehicles/vehicle-status/vehicle-status.component */ 4587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _components_topics_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/topics/starfire/starfire.component */ 93254);









function VehicleOverviewComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "button", 8);
} }
function VehicleOverviewComponent_span_9_app_starfire_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-starfire", 11);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showTractor", true)("zoom", 20)("vehicleId", ctx_r2.vehicleId);
} }
function VehicleOverviewComponent_span_9_app_starfire_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-starfire", 12);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showTractor", true)("zoom", 20)("vehicleId", ctx_r3.vehicleId)("coordinates", ctx_r3.vehiclesLastCoordinates);
} }
function VehicleOverviewComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, VehicleOverviewComponent_span_9_app_starfire_1_Template, 1, 3, "app-starfire", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, VehicleOverviewComponent_span_9_app_starfire_2_Template, 1, 4, "app-starfire", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isVehicleOnline);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isVehicleOnline);
} }
class VehicleOverviewComponent {
    constructor(gisService, graphQLSubscription, graphQLQuery, route) {
        this.gisService = gisService;
        this.graphQLSubscription = graphQLSubscription;
        this.graphQLQuery = graphQLQuery;
        this.route = route;
        this.geoUpdateSubscription = null;
        this.gqlOnlineQuery = null;
        this.gqlOnlineSubscription = null;
        this.gqlPreviousCoordinateSubscription = null;
        this.vehiclesLastCoordinates = [];
        this.vehicleId = "";
        this.isVehicleOnline = false;
    }
    ngOnInit() {
        this.vehicleId = this.route.parent.snapshot.params.id;
        this.gqlPreviousCoordinateSubscription = this.graphQLQuery
            .getVehiclePreviousLocation({ id: this.vehicleId })
            .subscribe((response) => {
            if (response)
                this.vehiclesLastCoordinates = [[response.longitude, response.latitude]];
        });
        this.gqlOnlineQuery = this.graphQLQuery
            .getVehicleOnlineStatus({ id: this.vehicleId })
            .subscribe((response) => {
            this.isVehicleOnline = response.online ? true : false;
        });
        this.gqlOnlineSubscription = this.graphQLSubscription.getVehicleOnlineStatus({ id: this.vehicleId })
            .subscribe((response) => {
            this.isVehicleOnline = response.online;
        });
    }
    ngOnDestroy() {
        var _a, _b, _c;
        (_a = this.gqlOnlineSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.gqlOnlineQuery) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.gqlPreviousCoordinateSubscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    }
    ngAfterViewInit() {
    }
}
VehicleOverviewComponent.ɵfac = function VehicleOverviewComponent_Factory(t) { return new (t || VehicleOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_0__.GeolocationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_1__.GqlSubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_2__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
VehicleOverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: VehicleOverviewComponent, selectors: [["app-vehicle-overview"]], decls: 14, vars: 3, consts: [[1, "header"], [1, "header__title"], ["class", "live-pulse", "mat-mini-fab", "", "color", "warn", "aria-label", "Section is live", 4, "ngIf"], [1, "grid", "gap", "col-2"], [1, "grid__cell"], [1, "grid__cell--label"], [4, "ngIf"], [3, "vehicleId"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Section is live", 1, "live-pulse"], ["playback", "live", 3, "showTractor", "zoom", "vehicleId", 4, "ngIf"], ["playback", "static", 3, "showTractor", "zoom", "vehicleId", "coordinates", 4, "ngIf"], ["playback", "live", 3, "showTractor", "zoom", "vehicleId"], ["playback", "static", 3, "showTractor", "zoom", "vehicleId", "coordinates"]], template: function VehicleOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, VehicleOverviewComponent_button_4_Template, 1, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Geolocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, VehicleOverviewComponent_span_9_Template, 3, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-vehicle-status", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isVehicleOnline);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.vehiclesLastCoordinates.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("vehicleId", ctx.vehicleId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _components_vehicles_vehicle_status_vehicle_status_component__WEBPACK_IMPORTED_MODULE_3__.VehicleStatusComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _components_topics_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_4__.StarfireComponent], styles: [".grid__cell[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  word-break: break-all;\n}\n\n.header[_ngcontent-%COMP%]   .header__title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%]   .header__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.header[_ngcontent-%COMP%]   .header__title[_ngcontent-%COMP%]   .live-pulse[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  animation: pulse 1000ms infinite;\n  position: relative;\n  top: -5px;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0);\n    box-shadow: 0 0 0 1px solid red;\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: 1 2 3 20px solid red;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNJO0VBQ0ksV0FBQTtBQUNSOztBQUNRO0VBQ0MscUJBQUE7QUFDVDs7QUFFUTtFQUNJLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFBWjs7QUFHUTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSwrQkFBQTtFQURkO0VBR1U7SUFDSSxtQkFBQTtJQUNBLGdDQUFBO0VBRGQ7QUFDRiIsImZpbGUiOiJ2ZWhpY2xlLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWRfX2NlbGwge1xuICAgIGhlaWdodDo0MDBweDtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblxuICAgIC5oZWFkZXJfX3RpdGxle1xuICAgICAgICB3aWR0aDoxMDAlO1xuXG4gICAgICAgIGgye1xuICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAubGl2ZS1wdWxzZXtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAxMDAwbXMgaW5maW5pdGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XG4gICAgICAgICAgICAwJXtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAwIDAgMXB4IHNvbGlkIHJnYmEoMjU1LDAsMCwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCV7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OjEgMiAzIDIwcHggc29saWQgcmdiYSgyNTUsMCwwLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


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
                header: `Vehicle: ${this.vehicleId}`,
                links: [
                    {
                        label: "Overview",
                        url: `/${this.vehicleId}`,
                        tooltip: `Vehicle: ${this.vehicleId} Overview Page`
                    },
                    {
                        label: "Geolocation",
                        url: `/${this.vehicleId}/geolocation`,
                        tooltip: `Vehicle: ${this.vehicleId} Geolocation Page`
                    },
                    {
                        label: "Images",
                        url: `/${this.vehicleId}/images`,
                        tooltip: `Vehicle: ${this.vehicleId} Images Page`
                    },
                    {
                        label: "Logging",
                        url: `/${this.vehicleId}/logging`,
                        tooltip: `Vehicle: ${this.vehicleId} Logging Page`
                    },
                    {
                        label: "System",
                        url: `/${this.vehicleId}/system`,
                        tooltip: `Vehicle: ${this.vehicleId} System Page`
                    },
                    ...data.topics.nodes.map((vehicleTopic) => {
                        if (!vehicleTopic.vehicleTopics.nodes.length)
                            return {};
                        const topicType = vehicleTopic.vehicleTopics.nodes.map((topic) => {
                            return topic;
                        })[0];
                        return {
                            label: topicType.topic.name,
                            callback: () => {
                                this.currentVehicleTopicService.topicInfo = topicType;
                                this.loadTopic(topicType.topic);
                            }
                        };
                    })
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
            .getTopicsByVehicleId({ id: this.vehicleId })
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
/* harmony import */ var _components_vehicles_vehicles_online_vehicles_online_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/vehicles/vehicles-online/vehicles-online.component */ 23161);
/* harmony import */ var _components_vehicles_vehicles_offline_vehicles_offline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/vehicles/vehicles-offline/vehicles-offline.component */ 92784);





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
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _components_vehicles_vehicles_online_vehicles_online_component__WEBPACK_IMPORTED_MODULE_0__.VehiclesOnlineComponent, _components_vehicles_vehicles_offline_vehicles_offline_component__WEBPACK_IMPORTED_MODULE_1__.VehiclesOfflineComponent], styles: [".mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 24px;\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .priority_high[_ngcontent-%COMP%] {\n  background-color: var(--critical);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  background-color: var(--error);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\n  background-color: var(--warning);\n}\n\n.vehicles__online[_ngcontent-%COMP%]   .logging[_ngcontent-%COMP%], .vehicles__online[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  background-color: var(--success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBSUk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUFEUjs7QUFHSTtFQUNJLGlDQUFBO0FBRFI7O0FBSUk7RUFDSSw4QkFBQTtBQUZSOztBQUtJO0VBQ0ksZ0NBQUE7QUFIUjs7QUFNSTs7RUFFSSxnQ0FBQTtBQUpSIiwiZmlsZSI6InZlaGljbGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudGQsIHRoIHtcbiAgICB3aWR0aDogMjUlO1xufVxuXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbnRyLm1hdC1yb3csIHRyLm1hdC1mb290ZXItcm93e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnZlaGljbGVzX19vbmxpbmUge1xuXG4gICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgd2lkdGg6MjRweDtcbiAgICB9XG4gICAgLnByaW9yaXR5X2hpZ2gge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcml0aWNhbCk7XG4gICAgfVxuXG4gICAgLmVycm9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3IpO1xuICAgIH1cblxuICAgIC53YXJuaW5nIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgfVxuXG4gICAgLmxvZ2dpbmcsXG4gICAgLmluZm9ybWF0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 61095:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/vehicles/pages/vehicle-live/vehicle-live.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleLiveComponent": () => (/* binding */ VehicleLiveComponent)
/* harmony export */ });
/* harmony import */ var _Users_anthonycrawford_Documents_Jupiter_JupiterWebService_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/geolocation/geolocation.service */ 39487);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _components_topics_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/topics/starfire/starfire.component */ 93254);








const mapboxgl = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.js */ 82958);

class VehicleLiveComponent {
  constructor(gisService, graphQLSubscription, route) {
    this.gisService = gisService;
    this.graphQLSubscription = graphQLSubscription;
    this.route = route;
    this.geoUpdateSubscription = null;
    this.vehicleId = "";
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_anthonycrawford_Documents_Jupiter_JupiterWebService_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.vehicleId = _this.route.parent.snapshot.params.id; // const {map,geoJson} = await this.gisService.getLiveMap(
      //   {
      //     container:"map1"
      //     , showTractor:true
      //     , coordinates:[]
      //     , zoom:15}
      // )
      // this.geoUpdateSubscription = this.graphQLSubscription.getGeolocationStream().subscribe(
      //   (response:any) => {
      //     console.log(response.data.geographicCoordinates)
      //     const {longitude,latitude} = (response.data.geographicCoordinates as {longitude:number, latitude:number})
      //     // @ts-ignore
      //     geoJson.data.features[0].geometry.coordinates.push([longitude,latitude])
      //     map.getSource('trace').setData(geoJson.data);
      //     map.panTo([longitude,latitude]);
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // )
    })();
  }

  ngOnDestroy() {// this.geoUpdateSubscription?.unsubscribe()
  }

}

VehicleLiveComponent.ɵfac = function VehicleLiveComponent_Factory(t) {
  return new (t || VehicleLiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_1__.GeolocationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_2__.GqlSubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
};

VehicleLiveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: VehicleLiveComponent,
  selectors: [["app-vehicle-live"]],
  decls: 11,
  vars: 3,
  consts: [[1, "header"], [1, "header__title"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Section is live", 1, "live-pulse"], [1, "grid", "gap"], [1, "grid__cell"], [1, "grid__cell--label"], ["playback", "live", 3, "showTractor", "zoom", "vehicleId"]],
  template: function VehicleLiveComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " LIVE ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Geolocation");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-starfire", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "router-outlet");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showTractor", true)("zoom", 20)("vehicleId", ctx.vehicleId);
    }
  },
  directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _components_topics_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_3__.StarfireComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet],
  styles: [".grid__cell[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  word-break: break-all;\n}\n\n.header[_ngcontent-%COMP%]   .header__title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%]   .header__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.header[_ngcontent-%COMP%]   .header__title[_ngcontent-%COMP%]   .live-pulse[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  animation: pulse 1000ms infinite;\n  position: relative;\n  top: -5px;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0);\n    box-shadow: 0 0 0 1px solid red;\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: 1 2 3 20px solid red;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtbGl2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxXQUFBO0FBQ1I7O0FBQ1E7RUFDQyxxQkFBQTtBQUNUOztBQUVRO0VBQ0ksaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUFaOztBQUdRO0VBQ0k7SUFDSSxtQkFBQTtJQUNBLCtCQUFBO0VBRGQ7RUFHVTtJQUNJLG1CQUFBO0lBQ0EsZ0NBQUE7RUFEZDtBQUNGIiwiZmlsZSI6InZlaGljbGUtbGl2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkX19jZWxsIHtcbiAgICBoZWlnaHQ6NDAwcHg7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cbiAgICAuaGVhZGVyX190aXRsZXtcbiAgICAgICAgd2lkdGg6MTAwJTtcblxuICAgICAgICBoMntcbiAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpdmUtcHVsc2V7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMTAwMG1zIGluZmluaXRlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgICAgICAgMCV7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OjAgMCAwIDFweCBzb2xpZCByZ2JhKDI1NSwwLDAsMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAle1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzoxIDIgMyAyMHB4IHNvbGlkIHJnYmEoMjU1LDAsMCwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"]
});

/***/ }),

/***/ 94266:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/vehicles/pages/vehicle-topic/vehicle-topic.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleTopicComponent": () => (/* binding */ VehicleTopicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _vehicle_services_current_topic_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vehicle/services/current-topic.service */ 94723);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_topics_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/topics/starfire/starfire.component */ 93254);
/* harmony import */ var _components_topics_image_pair_image_pair_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/topics/image-pair/image-pair.component */ 29448);
/* harmony import */ var _components_topics_images_preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/topics/images/preview/preview.component */ 7585);







function VehicleTopicComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-starfire", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-starfire", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showTractor", true)("zoom", 20)("vehicleId", ctx_r0.vehicleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showTractor", true)("zoom", 30)("vehicleId", ctx_r0.vehicleId);
} }
function VehicleTopicComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r1.currentRoute);
} }
function VehicleTopicComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r2.currentRoute);
} }
function VehicleTopicComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r3.currentRoute);
} }
function VehicleTopicComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r4.currentRoute);
} }
function VehicleTopicComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r5.currentRoute);
} }
function VehicleTopicComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r6.currentRoute);
} }
function VehicleTopicComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r7.currentRoute);
} }
function VehicleTopicComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r8.currentRoute);
} }
function VehicleTopicComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r9.currentRoute);
} }
function VehicleTopicComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r10.currentRoute);
} }
function VehicleTopicComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r11.currentRoute);
} }
function VehicleTopicComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r12.currentRoute);
} }
function VehicleTopicComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r13.currentRoute);
} }
function VehicleTopicComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-preview", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r14.currentRoute)("topicId", ctx_r14.topicId)("vehicleId", ctx_r14.vehicleId);
} }
function VehicleTopicComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-preview", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r15.currentRoute)("topicId", ctx_r15.topicId)("vehicleId", ctx_r15.vehicleId);
} }
function VehicleTopicComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-preview", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r16.currentRoute)("topicId", ctx_r16.topicId)("vehicleId", ctx_r16.vehicleId);
} }
function VehicleTopicComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-preview", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r17.currentRoute)("topicId", ctx_r17.topicId)("vehicleId", ctx_r17.vehicleId);
} }
function VehicleTopicComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-preview", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r18.currentRoute)("topicId", ctx_r18.topicId)("vehicleId", ctx_r18.vehicleId);
} }
function VehicleTopicComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-preview", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topic", "/" + ctx_r19.currentRoute)("topicId", ctx_r19.topicId)("vehicleId", ctx_r19.vehicleId);
} }
function VehicleTopicComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Coming Soon! ", ctx_r20.currentRoute, "");
} }
class VehicleTopicComponent {
    constructor(route, currentTopicService) {
        this.route = route;
        this.currentTopicService = currentTopicService;
        this.currentRoute = "";
        this.vehicleId = "";
        this.topicId = null;
        this.topicName = "";
        this.topicName = this.currentTopicService.topicInfo.name;
        this.topicId = this.currentTopicService.topicInfo.id;
    }
    ngOnInit() {
        this.currentRoute = this.route.url.value.join("/");
        this.vehicleId = this.route.parent.snapshot.params.id;
    }
}
VehicleTopicComponent.ɵfac = function VehicleTopicComponent_Factory(t) { return new (t || VehicleTopicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_vehicle_services_current_topic_service__WEBPACK_IMPORTED_MODULE_0__.CurrentVehicleTopic)); };
VehicleTopicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VehicleTopicComponent, selectors: [["app-vehicle-topic"]], decls: 24, vars: 22, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "grid", "gap"], [1, "grid__cell"], [1, "grid__cell--label"], [3, "showTractor", "zoom", "vehicleId"], ["playback", "replay", 3, "showTractor", "zoom", "vehicleId"], [3, "topic"], [3, "topic", "topicId", "vehicleId"]], template: function VehicleTopicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, VehicleTopicComponent_div_3_Template, 10, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, VehicleTopicComponent_div_4_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, VehicleTopicComponent_div_5_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, VehicleTopicComponent_div_6_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, VehicleTopicComponent_div_7_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, VehicleTopicComponent_div_8_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, VehicleTopicComponent_div_9_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, VehicleTopicComponent_div_10_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, VehicleTopicComponent_div_11_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, VehicleTopicComponent_div_12_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, VehicleTopicComponent_div_13_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, VehicleTopicComponent_div_14_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, VehicleTopicComponent_div_15_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, VehicleTopicComponent_div_16_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, VehicleTopicComponent_div_17_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, VehicleTopicComponent_div_18_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, VehicleTopicComponent_div_19_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, VehicleTopicComponent_div_20_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, VehicleTopicComponent_div_21_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, VehicleTopicComponent_div_22_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, VehicleTopicComponent_div_23_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("/", ctx.currentRoute, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.currentRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "starfire");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "front_center/debayered");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "front_right/debayered");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "front_left/debayered");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "front_left/visualization/top_down_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "side_right/visualization/top_down_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "side_right/debayered");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "rear/debayered");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "rear/visualization/top_down_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "side_left/debayered");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "side_left/visualization/top_down_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "front_right/visualization/top_down_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "front_center/visualization/top_down_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "front_right/segmentation_map");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "side_left/left/preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "side_right/left/preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "rear/left/preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "front_left/left/preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "front_right/left/preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "front_center/left/preview");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchDefault, _components_topics_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_1__.StarfireComponent, _components_topics_image_pair_image_pair_component__WEBPACK_IMPORTED_MODULE_2__.ImagePairComponent, _components_topics_images_preview_preview_component__WEBPACK_IMPORTED_MODULE_3__.PreviewComponent], styles: [".grid__cell[_ngcontent-%COMP%] {\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtdG9waWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoidmVoaWNsZS10b3BpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkX19jZWxsIHtcbiAgICBoZWlnaHQ6NDAwcHg7XG59Il19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/navigation/menu.service */ 83536);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var ng_dynamic_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-dynamic-breadcrumb */ 26661);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);






function VehiclesComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Topic: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.rootPath, " ");
} }
const _c0 = function () { return { "breadcrumb": true }; };
const SubscriptionQL = __webpack_require__(/*! src/app/graphql/query-syntax/subscriptions */ 89156);
const QueryQL = __webpack_require__(/*! src/app/graphql/query-syntax/query */ 56197);
class VehiclesComponent {
    constructor(menuService, router, route, graphqlQueryService) {
        this.menuService = menuService;
        this.router = router;
        this.route = route;
        this.graphqlQueryService = graphqlQueryService;
        this.rootPath = "";
        this.breadcrumbConfig = {
            bgColor: 'inherit',
            fontSize: 'inherit',
            fontColor: 'inherit',
            lastLinkColor: 'inherit',
            symbol: ' > ',
        };
    }
    // private loadMenu(obj:any) {
    //   const { data, loading } = obj
    //   if (!loading)
    //     this.menuService.menu.next({
    //       header: "Device Topics",
    //       links: data.topics.map((topic: any) => {
    //         return {
    //           label: topic.name,
    //           callback:()=> {
    //             this.loadTopic(topic)
    //           }
    //         }
    //       })
    //     }
    //     )
    // }
    ngOnInit() {
        // this.rootPath = ""
        // this.graphqlQueryService
        //   .getTopics()
        //   .subscribe(data=>this.loadMenu(data));
    }
    // loadTopic(topic:any){
    //   this.router.navigateByUrl(``, {skipLocationChange: false})
    //   .then(() => this.router.navigate(
    //     [this.route.snapshot.routeConfig?.path,...topic.name.replace(/\//,"").split("/")]
    //   ))
    // }
    ngOnDestroy() {
        // this.menuService.menu.next(null)
    }
    ngDoCheck() {
        // @ts-ignore
        // this.rootPath = this.route.snapshot._routerState.url.replace(`/${this.route.snapshot.routeConfig?.path}`,"")
    }
    ngOnChanges() {
    }
}
VehiclesComponent.ɵfac = function VehiclesComponent_Factory(t) { return new (t || VehiclesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__.GqlQueryService)); };
VehiclesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VehiclesComponent, selectors: [["app-vehicles"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 7, consts: [[1, "header"], [1, "header__title"], ["topic", ""], [3, "bgColor", "fontSize", "fontColor", "lastLinkColor", "symbol", "ngClass"], [1, "header__topic"]], template: function VehiclesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Vehicles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VehiclesComponent_ng_template_4_Template, 4, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-ng-dynamic-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("bgColor", ctx.breadcrumbConfig["bgColor"])("fontSize", ctx.breadcrumbConfig["fontSize"])("fontColor", ctx.breadcrumbConfig["fontColor"])("lastLinkColor", ctx.breadcrumbConfig["lastLinkColor"])("symbol", ctx.breadcrumbConfig["symbol"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [ng_dynamic_breadcrumb__WEBPACK_IMPORTED_MODULE_4__.NgDynamicBreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: [".header {\n  display: flex;\n  align-items: center;\n  word-break: break-all;\n}\n.header .header__title {\n  width: 100%;\n}\n.header .header__title h1 {\n  display: inline-block;\n}\n.header .header__title .live-pulse {\n  margin-left: 20px;\n  animation: pulse 1000ms infinite;\n  position: absolute;\n  top: 20px;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(0);\n    box-shadow: 0 0 0 1px solid red;\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: 1 2 3 20px solid red;\n  }\n}\n.header .header__topic {\n  width: 100%;\n}\n.breadcrumb [class*=custom-bread-crumb] {\n  color: var(--blueriver);\n  padding: 10px 0px !important;\n  font-size: 1rem;\n}\n.breadcrumb [class*=custom-bread-crumb] span li:last-of-type span {\n  color: var(--black) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0ksV0FBQTtBQUNSO0FBQ1E7RUFDQyxxQkFBQTtBQUNUO0FBQ1E7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ1o7QUFFUTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSwrQkFBQTtFQUFkO0VBRVU7SUFDSSxtQkFBQTtJQUNBLGdDQUFBO0VBQWQ7QUFDRjtBQUdJO0VBQ0ksV0FBQTtBQURSO0FBUUk7RUFDSSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQUxSO0FBU29CO0VBQ0ksOEJBQUE7QUFQeEIiLCJmaWxlIjoidmVoaWNsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuXG4gICAgLmhlYWRlcl9fdGl0bGV7XG4gICAgICAgIHdpZHRoOjEwMCU7XG5cbiAgICAgICAgaDF7XG4gICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAubGl2ZS1wdWxzZXtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAxMDAwbXMgaW5maW5pdGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XG4gICAgICAgICAgICAwJXtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAwIDAgMXB4IHNvbGlkIHJnYmEoMjU1LDAsMCwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCV7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OjEgMiAzIDIwcHggc29saWQgcmdiYSgyNTUsMCwwLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5oZWFkZXJfX3RvcGlje1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgICBcbn1cblxuXG4uYnJlYWRjcnVtYiB7XG4gICAgW2NsYXNzKj0nY3VzdG9tLWJyZWFkLWNydW1iJ10ge1xuICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZXJpdmVyKTtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGxpe1xuICAgICAgICAgICAgICAgICY6bGFzdC1vZi10eXBle1xuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbiJdfQ== */"], encapsulation: 2 });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/login/login.component */ 24902);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/profile/profile.component */ 58220);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/layout.component */ 39520);
/* harmony import */ var _pages_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/vehicles/vehicles.component */ 2815);
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/auth-guard.service */ 49404);
/* harmony import */ var src_app_pages_vehicles_pages_vehicle_topic_vehicle_topic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/vehicles/pages/vehicle-topic/vehicle-topic.component */ 94266);
/* harmony import */ var _pages_vehicles_pages_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/vehicles/pages/vehicle-list/vehicle-list.component */ 78211);
/* harmony import */ var _pages_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/vehicle/vehicle.component */ 15852);
/* harmony import */ var _pages_vehicle_pages_vehicle_overview_vehicle_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/vehicle/pages/vehicle-overview/vehicle-overview.component */ 32642);
/* harmony import */ var _pages_vehicle_pages_vehicle_geolocation_vehicle_geolocation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/vehicle/pages/vehicle-geolocation/vehicle-geolocation.component */ 97618);
/* harmony import */ var _pages_vehicle_pages_vehicle_images_vehicle_images_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/vehicle/pages/vehicle-images/vehicle-images.component */ 17962);
/* harmony import */ var _pages_vehicle_pages_vehicle_logging_vehicle_logging_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/vehicle/pages/vehicle-logging/vehicle-logging.component */ 81668);
/* harmony import */ var _pages_vehicle_pages_vehicle_system_vehicle_system_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/vehicle/pages/vehicle-system/vehicle-system.component */ 52862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
















const routes = [
    {
        path: "",
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent,
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__.AuthGuardService],
        runGuardsAndResolvers: 'always',
        children: [
            {
                // Main / Home Page
                path: "",
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
                                component: _pages_vehicle_pages_vehicle_overview_vehicle_overview_component__WEBPACK_IMPORTED_MODULE_8__.VehicleOverviewComponent,
                                data: {
                                    title: 'Overview',
                                    breadcrumb: [
                                        {
                                            label: 'Vehices',
                                            url: '../'
                                        },
                                        {
                                            label: 'Vehicle',
                                            url: '/:id'
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
                                            label: 'Vehicle',
                                            url: '/:id'
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
                                            label: 'Vehicle',
                                            url: '/:id'
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
                                            label: 'Vehicle',
                                            url: '/:id'
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
                                            label: 'Vehicle',
                                            url: '/:id'
                                        },
                                        {
                                            label: 'Configuration',
                                            url: ''
                                        }
                                    ]
                                },
                            },
                            {
                                path: "**",
                                component: src_app_pages_vehicles_pages_vehicle_topic_vehicle_topic_component__WEBPACK_IMPORTED_MODULE_5__.VehicleTopicComponent
                            }
                        ]
                    }
                ]
            },
            {
                path: "profile",
                component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent
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
AppRoutes.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutes });
AppRoutes.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutes, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


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
        const { container = "map", coordinates = [[]], center = coordinates[0], showTractor = false, zoom = 15, lineColor, lineSize } = config;
        const map = this.setupMap(container, center, zoom);
        map.on("load", () => {
            this.onLoadStaticMapHandler({ container, coordinates, center, showTractor, lineColor, lineSize }, map);
        });
    }
    getReplayMap(config) {
        const { container = "map", coordinates = [[]], center = coordinates[0], showTractor = false, zoom = 20, lineColor, lineSize } = config;
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
        const { container = "map", coordinates = [[]], showTractor = false, center, zoom = 20, lineColor, lineSize } = config;
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
        return this.graphService
            .watchQuery({ query: QueryQL.Geolocation.ById, variables })
            .valueChanges;
    }
    getImagePair(variables) {
        return this.basicFilteredQuery(QueryQL.ImagePair, variables);
    }
    getSegmentationMap(variables) {
        return this.basicFilteredQuery(QueryQL.SegmentationMap, variables);
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
                result.alerts = result.vehicleStatuses.nodes[0].alerts.nodes[0];
                result.state = result.vehicleStatuses.nodes[0].state;
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
            return response.data.cameraMessageHeaders.nodes.filter((msg) => {
                if (!msg.cameraMessagesByHeaderId.nodes.length)
                    return false;
                return msg.cameraMessagesByHeaderId.nodes[0].image.encoding === "rgb8" ||
                    msg.cameraMessagesByHeaderId.nodes[0].image.encoding === "mono8";
            }).map((msg) => {
                const image = Object.assign({}, msg.cameraMessagesByHeaderId.nodes[0].image);
                image.data = JSON.parse(image.data.data);
                return image;
            });
        }));
    }
    getImagePreview(variables) {
        return this.basicFilteredQuery(QueryQL.Images.PreviewByVehicleIdTopicName, variables)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            const cameraData = response.data.topics.nodes[0].cameras;
            const totalCount = cameraData.totalCount;
            const images = cameraData.nodes.map((info) => {
                const image = Object.assign(Object.assign({}, info.msg.image), { timestamp: new Date(info.readingat).toUTCString(), vehicle: info.vehicle.name, id: info.id, imageId: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.default)(), data: JSON.parse(info.msg.image.data.data), headerId: info.msg.header.headerId, meta: info.msg.cameraMeta });
                image.url = this.imageService.getDataURL(image);
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
            const nodes = response.data.vehicleStatuses.edges.map((results) => {
                const node = results.node;
                return {
                    id: node.id,
                    timestamp: node.statusMessage.header.readingat,
                    node: node.statusMessage.header.node,
                    topic: node.topic.name,
                    state: node.state,
                    alerts: node.alerts.nodes,
                    vehicleStatusDetails: node.vehicleStatusDetails.nodes
                };
            });
            return Object.assign(Object.assign({}, response.data.vehicleStatuses.pageInfo), { totalCount: response.data.vehicleStatuses.totalCount, nodes });
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
                result.alerts = vehicle.vehicleStatuses.nodes[0].alerts.nodes[0];
                result.state = vehicle.vehicleStatuses.nodes[0].state;
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
    getVehicleState(variables = {}) {
        return this.graphService.subscribe({
            query: SubscriptionQL.Vehicles.State,
            variables
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            const results = response.data.sqlVehicleStatus.vehicle_status;
            return Object.assign(Object.assign({}, results), { status: results.state.name, timestamp: results.statusMessage.header.readingat, state: results.state, alerts: results.alerts.nodes.length ? results.alerts.nodes[0] : null });
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
                if (isSegmentation)
                    this.generateSegmentationColor(parsedData, i, j, data, is_bigendian);
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);




class AlertService {
    constructor(gqlQueryService, gqlSubscriptionService) {
        this.gqlQueryService = gqlQueryService;
        this.gqlSubscriptionService = gqlSubscriptionService;
        this.currentAlerts = [];
        this.alerts = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
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
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_0__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_1__.GqlSubscriptionService)); };
AlertService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


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