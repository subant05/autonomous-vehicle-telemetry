import { Component, OnInit, Input, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { v4 as uuid } from "uuid"
import {ImageService} from 'src/app/services/images/image.service'
import {MatDialog} from '@angular/material/dialog';
import { ImageExpansionComponent } from '../../modals/image-expansion/image-expansion.component';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
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
  

  @Input() id: string = uuid()
  @Input() class: string = ""
  @Input() label: string=""
  @Input() headerId:string | undefined
  @Input() imageId: string | undefined;
  @Input() subject: Subject<{type:string, data:any}> | undefined
  @Input() timestamp: any ="";

  constructor( 
    private imageService: ImageService
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

  ngOnInit(): void {
    this.imageUrl = "/api/vehicle/images/" + this.imageId
    this.imageLoaded=true
    if(this.subject){
      this.imageSubscription = this.subject.subscribe((response:any)=>{
        this.subjectHandler(response)
      })
    }

    // this.imageCache.addEventListener("load",(e)=>this.onLoad(e))
    // this.imageCache.addEventListener("error",(e)=>this.onError(e))
    // this.imageCache.src = "/api/vehicle/images/" + this.imageId
  }

  ngAfterViewInit(){
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
          timestamp: this.timestamp
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
    this.imageUrl = event.target.src
  }

  onError(event:any){
    this.imageLoaded= false
    const imgSrc = event.path[0].src
    event.path[0].src = ""
    // setTimeout(()=>event.path[0].src=imgSrc, 5000)
  }

  ngOnDestroy(){
    this.imageSubscription?.unsubscribe()
  }

}
