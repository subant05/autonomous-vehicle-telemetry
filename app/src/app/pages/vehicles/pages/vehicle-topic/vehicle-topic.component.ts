import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {CurrentVehicleTopic } from '../vehicle/services/current-topic.service'

@Component({
  selector: 'app-vehicle-topic',
  templateUrl: './vehicle-topic.component.html',
  styleUrls: ['./vehicle-topic.component.scss']
})
export class VehicleTopicComponent implements OnInit {
  currentRoute: string =  ""
  vehicleId: string=""
  topicId: number | null = null
  topicName: string = ""

  constructor( 
    private route: ActivatedRoute
    , private currentTopicService: CurrentVehicleTopic) { 
    this.topicName = this.currentTopicService.topicInfo.name
    this.topicId = this.currentTopicService.topicInfo.id
  }

  ngOnInit(): void {
    this.currentRoute =  (this.route.url as any).value.join("/")
    this.vehicleId = (this.route.parent as any).snapshot.params.id
  }

}
