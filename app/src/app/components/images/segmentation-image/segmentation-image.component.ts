import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { v4 as uuid } from "uuid"
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service'
import { ImageService } from 'src/app/services/images/image.service'

@Component({
  selector: 'app-segmentation-image',
  templateUrl: './segmentation-image.component.html',
  styleUrls: ['./segmentation-image.component.scss']
})
export class SegmentationImageComponent implements OnInit {

  querySubscription: Subscription | null = null
  imageData: string | {} | null = ""
  imageUrl: string | {} | null = ""
  noImage: boolean = false
  imgId: string | null = uuid()
  image:{width:string, height:string} = {width:"0px", height:"0px"}

  @Input() imageHeaderId: number | null | undefined | string;
  @Input() data: string | [] | {image:string, segmentation:string} | undefined;
  @Output("load") load =  new EventEmitter<any>()

  constructor(    
    private gqlQueryService: GqlQueryService
    , private imageService: ImageService) { }

  
  private getSegmentationImage(argsImageHeaderId?:any): void{
    const imageHeaderId = argsImageHeaderId || this.imageHeaderId

    if (!imageHeaderId){
      this.load.emit({state:"unloaded"})
      return;
    }

    this.querySubscription?.unsubscribe()
    this.querySubscription = this.gqlQueryService
    .getSegmentationMapByHeaderId({ imageHeaderId })
    .subscribe((response:any) => {
      if(!response){
        this.load.emit({state:"no segmentation"})
        return
      }

      const {segmentation} = response

      this.imageData = `/api/vehicle/images/${segmentation.id}?segmentation=true`
      this.load.emit({state:"loaded", data: segmentation})
    })
  }

  ngOnInit(): void {
    this.getSegmentationImage()
  }

  ngOnChanges(changes: any) {
    if ((changes.imageHeaderId.previousValue !== changes.imageHeaderId.currentValue) ) {
      this.getSegmentationImage(changes.imageHeaderId.currentValue)
    }
  }


}
