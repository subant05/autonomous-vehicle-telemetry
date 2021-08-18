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

  
  private setupLiveImageSubscription(){
    this.allImageSubscriptions = 
    this.graphQLSubscription
    .getVehiclePreviewImages({vehicleId:this.vehicleId})
    .subscribe((response:any)=>{
      const imageIndex = this.vehicleImages.findIndex((image:any)=>{
        return !image ? false : image.topicId === response.topicId
      }) 

      if(imageIndex === -1){
        this.previewImageQuery()
      }
    })
  }

  private previewImageQuery(){
    this.previewImagesSubscription?.unsubscribe()
    this.imageSubscriptions.forEach(subscription=>{
      subscription.unsubscribe()
    })

    this.previewImagesSubscription = this.graphQLQuery
    .getVehiclePreviewImages({id:this.vehicleId})
    .subscribe((response:any)=>{
      this.vehicleImages = response.filter((item:any)=>!!item)
      this.vehicleImages.forEach((image:any, index:number, array:any[])=>{
        if(!image)
          return;

        this.imageSubscriptions[index]  =  
          this.graphQLSubscription
          .getPreviewImageByVehicleIdTopicId({vehicleId:this.vehicleId, topicId:image.topicId})
          .subscribe((response:any): void | null=>{
            if(!response)
              return null;

            array[index] = response
          })
      })
      this.isImagesLoaded = true
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