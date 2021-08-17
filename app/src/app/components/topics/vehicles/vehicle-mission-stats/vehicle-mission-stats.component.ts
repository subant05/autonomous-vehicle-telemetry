import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service';

@Component({
  selector: 'app-vehicle-mission-stats',
  templateUrl: './vehicle-mission-stats.component.html',
  styleUrls: ['./vehicle-mission-stats.component.scss']
})
export class VehicleMissionStatsComponent implements OnInit {
  private gqlOnlineQuery:Subscription | null = null
  private gqlOnlineSubscription:Subscription | null = null

  @Input() vehicleId: number | string |undefined;
  @Input() cursor: number = 0
  mission_stats: any;
  isDataLoaded: boolean = false


  constructor(
    private graphQLSubscription: GqlSubscriptionService
    , private graphQLQuery: GqlQueryService
  ) { }

  private getStatus(){
    if(this.gqlOnlineQuery)
      this.gqlOnlineQuery.unsubscribe()

    this.gqlOnlineQuery = this.graphQLQuery
        .getVehicleStatus({vehicle_id:this.vehicleId, cursor:this.cursor, size:1 })
        .subscribe((response:any)=>{
          this.mission_stats = response.nodes.map((result:any)=>{
            return {
              ...result
              , status: result.state.name
              , alerts: result.alerts.length ? result.alerts[0] : null
            }
          })[0]
          this.isDataLoaded = true
      })
    
    this.gqlOnlineSubscription = this.graphQLSubscription
        .getVehicleStatus({vehicleId:this.vehicleId})
        .subscribe((response:any)=>{
          this.mission_stats = response
        })
    
  }

  ngOnInit(): void {
    if(!isNaN((this.vehicleId as number))){
      this.getStatus()
    }
  }

  ngOnDestroy(): void{
    this.gqlOnlineQuery?.unsubscribe()
    this.gqlOnlineSubscription?.unsubscribe()
  }

}
