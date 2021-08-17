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

  ngOnInit(): void {
    this.vehicleId = (this.route.parent as any).snapshot.params.id
    this.previousCoordinatesQuery = this.graphQLQuery
      .getVehiclePreviousLocation({vehicle_id:this.vehicleId})
      .subscribe((response:any)=>{
        if(response)
          this.vehiclesLastCoordinates = [[response.longitude, response.latitude]]
      })

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
            .subscribe((response:any)=>{
              array[index] = response
            })
        })
        this.isImagesLoaded = true
      })

      this.allImageSubscriptions = 
        this.graphQLSubscription
        .getVehiclePreviewImages({vehicleId:this.vehicleId})
        .subscribe((response:any)=>{
          const imageIndex = this.vehicleImages.findIndex((image:any)=>{
            return !image ? false : image.topicId === response.topicId
          }) 

          if(imageIndex === -1){
           console.log("Insert")
            this.vehicleImages.push(response)
            const index = this.vehicleImages.length-1
            
            this.imageSubscriptions.push( 
              this.graphQLSubscription
              .getPreviewImageByVehicleIdTopicId({vehicleId:this.vehicleId, topicId:response.topicId})
              .subscribe((response:any)=>{
                this.vehicleImages[index] = response
              })
            )
          }

        })
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