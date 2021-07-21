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
      query: SubscriptionQL.DEVICE_MESSAGE_SUBSCRIPTION
    })
  }

  getGeolocationStream(variables={}){
    return this.graphService.subscribe({
      query: SubscriptionQL.GEOGLOCATION.Vehicles
      , variables
    })
  }

  getOnlineVehicles(){
    return this.graphService.subscribe({
      query: SubscriptionQL.VEHICLES.ONLINE
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

  getAlerts(){
    return this.graphService.subscribe({
      query: SubscriptionQL.NOTIFICATIONS.Alerts
    }).pipe(map((response:any)=>{
        const alert = response.data.sqlAlerts.alerts
        const event = response.data.sqlAlerts.event
       return {...alert
              , event
              , alertMessage:`${alert.vehicleStatus.topic.name } : ${alert.vehicleStatus.state.name}`
            }
    }))
  }
}
