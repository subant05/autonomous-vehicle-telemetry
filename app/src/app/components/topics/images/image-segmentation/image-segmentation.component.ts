import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { v4 as uuid } from "uuid"
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service'
import { ImageService } from 'src/app/services/images/image.service'

@Component({
  selector: 'app-image-segmentation',
  templateUrl: './image-segmentation.component.html',
  styleUrls: ['./image-segmentation.component.scss']
})
export class ImageSegmentationComponent implements OnInit, OnDestroy, OnChanges {

  querySubscription: Subscription | null = null
  imageUrl: string | null = ""
  noImage: boolean = false
  imgId: string | null = uuid()


  @Input() topic: string | null | undefined = "";
  @Input() cursor: number = 0;
  @Input() imageId: number | null | undefined;
  @Output("load") load =  new EventEmitter<string>()

  constructor(
    private gqlQueryService: GqlQueryService
    , private imageService: ImageService
  ) { }

  private getSegmentationImage(argTopic?: string | null | undefined, argImageId?: number | undefined): void{
    const topic:string | null | undefined = argTopic || this.topic
    const imageId:number | null | undefined = argImageId || this.imageId

    if (!imageId || !topic){
      this.load.emit("unloaded")
      return;
    }

    this.querySubscription?.unsubscribe()
    this.querySubscription = this.gqlQueryService
    .getSegmentationMap({ topic, cursor: this.cursor, id: imageId })
    .subscribe(response => {
      if (!response.data.segmentationMap || !response.data.segmentationMap.length) {
        this.noImage = true
        this.load.emit("no segmentation")
        return;
      }

      const segmentationMap = response.data.segmentationMap[0]

      this.imageUrl = this.imageService.getDataURL({...segmentationMap.msg.image, isSegmentation:true})
      this.load.emit("loaded")
    })
  }

  ngOnInit(): void {
    this.getSegmentationImage()
  }

  ngOnChanges(changes: any) {
    if ((changes.topic.previousValue !== changes.topic.currentValue) 
    || (changes.imageId.previousValue !== changes.imageId.currentValue)) {
      this.getSegmentationImage(changes.topic.currentValue, changes.imageId.currentValue)
    }
  }


  ngOnDestroy() {
    this.querySubscription?.unsubscribe()
  }

}
