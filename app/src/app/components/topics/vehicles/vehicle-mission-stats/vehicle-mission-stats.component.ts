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
  private gqlMissionCount:Subscription | null = null
  private gqlMissionStats:Subscription | null = null
  private missions: any[] =[]
  pageSize=1;
  pageSizeOptions=[1]
  pageLength=0  
  missionStats: any;
  isDataLoaded: boolean = false
  isPaginationLoaded: boolean = false

  @Input() vehicleId: number | string |undefined;
  @Input() cursor: number = 0



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
        .getMissionByVehicleId({vehicleId:this.vehicleId})
        .subscribe((response:any):void | null=>{
          if(!response || new Date(response.mission.missionStartTime).getFullYear() < 1971)
            return

          const event = response.event
          const stats = response.mission
          
          switch(event){
            case "INSERT":
              this.pageLength++
              if(stats.id !== this.missionStats.id && !this.cursor){
                this.missionStats = stats
              } else {
                this.cursor++
              }
              break;
            case "UPDATE":
              if(stats.id === this.missionStats.id ){
                this.missionStats = stats
              } 
              break;
          }

        })
    
  }

  private getVehicleStatus(){
    if(this.gqlVehicleStatusQuery)
      this.gqlVehicleStatusQuery.unsubscribe()

    this.gqlVehicleStatusQuery = this.graphQLQuery
      .getMissionByVehicleId({vehicleId:this.vehicleId, cursor:this.cursor, size:this.pageSize })
      .subscribe((response:any)=>{

        this.missions = response.nodes
        this.missionStats = response.nodes[0]
        this.pageLength = response.totalCount
        this.isDataLoaded = true
        this.isPaginationLoaded = true
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
      // this.getMissionStatsCount()
    }
  }

  ngOnDestroy(): void{
    this.gqlOnlineQuery?.unsubscribe()
    this.gqlOnlineSubscription?.unsubscribe()
    this.gqlVehicleStatusQuery?.unsubscribe()
    this.gqlMissionCount?.unsubscribe()
    this.gqlMissionStats?.unsubscribe()
  }

  onPaginate(event:any){
    this.cursor = event.pageIndex
    this.pageLength = event.length
    this.missionStats = null
    this.isDataLoaded = false
    this.getVehicleStatus()
  }

}
