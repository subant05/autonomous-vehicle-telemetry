import { Injectable, MissingTranslationStrategy } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import {map} from 'rxjs/operators'

const SubscriptionQL = require('src/app/graphql/query-syntax/subscriptions')

@Injectable({
  providedIn: 'root'
})
export class GqlSubscriptionService {

  constructor( private graphService: Apollo ) { }

  getDeviceStream(){
    return this.graphService.subscribe({
      query: SubscriptionQL.DeviceMessageSubscription
    })
  }

  getGeolocationStream(variables={}){
    return this.graphService.subscribe({
      query: SubscriptionQL.Geolocation.Vehicles
      , variables
    })
  }

  getOnlineVehicles(){
    return this.graphService.subscribe({
      query: SubscriptionQL.Vehicles.Online
    }).pipe(map((response:any)=>{
      const vehicle =  response.data.sqlVehiclesOnline.vehicle_online ? 
        response.data.sqlVehiclesOnline.vehicle_online.vehicle : null
      const result:any = {
        event: response.data.sqlVehiclesOnline.event
        , id : response.data.sqlVehiclesOnline.row.id
      }

      if(vehicle) {
        result.name   = vehicle.name
        result.ip     = vehicle.ip
        result.vehicle_id = vehicle.vehicle_id
        result.type   = vehicle.type.type
        if(vehicle.vehicleStatuses.nodes.length){
          result.alerts =  vehicle.vehicleStatuses.nodes[0].alerts.nodes[0]
          result.state = vehicle.vehicleStatuses.nodes[0].state
        }
      }
      
      return result

    }))
  }

  getVehicleOnlineStatus(variables={}){
    return this.graphService.subscribe({
      query: SubscriptionQL.Vehicles.OnlineOrOfflineById
      , variables
    }).pipe(map((response:any)=>{
      const result = response.data.sqlVehiclesOnline
      if(!result.vehicle_online)
        return null;

      switch(result.event){
        case "INSERT":
        case "UPDATE":
          return {
            online:true
            , rowId: result.row.id
            , vehicleId: result.vehicle_online.vehicleid
            , name : result.vehicle_online.vehicle.name
          }
          break;
        default:
          return {online:false}
          break;
      }
    }))
  }

  getAlerts(){
    return this.graphService.subscribe({
      query: SubscriptionQL.Notifications.Alerts
    }).pipe(map((response:any)=>{
        const alert = response.data.sqlAlerts.alerts
        const event = response.data.sqlAlerts.event
       return {...alert
              , event
              , alertMessage:`${alert.vehicleStatus.topic.name } : ${alert.vehicleStatus.state.name}`
            }
    }))
  }

  getVehicleStatus(variables={}){
    return this.graphService.subscribe({
      query: SubscriptionQL.Vehicles.State
      , variables
    }).pipe(map((response:any)=>{
      if(!response.data.sqlVehicleStatus.vehicle_status )
        return null

      const results =  response.data.sqlVehicleStatus.vehicle_status      
      return {
        ...results
        , statusMessage: results.statusMessage
        , missionStats: results.statusMessage.missionStats
        , topic: results.topic.name
        , node: results.statusMessage.header.node
        , headerId: results.statusMessage.header.headerid
        , status:results.state.name
        , readingat: results.statusMessage.header.readingat
        , state:results.state
        , vehicleStatusDetails: results.vehicleStatusDetails.nodes
        , alerts:results.alerts.nodes.length ? results.alerts.nodes[0] : null}
    }))
  }

  getVehiclePreviewImages(variables={}){
    return this.graphService.subscribe({
      query: SubscriptionQL.Images.PreviewImagesByVehicleId
      , variables
    }).pipe(map((response:any)=>{
      const camera = response.data.sqlCamera.camera
      return {
        topic: camera.topic.name
        , topicId: camera.topic.id
        , vehicleId: camera.vehicleId
        , image: {...camera.msg.image}
        , header:camera.msg.header
      }

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
    }))
  }

  getPreviewImageByVehicleIdTopicId(variables={}){
    return this.graphService.subscribe({
      query: SubscriptionQL.Images.PreviewImagesByVehicleIdTopicId
      , variables
    }).pipe(map((response:any)=>{
      if(!response.data.sqlCamera.camera)
        return null;

      const topic = response.data.sqlCamera.camera.vehicle.vehicleTopics.nodes[0].topic
      const msg = topic.cameras.nodes[0].msg
      const image = msg.image
      const header =  msg.header
      return {
        topic: topic.name
        , topicId: topic.id
        , image
        , header 
      }
    }))
  }

  getLoggingByVehicleId(variables={}){
    return this.graphService.subscribe({
      query: SubscriptionQL.Logging.ByVehicleId
      , variables
    }).pipe(map((response:any)=>{
      return response.data.sqlVehicleLogging.vehicle_logs
    }))
  }

  getObjectDetectionByVehicleId(variables={}){
    return this.graphService.subscribe({
      query: SubscriptionQL.Detection.ByVehicleId
      ,variables
    }).pipe(map((response:any)=>{
      return response.data.sqlObjectDetection.object
    }))
  }

  getMissionByVehicleId(variables={}){
    return this.graphService.subscribe({
      query: SubscriptionQL.Production.MissionByVehicleId
      ,variables
    }).pipe(map((response:any)=>{
      const result = response.data.sqlMission

      return {
        event: result.event
        , mission: result.missions
      }
      
    }))
  }
}
