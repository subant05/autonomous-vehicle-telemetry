import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';

const COMMENTS_SUBSCRIPTION = gql`
subscription deviceMessage {
  deviceMessage{
    timestamp
    topic
    type
    msg
    
  }
}`;

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  
  devices:any[] =[]

  constructor(private apollo: Apollo) {
   
  }

  ngOnInit(): void {
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

}
