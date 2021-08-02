import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { Subscription, BehaviorSubject} from 'rxjs';
import { v4 as uuid } from "uuid"
import {ThemePalette} from '@angular/material/core';
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'
import {ImageService} from 'src/app/services/images/image.service'
import {PageEvent} from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-image-pair',
  templateUrl: './image-pair.component.html',
  styleUrls: ['./image-pair.component.scss']
})
export class ImagePairComponent implements OnInit, OnDestroy, OnChanges {

  loadedSegmentations:string[] = []
  querySubscription: Subscription | null =null
  leftImageUrl:string = ""
  leftImageId:string = uuid()
  imageHeaderId:number | undefined = undefined
  rightImageUrl:string = ""
  rightImageId:string = uuid()
  segmentationTopic:string=""
  noImage: boolean = false
  pageSize = 1
  pagesLength= 0
  // leftImageUrl$ = new BehaviorSubject<string | null>(this.leftImageUrl);
  // rightImageUrl$ = new BehaviorSubject<string | null>(this.rightImageUrl);
  segmentationTopic$ = new BehaviorSubject<string | null>(this.segmentationTopic);
  // imageHeaderId$ = new BehaviorSubject<number | undefined>(this.imageHeaderId);
  segmentationToggle = {
    color:"primary",
    checked:false,
    disabled: this.loadedSegmentations.length < 2 || this.loadedSegmentations.indexOf("no segmentation") !== -1
  } 

  @Input()   topic: string = "";
  @Input()   cursor: number = 0;

  constructor( 
    private gqlQueryService: GqlQueryService
    , private imageService : ImageService
    ) { }

  private getImagePair(argTopic?:string, argCursor?:number): void{
    const topic = argTopic || this.topic
    const cursor =  argCursor && argCursor >=0 ? argCursor : this.cursor
    // this.leftImageUrl$.next("")
    // this.rightImageUrl$.next("")


    if(!topic)
      return

    this.querySubscription = this.gqlQueryService
    .getImagePair({topic, cursor})
    .subscribe(response=>{
      this.noImage = true

      if(!response.data.imagePair || !response.data.imagePair.length){
        return;
      }

      this.noImage = false

      const imagePair = response.data.imagePair[0]
      this.pageSize = imagePair.pagination.pageSize
      this.pagesLength = imagePair.pagination.length
      this.cursor = imagePair.pagination.position
      this.imageHeaderId = imagePair.msg.header.id
      this.leftImageUrl = this.imageService.getDataURL(imagePair.msg.left_image)
      this.rightImageUrl = this.imageService.getDataURL(imagePair.msg.right_image)
      // this.imageHeaderId$.next(this.imageHeaderId)
      // this.leftImageUrl$.next(this.leftImageUrl)
      // this.rightImageUrl$.next(this.rightImageUrl)
      this.segmentationTopic$.next(this.topic.split("/").slice(0,2).concat(["segmentation_map"]).join("/"))
    })

  }

  toggleSegmentation(event:MatSlideToggleChange){
    console.log(event)
    this.segmentationToggle.checked = event.checked
  }

  getCurrentImage(event:PageEvent) {
    if( this.cursor !== event.pageIndex ){
      this.cursor = event.pageIndex
      this.getImagePair()
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

  ngOnInit(): void {
   this.getImagePair()
  }

  ngOnChanges(changes:any){
    // if (changes.topic.previousValue !== changes.topic.currentValue) {
    //   this.getImagePair(changes.topic.currentValue)
    // }
  }

  ngOnDestroy(): void{
    this.querySubscription?.unsubscribe()
  }
  

}
