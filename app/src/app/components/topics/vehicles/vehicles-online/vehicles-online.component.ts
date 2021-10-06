import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { Subscription } from 'rxjs'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GqlSubscriptionService } from 'src/app/services/graphql/gql-subscription.service'
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service'
import {TableUtil} from 'src/app/components/table/table-utils'


@Component({
  selector: 'app-vehicles-online',
  templateUrl: './vehicles-online.component.html',
  styleUrls: ['./vehicles-online.component.scss']
})
export class VehiclesOnlineComponent extends TableUtil implements OnInit, AfterViewInit, OnDestroy {

  // Private
  private trackedVehicles: any = []

  // Public
  onlineVehiclesQuery: Subscription | undefined
  onlineVehicleSubscription: Subscription | undefined
  columns: string[] = ['alert', 'id', 'name', 'ip'];

  // Events
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>()
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private gqlSubscription: GqlSubscriptionService,
    private gqlQuery: GqlQueryService,
  ) { 
    super()
  }

  ngOnInit(): void {
    // Query Vehicles Currently Online
    this.onlineVehiclesQuery = this.gqlQuery
      .getOnlineVehicles()
      .subscribe((response: any) => {
        this.trackedVehicles = response
        this.updateList(this.trackedVehicles)
      })
    // Subscribe to Live onUpdates to Online Vehicles
    this.onlineVehicleSubscription = this.gqlSubscription
      .getOnlineVehicles()
      .subscribe(this.onlineVehicleSubscriptionHandler.bind(this))
  }


  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.onlineVehiclesQuery?.unsubscribe()
    this.onlineVehicleSubscription?.unsubscribe()
  }

  onlineVehicleSubscriptionHandler(response: any) {
    switch (response.event) {
      case "INSERT":
        this.trackedVehicles.push(response)
        this.trackedVehicles.sort((a:any, b:any)=>
          a.alerts.alertType.severity - b.alerts.alertType.severity
        )
        this.updateList(this.trackedVehicles)
        this.onUpdate.emit(response)
        break;
      
      case "UPDATE":
        const foundIndex = this.trackedVehicles.findIndex((vehicle:any)=>vehicle.vehicle_id === response.vehicle_id)
        if(foundIndex !== -1 
          && JSON.stringify(this.trackedVehicles[foundIndex]) !== JSON.stringify(response)){
          this.trackedVehicles[foundIndex] = response
          this.updateList(this.trackedVehicles)
        }

        break;

      case "DELETE":
        const onlineIndex = this.trackedVehicles.findIndex((vehicle: any) => {
          return vehicle.id === response.id
        })

        if (onlineIndex !== -1) {
          const deletedVehicle = this.trackedVehicles.splice(onlineIndex, 1)
          deletedVehicle[0].event = response.event
          this.onUpdate.emit({ ...deletedVehicle[0] })
        }

        this.updateList(this.trackedVehicles)
        break;
    }
  }

  renderAlertsColumn(row:any){
    if(!row.alertName)
      return 'information'

    switch(row.alertName){
      case 1:
        return 'priority_high'
        break;
      case 2:
        return row.alertName
        break;
      default:
          return 'information'
    }
  }

}
