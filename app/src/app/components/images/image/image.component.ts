import { Component, OnInit, Input, AfterViewInit, AfterViewChecked } from '@angular/core';
import { v4 as uuid } from "uuid"
import {ImageService} from 'src/app/services/images/image.service'
import {MatDialog} from '@angular/material/dialog';
import { ImageExpansionComponent } from '../../modals/image-expansion/image-expansion.component';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, AfterViewInit, AfterViewChecked {
  imageUrl: string = ""
  width: string=""
  height: string=""
  resultId: string = uuid()
  lensId: string = uuid()
  zoomAdded: boolean = false;
  segmentationLoaded = false
  isSegmentationImage = false
  segmentationData=null

  @Input() id: string = uuid()
  @Input() class: string = ""
  @Input() label: string=""
  @Input() headerId:string=""
  @Input() data: string | [] | {} | undefined;

  constructor( 
    private imageService: ImageService
    , public dialog: MatDialog) { }

  ngOnInit(): void {
    let parsedData;

    try{
      switch(typeof this.data){
        case "string":
           parsedData =  {...JSON.parse(this.data)}
          break;
        case "object":
          parsedData = {...this.data};
          break;
        default:
            parsedData = {}
            break;
      }
      this.width = (parsedData as any).width +"px"
      this.height = (parsedData as any).height+"px"
      this.imageUrl = this.imageService.getDataURL(parsedData)
    }catch(e){
      console.log(e.message)
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


}
