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

  private trackedVehicles: any ={
    online: [],
    offline:[]
  }
  offlineVehicles = new MatTableDataSource([]);
  onlineVehicles = new MatTableDataSource([]);
  displayedOnlineColumns: string[] = ['alert', 'id', 'name', 'ip'];
  displayedOfflineColumns: string[] = [  'id', 'name', 'ip'];
  vehiclesOnlineSubscription: Subscription | undefined
  vehiclesOfflineQuerySubscription: Subscription | undefined
  liveOnlineVehicleSubscription: Subscription | undefined

  constructor(
    private gqlSubscription: GqlSubscriptionService,
    private gqlQuery: GqlQueryService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.vehiclesOnlineSubscription = this.gqlQuery
      .getOnlineVehicles()
      .subscribe((response:any)=>{
        console.log(response)
        this.trackedVehicles.online = response
        this.onlineVehicles = new MatTableDataSource(this.trackedVehicles.online)
      })
    this.vehiclesOfflineQuerySubscription = this.gqlQuery
    .getOfflineVehicles()
    .subscribe((response:any)=>{
      this.trackedVehicles.offline = response
      this.offlineVehicles = new MatTableDataSource(this.trackedVehicles.offline)
    })
    this.liveOnlineVehicleSubscription = this.gqlSubscription
      .getOnlineVehicles()
      .subscribe(this.onlineVehicleSubscriptionHandler.bind(this))
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(){
    this.vehiclesOnlineSubscription?.unsubscribe()
    this.vehiclesOfflineQuerySubscription?.unsubscribe()
    this.liveOnlineVehicleSubscription?.unsubscribe()
  }

  onRowClick(row:any){
    this.router.navigate([row.id],{relativeTo:this.route})
  }

  onlineVehicleSubscriptionHandler (response:any){
    switch(response.event){
      case "INSERT":
        this.trackedVehicles.online.push(response)
        const offlineIndex = this.trackedVehicles.offline.findIndex((vehicle:any)=>{
          return vehicle.vehicle_id === response.vehicle_id
        })
        
        if(offlineIndex !== -1)
          this.trackedVehicles.offline.splice(offlineIndex,1)
        
        this.onlineVehicles = new MatTableDataSource(this.trackedVehicles.online)
        this.offlineVehicles = new MatTableDataSource(this.trackedVehicles.offline)
        break;

      case "DELETE":
        const onlineIndex = this.trackedVehicles.online.findIndex((vehicle:any)=>{
          return vehicle.id === response.id
        })

        if(onlineIndex !== -1){
          const deletedVehicle = this.trackedVehicles.online.splice(onlineIndex,1)
          this.trackedVehicles.offline.push(deletedVehicle[0])
        }

        this.onlineVehicles = new MatTableDataSource(this.trackedVehicles.online)
        this.offlineVehicles = new MatTableDataSource(this.trackedVehicles.offline)
        break;
    }
  }
}
