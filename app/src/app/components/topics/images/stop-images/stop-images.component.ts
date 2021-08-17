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

  @Input() vehicleId: number | string = ""
  @Input() live: boolean = false


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
        this.isImageLoaded = true
        this.image = response
        this.label = stopInfo.topic.name
        this.headerid = stopInfo.message.header.headerid
        console.log(response)
      })
  }

  private getImage(){
    this.isImageLoaded = false
    this.unsubscribeQueryies()
    this.objectQuery = this.gqlQuery.getObjectDetectionByVehicleId({
      vehicleId: this.vehicleId
      , cursor: this.page
      , size: this.pageSize
    })
      .subscribe((response:any)=>{
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

          this.imageHandler(response)
        })
      }
  }

  ngOnInit(): void {
    // @ts-ignore
    if(isNaN(this.vehicleId))
      return;
    
    this.getImage()
    this.initiateLiveObjectDetection()
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
