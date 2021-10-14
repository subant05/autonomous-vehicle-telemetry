import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {GeolocationService} from 'src/app/services/geolocation/geolocation.service'
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service';
import {ActivatedRoute} from '@angular/router'
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';

@Component({
  selector: 'app-vehicle-overview',
  templateUrl: './vehicle-overview.component.html',
  styleUrls: ['./vehicle-overview.component.scss']
})
export class VehicleOverviewComponent implements OnInit, OnDestroy, AfterViewInit {
  geoUpdateSubscription:Subscription | null = null
  onlineStatusQuery:Subscription | null = null
  onlineStatusSubscription:Subscription | null = null
  previousCoordinatesQuery:Subscription | null = null
  previewImagesSubscription:Subscription | null = null
  imageSubscriptions:Subscription[]  = []
  allImageSubscriptions:Subscription  | null = null
  vehiclesLastCoordinates:number[][] = []
  vehicleImages:any[] =[]
  isImagesLoaded:boolean = false
  vehicleId: string=""
  isVehicleOnline: boolean = false;

  
  constructor(
    private gisService: GeolocationService
    , private graphQLSubscription: GqlSubscriptionService
    , private graphQLQuery: GqlQueryService
    , private route: ActivatedRoute
    ) { }

  
  private findImageByTopicId(value:any){
    return this.vehicleImages.findIndex((item:any)=>{
      return !item ? false : item.topic.id === value
    }) 
  }

  private findImageByImageId(value:any){
    return this.vehicleImages.findIndex((item:any)=>{
      return !item || !item.image ? false : item.image.id === value
    }) 
  }

  private setupLiveImageSubscription(){
    this.allImageSubscriptions = 
    this.graphQLSubscription
    .getVehiclePreviewImages({vehicleId:this.vehicleId})
    .subscribe((response:any)=>{
      if(response.vehicleId !== this.vehicleId)
        return;

      
      const imageIndex = this.findImageByTopicId(response.topicId)

      if(imageIndex !== -1 && (!("done" in this.vehicleImages[imageIndex]) || this.vehicleImages[imageIndex].done)){
        this.vehicleImages[imageIndex] = {
          topic:{
             name: response.topic
             , id: response.topicId
          }
          , header: response.header
          , image: response.image
         }
      }

    })
  }

  private setupOnlineSubscription(){
    this.onlineStatusQuery = this.graphQLQuery
    .getVehicleOnlineStatus({id:this.vehicleId})
    .subscribe((response:any)=>{
        this.isVehicleOnline = response.online ? true : false
    })

    this.onlineStatusSubscription = this.graphQLSubscription
    .getVehicleOnlineStatus({id:this.vehicleId})
    .subscribe((response:any)=>{
      if(response)
        this.isVehicleOnline = response.online
    })
  }

  private setupVehicleGeolocationSubscription(){
    this.previousCoordinatesQuery = this.graphQLQuery
    .getVehiclePreviousLocation({vehicle_id:this.vehicleId})
    .subscribe((response:any)=>{
      if(response)
        this.vehiclesLastCoordinates = [[response.longitude, response.latitude]]
    })
  }

  previewImageQuery(){
    this.previewImagesSubscription = this.graphQLQuery
    .getPreviewImagesByTopicNameVehicleId({
      vehicleId:this.vehicleId
      , topicNames:["/side_right/left/preview"
      , "/side_left/left/preview"
      , "/front_right/left/preview"
      , "/front_left/left/preview"
      , "/front_center/left/preview"
      , "/rear/left/preview"]
    }).subscribe((response:any)=>{
      this.isImagesLoaded = true

      if(response)
        this.vehicleImages = response
    })
  }

  onImageLoaded(imageId:number|string){
    const imageIndex = this.findImageByImageId(imageId)
    if(this.vehicleImages[imageIndex])
      this.vehicleImages[imageIndex].done = true
  }

  ngOnInit(): void {
    this.vehicleId = (this.route.parent as any).snapshot.params.id
    this.setupVehicleGeolocationSubscription()
    this.setupOnlineSubscription()
    this.previewImageQuery()
    this.setupLiveImageSubscription()
  }

  ngOnDestroy() :void{
    this.onlineStatusSubscription?.unsubscribe()
    this.onlineStatusQuery?.unsubscribe()
    this.previousCoordinatesQuery?.unsubscribe()
    this.previewImagesSubscription?.unsubscribe()
    this.allImageSubscriptions?.unsubscribe()
    this.imageSubscriptions.forEach(subscription=>{
      subscription.unsubscribe()
    })
  }

  ngAfterViewInit() :void{

  }
}