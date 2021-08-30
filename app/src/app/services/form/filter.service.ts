import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private fgLoggingFilters : any = {}
  constructor() {
   }

   saveFilterState(key:any, filterGroup:FormGroup){
    this.fgLoggingFilters[key] = filterGroup
   }

   getFilterState(key:any){
     return  this.fgLoggingFilters[key]
   }
}
