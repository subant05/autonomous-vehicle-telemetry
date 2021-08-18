import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class VehicleLoggingFilterService {

  private fgLoggingFilter: FormGroup | null = null 

  constructor() {
   }

   saveFilterState(filterGroup:FormGroup){
    this.fgLoggingFilter = filterGroup
   }

   getFilterState(){
     return this.fgLoggingFilter 
   }
}
