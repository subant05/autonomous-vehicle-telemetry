import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subscription, BehaviorSubject} from 'rxjs';
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
  loadedSegmentations:boolean | null =null
  segmentationTopic:string =""
  segmentationQuery:Subscription | null = null
  segmentationTopic$ = new BehaviorSubject<string | null>(this.segmentationTopic);
  segmentationToggle = {
    color:"primary",
    checked:false,
    disabled: this.loadedSegmentations !== null && !this.loadedSegmentations
  } 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
    , private graphQLQuery: GqlQueryService) { 
    }

  ngOnInit(): void {
  }

  ngOnDestroy() :void{
  }

  toggleSegmentation(event:MatSlideToggleChange){
    this.segmentationToggle.checked = event.checked
  }

  loadSegmentation(){
    return typeof this.loadedSegmentations === 'boolean'
  }
  onSegmentationLoad(event:any) {
    switch(event){
      case "loaded":
          this.loadedSegmentations = true
          this.segmentationToggle.checked = true
          break;
      case "no segmentation":
      case "unloaded":
          this.loadedSegmentations = false
          break;
    }
  }
}
