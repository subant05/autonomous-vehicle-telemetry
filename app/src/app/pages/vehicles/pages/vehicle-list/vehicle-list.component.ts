import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs'

import {ActivatedRoute, Router} from '@angular/router'
import { MatTableDataSource } from '@angular/material/table';
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit, AfterViewInit, OnDestroy {

  vehicles = new MatTableDataSource([]);
  displayedColumns: string[] = ['id', 'name', 'type'];
  onlineVehiclesSubscription: Subscription | undefined

  constructor(
    private gqlSubscription: GqlSubscriptionService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.onlineVehiclesSubscription = this.gqlSubscription
      .getOnlineVehicles()
      .subscribe((response:any)=>{
        this.vehicles = new MatTableDataSource(response)
      })
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(){
    this.onlineVehiclesSubscription?.unsubscribe()
  }

  onRowClick(row:any){
    console.log(row)
    this.router.navigate([row.id],{relativeTo:this.route})
  }
}
