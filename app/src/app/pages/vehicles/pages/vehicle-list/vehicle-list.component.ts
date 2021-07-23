import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs'
import {ActivatedRoute, Router} from '@angular/router'
import { MatTableDataSource } from '@angular/material/table';

import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit, AfterViewInit, OnDestroy {

  updates: any ={}

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  ngOnDestroy(){
  }

  onRowClick(id:number){
    this.router.navigate([id],{relativeTo:this.route})
  }

  onLiveUpdate(event:any){
      this.updates = event;
  }
}
