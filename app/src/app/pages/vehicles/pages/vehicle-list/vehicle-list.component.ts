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

  vehicles = new MatTableDataSource([]);
  onlineVehicles = new MatTableDataSource([]);
  displayedColumns: string[] = ['id', 'name', 'type'];
  onlineVehiclesSubscription: Subscription | undefined
  vehiclesQuerySubscription: Subscription | undefined

  constructor(
    private gqlSubscription: GqlSubscriptionService,
    private gqlQuery: GqlQueryService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.onlineVehiclesSubscription = this.gqlSubscription
      .getOnlineVehicles()
      .subscribe((response:any)=>{
        this.onlineVehicles = new MatTableDataSource(response)
      })
    this.vehiclesQuerySubscription = this.gqlQuery
    .getAllVehicles()
    .subscribe((response:any)=>{
      this.vehicles = new MatTableDataSource(response)
    })
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(){
    this.onlineVehiclesSubscription?.unsubscribe()
    this.vehiclesQuerySubscription?.unsubscribe()
  }

  onRowClick(row:any){
    console.log(row)
    this.router.navigate([row.id],{relativeTo:this.route})
  }
}
