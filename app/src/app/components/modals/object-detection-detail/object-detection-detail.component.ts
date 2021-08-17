import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service';

@Component({
  selector: 'app-object-detection-detail',
  templateUrl: './object-detection-detail.component.html',
  styleUrls: ['./object-detection-detail.component.scss']
})
export class ObjectDetectionDetailComponent implements OnInit, OnDestroy {

  imageSubscription: Subscription | null = null
  image: any = null
  isImageLoaded:boolean = false

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: number,
    @Inject(MAT_DIALOG_DATA) public data: any
    , private graphQLQuery: GqlQueryService) { }
    
  ngOnInit(): void {
    this.imageSubscription = this.graphQLQuery.getPreviewImageByCameraMessageHeaderId({headerId: parseInt(this.data.message.header.headerid)})
      .subscribe((response:any)=>{
        this.isImageLoaded = true
        this.image = response
      })
  }

  ngOnDestroy(): void {
    this.imageSubscription?.unsubscribe()
  }

}
