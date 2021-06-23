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
  }

  ngAfterViewInit(){}

}
