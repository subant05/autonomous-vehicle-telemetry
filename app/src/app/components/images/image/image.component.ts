import { Component, OnInit, Input, AfterViewInit, AfterViewChecked, OnDestroy, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from "uuid"
import {ImageService} from 'src/app/services/images/image.service'
import {MatDialog} from '@angular/material/dialog';
import { ImageExpansionComponent } from '../../modals/image-expansion/image-expansion.component';
import { Subject, Subscription } from 'rxjs';
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  private imageByHeaderIdSubscription :Subscription |undefined
  private metaDataSubscription:Subscription |undefined
  imageUrl: string = ""
  width: string=""
  height: string=""
  resultId: string = uuid()
  lensId: string = uuid()
  zoomAdded: boolean = false;
  segmentationLoaded = false
  isSegmentationImage = false
  segmentationData=null
  imageSubscription: Subscription | undefined
  pagination: {
    pagesLength: number
    , page: number
    , pageSize: number
  } | undefined;
  geolocation:any;
  imageLoaded= false
  imageCache = new Image()
  isImageRendered: boolean = false
  meta: any;
  

  @Input() id: string = uuid()
  @Input() class: string = ""
  @Input() label: string=""
  @Input() headerId:string | undefined
  @Input() imageId: string | undefined;
  @Input() subject: Subject<{type:string, data:any}> | undefined
  @Input() timestamp: any ="";
  @Output() load = new EventEmitter<string|number>()
  @Output() error = new EventEmitter<string|number>()



  constructor( 
    private imageService: ImageService
    , private graphQLQuery: GqlQueryService
    , public dialog: MatDialog) { }

  
  private  subjectHandler(response:{type:string, data:any}){
    switch(response.type){
      case "pagination":
          this.pagination = response.data
        break;
      case "geolocationUpdated":
          if(this.geolocation && this.geolocation.coordinates)
            this.geolocation.coordinates = []
            
          this.geolocation = {
            ...response.data
          }
          break;
    }
  }

  private setImageSubscription(){
    if(this.subject){
      this.imageSubscription = this.subject.subscribe((response:any)=>{
        this.subjectHandler(response)
      })
    }
  }

  private getImageMeta(){
    if(this.imageId && !this.meta)
      this.metaDataSubscription = this.graphQLQuery
        .getImageMeta({imageId: this.imageId})
        .subscribe((response:any)=>{
          if(response)
            this.meta = response
        })
  }

  private setImage(id?:any){
    this.imageId = id
    this.imageUrl = id ? "/api/vehicle/images/" + id : ""
    this.imageLoaded=true
    this.setImageSubscription()
  }

  ngOnInit(): void {
    if(this.imageId){
      this.setImage(this.imageId)
    } else if(this.headerId){
      this.imageByHeaderIdSubscription = this.graphQLQuery.getVehiclePreviewImageByHeaderId({
        headerId: this.headerId
        , size:1
        , cursor:0
        , encoding:"rgb8"
      }).subscribe((response:any)=>{
        if(!response.length){
          this.setImage()
          return
        }
        this.setImage(response[0].id)
      })
    }

    // this.imageCache.addEventListener("load",(e)=>this.onLoad(e))
    // this.imageCache.addEventListener("error",(e)=>this.onError(e))
    // this.imageCache.src = "/api/vehicle/images/" + this.imageId
  }

  ngAfterViewInit(){
    this.getImageMeta()
  }

  ngAfterViewChecked(){
  }

  openDialog(): void{
    if(!this.imageLoaded)
      return
    const dialogRef = this.dialog.open(ImageExpansionComponent, {
       data:{
          headerId:this.headerId,
          label:this.label,
          width:this.width,
          height: this.height,
          imageUrl: this.imageUrl,
          imageId: this.imageId,
          subject: this.subject,
          pagination: this.pagination,
          geolocation: this.geolocation,
          timestamp: this.timestamp,
          meta: this.meta
          // segmentation:{
          //   image:this.data
          //   , segmentation: this.segmentationData
          // }
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
    });
  }

  onSegmentationLoad(event:any){
    this.segmentationLoaded = true

    switch(event.state){
      case "no segmentation":
        this.isSegmentationImage = false
        break;
      case "loaded":
        this.isSegmentationImage = true
        // this.segmentationData = event.data
        break;
    }
  }

  onLoad(event:any){
    this.imageLoaded =  true
    this.isImageRendered  = true
    this.imageUrl = event.target.src
    this.load.emit(this.imageId)
  }

  onError(event:any){
    this.imageLoaded= false
    this.isImageRendered  = true
    const imgSrc = event.path[0].src
    event.path[0].src = ""
    this.error.emit(this.imageId)
    // setTimeout(()=>event.path[0].src=imgSrc, 5000)
  }

  onMouseover(event:any){
  }

  ngOnDestroy(){
    this.imageSubscription?.unsubscribe()
    this.imageByHeaderIdSubscription?.unsubscribe()
    this.metaDataSubscription?.unsubscribe()
  }

}
