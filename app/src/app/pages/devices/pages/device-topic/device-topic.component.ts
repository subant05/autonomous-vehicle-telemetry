import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-device-topic',
  templateUrl: './device-topic.component.html',
  styleUrls: ['./device-topic.component.scss']
})
export class DeviceTopicComponent implements OnInit {
  currentRoute: string =  ""

  constructor( private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.currentRoute =  (this.route.url as any).value.join("/")
  }

}
