import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-device-topic',
  templateUrl: './device-topic.component.html',
  styleUrls: ['./device-topic.component.scss']
})
export class DeviceTopicComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.params.subscribe(data=>{
      console.log(data)
    })
  }

  ngOnInit(): void {
    console.log((this.route.url as any).value.join("/"))
  }

  ngOnDestroy(){
    console.log("Destroyed")
  }

}
