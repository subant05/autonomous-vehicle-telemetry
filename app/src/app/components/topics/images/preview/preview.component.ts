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

  loadedSegmentations:string[] = []
  querySubscription: Subscription | null =null
  imageUrl: string = ""
  imageData: any
  imageId: string = uuid()
  imageHeaderId: string | undefined
  segmentationTopic:string =""
  noImage:boolean = false
  pageSize:number = 1
  pagesLength: number = 0
  segmentationTopic$ = new BehaviorSubject<string | null>(this.segmentationTopic);
  segmentationToggle = {
    color:"primary",
    checked:false,
    disabled: this.loadedSegmentations.length < 2 || this.loadedSegmentations.indexOf("no segmentation") !== -1
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
        })
        .subscribe(response=>{
          this.noImage = true
          const cameraData = response.data.topics.nodes[0].cameras
          this.pagesLength = cameraData.totalCount
          const imageData = {...cameraData.nodes[0].msg.image, data : JSON.parse(cameraData.nodes[0].msg.image.data.data)}
          this.imageUrl =  this.imageService.getDataURL(imageData)
          this.imageHeaderId = cameraData.nodes[0].msg.header.headerId
          this.imageData = {...cameraData.nodes[0].msg.image, data : JSON.parse(cameraData.nodes[0].msg.image.data.data)}
        })
  }

  toggleSegmentation(event:MatSlideToggleChange){
    console.log(event)
    this.segmentationToggle.checked = event.checked
  }

  getCurrentImage(event:PageEvent) {
    if( this.cursor !== event.pageIndex ){
      this.cursor = event.pageIndex
      this.imageData =null;
      this.noImage =false;
      this.getImage()
      console.log(event)
    }
  }

  onSegmentationLoad(event:any) {
    switch(event){
      case "no segmentation":
      case "loaded":
          this.loadedSegmentations.push(event)
          break;
      case "unloaded":
          this.loadedSegmentations.pop()
          break;
    }
  }
}
