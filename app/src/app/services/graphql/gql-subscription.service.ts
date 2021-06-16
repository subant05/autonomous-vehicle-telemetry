import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
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

  getGeolocationStream(){
    return this.graphService.subscribe({
      query: SubscriptionQL.GEOGRAPHIC_COORDINATES
    })
  }

  getOnlineVehicles(){
    return this.graphService.subscribe({
      query: SubscriptionQL.ONLINE_VEHICLES
    })
  }
}
