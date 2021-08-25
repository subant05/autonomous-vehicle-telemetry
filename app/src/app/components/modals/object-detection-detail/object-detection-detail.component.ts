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
  coordinates: number[][]= []
  vehicleId: number | null = null
  json:any = {}

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: number,
    @Inject(MAT_DIALOG_DATA) public data: any
    , private graphQLQuery: GqlQueryService) { 
      const fieldOrigin = data.message.centroidLocation.fieldOrigin
      const xyzCamera = data.message.centroidLocation.xyzCamera
      this.json  = {fieldOrigin, xyzCamera}
      this.vehicleId = data.vehicleId
      this.coordinates = [
          [
            parseFloat(fieldOrigin.longitudeDeg)
            , parseFloat(fieldOrigin.latitudeDeg)

          ]
        ]

    }
    
  ngOnInit(): void {
    this.imageSubscription = this.graphQLQuery.getPreviewImageByCameraMessageHeaderId({headerId: parseInt(this.data.message.header.headerid)})
      .subscribe((response:any)=>{
        this.isImageLoaded = true
        if(!response)
          return;
          
        this.image = response
      })
  }

  ngOnDestroy(): void {
    this.imageSubscription?.unsubscribe()
  }

}
