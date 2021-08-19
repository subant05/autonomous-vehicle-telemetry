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
  missionStats: any;
  isDataLoaded: boolean = false


  constructor(
    private graphQLSubscription: GqlSubscriptionService
    , private graphQLQuery: GqlQueryService
  ) { }

  private convertToMilliSeconds(time:any): any{
    return parseFloat(((time  * 1.0E-9)/1000 ).toFixed(2))
  }

  private convertToSeconds(time:any): any{
    return +((this.convertToMilliSeconds(parseFloat(time))/1000).toFixed(2))
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

  private getStatus(){
    if(this.gqlOnlineQuery)
      this.gqlOnlineQuery.unsubscribe()

    this.gqlOnlineQuery = this.graphQLQuery
        .getVehicleStatus({vehicle_id:this.vehicleId, cursor:this.cursor, size:1 })
        .subscribe((response:any)=>{
  
          this.missionStats = response.nodes
            .map((result:any)=>{
              return this.formatData(result)
            })[0]

          this.isDataLoaded = true
      })
    
    this.gqlOnlineSubscription = this.graphQLSubscription
        .getVehicleStatus({vehicleId:this.vehicleId})
        .subscribe((response:any):void | null=>{
          if(!response)
            return

          this.missionStats = this.formatData(response)
        })
    
  }

  getUpTime(){
    const {durationAutonomyDriving,durationAutonomyStopped, durationNoAutonomy} = this.missionStats
    const totalTimeSeconds =  +(durationAutonomyDriving) + +(durationAutonomyStopped) + +(durationNoAutonomy)
    return `${this.convertToSeconds(totalTimeSeconds)} sec`
    // return !totalTime ? totalTime.toString() : `${(totalTime / +(durationNoAutonomy)).toFixed(2)} hrs`
  }

  getMissionStartTime(){
    return new Date(this.missionStats.missionStartTime).toLocaleString()
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
    return `${this.convertToMilliSeconds(this.missionStats.durationAutonomyStopped) } sec`
  }

  getAutonomyDriving(){
    return `${this.convertToMilliSeconds(this.missionStats.durationAutonomyDriving) } sec`
  }

  getTelesupport(){
    const {durationAutonomyDriving, durationAutonomyStopped, durationNoAutonomy} = this.missionStats
    const totalTime = +(durationAutonomyDriving) + +(durationAutonomyStopped) + +(durationNoAutonomy)
    if(!+(totalTime))
      return `${0} %`;

    return `${ (+(this.missionStats.durationTeleop)*100 / +(totalTime) ).toFixed(2)} %`
  }

  getSupport(){
    if(!this.getAreaDone())
      return `${0}`

    const support =  +(this.missionStats.numTeleopQueries) / parseFloat(this.getAreaDone() )
    return support
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
