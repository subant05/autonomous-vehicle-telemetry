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
      query: SubscriptionQL.ONLINE_VEHICLES
    }).pipe(map((response:any)=>{
      if(!response || !response.data || !response.data.listen.query.vehicles.nodes[0].vehiclesOnline)
        return []
        
      return response.data.listen.query.vehicles.nodes.map((obj:any)=>{
        return{ id: obj.vehiclesOnline.vehicleId, name: obj.vehiclesOnline.vehicle.name, type: obj.vehiclesOnline.vehicle.type.type}
      })
    }))
  }
}
