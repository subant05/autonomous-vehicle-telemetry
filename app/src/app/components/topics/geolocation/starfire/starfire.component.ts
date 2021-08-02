import { Component, Input, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
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
export class StarfireComponent implements OnInit, OnDestroy,AfterViewInit {
  querySubscription: Subscription |null =null
  mapNodeId: string = uuid()

  @Input() playback: string = "static"
  @Input() showTractor: boolean = false
  @Input() zoom: number = 15
  @Input() coordinates: number[][] | undefined;
  @Input() lineColor: string | undefined;
  @Input() lineSize:  number | undefined;
  @Input() vehicleId: string | number | undefined;

  constructor(
    private gqlQueryService: GqlQueryService
    , private gisService: GeolocationService
    , private graphQLSubscription: GqlSubscriptionService) { }

  
  private async setupDynamicMap(config:any){
    return this.gisService.getLiveMap(config)
  }

  private async setupStaticMap(coordinates?:number[][]){
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
      this.querySubscription = this.gqlQueryService
        .getGeolocaton({vehicleId: parseInt(this.vehicleId.toString()) })
        .pipe(map((geoData:any)=>
          !geoData.loading ?
            geoData.data.starfires.nodes.map((geo:any)=>
              geo.msg ?
              [geo.msg.longitude, geo.msg.latitude] 
              :[]
            )
          : 
          []
        ))
        .subscribe((coordinates:any)=>{
          if(coordinates.length)
            this.setupStaticMap(coordinates)
        })
  }

  ngOnInit(): void {  }

  ngAfterViewInit(){
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

  ngOnDestroy(){
    this.querySubscription?.unsubscribe()
  }

}
