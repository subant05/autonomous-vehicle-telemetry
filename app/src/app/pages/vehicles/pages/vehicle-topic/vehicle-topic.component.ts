import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-vehicle-topic',
  templateUrl: './vehicle-topic.component.html',
  styleUrls: ['./vehicle-topic.component.scss']
})
export class VehicleTopicComponent implements OnInit {
  currentRoute: string =  ""
  vehicleId: string=""

  constructor( private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    console.log("Topic")
    this.currentRoute =  (this.route.url as any).value.join("/")
    this.vehicleId = (this.route.parent as any).snapshot.params.id
  }

}
