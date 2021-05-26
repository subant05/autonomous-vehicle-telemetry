import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { MenuService } from 'src/app/services/navigation/menu.service';
const SubscriptionQL  = require( 'src/app/graphql/query-syntax/subscriptions')
const QueryQL = require("src/app/graphql/query-syntax/query")

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit, OnDestroy {
  
  devices:any[] =[]

  constructor(private apollo: Apollo, private menuService: MenuService) {
   
  }

  ngOnInit(): void {
    this.menuService.menu.next([
      {label:"Geolocation", url:"#"},
      {label:"Images", url:"#"}
    ])

    this.apollo.subscribe({
      query: SubscriptionQL.DEVICE_MESSAGE_SUBSCRIPTION // Subscription gql
    }).subscribe(
      (response:any) => {
        console.log(response.data.deviceMessage.msg)
        this.devices.push(response.data.deviceMessage.msg)
      },
      error => {
        console.log(error);
      }
    )

    this.apollo
      .watchQuery<any>({query:QueryQL.Topics})
      .valueChanges
      .subscribe(({ data, loading }) => {
        
        if(!loading)
          this.menuService.menu.next(data.topics.map((topic:any)=>{
            return {
              label:topic.name,
              callback(){
                console.log(topic.name,)
              }
            }
          }))
      });
   }

  ngOnDestroy(){
    this.menuService.menu.next(null)
  }

}
