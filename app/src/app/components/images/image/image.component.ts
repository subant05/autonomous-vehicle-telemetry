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
  

  @Input() id: string = uuid()
  @Input() class: string = ""
  @Input() label: string=""
  @Input() headerId:string | undefined
  @Input() imageId: string | undefined;
  @Input() subject: Subject<{type:string, data:any}> | undefined

  constructor( 
    private imageService: ImageService
    , public dialog: MatDialog) { }

  
  private  subjectHandler(response:{type:string, data:any}){
    switch(response.type){
      case "pagination":
          this.pagination = response.data
        break;
    }
  }

  ngOnInit(): void {
    this.imageUrl = "/api/vehicle/images/" + this.imageId
    if(this.subject){
      this.imageSubscription = this.subject.subscribe((response:any)=>{
        this.subjectHandler(response)
      })
    }
  }

  ngAfterViewInit(){
  }

  ngAfterViewChecked(){
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ImageExpansionComponent, {
       data:{
          headerId:this.headerId,
          label:this.label,
          width:this.width,
          height: this.height,
          imageUrl: this.imageUrl,
          imageId: this.imageId,
          subject: this.subject,
          pagination: this.pagination
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

  ngOnDestroy(){
    this.imageSubscription?.unsubscribe()
  }

}
