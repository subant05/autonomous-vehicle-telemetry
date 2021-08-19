import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ActivatedRoute, Event} from '@angular/router'
import moment from 'moment';

@Component({
  selector: 'app-vehicle-geolocation',
  templateUrl: './vehicle-geolocation.component.html',
  styleUrls: ['./vehicle-geolocation.component.scss']
})
export class VehicleGeolocationComponent implements OnInit {
  vehicleId: string=""
  startDateTime:string = "" 
  endDateTime:string  = "" 
  refresh: boolean = false
  public fgGeolocationFilter: any 

  constructor(
    private route: ActivatedRoute
  ) { 
      this.formatTimestampForInputs()
    }

  private formatTimestampForInputs(){
    const format = 'YYYY-MM-DDTHH:mm:ss'
    this.startDateTime = moment().subtract(1,'hours').format(format)
    this.endDateTime = moment().format(format)
  }

  ngOnInit(): void {
    this.vehicleId = (this.route.parent as any).snapshot.params.id
    this.fgGeolocationFilter = new FormGroup({
      startDateTime: new FormControl(this.startDateTime,[Validators.required])
      , endDateTime: new FormControl(this.endDateTime,[Validators.required])
      , map: new FormControl("static",[Validators.required])
      , isLive: new FormControl(false,[Validators.required])
    })
    console.log(this.fgGeolocationFilter.get('map'))
  }

  refreshMap(){
    this.refresh = !this.refresh
    setTimeout(()=>this.refresh = !this.refresh, 0)
    
  }

  onLiveToggle(event:any){
    const isLive = !event.currentTarget.querySelector("input").checked
    if(isLive){
      this.fgGeolocationFilter.controls.startDateTime.disable()
      this.fgGeolocationFilter.controls.endDateTime.disable()
      this.fgGeolocationFilter.controls.map.disable()
    }
    else {
      this.fgGeolocationFilter.controls.startDateTime.enable()
      this.fgGeolocationFilter.controls.endDateTime.enable()
      this.fgGeolocationFilter.controls.map.enable()
    }
  }

  onSubmit(): void{
   this.startDateTime = this.fgGeolocationFilter.value.startDateTime
   this.endDateTime = this.fgGeolocationFilter.value.endDateTime
   this.refreshMap()
  }
}
