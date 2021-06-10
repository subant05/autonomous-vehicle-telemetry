import { Injectable } from '@angular/core';
import { Image } from 'image-js';
import {GetDataUrl} from 'src/app/interfaces/images/args'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

   
  constructor() { }

  private generateSegmentationColor( data:number[], index:number, step:number, value:number[], reverse?:boolean | number ){
    const code = value[step]

    switch(code){
      // ‘Drivable’: (0, 0, 0), # Black
      case 0: 
        if(!reverse){
          data[index] =  0;     // red
          data[index + 1] = 0; // green
          data[index + 2] =  0; // blue
        } else {
          data[index + 2] =  0; // blue
          data[index + 1] = 0; // green
          data[index] =  0;     // red
        }
        break;
      // ‘Obstacle’: (1.0, 0, 0), # Red
      case 1:
        if(!reverse){
          data[index] =  255;     // red
          data[index + 1] = 0; // green
          data[index + 2] =  0; // blue
        } else {
          data[index + 2] =  0; // blue
          data[index + 1] = 0; // green
          data[index] =  255;     // red
        }
        break;
      // ‘Sky’: (0, 0, 1.0), # Blue
      case 2:
        if(!reverse){
          data[index] =  0;     // red
          data[index + 1] = 0; // green
          data[index + 2] =  255; // blue
        } else {
          data[index + 2] =  255; // blue
          data[index + 1] = 0; // green
          data[index] =  0;     // red
        }
        break; 
      // ‘Trees’: (0, 1.0, 0), # Green
      case 3:
        if(!reverse){
          data[index] =  0;     // red
          data[index + 1] = 255; // green
          data[index + 2] =  0; // blue
        } else {
          data[index + 2] =  0; // blue
          data[index + 1] = 255; // green
          data[index] =  0;     // red
        }
        break;
      // ‘Implement’: (1.0, 1.0, 0.0), # Yellow 
      case 4:
        if(!reverse){
          data[index] =  255;     // red
          data[index + 1] = 255; // green
          data[index + 2] =  0; // blue
        } else {
          data[index + 2] =  0; // blue
          data[index + 1] = 255; // green
          data[index] =  255;     // red
        }
        break;
      // ‘Human’: (0.0, 1.0, 1.0), # Teal
      case 5:
        if(!reverse){
          data[index] =  0;     // red
          data[index + 1] = 255; // green
          data[index + 2] =  255; // blue
        } else {
          data[index + 2] =  255; // blue
          data[index + 1] = 255; // green
          data[index] =  0;     // red
        }
        break;      
      }

    data[index + 3] =  !code ? 0 : 125;  // alpha

  }

  private generateRgbColor(data:number[], index:number, step:number, value:number[], reverse?:boolean | number){
    if(!reverse){
      data[index] =  value[step];     // red
      data[index + 1] = value[step + 1]; // green
      data[index + 2] =  value[step + 2]; // blue
    } else {
      data[index + 2] =  value[step]; // blue
      data[index + 1] = value[step + 1]; // green
      data[index] =  value[step +2];     // red
    }
    data[index + 3] = 255;  // alpha
  }

  private reMapData(config:GetDataUrl){
    const {width=0, height=0, step=1, is_bigendian=0, data=[], bitDepth=8, isSegmentation=false} = config
    const parsedData:number[] =[]
    let i = 0, j, y = 0, x;

    while (y < height) {
        j = y * step;
        for (x = 0; x < width; x++) {   
            
          if(isSegmentation)
            this.generateSegmentationColor(parsedData, i, j, data, is_bigendian)
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
        bitDepth: 8,
      }
    )
  }

  getDataURL(config:GetDataUrl): string{
    return this.reMapData(config).toDataURL()
  }

}
