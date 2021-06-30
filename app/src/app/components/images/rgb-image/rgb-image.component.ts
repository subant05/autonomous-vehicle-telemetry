import { Component, OnInit, Input } from '@angular/core';
import { v4 as uuid } from "uuid"
import {ImageService} from 'src/app/services/images/image.service'

@Component({
  selector: 'app-rgb-image',
  templateUrl: './rgb-image.component.html',
  styleUrls: ['./rgb-image.component.scss']
})
export class RgbImageComponent implements OnInit {
  private regexArray =  /^(\[)(.*)(\])$/

  imageUrl: string = ""
  @Input() id: string = uuid()
  @Input() class: string = ""
  @Input() data: string | [] | {} | undefined;

  constructor( private imageService: ImageService) { }

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

      this.imageUrl = this.imageService.getDataURL(parsedData)
    }catch(e){
      console.log(e.message)
    }
  }

}
