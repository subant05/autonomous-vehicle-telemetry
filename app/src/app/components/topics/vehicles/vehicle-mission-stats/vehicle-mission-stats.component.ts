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
  private gqlVehicleStatusQuery:Subscription | null = null
  pageSize=1;
  pageSizeOptions=[1]
  pageLength=0


  @Input() vehicleId: number | string |undefined;
  @Input() cursor: number = 0
  missionStats: any;
  isDataLoaded: boolean = false


  constructor(
    private graphQLSubscription: GqlSubscriptionService
    , private graphQLQuery: GqlQueryService
  ) { }

  private convertToSeconds(time:any): any{
    return parseFloat(((time  * 1.0E-9) ).toFixed(2))
  }

  private convertToMinutes(time:any): any{
    return +((this.convertToSeconds(parseFloat(time))/60).toFixed(2))
  }

  private convertToHours(time:any){
    return +((this.convertToMinutes(parseFloat(time))/60).toFixed(2))
  }
  
  private formatData(data:any={}){
    const missionStats =  data.missionStats
    return {
      ...missionStats
    }
  }

  private getStatusSubscription(){
    
    this.gqlOnlineSubscription = this.graphQLSubscription
        .getVehicleStatus({vehicleId:this.vehicleId})
        .subscribe((response:any):void | null=>{
          if(!response)
            return
          
            debugger;
          this.pageLength =  ++this.pageLength
          if(this.cursor === 0){
           this.missionStats = this.formatData(response)
          } else {
            this.cursor = ++this.cursor
          }
        })
    
  }

  private getVehicleStatus(){
    if(this.gqlVehicleStatusQuery)
      this.gqlVehicleStatusQuery.unsubscribe()


    this.gqlVehicleStatusQuery = this.graphQLQuery
    .getVehicleStatus({vehicle_id:this.vehicleId, cursor:this.cursor, size:this.pageSize })
    .subscribe((response:any)=>{
      this.pageLength = response.totalCount

      this.missionStats = response.nodes
            .map((result:any)=>{
              return this.formatData(result)
            })[0]
      this.isDataLoaded = true

  })
  }

  getUpTime(){
    const {durationAutonomyDriving,durationAutonomyStopped, durationNoAutonomy} = this.missionStats
    const totalTimeSeconds =  +(durationAutonomyDriving) + +(durationAutonomyStopped) + +(durationNoAutonomy)
    return `${this.convertToSeconds(totalTimeSeconds)} sec`
    // return !totalTime ? totalTime.toString() : `${(totalTime / +(durationNoAutonomy)).toFixed(2)} hrs`
  }

  getMissionStartTime(){
    return new Date(this.missionStats.missionStartTime).valueOf() ? new Date(this.missionStats.missionStartTime).toLocaleString() : "N/A"
  }

  getAcresDone(){
    const metersPerAcre = 4047
    const {autonomyAreaTravelledSqm} = this.missionStats
    if(autonomyAreaTravelledSqm < metersPerAcre)
      return "0"

    return `${autonomyAreaTravelledSqm/metersPerAcre} ac`
  }

  getFalsePositives(){
    return this.missionStats.numFalsePositives
  }

  getTruePositives(){
    return this.missionStats.numTruePositives
  }

  getStops(){
    return this.missionStats.numStops
  }

  getAreaDone(){
    const metersPerAcre = 4047
    const {autonomyAreaTravelledSqm} = this.missionStats

    if(autonomyAreaTravelledSqm < metersPerAcre)
      return "0"

    return `${(autonomyAreaTravelledSqm / metersPerAcre).toFixed(2)} ac`  
  }

  getTeleopDuration(){
    return  `${this.convertToSeconds(this.missionStats.durationTeleop)} sec`
  }

  getMovingPercentage(){
    // Add All 3
    const {durationAutonomyDriving, durationAutonomyStopped, durationNoAutonomy} = this.missionStats
    const totalTime = +(durationAutonomyDriving) + +(durationAutonomyStopped) + +(durationNoAutonomy)
    if(!+(totalTime))
      return `${0} %`;

    const driveTimePerc =  (durationAutonomyDriving*100) / +(totalTime)
    return `${driveTimePerc.toFixed(2)} % `
  }

  getAutonomyStopped(){
    return `${this.convertToSeconds(this.missionStats.durationAutonomyStopped) } sec`
  }

  getAutonomyDriving(){
    return `${this.convertToSeconds(this.missionStats.durationAutonomyDriving) } sec`
  }

  getTelesupport(){
    const {durationAutonomyDriving, durationAutonomyStopped, durationNoAutonomy} = this.missionStats
    const totalTime = +(durationAutonomyDriving) + +(durationAutonomyStopped) + +(durationNoAutonomy)
    if(!+(totalTime))
      return `${0} %`;

    return `${ (+(this.missionStats.durationTeleop)*100 / +(totalTime) ).toFixed(2)} %`
  }

  getSupport(){
    if(!parseFloat(this.getAreaDone()) || !+(this.missionStats.numTeleopQueries))
      return `${0}`

    const support =  (+(this.missionStats.numTeleopQueries)*100) / parseFloat(this.getAreaDone() )
    return support.toFixed(2)
  }

  ngOnInit(): void {
    if(!isNaN((this.vehicleId as number))){
      this.getStatusSubscription()
      this.getVehicleStatus()
    }
  }

  ngOnDestroy(): void{
    this.gqlOnlineQuery?.unsubscribe()
    this.gqlOnlineSubscription?.unsubscribe()
    this.gqlVehicleStatusQuery?.unsubscribe()
  }

  onPaginate(event:any){
    this.cursor = event.pageIndex
    this.pageLength = event.length
    this.getVehicleStatus()
  }

}
