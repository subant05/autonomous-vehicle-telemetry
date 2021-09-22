import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-vehicle-share',
  templateUrl: './vehicle-share.component.html',
  styleUrls: ['./vehicle-share.component.scss']
})
export class VehicleShareComponent implements OnInit, OnDestroy {
  id:any;
  type:string=""

  constructor(
    private route: ActivatedRoute
  ) { }



  ngOnInit(): void {    
   this.id = this.route.snapshot.params.id
   this.type = this.route.snapshot.params.type
  }

  ngOnDestroy(){

  }

}
