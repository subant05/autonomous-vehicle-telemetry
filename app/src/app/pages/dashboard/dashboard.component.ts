import { Component, OnInit } from '@angular/core';
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor( private gqlSubsctiption: GqlSubscriptionService) { }

  ngOnInit(): void {
    this.gqlSubsctiption.getDeviceStream().subscribe((response:any)=>{
      // if(response.data.deviceMessage.topic && response.data.deviceMessage.topic.includes("_map"))
        console.log(JSON.stringify(response.data, null, " "))
    })
  }

  ngAfterViewInit(){}

}
