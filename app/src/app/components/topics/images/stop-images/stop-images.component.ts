import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service';
import { Subscription, Subject } from 'rxjs';
import { TableUtil } from 'src/app/components/table/table-utils';
import { subscribe } from 'graphql';
import {PageEvent} from '@angular/material/paginator';
import {ActivatedRoute, Router} from '@angular/router'
import { AlertService } from 'src/app/services/notifications/alert.service';

@Component({
  selector: 'app-stop-images',
  templateUrl: './stop-images.component.html',
  styleUrls: ['./stop-images.component.scss']
})
export class StopImagesComponent extends TableUtil implements OnInit, OnDestroy {
  objectQuery: Subscription | null = null
  objectDetectionSubject =  new Subject<{type:string, data:any}>()
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
  paginationInit = false
  currentHeaderId: any;


  @Input() vehicleId: number | string = ""
  @Input() live: boolean = false
  @Input() data: any = null


  constructor(
    private gqlSubscription: GqlSubscriptionService
    , private gqlQuery: GqlQueryService
    , private route: ActivatedRoute
    , private alertService: AlertService
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

  private notifyPaginationChange(){
    if(this.pagesLength)
      this.objectDetectionSubject
        .next({type:"pagination", data:{
          pagesLength: this.pagesLength
          , page: this.page
          , pageSize: this.pageSize
        }})
  }

  private notifyImageChange(){
    this.objectDetectionSubject.next({type:"imageUpdated", data:{
      image: this.image
      , label: this.label
      , headerId : this.headerid
    }})
  }

  private notifyGeolocationChange(){
    this.objectDetectionSubject.next({type:"geolocationUpdated", data:{
      latitude: this.latitude
      , longitude: this.longitude
      , coordinates: this.coordinates
      , vehicleId: this.vehicleId
    }})
  }

  private recursiveImageHandler(stopInfo:any,currentHeaderId:any){
    const header = currentHeaderId ? currentHeaderId : this.currentHeaderId
    if(this.page === 0 && header === this.currentHeaderId){
      this.isImageLoaded = false
      setTimeout(()=>this.imageHandler(stopInfo, true, header), 1000)
    } 
  }

  private imageHandler(stopInfo:any, isLiveUpdate=false, currentHeaderId?:any){
    let counter = 0

    this.gqlQuery
      .getPreviewImageByCameraMessageIdCameraName({
          headerId:stopInfo.message.header.headerid
          , cameraName: stopInfo.message.cameraName
        })
      .subscribe((response:any)=>{
        if(!response){
          if(isLiveUpdate){
            this.recursiveImageHandler(stopInfo,currentHeaderId)
          }else{
            this.isImageLoaded = true
          }
          return;
        }
          
        this.image = response.id
        this.label = `${stopInfo.topic.name} | ${new Date(stopInfo.readingat).toLocaleString() }`
        this.headerid = stopInfo.message.header.headerid
        this.notifyPaginationChange()
        this.notifyImageChange()
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
    this.notifyGeolocationChange()
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
        if(!response || !response.nodes.length){
          this.isImageLoaded = true
          return
        }
        this.currentHeaderId = response.nodes[0].message.header.headerid
        this.updateObjectDetection(response.nodes[0])

        this.pagesLength = response.totalCount
        this.stopImageQuery = response.nodes.map((stopInfo:any)=>this.imageHandler(stopInfo))
        this.notifyPaginationChange()
      })
  }

  private initiateLiveObjectDetection(){
    if(this.live){
      this.objectSubscription = this.gqlSubscription
        .getObjectDetectionByVehicleId({vehicleId: this.vehicleId})
        .subscribe((response:any)=>{
          if(!response)
            return;
            
          this.pagesLength++

          if(this.page){
            this.page++
            this.notifyPaginationChange()
          } else {
            this.image = ""
            this.isImageLoaded = false
            this.currentHeaderId = response.message.header.headerid
            this.updateObjectDetection(response)
            this.imageHandler(response, true)
          }
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

    this.objectDetectionSubject.subscribe((response:any)=>{
      switch(response.type){
        case "updateImage":
          this.getCurrentImage({pageIndex: response.data.page, pageSize: response.data.pageSize})
          break;
        case "getPagination":
          this.notifyPaginationChange()
          break;
        case "getGeolocation":
          this.notifyGeolocationChange()
          break;
      }
    })
  }

  async onShare(){
    // const temp = await navigator.clipboard.writeText(Math.random().toString())
    navigator.clipboard.writeText(`${location.origin}/vehicles/${this.vehicleId}/share/autonomy-state/${this.objectDetection.id}`).then( ()=> {
      console.log("Yep", this.objectDetection)
      this.alertService.displayNotification("Copied!")
    },  (err) => {
      console.log("Nope")
      this.alertService.displayNotification("Copy Failed!")
    })
  }


  getCurrentImage(event:PageEvent | any){
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
