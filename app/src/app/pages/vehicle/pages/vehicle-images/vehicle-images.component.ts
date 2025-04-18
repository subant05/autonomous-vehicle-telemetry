import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ActivatedRoute, Event} from '@angular/router'
import { Subscription } from 'rxjs';
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'
import {FilterService} from 'src/app/services/form/filter.service'
import {ScrollService} from 'src/app/services/layout/scroll.service'
import moment from 'moment';
import { environment } from 'src/environments/environment';
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
  topicsLoaded:boolean = false

  constructor(
    private route: ActivatedRoute
    , private gqlQuery: GqlQueryService
    , private filterService:FilterService
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
        if(!response.length){
          this.imagesLoaded = true
        }


        this.topics = response
        this.fgImageFilter =  this.filterService.getFilterState(`images-${this.vehicleId}`) || new FormGroup({
          startDateTime: new FormControl(this.startDateTime,[Validators.required]),
          endDateTime: new FormControl(this.endDateTime,[Validators.required]),
          topics: new FormControl(this.topics.length ? this.topics[0].name : null,[Validators.required]),
          isLive: new FormControl(false,[Validators.required])
        })

        if(this.topics.length)
          this.onSubmit()

        this.setupInfiniteScroll()
        this.topicsLoaded = true
      })
  }

  onSubmit(scrolled?:any){
    if(!this.fgImageFilter.valid )
      return;

    if(!scrolled)
      this.images = []

    this.imagesLoaded = false
    const variables = {
      vehicleId: this.vehicleId
      , topicName: this.fgImageFilter.controls.topics.value
      , startDateTime: moment(this.fgImageFilter.controls.startDateTime.value).utc()
      , endDateTime: moment(this.fgImageFilter.controls.endDateTime.value).utc()
      , cursor: this.cursor
      , size: this.pageSize
    }
      
    switch(this.fgImageFilter.controls.topics.value){
      case "/toUI/closest_on_path_object":
          this.imageQuery = this
            .gqlQuery.getObjectDetectionImages(variables)
            .subscribe((response:any)=>{
              if(!response.nodes.length){
                this.noResultsNotification()
                // if(!scrolled)
                //   this.images = []
                return
              }

              // if(scrolled)
                this.images = this.images.concat(response.nodes)
              // else 
              //   this.images = response.nodes
              
              this.imagesLoaded = true
            })
        break;
      default:
        if(!this.filterService.getFilterState(`images-${this.vehicleId}`)){
          this.imageQuery = this
            .gqlQuery.getLatestImagePreview(variables)
            .subscribe((response:any)=>{
              if(!response || !response.cameraData.nodes.length){
                this.noResultsNotification()
                // if(!scrolled)
                //   this.images = []
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

              this.filterService.saveFilterState(`images-${this.vehicleId}`,this.fgImageFilter)

              // if(scrolled)
                this.images = this.images.concat(results)
              // else 
              //   this.images = results

              this.imagesLoaded = true
            })
        } else
          this.imageQuery = this
            .gqlQuery
            .getImagePreview(variables)
            .subscribe((response:any)=>{
              if(!response || !response.cameraData.nodes.length){
                this.noResultsNotification()
                // if(!scrolled)
                //   this.images = []
                this.imagesLoaded = true
                return
              }

              const results = response.cameraData.nodes.map((item:any)=>item.msg)
              
              // if(scrolled)
                this.images = this.images.concat(results)
              // else 
              //   this.images = results
              
              this.imagesLoaded = true
            })
        break;
    }
  }

  ngOnDestroy(){
    this.filterService.saveFilterState(`images-${this.vehicleId}`,this.fgImageFilter)
    this.imageQuery?.unsubscribe()
    this.topicsSubscription?.unsubscribe()
    this.infiniteScrollSubscription?.unsubscribe()
  }


}
