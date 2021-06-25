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

/***/ 866:
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

/***/ 418:
/*!*****************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/geolocation/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ById": () => (/* reexport safe */ _geolocation__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geolocation */ 866);




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
/* harmony export */   "Vehicles": () => (/* reexport module object */ _vehicles__WEBPACK_IMPORTED_MODULE_4__)
/* harmony export */ });
/* harmony import */ var _topics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topics */ 168);
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation */ 418);
/* harmony import */ var _image_pair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-pair */ 18517);
/* harmony import */ var _segmentation_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./segmentation-map */ 67636);
/* harmony import */ var _vehicles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicles */ 457);








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

/***/ 168:
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
/* harmony import */ var _topics_by_vehicle_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topics-by-vehicle-id */ 297);
/* harmony import */ var _topics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topics */ 620);





/***/ }),

/***/ 297:
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
    vehicle(id:$id){
        vehicleTopics{
            nodes{
                topic{
                    name
                }
            }
      }
    }
  }
  `

  

/***/ }),

/***/ 620:
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
  topics {
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

/***/ 457:
/*!**************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/vehicles/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "All": () => (/* reexport safe */ _vehicles_all__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "ById": () => (/* reexport safe */ _vehicle_by_id__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _vehicles_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicles-all */ 407);
/* harmony import */ var _vehicle_by_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-by-id */ 415);





/***/ }),

/***/ 415:
/*!**********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/vehicles/vehicle-by-id.js ***!
  \**********************************************************************/
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

/***/ 407:
/*!*********************************************************************!*\
  !*** ./src/app/graphql/query-syntax/query/vehicles/vehicles-all.js ***!
  \*********************************************************************/
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

/***/ 758:
/*!*************************************************************************!*\
  !*** ./src/app/graphql/query-syntax/subscriptions/geolocation/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vehicles": () => (/* reexport safe */ _vehicles__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _vehicles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicles */ 743);




/***/ }),

/***/ 743:
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
/* harmony export */   "DEVICE_MESSAGE_SUBSCRIPTION": () => (/* reexport safe */ _device_message__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "GEOGLOCATION": () => (/* reexport module object */ _geolocation__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "ONLINE_VEHICLES": () => (/* reexport safe */ _vehicles_online__WEBPACK_IMPORTED_MODULE_2__.default)
/* harmony export */ });
/* harmony import */ var _device_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-message */ 11502);
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation */ 758);
/* harmony import */ var _vehicles_online__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehicles-online */ 81000);






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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/app-routes.module */ 61364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! apollo-angular */ 550);
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! apollo-angular/http */ 31586);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @apollo/client/core */ 76088);
/* harmony import */ var _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @apollo/client/link/ws */ 39136);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @apollo/client/utilities */ 76333);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @apollo/client/core */ 87328);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation/navigation.component */ 60006);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ 24902);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 24789);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angularx-social-login */ 37055);
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ 49404);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/button-toggle */ 42542);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/tabs */ 939);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/profile/profile.component */ 58220);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout/layout.component */ 39520);
/* harmony import */ var _pages_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/vehicles/vehicles.component */ 2815);
/* harmony import */ var _modules_graphql_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/graphql.module */ 72504);
/* harmony import */ var _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/top-navigation/top-navigation.component */ 56396);
/* harmony import */ var _services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/navigation/menu.service */ 83536);
/* harmony import */ var _services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/geolocation/geolocation.service */ 39487);
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/error/error.component */ 58449);
/* harmony import */ var _pages_vehicles_pages_vehicle_topic_vehicle_topic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/vehicles/pages/vehicle-topic/vehicle-topic.component */ 94266);
/* harmony import */ var _pages_vehicles_pages_vehicle_live_vehicle_live_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/vehicles/pages/vehicle-live/vehicle-live.component */ 61095);
/* harmony import */ var _components_topics_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/topics/starfire/starfire.component */ 93254);
/* harmony import */ var _components_topics_image_pair_image_pair_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/topics/image-pair/image-pair.component */ 29448);
/* harmony import */ var _components_image_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/image/image.component */ 85113);
/* harmony import */ var _components_topics_image_segmentation_image_segmentation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/topics/image-segmentation/image-segmentation.component */ 3245);
/* harmony import */ var _pages_vehicles_pages_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/vehicles/pages/vehicle-list/vehicle-list.component */ 78211);
/* harmony import */ var _pages_vehicles_pages_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/vehicles/pages/vehicle/vehicle.component */ 92327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 37716);















// Enviornment Variables

// Google OAuth



// Material















// 





// Service












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ providers: [{
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: true,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_24__.GoogleLoginProvider.PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_24__.GoogleLoginProvider(_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.googleAuthClientId)
                    }
                ]
            },
        },
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_25__.APOLLO_OPTIONS,
            // @ts-ignore
            useFactory(httpLink) {
                // Create an http link:
                const http = httpLink.create({
                    uri: `${location.protocol}//${location.host}${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.serviceEndpoint}`,
                });
                // Create a WebSocket link:
                const ws = new _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_26__.WebSocketLink({
                    uri: `${location.protocol === "https:" ? "wss:" : "ws:"}//${location.host}${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.serviceEndpoint}`,
                    options: {
                        reconnect: true,
                    },
                });
                const link = (0,_apollo_client_core__WEBPACK_IMPORTED_MODULE_27__.split)(({ query }) => {
                    let definition = (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_28__.getMainDefinition)(query);
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
                    cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_29__.InMemoryCache(),
                    defaultOptions: defaultOptions,
                    // ... options
                };
            },
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_30__.HttpLink],
        }, _services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_12__.MenuService,
        _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__.AuthGuardService,
        _services_geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_13__.GeolocationService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule,
            _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutes,
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__.BrowserAnimationsModule,
            // Material
            _angular_material_list__WEBPACK_IMPORTED_MODULE_35__.MatListModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_36__.MatCardModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_38__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_40__.MatButtonModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__.MatSnackBarModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_42__.MatGridListModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_43__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__.MatProgressSpinnerModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_45__.MatPaginatorModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_46__.MatSlideToggleModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_47__.MatTableModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__.MatButtonToggleModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_49__.MatTabsModule,
            // 
            _modules_graphql_module__WEBPACK_IMPORTED_MODULE_10__.GraphQLModule,
            angularx_social_login__WEBPACK_IMPORTED_MODULE_24__.SocialLoginModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__.NavigationComponent,
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent,
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent,
        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__.LayoutComponent,
        _pages_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_9__.VehiclesComponent,
        _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_11__.TopNavigationComponent,
        _pages_error_error_component__WEBPACK_IMPORTED_MODULE_14__.ErrorComponent,
        _pages_vehicles_pages_vehicle_topic_vehicle_topic_component__WEBPACK_IMPORTED_MODULE_15__.VehicleTopicComponent,
        _pages_vehicles_pages_vehicle_live_vehicle_live_component__WEBPACK_IMPORTED_MODULE_16__.VehicleLiveComponent,
        _components_topics_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_17__.StarfireComponent,
        _components_topics_image_pair_image_pair_component__WEBPACK_IMPORTED_MODULE_18__.ImagePairComponent,
        _components_image_image_component__WEBPACK_IMPORTED_MODULE_19__.ImageComponent,
        _components_topics_image_segmentation_image_segmentation_component__WEBPACK_IMPORTED_MODULE_20__.ImageSegmentationComponent,
        _pages_vehicles_pages_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_21__.VehicleListComponent,
        _pages_vehicles_pages_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_22__.VehicleComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule,
        _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutes,
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__.BrowserAnimationsModule,
        // Material
        _angular_material_list__WEBPACK_IMPORTED_MODULE_35__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_36__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_38__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_40__.MatButtonModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__.MatSnackBarModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_42__.MatGridListModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_43__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__.MatProgressSpinnerModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_45__.MatPaginatorModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_46__.MatSlideToggleModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_47__.MatTableModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__.MatButtonToggleModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_49__.MatTabsModule,
        // 
        _modules_graphql_module__WEBPACK_IMPORTED_MODULE_10__.GraphQLModule,
        angularx_social_login__WEBPACK_IMPORTED_MODULE_24__.SocialLoginModule] }); })();


/***/ }),

/***/ 85113:
/*!*****************************************************!*\
  !*** ./src/app/components/image/image.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageComponent": () => (/* binding */ ImageComponent)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ 61319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class ImageComponent {
    constructor() {
        this.imageId = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();
        this.resultId = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();
        this.lensId = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();
        this.src = "";
    }
    movelens(e) {
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
        /* And also for touch screens: */
        this.lens.addEventListener("touchmove", this.movelens.bind(this));
        this.img.addEventListener("touchmove", this.movelens.bind(this));
    }
    renderImageZoom() {
        this.img = document.getElementById(this.imageId);
        this.img.addEventListener("load", this.setupZoom.bind(this));
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.renderImageZoom();
    }
}
ImageComponent.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(); };
ImageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImageComponent, selectors: [["app-image"]], inputs: { src: "src" }, decls: 4, vars: 4, consts: [[1, "img-zoom-container"], [3, "src", "id"], [1, "img-zoom-result", 3, "id"], [1, "img-zoom-lens", 3, "id"]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("id", ctx.imageId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.resultId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.lensId);
    } }, styles: [".img-zoom-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: calc(100% - 300px);\n  height: auto;\n}\n\n.img-zoom-lens[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  \n  width: 40px;\n  height: 40px;\n  display: none;\n}\n\n.img-zoom-result[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid #d4d4d4;\n  \n  width: 300px;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUVGIiwiZmlsZSI6ImltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy16b29tLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5pbWctem9vbS1sZW5zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAvKnNldCB0aGUgc2l6ZSBvZiB0aGUgbGVuczoqL1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5Om5vbmU7XG59XG5cbi5pbWctem9vbS1yZXN1bHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIC8qc2V0IHRoZSBzaXplIG9mIHRoZSByZXN1bHQgZGl2OiovXG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbn0iXX0= */"] });


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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 49976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation/navigation.component */ 60006);




class LayoutComponent {
    constructor() {
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faBars;
        this.showRightNav = false;
    }
    ngOnInit() {
    }
    toggleSideNav() {
        this.showRightNav = !this.showRightNav;
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 4, vars: 0, consts: [[1, "container__content"], [1, "container__content-main"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent], styles: [".container__content[_ngcontent-%COMP%] {\n  top: 50px;\n  position: absolute;\n  width: 100%;\n}\n.container__content[_ngcontent-%COMP%]   .container__content-main[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  grid-column: 2;\n}\n@media screen and (min-width: 800px) {\n  .container__content[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 200px auto;\n    grid-template-areas: \"side-nav main-content\";\n    grid-auto-flow: dense;\n    grid-gap: 0px;\n    top: 50px;\n    position: absolute;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFDUjtBQUlBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsaUNBQUE7SUFDQSw0Q0FBQTtJQUNBLHFCQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUFETjtBQUNGIiwiZmlsZSI6ImxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfX2NvbnRlbnR7XG4gICAgdG9wOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTsgICAgXG5cbiAgICAuY29udGFpbmVyX19jb250ZW50LW1haW57XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ODAwcHgpIHtcbiAgICAuY29udGFpbmVyX19jb250ZW50e1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2lkZS1uYXYgbWFpbi1jb250ZW50XCI7XG4gICAgICAgIGdyaWQtYXV0by1mbG93OmRlbnNlO1xuICAgICAgICBncmlkLWdhcDogMHB4O1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuIl19 */"] });


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
const _c2 = function () { return { exact: true }; };
const _c3 = function () { return ["/vehicles"]; };
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
NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 21, vars: 15, consts: [[1, "nav__side-nav", 3, "ngClass"], [1, "nav__side-nav--toggle-btn", 3, "ngClass", "click"], ["matSuffix", "", "aria-label", "toggle mobile menu view"], [3, "click"], ["routerLinkActive", "active", 1, "nav__side-nav--link", 3, "routerLink", "routerLinkActiveOptions"], [1, "example-tab-icon", "nav__side-nav--link-icon"], [1, "nav__side-nav--link-label"], ["routerLinkActive", "active", 1, "nav__side-nav--link", 3, "routerLink"], [1, "nav__side-nav--profile"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "bar_chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "agriculture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Vehicles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_18_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx.showLeftNav === true, ctx.showLeftNav === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx.showLeftNav === true, ctx.showLeftNav === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx.showLeftNav ? "menu" : "menu_open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));
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
function TopNavigationComponent_div_3_ul_2_li_1_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopNavigationComponent_div_3_ul_2_li_1_span_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const menuItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); menuItem_r5.callback($event); return ctx_r8.toggleSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r5.label, " ");
} }
const _c0 = function (a0) { return [a0]; };
function TopNavigationComponent_div_3_ul_2_li_1_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopNavigationComponent_div_3_ul_2_li_1_span_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r12.toggleSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, menuItem_r5.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r5.label, " ");
} }
function TopNavigationComponent_div_3_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopNavigationComponent_div_3_ul_2_li_1_span_1_Template, 3, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TopNavigationComponent_div_3_ul_2_li_1_span_2_Template, 3, 4, "span", 6);
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
const _c1 = function (a0, a1) { return { show: a0, hide: a1 }; };
function TopNavigationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopNavigationComponent_div_3_h5_1_Template, 2, 1, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TopNavigationComponent_div_3_ul_2_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c1, ctx_r0.showRightNav === true, ctx_r0.showRightNav === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.menu.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.menu.links.length);
} }
function TopNavigationComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopNavigationComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.toggleSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, ctx_r1.showRightNav === true, ctx_r1.showRightNav === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !ctx_r1.showRightNav ? "menu" : "menu_open", " ");
} }
const _c2 = function () { return ["/"]; };
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
TopNavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopNavigationComponent, selectors: [["app-top-navigation"]], decls: 5, vars: 4, consts: [[1, "nav__top"], [1, "nav__logo", 3, "routerLink"], ["src", "/assets/brt-icon-sm.png"], ["class", "nav__top-menu", 3, "ngClass", 4, "ngIf"], ["class", "nav__top-nav--toggle-btn", 3, "ngClass", "click", 4, "ngIf"], [1, "nav__top-menu", 3, "ngClass"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-flat-button", "", "tooltip", "menuItem.tooltip", 3, "click"], ["mat-flat-button", "", "tooltip", "menuItem.tooltip", 3, "routerLink", "click"], [1, "nav__top-nav--toggle-btn", 3, "ngClass", "click"], ["matSuffix", "", "aria-label", "toggle mobile menu view"]], template: function TopNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TopNavigationComponent_div_3_Template, 3, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TopNavigationComponent_button_4_Template, 3, 5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.menu && ctx.menu.links.length);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix], styles: [".nav__top[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.25);\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  padding: 20px 0;\n  position: -webkit-sticky;\n  position: fixed;\n  top: 0px;\n  height: 50px;\n  width: 100%;\n  background-color: var(--white);\n  padding: 0 20px;\n  z-index: 2;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__logo[_ngcontent-%COMP%] {\n  justify-self: center;\n  display: block;\n  margin: auto;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-nav--toggle-btn[_ngcontent-%COMP%] {\n  align-self: center;\n  float: right;\n  position: fixed;\n  right: 10px;\n  top: 0px;\n  cursor: pointer;\n  transform: rotate(180deg);\n  background-color: var(--white);\n  font-size: 2rem;\n  background-color: var(--white);\n  border: none;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-nav--toggle-btn.show[_ngcontent-%COMP%] {\n  right: 250px;\n  animation: move-right-hamburger 500ms 1;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-nav--toggle-btn.hide[_ngcontent-%COMP%] {\n  right: 10px;\n  animation: move-left-hamburger 500ms 1;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  right: -250px;\n  top: 0px;\n  width: 250px;\n  background-color: var(--white);\n  border-left: 1px solid var(--lightgray);\n  height: 100vh;\n  margin-top: 0;\n  padding-inline-start: 10px;\n  word-break: break-all;\n  overflow-y: auto;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  padding: 0;\n  margin-left: 20px;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin-right: 10px;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  border-bottom: 1px solid var(--lightgray);\n  width: 100%;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu.show[_ngcontent-%COMP%] {\n  right: 0px;\n  animation: show-right-navigation 500ms 1;\n}\n.nav__top[_ngcontent-%COMP%]   .nav__top-menu.hide[_ngcontent-%COMP%] {\n  right: -250px;\n  animation: hide-right-navigation 500ms 1;\n}\n@keyframes show-right-navigation {\n  0% {\n    right: -250px;\n  }\n  100% {\n    right: 0;\n  }\n}\n@keyframes hide-right-navigation {\n  0% {\n    right: 0;\n  }\n  100% {\n    right: -250;\n  }\n}\n@keyframes move-right-hamburger {\n  0% {\n    right: 10px;\n  }\n  100% {\n    right: 250px;\n  }\n}\n@keyframes move-left-hamburger {\n  0% {\n    right: 250px;\n  }\n  100% {\n    right: 10px;\n  }\n}\n@media screen and (min-width: 800px) {\n  .nav__top[_ngcontent-%COMP%]   .nav__logo[_ngcontent-%COMP%] {\n    justify-self: flex-start;\n    margin: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksZ0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQ1I7QUFHUTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFEWjtBQUdZO0VBQ0ksV0FBQTtBQURoQjtBQU1RO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBSlo7QUFNWTtFQUNJLFlBQUE7RUFDQSx1Q0FBQTtBQUpoQjtBQU9ZO0VBQ0ksV0FBQTtFQUNBLHNDQUFBO0FBTGhCO0FBU1E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBUFo7QUFTWTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBUGhCO0FBVVk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUmhCO0FBVWdCO0VBQ0ksc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7QUFScEI7QUFVb0I7RUFDSSxtQkFBQTtBQVJ4QjtBQVdvQjtFQUNJLHFCQUFBO0FBVHhCO0FBY1k7RUFDSSxVQUFBO0VBQ0Esd0NBQUE7QUFaaEI7QUFjWTtFQUNJLGFBQUE7RUFDQSx3Q0FBQTtBQVpoQjtBQWlCUTtFQUNJO0lBQ0ksYUFBQTtFQWZkO0VBaUJVO0lBQ0ksUUFBQTtFQWZkO0FBQ0Y7QUFrQlE7RUFDSTtJQUNJLFFBQUE7RUFoQmQ7RUFrQlU7SUFDSSxXQUFBO0VBaEJkO0FBQ0Y7QUFrQlE7RUFDSTtJQUNJLFdBQUE7RUFoQmQ7RUFrQlU7SUFDSSxZQUFBO0VBaEJkO0FBQ0Y7QUFrQlE7RUFDSTtJQUNJLFlBQUE7RUFoQmQ7RUFrQlU7SUFDSSxXQUFBO0VBaEJkO0FBQ0Y7QUFxQkk7RUFFUTtJQUNJLHdCQUFBO0lBQ0EsWUFBQTtFQW5CZDtBQUNGIiwiZmlsZSI6InRvcC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5uYXZfX3RvcHtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4yNSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBoZWlnaHQ6NTBweDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgIHotaW5kZXg6IDI7XG5cblxuXG4gICAgICAgIC5uYXZfX2xvZ297XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46YXV0bztcblxuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAubmF2X190b3AtbmF2LS10b2dnbGUtYnRue1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICByaWdodDoxMHB4O1xuICAgICAgICAgICAgdG9wOjBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcblxuICAgICAgICAgICAgJi5zaG93e1xuICAgICAgICAgICAgICAgIHJpZ2h0OjI1MHB4O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodC1oYW1idXJnZXIgNTAwbXMgMTtcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuaGlkZXtcbiAgICAgICAgICAgICAgICByaWdodDoxMHB4O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0LWhhbWJ1cmdlciA1MDBtcyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm5hdl9fdG9wLW1lbnUge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgcmlnaHQ6LTI1MHB4O1xuICAgICAgICAgICAgdG9wOjBweDtcbiAgICAgICAgICAgIHdpZHRoOjI1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkIHZhcigtLWxpZ2h0Z3JheSk7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDowO1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6MTBweDtcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdWx7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodGdyYXkpO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2hvd3tcbiAgICAgICAgICAgICAgICByaWdodDowcHg7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzaG93LXJpZ2h0LW5hdmlnYXRpb24gNTAwbXMgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuaGlkZXtcbiAgICAgICAgICAgICAgICByaWdodDotMjUwcHg7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBoaWRlLXJpZ2h0LW5hdmlnYXRpb24gNTAwbXMgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgQGtleWZyYW1lcyBzaG93LXJpZ2h0LW5hdmlnYXRpb24ge1xuICAgICAgICAgICAgMCV7XG4gICAgICAgICAgICAgICAgcmlnaHQ6LTI1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJXtcbiAgICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgQGtleWZyYW1lcyBoaWRlLXJpZ2h0LW5hdmlnYXRpb24ge1xuICAgICAgICAgICAgMCV7XG4gICAgICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCV7XG4gICAgICAgICAgICAgICAgcmlnaHQ6LTI1MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtaGFtYnVyZ2VyIHtcbiAgICAgICAgICAgIDAle1xuICAgICAgICAgICAgICAgIHJpZ2h0OjEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAle1xuICAgICAgICAgICAgICAgIHJpZ2h0OjI1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWhhbWJ1cmdlciB7XG4gICAgICAgICAgICAwJXtcbiAgICAgICAgICAgICAgICByaWdodDoyNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCV7XG4gICAgICAgICAgICAgICAgcmlnaHQ6MTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MDBweCl7XG4gICAgICAgIC5uYXZfX3RvcCB7XG4gICAgICAgICAgICAubmF2X19sb2dve1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBtYXJnaW46bm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLm1hdC1pY29ue1xuICAgICAgICAgICAgLy8gICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIHVse1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICYuYWN0aXZlLFxuICAgICAgICAgICAgLy8gICAgICYuaGlkZXsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgLy8gICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAvLyAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIC8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgLy8gICAgICAgICBib3JkZXItbGVmdDpub25lO1xuICAgICAgICAgICAgLy8gICAgICAgICB3aWR0aDphdXRvO1xuICAgICAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJpZ2h0OmluaGVyaXQ7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRvcDppbmhlcml0O1xuICAgICAgICAgICAgLy8gICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJpZ2h0OjBweDtcblxuICAgICAgICAgICAgLy8gICAgICAgICBsaXtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0= */"] });


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
        coordinates: [],
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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/graphql/gql-subscription.service */ 86427);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 939);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);








function VehicleListComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VehicleListComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r16.id, " ");
} }
function VehicleListComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VehicleListComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, col_r17.name), " ");
} }
function VehicleListComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VehicleListComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, col_r18.type), " ");
} }
function VehicleListComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 13);
} }
function VehicleListComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VehicleListComponent_tr_13_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const row_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.onRowClick(row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VehicleListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VehicleListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r22.id, " ");
} }
function VehicleListComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VehicleListComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, col_r23.name), " ");
} }
function VehicleListComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VehicleListComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, col_r24.type), " ");
} }
function VehicleListComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 13);
} }
function VehicleListComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VehicleListComponent_tr_26_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const row_r25 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.onRowClick(row_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class VehicleListComponent {
    constructor(gqlSubscription, gqlQuery, router, route) {
        this.gqlSubscription = gqlSubscription;
        this.gqlQuery = gqlQuery;
        this.router = router;
        this.route = route;
        this.vehicles = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource([]);
        this.onlineVehicles = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource([]);
        this.displayedColumns = ['id', 'name', 'type'];
    }
    ngOnInit() {
        this.onlineVehiclesSubscription = this.gqlSubscription
            .getOnlineVehicles()
            .subscribe((response) => {
            this.onlineVehicles = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(response);
        });
        this.vehiclesQuerySubscription = this.gqlQuery
            .getAllVehicles()
            .subscribe((response) => {
            this.vehicles = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(response);
        });
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.onlineVehiclesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.vehiclesQuerySubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
    onRowClick(row) {
        console.log(row);
        this.router.navigate([row.id], { relativeTo: this.route });
    }
}
VehicleListComponent.ɵfac = function VehicleListComponent_Factory(t) { return new (t || VehicleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_graphql_gql_subscription_service__WEBPACK_IMPORTED_MODULE_0__.GqlSubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__.GqlQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
VehicleListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VehicleListComponent, selectors: [["app-vehicle-list"]], decls: 27, vars: 6, consts: [["mat-align-tabs", "center"], ["label", "Online"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "type"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["label", "All"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function VehicleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VehicleListComponent_th_4_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, VehicleListComponent_td_5_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, VehicleListComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, VehicleListComponent_td_8_Template, 3, 3, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, VehicleListComponent_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, VehicleListComponent_td_11_Template, 3, 3, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, VehicleListComponent_tr_12_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, VehicleListComponent_tr_13_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](16, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, VehicleListComponent_th_17_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, VehicleListComponent_td_18_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](19, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, VehicleListComponent_th_20_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, VehicleListComponent_td_21_Template, 3, 3, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](22, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, VehicleListComponent_th_23_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, VehicleListComponent_td_24_Template, 3, 3, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, VehicleListComponent_tr_25_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, VehicleListComponent_tr_26_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.onlineVehicles);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.vehicles);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTab, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe], styles: [".mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSiIsImZpbGUiOiJ2ZWhpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxudHIubWF0LXJvdywgdHIubWF0LWZvb3Rlci1yb3d7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });


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
  decls: 14,
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Images");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "router-outlet");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_topics_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/topics/starfire/starfire.component */ 93254);
/* harmony import */ var _components_topics_image_pair_image_pair_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/topics/image-pair/image-pair.component */ 29448);





function VehicleTopicComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-starfire", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-starfire", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showTractor", true)("zoom", 20)("vehicleId", ctx_r0.vehicleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showTractor", true)("zoom", 30)("vehicleId", ctx_r0.vehicleId);
} }
function VehicleTopicComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("topic", "/" + ctx_r1.currentRoute);
} }
function VehicleTopicComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("topic", "/" + ctx_r2.currentRoute);
} }
function VehicleTopicComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("topic", "/" + ctx_r3.currentRoute);
} }
function VehicleTopicComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("topic", "/" + ctx_r4.currentRoute);
} }
function VehicleTopicComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("topic", "/" + ctx_r5.currentRoute);
} }
function VehicleTopicComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("topic", "/" + ctx_r6.currentRoute);
} }
function VehicleTopicComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("topic", "/" + ctx_r7.currentRoute);
} }
function VehicleTopicComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("topic", "/" + ctx_r8.currentRoute);
} }
function VehicleTopicComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("topic", "/" + ctx_r9.currentRoute);
} }
function VehicleTopicComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("topic", "/" + ctx_r10.currentRoute);
} }
function VehicleTopicComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("topic", "/" + ctx_r11.currentRoute);
} }
function VehicleTopicComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("topic", "/" + ctx_r12.currentRoute);
} }
function VehicleTopicComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-image-pair", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("topic", "/" + ctx_r13.currentRoute);
} }
function VehicleTopicComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Coming Soon! ", ctx_r14.currentRoute, "");
} }
class VehicleTopicComponent {
    constructor(route) {
        this.route = route;
        this.currentRoute = "";
        this.vehicleId = "";
    }
    ngOnInit() {
        this.currentRoute = this.route.url.value.join("/");
        this.vehicleId = this.route.parent.snapshot.params.id;
    }
}
VehicleTopicComponent.ɵfac = function VehicleTopicComponent_Factory(t) { return new (t || VehicleTopicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
VehicleTopicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VehicleTopicComponent, selectors: [["app-vehicle-topic"]], decls: 18, vars: 16, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "grid", "gap"], [1, "grid__cell"], [1, "grid__cell--label"], [3, "showTractor", "zoom", "vehicleId"], ["playback", "replay", 3, "showTractor", "zoom", "vehicleId"], [3, "topic"]], template: function VehicleTopicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, VehicleTopicComponent_div_3_Template, 10, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VehicleTopicComponent_div_4_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, VehicleTopicComponent_div_5_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, VehicleTopicComponent_div_6_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, VehicleTopicComponent_div_7_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, VehicleTopicComponent_div_8_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, VehicleTopicComponent_div_9_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, VehicleTopicComponent_div_10_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, VehicleTopicComponent_div_11_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, VehicleTopicComponent_div_12_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, VehicleTopicComponent_div_13_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, VehicleTopicComponent_div_14_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, VehicleTopicComponent_div_15_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, VehicleTopicComponent_div_16_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, VehicleTopicComponent_div_17_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("/", ctx.currentRoute, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.currentRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "starfire");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "front_center/debayered");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "front_right/debayered");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "front_left/debayered");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "front_left/visualization/top_down_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "side_right/visualization/top_down_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "side_right/debayered");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "rear/debayered");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "rear/visualization/top_down_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "side_left/debayered");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "side_left/visualization/top_down_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "front_right/visualization/top_down_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "front_center/visualization/top_down_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "front_right/segmentation_map");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _components_topics_starfire_starfire_component__WEBPACK_IMPORTED_MODULE_0__.StarfireComponent, _components_topics_image_pair_image_pair_component__WEBPACK_IMPORTED_MODULE_1__.ImagePairComponent], styles: [".grid__cell[_ngcontent-%COMP%] {\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtdG9waWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoidmVoaWNsZS10b3BpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkX19jZWxsIHtcbiAgICBoZWlnaHQ6NDAwcHg7XG59Il19 */"] });


/***/ }),

/***/ 92327:
/*!*******************************************************************!*\
  !*** ./src/app/pages/vehicles/pages/vehicle/vehicle.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleComponent": () => (/* binding */ VehicleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/navigation/menu.service */ 83536);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/graphql/gql-query.service */ 91776);




class VehicleComponent {
    constructor(menuService, router, route, graphqlQueryService) {
        this.menuService = menuService;
        this.router = router;
        this.route = route;
        this.graphqlQueryService = graphqlQueryService;
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
                header: "Device Topics",
                links: [
                    {
                        label: "Live",
                        callback: () => {
                            this.router.navigate(['vehicles', this.vehicleId]);
                        }
                    },
                    ...data.vehicle.vehicleTopics.nodes.map((topicType) => {
                        return {
                            label: topicType.topic.name,
                            callback: () => {
                                this.loadTopic(topicType.topic);
                            }
                        };
                    })
                ]
            });
    }
    loadTopic(topic) {
        // @ts-ignore
        this.router.navigateByUrl(`/vehicles/${this.vehicleId}`, { skipLocationChange: false })
            .then(() => {
            this.router.navigate(["vehicles", this.vehicleId, ...topic.name.replace(/\//, "").split("/")]);
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
VehicleComponent.ɵfac = function VehicleComponent_Factory(t) { return new (t || VehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_navigation_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_graphql_gql_query_service__WEBPACK_IMPORTED_MODULE_1__.GqlQueryService)); };
VehicleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VehicleComponent, selectors: [["app-vehicle"]], decls: 1, vars: 0, template: function VehicleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLmNvbXBvbmVudC5zY3NzIn0= */"] });


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




function VehiclesComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
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
const SubscriptionQL = __webpack_require__(/*! src/app/graphql/query-syntax/subscriptions */ 89156);
const QueryQL = __webpack_require__(/*! src/app/graphql/query-syntax/query */ 56197);
class VehiclesComponent {
    constructor(menuService, router, route, graphqlQueryService) {
        this.menuService = menuService;
        this.router = router;
        this.route = route;
        this.graphqlQueryService = graphqlQueryService;
        this.rootPath = "";
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
VehiclesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VehiclesComponent, selectors: [["app-vehicles"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 0, consts: [[1, "header"], [1, "header__title"], ["topic", ""], [1, "header__topic"]], template: function VehiclesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Vehicles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VehiclesComponent_ng_template_4_Template, 4, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  word-break: break-all;\n}\n.header[_ngcontent-%COMP%]   .header__title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.header[_ngcontent-%COMP%]   .header__title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.header[_ngcontent-%COMP%]   .header__title[_ngcontent-%COMP%]   .live-pulse[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  animation: pulse 1000ms infinite;\n  position: absolute;\n  top: 20px;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(0);\n    box-shadow: 0 0 0 1px solid red;\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: 1 2 3 20px solid red;\n  }\n}\n.header[_ngcontent-%COMP%]   .header__topic[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0ksV0FBQTtBQUNSO0FBQ1E7RUFDQyxxQkFBQTtBQUNUO0FBQ1E7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ1o7QUFFUTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSwrQkFBQTtFQUFkO0VBRVU7SUFDSSxtQkFBQTtJQUNBLGdDQUFBO0VBQWQ7QUFDRjtBQUdJO0VBQ0ksV0FBQTtBQURSIiwiZmlsZSI6InZlaGljbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblxuICAgIC5oZWFkZXJfX3RpdGxle1xuICAgICAgICB3aWR0aDoxMDAlO1xuXG4gICAgICAgIGgxe1xuICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmxpdmUtcHVsc2V7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMTAwMG1zIGluZmluaXRlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgICAgICAgMCV7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OjAgMCAwIDFweCBzb2xpZCByZ2JhKDI1NSwwLDAsMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAle1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzoxIDIgMyAyMHB4IHNvbGlkIHJnYmEoMjU1LDAsMCwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuaGVhZGVyX190b3BpY3tcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG4gICAgXG5cbn0iXX0= */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/login/login.component */ 24902);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/dashboard/dashboard.component */ 24789);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/profile/profile.component */ 58220);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/layout.component */ 39520);
/* harmony import */ var _pages_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/vehicles/vehicles.component */ 2815);
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth/auth-guard.service */ 49404);
/* harmony import */ var src_app_pages_vehicles_pages_vehicle_topic_vehicle_topic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/vehicles/pages/vehicle-topic/vehicle-topic.component */ 94266);
/* harmony import */ var _pages_vehicles_pages_vehicle_live_vehicle_live_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/vehicles/pages/vehicle-live/vehicle-live.component */ 61095);
/* harmony import */ var _pages_vehicles_pages_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/vehicles/pages/vehicle-list/vehicle-list.component */ 78211);
/* harmony import */ var _pages_vehicles_pages_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/vehicles/pages/vehicle/vehicle.component */ 92327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);













const routes = [
    {
        path: "",
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent,
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuardService],
        runGuardsAndResolvers: 'always',
        children: [
            {
                path: "",
                component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent
            },
            {
                path: "profile",
                component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent
            },
            {
                path: "vehicles",
                component: _pages_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_4__.VehiclesComponent,
                children: [
                    {
                        path: "",
                        component: _pages_vehicles_pages_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_8__.VehicleListComponent
                    },
                    {
                        path: ":id",
                        component: _pages_vehicles_pages_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_9__.VehicleComponent,
                        children: [
                            {
                                path: "",
                                component: _pages_vehicles_pages_vehicle_live_vehicle_live_component__WEBPACK_IMPORTED_MODULE_7__.VehicleLiveComponent
                            },
                            {
                                path: "**",
                                component: src_app_pages_vehicles_pages_vehicle_topic_vehicle_topic_component__WEBPACK_IMPORTED_MODULE_6__.VehicleTopicComponent
                            }
                        ]
                    }
                ]
            },
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
AppRoutes.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutes });
AppRoutes.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutes, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ 550);



const QueryQL = __webpack_require__(/*! src/app/graphql/query-syntax/query */ 56197);
class GqlQueryService {
    constructor(graphService) {
        this.graphService = graphService;
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
            return response.data.vehicles.nodes.map((vehicle) => {
                return Object.assign(Object.assign({}, vehicle), { type: vehicle.type.type });
            });
        }));
    }
    getVehicleById(variables) {
        return this.basicFilteredQuery(QueryQL.Vehicles.ById, variables);
    }
}
GqlQueryService.ɵfac = function GqlQueryService_Factory(t) { return new (t || GqlQueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__.Apollo)); };
GqlQueryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GqlQueryService, factory: GqlQueryService.ɵfac, providedIn: 'root' });


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
            query: SubscriptionQL.DEVICE_MESSAGE_SUBSCRIPTION
        });
    }
    getGeolocationStream(variables = {}) {
        return this.graphService.subscribe({
            query: SubscriptionQL.GEOGLOCATION.Vehicles,
            variables
        });
    }
    getOnlineVehicles() {
        return this.graphService.subscribe({
            query: SubscriptionQL.ONLINE_VEHICLES
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            if (!response || !response.data || !response.data.listen.query.vehicles.nodes[0].vehiclesOnline)
                return [];
            return response.data.listen.query.vehicles.nodes.map((obj) => {
                return { id: obj.vehiclesOnline.vehicleId, name: obj.vehiclesOnline.vehicle.name, type: obj.vehiclesOnline.vehicle.type.type };
            });
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
            bitDepth: 8,
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