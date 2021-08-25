import { Injectable } from '@angular/core';
import { Image } from 'image-js';
import {GetDataUrl} from 'src/app/interfaces/images/args'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

   
  constructor() { }


  private mapRGBChannels(data: number[], index:number, red:number, green:number, blue:number, reverse?:boolean | number){
    if(!reverse){
      data[index] =  red;     // red
      data[index + 1] = green; // green
      data[index + 2] =  blue; // blue
    } else {
      data[index + 2] =  blue; // blue
      data[index + 1] = green; // green
      data[index] =  red;     // red
    }
  }

  private generateSegmentationColor( data:number[], index:number, step:number, value:number[], reverse?:boolean | number ){
    const code = value[step]
    debugger
    switch(code){
      // ‘Drivable’: (0, 0, 0), # Black
      case 0: 
        this.mapRGBChannels(data,index, 0, 0, 0, reverse)
        break;
      // ‘Obstacle’: (1.0, 0, 0), # Red
      case 1:
        this.mapRGBChannels(data,index, 255, 0, 0, reverse)
        break;
      // ‘Sky’: (0, 0, 1.0), # Blue
      case 2:
        this.mapRGBChannels(data,index, 0, 0, 255, reverse)
        break; 
      // ‘Trees’: (0, 1.0, 0), # Green
      case 3:
        this.mapRGBChannels(data,index, 0, 255, 0, reverse)
        break;
      // ‘Implement’: (1.0, 1.0, 0.0), # Yellow 
      case 4:
        this.mapRGBChannels(data,index, 255, 255, 0, reverse)
        break;
      // ‘Human’: (0.0, 1.0, 1.0), # Teal
      case 5:
        this.mapRGBChannels(data,index, 0, 255, 255, reverse)
        break;      
      }

    data[index + 3] =  !code ? 0 : 125;  // alpha
  }

  private generateRgbColor(data:number[], index:number, step:number, value:number[], reverse:boolean | number){
    this.mapRGBChannels(data,index, value[step], value[step + 1], value[step + 2], reverse)
    data[index + 3] = 255;  // alpha
  }

  private reMapData(config:GetDataUrl){
    const {width=0, height=0, step=1, is_bigendian=0, data=[], bitDepth=8, isSegmentation=false} = config
    const parsedData:number[] =[]
    let i = 0, j, y = 0, x;

    while (y < height) {
        j = y * step;
        for (x = 0; x < width; x++) {   
            
          if(isSegmentation){
            debugger;
            this.generateSegmentationColor(parsedData, i, j, data, is_bigendian)
          }
          else
            this.generateRgbColor(parsedData, i, j, data, is_bigendian)
            i += 4;
            j += 3;
        }
        
        y++;
    }

    return new Image(
      width,
      height,
      parsedData,
      {
        bitDepth,
      }
    )
  }

  getDataURL(config:GetDataUrl): string{
    return this.reMapData(config).toDataURL()
  }

}
