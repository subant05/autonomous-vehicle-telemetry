import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  contentScroll :Subject<boolean | null> = new Subject<boolean |  null>();

  constructor() { 

  }
}
