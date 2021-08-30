import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subscription, BehaviorSubject, Subject} from 'rxjs';
import { v4 as uuid } from "uuid"
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-image-expansion',
  templateUrl: './image-expansion.component.html',
  styleUrls: ['./image-expansion.component.scss']
})
export class ImageExpansionComponent implements OnInit, OnDestroy {
  id: string = uuid()
  class:string = ""
  metaDataSubscription: Subscription | null = null
  loadedSegmentations:boolean | null =null
  segmentationTopic:string =""
  segmentationQuery:Subscription | null = null
  segmentationTopic$ = new BehaviorSubject<string | null>(this.segmentationTopic);
  segmentationToggle = {
    color:"primary",
    checked:true,
    disabled: this.loadedSegmentations !== null && !this.loadedSegmentations
  } 
  pageSize=1
  pagesLength=1
  pageSizeOptions=[1]
  meta:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
    , private graphQLQuery: GqlQueryService) { }
  
  private subjectHanlder(response:any){
    switch(response.type){
      case "imageUpdated":
        this.data.imageUrl = "/api/vehicle/images/" + response.data.image
        this.data.imageId = response.data.image
        this.data.label = response.data.label
        this.data.headerId = response.data.headerId
        break;
      case "geolocationUpdated":
        this.data.geolocation = {
          ...response.data
        }
        break;
      case "pagination":
        if(this.data.geolocation && this.data.geolocation.coordinates)
          this.data.geolocation.coordinates = []

        this.data.pagination = response.data
        break;
    }
  }

  ngOnInit(): void {
    if(this.data.subject){
      this.segmentationQuery = this.data.subject.subscribe(this.subjectHanlder.bind(this))
      this.data.subject.next({type:"getPagination", data:null})
      this.data.subject.next({type:"getGeolocation", data:null})
    }
    this.metaDataSubscription = this.graphQLQuery.getImageMeta({imageId: this.data.imageId})
    .subscribe((response:any)=>{
      if(response)
        this.meta = response
    })
  }

  ngOnDestroy() :void{
    this.segmentationQuery?.unsubscribe()
    this.metaDataSubscription?.unsubscribe()
  }

  toggleSegmentation(event:MatSlideToggleChange){
    this.segmentationToggle.checked = event.checked
  }

  loadSegmentation(){
    return typeof this.loadedSegmentations === 'boolean'
  }
  onSegmentationLoad(event:any) {
    switch(event.state){
      case "loaded":
          this.loadedSegmentations = true
          this.segmentationToggle.checked = true
          break;
      case "no segmentation":
      case "unloaded":
      default:
          this.loadedSegmentations = false
          this.segmentationToggle.checked = false
          break;
    }
  }
  onPaginate(event:any){
    console.log(event)
    if( this.data.page !== event.pageIndex || event.pageSize !== this.data.pageSize ){
      this.data.page = event.pageIndex
      this.data.imageUrl=""
      this.data.pageSize = event.pageSize
      if(this.data.subject)
       this.data.subject.next({type:"updateImage", data:{
         page: this.data.page
         , pageSize: this.data.pageSize
       }})
      console.log(event)
    }
  }

}
