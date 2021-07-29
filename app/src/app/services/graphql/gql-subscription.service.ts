import { Injectable } from '@angular/core';
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
        result.alerts = vehicle.vehicleStatuses.nodes[0].alerts.nodes[0]
        result.state = vehicle.vehicleStatuses.nodes[0].state
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

  getVehicleState(variables={}){
    return this.graphService.subscribe({
      query: SubscriptionQL.Vehicles.State
      , variables
    }).pipe(map((response:any)=>{
      return response.data.sqlVehicleStatus
    }))
  }
}
