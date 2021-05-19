import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

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
  
  constructor(apollo: Apollo) {
    apollo.subscribe({
      query: COMMENTS_SUBSCRIPTION // Subscription gql
    }).subscribe(
      (response:any) => {
        console.log(response)
      },
      error => {
        console.log(error);
      }
    );

  }

  ngOnInit(): void {
  }

}
