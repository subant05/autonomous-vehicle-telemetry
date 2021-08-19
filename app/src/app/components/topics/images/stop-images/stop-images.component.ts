import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service';
import { Subscription } from 'rxjs';
import { TableUtil } from 'src/app/components/table/table-utils';
import { subscribe } from 'graphql';
import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-stop-images',
  templateUrl: './stop-images.component.html',
  styleUrls: ['./stop-images.component.scss']
})
export class StopImagesComponent extends TableUtil implements OnInit, OnDestroy {
  objectQuery: Subscription | null = null
  stopImageQuery: Subscription[]  = []
  objectSubscription: Subscription | null = null
  pageSize: number = 1
  page: number = 0
  image: any = null
  isImageLoaded = false
  headerid: string  =""
  label: string = ""
  pagesLength: number =0
  objectDetection:any ={}
  latitude = 0
  longitude = 0
  coordinates: number[][] = [[]]

  @Input() vehicleId: number | string = ""
  @Input() live: boolean = false
  @Input() data: any = null


  constructor(
    private gqlSubscription: GqlSubscriptionService
    , private gqlQuery: GqlQueryService
  ) { 
    super()
  }

  private unsubscribeQueryies(){
    this.objectQuery?.unsubscribe()
    this.stopImageQuery
      .forEach(
        (subscription:any)=>subscription?.unsubscribe()
      )
  }

  private imageHandler(stopInfo:any){
    this.gqlQuery
      .getPreviewImageByCameraMessageHeaderId({headerId:stopInfo.message.header.headerid})
      .subscribe((response:any)=>{
        if(!response){
          setTimeout(()=>this.imageHandler(stopInfo), 2000);
          return
        }

        this.isImageLoaded = true
        this.image = response
        this.label = `${stopInfo.topic.name} | ${new Date(stopInfo.readingat) }`
        this.headerid = stopInfo.message.header.headerid
      })
  }

  private updateObjectDetection(data:any){
    if(!data)
      return;
      
    this.coordinates= [[]]
    this.objectDetection = data
    const centroid_location = data.message.centroidLocation
    this.latitude = parseFloat(centroid_location.fieldOrigin.latitudeDeg)
    this.longitude = parseFloat(centroid_location.fieldOrigin.longitudeDeg)
    this.coordinates = [[this.longitude, this.latitude]]
  }

  private getImage(){
    this.isImageLoaded = false
    this.coordinates= [[]]
    this.unsubscribeQueryies()
    this.objectQuery = this.gqlQuery.getObjectDetectionByVehicleId({
      vehicleId: this.vehicleId
      , cursor: this.page
      , size: this.pageSize
    })
      .subscribe((response:any)=>{
        if(!response.nodes.length)
          this.isImageLoaded = true

        this.updateObjectDetection(response.nodes[0])

        this.pagesLength = response.totalCount
        this.stopImageQuery = response.nodes.map((stopInfo:any)=>this.imageHandler(stopInfo))
      })
  }

  private initiateLiveObjectDetection(){
    if(this.live){
      this.objectSubscription = this.gqlSubscription
        .getObjectDetectionByVehicleId({vehicleId: this.vehicleId})
        .subscribe((response:any)=>{
          this.pagesLength++

          if(this.page)
            this.page++
          else {
            this.updateObjectDetection(response)
          }

          this.imageHandler(response)
        })
      }
  }

  ngOnInit(): void {
    // @ts-ignore
    if(isNaN(this.vehicleId) && !this.data)
      return;
    else if(this.data){
      this.updateObjectDetection(this.data)
      this.imageHandler(this.data)
    }else if(this.vehicleId){
      this.getImage()
      this.initiateLiveObjectDetection()
    }
  }



  getCurrentImage(event:PageEvent){
    if( this.page !== event.pageIndex || event.pageSize !== this.pageSize ){
      this.page = event.pageIndex
      this.image=""
      this.pageSize = event.pageSize
      this.getImage()
      console.log(event)
    }
  }

  ngOnDestroy(): void{
    this.unsubscribeQueryies()
    this.objectSubscription?.unsubscribe()
  }

}
