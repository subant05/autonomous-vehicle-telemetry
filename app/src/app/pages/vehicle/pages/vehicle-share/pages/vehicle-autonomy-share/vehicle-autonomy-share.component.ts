import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service';
import { Subscription, Subject } from 'rxjs';
import moment from 'moment'
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vehicle-autonomy-share',
  templateUrl: './vehicle-autonomy-share.component.html',
  styleUrls: ['./vehicle-autonomy-share.component.scss']
})
export class VehicleAutonomyShareComponent implements OnInit, OnDestroy {

  private objectQuery: Subscription | null = null
  private logsQuery: Subscription | null = null
  private imageQuery: Subscription | null = null

  image: any = null
  isImageLoaded = false
  headerid: string  =""
  label: string = ""
  pagesLength: number =0
  objectDetection:any = null
  latitude = 0
  longitude = 0
  coordinates: number[][] = [[]]
  paginationInit = false
  currentHeaderId: any;
  vehicleId: any;
  timeframe: any ={}
  logs:any=new MatTableDataSource([])
  logsColumns:string[] |undefined;
  isLogLoaded: boolean = false

  @Input() id:number | undefined

  constructor(
    private gqlSubscription: GqlSubscriptionService
    , private gqlQuery: GqlQueryService
    , private route: ActivatedRoute
  ) { }

  private setImage(stopInfo:any, isLiveUpdate=false, currentHeaderId?:any){
    this.imageQuery = this.gqlQuery
      .getPreviewImageByCameraMessageIdCameraName({
          headerId:stopInfo.message.header.headerid
          , cameraName: stopInfo.message.cameraName
        })
      .subscribe((response:any)=>{
        if(!response)
          return;

        this.image = response.id
        this.label = `${stopInfo.topic.name} | ${new Date(stopInfo.readingat) }`
        this.headerid = stopInfo.message.header.headerid
      })
  }

  private setGeolocation(data:any){
    if(!data)
      return;
      
    this.coordinates= [[]]
    const centroid_location = data.message.centroidLocation
    this.latitude = parseFloat(centroid_location.fieldOrigin.latitudeDeg)
    this.longitude = parseFloat(centroid_location.fieldOrigin.longitudeDeg)
    this.coordinates = [[this.longitude, this.latitude]]
  }

  private getLogs(){
    this.logsQuery = this.gqlQuery.getLogsByVehicleIdDateRange({
      vehicleId:this.vehicleId
      , ...this.timeframe
    }).subscribe((response:any)=>{
      this.isLogLoaded = true
      this.logs = new MatTableDataSource(response)
      this.logsColumns=["node"
        , "level"
        , "description"
        , "timestamp"
      ]
    })
  }

  private getObjectDection(id:number){
    this.objectQuery = this.gqlQuery
      .getObjectDetectionById({id})
      .subscribe((response:any)=>{
        const readingat = response.message.header.readingat
        this.objectDetection = response
         this.timeframe = {
           startDateTime: moment(readingat).subtract(1,"minute").format( environment.timestampFormat).toString()
           , endDateTime: moment(readingat).add(1,"minute").format( environment.timestampFormat).toString()
          }
          
        this.vehicleId = response.vehicleId
        this.setGeolocation(response)
        this.setImage(response)
        this.getLogs()
      })
  }

  ngOnInit(): void { 
    if(this.id && !isNaN(this.id))   
      this.getObjectDection(this.id)
  }

  ngOnDestroy(){
    this.objectQuery?.unsubscribe()
    this.logsQuery?.unsubscribe()
    this.imageQuery?.unsubscribe()
  }


}
