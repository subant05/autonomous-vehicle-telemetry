import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ActivatedRoute, Event} from '@angular/router'
import { Subscription } from 'rxjs';
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'
import {VehicleImagesFilterService} from "./filter.service"
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
  pageSizeOptions: number[] = [1, 10, 20]
  pagesLength: number = 0
  cursor: number = 0;
  images: any[]= []
  
  constructor(
    private route: ActivatedRoute
    , private gqlQuery: GqlQueryService
    , private filterService:VehicleImagesFilterService
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
        , topicList:["/toUI/closest_on_path_object"]
        , category:"images"
      })
      .subscribe((response:any)=>{
        this.topics = response
        this.fgImageFilter =  this.filterService.getFilterState() || new FormGroup({
          startDateTime: new FormControl(this.startDateTime,[Validators.required]),
          endDateTime: new FormControl(this.endDateTime,[Validators.required]),
          topics: new FormControl(null,[Validators.required]),
          isLive: new FormControl(false,[Validators.required])
        })

        if(this.filterService.getFilterState())
          this.onSubmit()
      })
  }

  onTopicChange(){
  }
  onLiveToggle(event:any){

  }
  onSubmit(){
    if(!this.fgImageFilter.valid)
      return;
      
    const variales = {
      vehicleId: this.vehicleId
      , topicName: this.fgImageFilter.controls.topics.value
      , startDateTime: this.fgImageFilter.controls.startDateTime.value
      , endDateTime: this.fgImageFilter.controls.endDateTime.value
      , cursor: this.cursor
      , size: this.pageSize
    }
      
    switch(this.fgImageFilter.controls.topics.value){
      case "/toUI/closest_on_path_object":
          this.imageQuery = this
            .gqlQuery.getObjectDetectionImages(variales)
            .subscribe((response:any)=>{
              this.pagesLength = response.totalCount
              this.images = response.nodes
            })
        break;
      default:
          this.imageQuery = this
            .gqlQuery
            .getImagePreview(variales)
            .subscribe((response:any)=>{
              this.pagesLength = response.totalCount
              if(!response || !response.cameraData.nodes.length)
                return

              this.images = response.cameraData.nodes.map((item:any)=>item.msg)
            })
        break;
    }
  }

  getPage(event:any){
    console.log(event)
    this.cursor =   event.pageIndex
    this.pageSize = event.pageSize
    this.onSubmit()
  }

  ngOnDestroy(){
    this.filterService.saveFilterState(this.fgImageFilter)
    this.imageQuery?.unsubscribe()
    this.topicsSubscription?.unsubscribe()
  }


}
