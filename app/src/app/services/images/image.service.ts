import { Injectable } from '@angular/core';
import { Image } from 'image-js';
import {GetDataUrl} from 'src/app/interfaces/images/args'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  private reMapData(config:GetDataUrl){
    const {width=0, height=0, step=1, is_bigendian=0, data=[], bitDepth=8} = config
    const parsedData =[]
    let i = 0, j, y = 0, x;

    while (y < height) {
        j = y * step;
        for (x = 0; x < width; x ++) {               
            if (!is_bigendian) {
              parsedData[i] = data[j];     // red
              parsedData[i + 1] = data[j + 1]; // green
              parsedData[i + 2] = data[j + 2]; // blue
            } else {
              parsedData[i + 2] = data[j];     // blue
              parsedData[i + 1] = data[j + 1]; // green
              parsedData[i] = data[j + 2]; // red
            }

            parsedData[i + 3] = 255;  // alpha
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
        bitDepth:8,
      }
    )
  }

  getDataURL(config:GetDataUrl): string{
    return this.reMapData(config).toDataURL()
  }

}
