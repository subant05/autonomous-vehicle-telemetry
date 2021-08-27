import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ActivatedRoute, Event} from '@angular/router'
import { Subscription } from 'rxjs';
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'
import {VehicleImagesFilterService} from "./filter.service"
import {ScrollService} from 'src/app/services/layout/scroll.service'
import moment from 'moment';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-vehicle-images',
  templateUrl: './vehicle-images.component.html',
  styleUrls: ['./vehicle-images.component.scss']
})
export class VehicleImagesComponent implements OnInit, OnDestroy {
  private topicsSubscription : Subscription | null = null;
  private imageQuery : Subscription | null = null;
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  private infiniteScrollSubscription: Subscription | null = null
  private timeFormat = 'YYYY-MM-DDTHH:mm:ss'

  vehicleId: string=""
  startDateTime:string = "" 
  endDateTime:string  = "" 
  fgImageFilter: FormGroup = new FormGroup({})
  topics: {name:any, id:any}[] =  []
  selectedTopic :string = ""
  pageSize:number = 10
  pageSizeOptions: number[] = [ 10, 20, 40]
  cursor: number = 0;
  images: any[]= []
  imagesLoaded:boolean = false

  constructor(
    private route: ActivatedRoute
    , private gqlQuery: GqlQueryService
    , private filterService:VehicleImagesFilterService
    , private _snackBar: MatSnackBar
    , private scrollService: ScrollService
  ) { 
      this.formatTimestampForInputs()
    }

  private formatTimestampForInputs(){
    const format = 'YYYY-MM-DDTHH:mm:ss'
    this.startDateTime = moment().subtract(1,'hours').format(format)
    this.endDateTime = moment().format(format)
  }

  private noResultsNotification(){
    this._snackBar.open("No results found." , 'Dismiss', {
     duration: 1000,
     horizontalPosition: this.horizontalPosition,
     verticalPosition: this.verticalPosition,
   });
  }

  private setupInfiniteScroll(){
    this.infiniteScrollSubscription = this.scrollService.contentScroll.subscribe((scrolled:any)=>{
      if(scrolled){
        this.cursor = this.images.length
        this.onSubmit(scrolled)
      }
    })
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
        // if(!response.length)
        //   return

        this.topics = response
        this.fgImageFilter =  this.filterService.getFilterState() || new FormGroup({
          startDateTime: new FormControl(this.startDateTime,[Validators.required]),
          endDateTime: new FormControl(this.endDateTime,[Validators.required]),
          topics: new FormControl(this.topics[0].name,[Validators.required]),
          isLive: new FormControl(false,[Validators.required])
        })

        // if(this.filterService.getFilterState())
        this.onSubmit()
        this.setupInfiniteScroll()
      })
  }

  onSubmit(scrolled?:any){
    this.imagesLoaded = false
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
              this.imagesLoaded = true
              if(!response.nodes.length){
                this.noResultsNotification()
                if(!scrolled)
                  this.images = []
                return
              }

              if(scrolled)
                this.images = this.images.concat(response.nodes)
              else 
                this.images = response.nodes
            })
        break;
      default:
        if(!this.filterService.getFilterState()){
          this.imageQuery = this
            .gqlQuery.getLatestImagePreview(variales)
            .subscribe((response:any)=>{
              this.imagesLoaded = true
              if(!response || !response.cameraData.nodes.length){
                this.noResultsNotification()
                if(!scrolled)
                  this.images = []
              }

              const results = response.cameraData.nodes.map((item:any)=>item.msg)

              const startTime = results[results.length-1] ? results[results.length-1].header.readingat : new Date()
              this.fgImageFilter
                .controls.startDateTime
                .patchValue(
                  moment(startTime).subtract(2,'day')
                  .format(this.timeFormat)
                )
              this.fgImageFilter
                .controls.endDateTime
                .patchValue(
                  moment().format(this.timeFormat)
                )

              if(scrolled)
                this.images = this.images.concat(results)
              else 
                this.images = results

            })
        } else
          this.imageQuery = this
            .gqlQuery
            .getImagePreview(variales)
            .subscribe((response:any)=>{
              if(!response || !response.cameraData.nodes.length){
                this.noResultsNotification()
                if(!scrolled)
                  this.images = []
                return
              }

              const results = response.cameraData.nodes.map((item:any)=>item.msg)
              
              if(scrolled)
                this.images = this.images.concat(results)
              else 
                this.images = results
            })
        break;
    }
  }

  ngOnDestroy(){
    this.filterService.saveFilterState(this.fgImageFilter)
    this.imageQuery?.unsubscribe()
    this.topicsSubscription?.unsubscribe()
    this.infiniteScrollSubscription?.unsubscribe()
  }


}
