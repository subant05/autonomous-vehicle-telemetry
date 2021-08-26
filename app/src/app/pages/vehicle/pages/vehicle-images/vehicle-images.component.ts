import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ActivatedRoute, Event} from '@angular/router'
import { Subscription } from 'rxjs';
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'
import moment from 'moment';

@Component({
  selector: 'app-vehicle-images',
  templateUrl: './vehicle-images.component.html',
  styleUrls: ['./vehicle-images.component.scss']
})
export class VehicleImagesComponent implements OnInit, OnDestroy {
  private topicsSubscription : Subscription | null = null;
  private imageQuery : Subscription | null = null;
  vehicleId: string=""
  startDateTime:string = "" 
  endDateTime:string  = "" 
  fgImageFilter: FormGroup = new FormGroup({})
  topics: {name:any, id:any}[] =  []
  selectedTopic :string = ""
  pageSize:number = 1
  pageSizeOptions: number[] = [1, 4, 8, 12, 16]
  pagesLength: number = 0
  cursor: number = 0;
  images: any[]= []
  
  constructor(
    private route: ActivatedRoute
    , private gqlQuery: GqlQueryService
  ) { 
      this.formatTimestampForInputs()
    }

  private formatTimestampForInputs(){
    const format = 'YYYY-MM-DDTHH:mm:ss'
    this.startDateTime = moment().subtract(1,'hours').format(format)
    this.endDateTime = moment().format(format)
  }

  ngOnInit(): void {
    this.vehicleId = (this.route.parent as any).snapshot.params.id

    this.topicsSubscription = this.gqlQuery
      .getTopicsByCategoryVehicleId({
        vehicleId:this.vehicleId
        , topicName:"%/left/preview"
        , category:"images"
      })
      .subscribe((response:any)=>{
        this.topics = response
        this.fgImageFilter = new FormGroup({
          startDateTime: new FormControl(this.startDateTime,[Validators.required]),
          endDateTime: new FormControl(this.endDateTime,[Validators.required]),
          topics: new FormControl(null,[Validators.required]),
          isLive: new FormControl(false,[Validators.required])
        })
      })
  }

  onTopicChange(){
  }
  onLiveToggle(event:any){

  }
  onSubmit(){
    if(!this.fgImageFilter.valid)
      return;
      
    this.imageQuery = this
    .gqlQuery
    .getImagePreview({
      vehicleId: this.vehicleId
      , topicName: this.fgImageFilter.controls.topics.value
      , startDateTime: this.fgImageFilter.controls.startDateTime.value
      , endDateTime: this.fgImageFilter.controls.endDateTime.value
      , cursor: this.cursor
      , size: this.pageSize
    })
    .subscribe((response:any)=>{
      this.pagesLength = response.totalCount
      if(!response || !response.cameraData.nodes.length)
        return

      this.images = response.cameraData.nodes.map((item:any)=>item.msg)
    })

  }

  getPage(event:any){
    console.log(event)
    this.cursor =   event.pageIndex
    this.pageSize = event.pageSize
    this.onSubmit()
  }

  ngOnDestroy(){
    this.imageQuery?.unsubscribe()
    this.topicsSubscription?.unsubscribe()
  }

}
