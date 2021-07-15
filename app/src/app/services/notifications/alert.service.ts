import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private currentAlerts:any[] = []
  alerts:Subject<any> = new Subject<any>();

  constructor(
    private gqlQueryService: GqlQueryService,
    private gqlSubscriptionService: GqlSubscriptionService
    ) {
      this.gqlQueryService
        .getAlerts()
        .subscribe(response=>{
        this.currentAlerts = response.data.alerts.nodes
        // this.alerts.next(this.currentAlerts)
      })
      this.gqlSubscriptionService
        .getAlerts()
        .subscribe(response=>{
          switch(response.event){
            case "INSERT":
              // this.currentAlerts.push(response.data.sqlAlerts.alerts)
              // this.alerts.next(this.currentAlerts)
              this.alerts.next(response)
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
              this.alerts.next(response)
              break;
          }
        })
  }

}
