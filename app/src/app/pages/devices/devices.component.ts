import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { MenuService } from 'src/app/services/navigation/menu.service';

const COMMENTS_SUBSCRIPTION = gql`
subscription deviceMessage {
  deviceMessage{
    timestamp
    topic 
    msg{
      header{
        id
        timestamp
      	seq
        node
      }
      id
      data
    }
    type{
      module
      class
    }
  }
}
`;

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
      query: COMMENTS_SUBSCRIPTION // Subscription gql
    }).subscribe(
      (response:any) => {
        console.log(response.data.deviceMessage)
        this.devices.push(response.data.deviceMessage)
      },
      error => {
        console.log(error);
      })
  }

  ngOnDestroy(){
    this.menuService.menu.next(null)
  }

}
