import { Component, Input, OnDestroy, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import {v4 as uuid} from 'uuid'
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
import {GeolocationService} from 'src/app/services/geolocation/geolocation.service'

@Component({
  selector: 'app-starfire',
  templateUrl: './starfire.component.html',
  styleUrls: ['./starfire.component.scss']
})
export class StarfireComponent implements OnInit, OnDestroy,AfterViewInit, OnChanges {
  querySubscription: Subscription |null =null
  mapNodeId: string = uuid()
  hasCoordinates:boolean = false
  isLoading:boolean = true

  @Input() startDateTime:string = "" 
  @Input() endDateTime:string  = "" 
  @Input() playback: string = "static"
  @Input() showTractor: boolean = false
  @Input() zoom: number = 15
  @Input() coordinates: number[][] | undefined;
  @Input() lineColor: string | undefined;
  @Input() lineSize:  number | undefined;
  @Input() vehicleId: string | number | undefined;
  @Input() lastPosition: boolean = false;

  constructor(
    private gqlQueryService: GqlQueryService
    , private gisService: GeolocationService
    , private graphQLSubscription: GqlSubscriptionService) { }

  private formatTimestamps(datetime?:any) : any{
    if(datetime)
      return new Date(datetime).toISOString()

    this.startDateTime = this.startDateTime ? new Date(this.startDateTime).toISOString(): new Date(new Date().valueOf() - (1000*60*60)).toISOString();
    this.endDateTime = this.endDateTime ? new Date(this.endDateTime).toISOString(): new Date().toISOString()
  }

  private async setupDynamicMap(config:any){
    return this.gisService.getLiveMap(config)
  }

  private async setupStaticMap(coordinates?:number[][]){
    this.hasCoordinates = true
    this.isLoading = false
    this.gisService[this.playback ==="static" ? "getStaticMap" : "getReplayMap"]({
      container:this.mapNodeId
      , coordinates: coordinates || this.coordinates || []
      , showTractor:this.showTractor
      , zoom:this.zoom
      , lineColor:this.lineColor
      , lineSize:this.lineSize 
    })
  }

  private async generateLiveMap(){
    const config = {
      container:this.mapNodeId
      , showTractor:this.showTractor
      , coordinates: this.coordinates || []
      , zoom:this.zoom
    }

    this.setupDynamicMap(config).then((mapConfig:any)=>{
      const {map, geoJson, image} = mapConfig
      const variables = this.vehicleId ? {vehicleId:parseInt((this.vehicleId as string))} :{}
      this.querySubscription = this.graphQLSubscription
        .getGeolocationStream(variables)
        .subscribe(
        (response:any) => {
          this.hasCoordinates = true
          this.isLoading = false
          const {longitude,latitude} = response.data.sqlStarfire ? response.data.sqlStarfire.starfire.msg : (response.data.geographicCoordinates as {longitude:number, latitude:number})
          const newCoordinates = [longitude,latitude]

          // @ts-ignore
          geoJson.data.features[0].geometry.coordinates.push(newCoordinates)
          map.getSource('trace').setData(geoJson.data);

          if (this.showTractor){
            const imagePosition = this.gisService.getFeaturesGEOJSON({
              type: 'geojson'
              , dataType: 'FeatureCollection'
              , geometryType: 'Feature'
              , coordinateType: "LineString"
              , coordinates: [newCoordinates]
            })
            map.getSource(image).setData(imagePosition.data);
          }

          map.panTo(newCoordinates);
          
        },
        error => {
          console.log(error);
        }
      )
      
    })
  }

  private async generateStaticMap(){
    if(this.coordinates instanceof Array )
      this.setupStaticMap()
    else
     if(this.vehicleId)
      this.querySubscription = this.gqlQueryService[
        this.lastPosition || (this.coordinates 
          && (this.coordinates as any).length) ?
           "getGeolocaton" 
           : "getVehicleLocationByDateTimestamp"
      ]({
          vehicleId: parseInt(this.vehicleId.toString()) 
          , startDateTime: this.startDateTime
          , endDateTime: this.endDateTime
        })
        .pipe(map((geoData:any)=>
            geoData.map((geo:any)=>
              geo.msg ?
              [geo.msg.longitude, geo.msg.latitude] 
              :[]
            )
        ))
        .subscribe((coordinates:any)=>{
          if(coordinates.length)
            this.setupStaticMap(coordinates)
          else 
            this.isLoading = false
        })
  }

  private queryGeoLocation(){
    switch(this.playback){
      case "static":
      case "replay":
        this.generateStaticMap()
        break;
      case "live":
        this.generateLiveMap()    
        break;
      default:
        break;
    }
  }
  
  private updateGeolocationOnDateTimeChange(event:any ){
    if("startDateTime" in event || "endDateTime" in event){
      if(event.startDateTime)
        this.startDateTime = this.formatTimestamps(event.startDateTime.currentValue)
      if(event.endDateTime)
        this.endDateTime = this.formatTimestamps(event.endDateTime.currentValue)

      this.queryGeoLocation()
    }
  }

  ngOnInit(): void { 
    this.formatTimestamps()
   }

  ngAfterViewInit(){
    this.queryGeoLocation()
  }

  ngOnDestroy(){
    this.querySubscription?.unsubscribe()
  }

  ngOnChanges(event:any): void{
    this.updateGeolocationOnDateTimeChange(event)
  }

}
