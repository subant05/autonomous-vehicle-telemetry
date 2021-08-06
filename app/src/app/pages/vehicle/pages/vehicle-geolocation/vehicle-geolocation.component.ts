import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'

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
    const regex = /(:)([0-9]+)(\.[0-9Z]+)/
    this.startDateTime = new Date(new Date().valueOf() - (1000*60*60)).toISOString().replace(regex, "");
    this.endDateTime = new Date().toISOString().replace(regex, "")
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

  onSubmit(): void{
   this.startDateTime = this.fgGeolocationFilter.value.startDateTime
   this.endDateTime = this.fgGeolocationFilter.value.endDateTime
   this.refreshMap()
  }
}
