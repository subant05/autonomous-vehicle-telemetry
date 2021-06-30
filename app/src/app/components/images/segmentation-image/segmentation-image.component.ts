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

  @Input() imageHeaderId: number | null | undefined | string;
  @Output("load") load =  new EventEmitter<string>()

  constructor(    
    private gqlQueryService: GqlQueryService
    , private imageService: ImageService) { }

  
  private getSegmentationImage(argsImageHeaderId?:any): void{

    const imageHeaderId = argsImageHeaderId || this.imageHeaderId

    if (!imageHeaderId){
      this.load.emit("unloaded")
      return;
    }

    this.querySubscription?.unsubscribe()
    this.querySubscription = this.gqlQueryService
    .getSegmentationMapByHeaderId({ imageHeaderId })
    .subscribe(response => {
      const image = response.find((msg:any)=>msg.encoding === "rgb8")
      const segmentation = response.find((msg:any)=>msg.encoding === "mono8")

      if(!response.length || !segmentation){
        this.load.emit("no segmentation")
        return
      }

      this.imageData = this.imageService.getDataURL({...segmentation, isSegmentation:true});
      this.imageUrl = this.imageService.getDataURL({...image});

      this.load.emit("loaded")
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
