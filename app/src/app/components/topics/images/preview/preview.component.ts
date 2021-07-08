import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { v4 as uuid } from "uuid"
import { Subscription, BehaviorSubject} from 'rxjs';
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'
import {ImageService} from 'src/app/services/images/image.service'
import {PageEvent} from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnDestroy {

  loadedSegmentations:boolean | null =null
  querySubscription: Subscription | null =null
  imageUrl: string = ""
  imageData: any[] = []
  imageId: string = uuid()
  imageHeaderId: string | undefined
  segmentationTopic:string =""
  noImage:boolean = false
  pageSize:number = 1
  pageSizeOptions: number[] = [1, 5, 10]
  pagesLength: number = 0
  segmentationTopic$ = new BehaviorSubject<string | null>(this.segmentationTopic);
  segmentationToggle = {
    color:"primary",
    checked:false,
    disabled: this.loadedSegmentations !== null && !this.loadedSegmentations
  } 
  @Input() topic: string = "";
  @Input() cursor: number = 0;
  @Input() vehicleId: string |undefined;
  @Input() topicId: number | null = null

  
  constructor(
    private imageService:ImageService
    , private gqlQueryService: GqlQueryService
  ) { }

  ngOnInit(): void {
    this.getImage()
  }

  ngOnDestroy(): void{
    this.querySubscription?.unsubscribe()
  }

  private getImage(argCursor?:number): void{
    const cursor =  argCursor && argCursor >=0 ? argCursor : this.cursor
    
    if(!this.topic || !this.vehicleId)
      return

      this.querySubscription = this
        .gqlQueryService
        .getImagePreview({
          vehicleId: this.vehicleId
          , topicName: this.topic
          , cursor: this.cursor
          , size: this.pageSize
        })
        .subscribe(response=>{
          this.noImage = true
          this.pagesLength = response.totalCount
          this.imageData = response.images
        })
  }

  toggleSegmentation(event:MatSlideToggleChange){
    console.log(event)
    this.segmentationToggle.checked = event.checked
  }

  getCurrentImage(event:PageEvent) {
    if( this.cursor !== event.pageIndex || event.pageSize !== this.pageSize ){
      this.cursor = event.pageIndex
      this.imageData =[];
      this.noImage =false;
      this.pageSize = event.pageSize
      this.loadedSegmentations = null;
      this.getImage()
      console.log(event)
    }
  }

  loadSegmentation(){
    return typeof this.loadedSegmentations === 'boolean'
  }
  onSegmentationLoad(event:any) {
    switch(event){
      case "loaded":
          this.loadedSegmentations = true
          break;
      case "no segmentation":
      case "unloaded":
          this.loadedSegmentations = false
          break;
    }
  }
}
