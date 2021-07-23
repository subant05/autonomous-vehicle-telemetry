import { Component, OnInit,ViewChild, AfterViewInit, OnDestroy, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Subscription} from 'rxjs'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'
import {TableUtil} from '../../Table/table-utils'


@Component({
  selector: 'app-vehicles-offline',
  templateUrl: './vehicles-offline.component.html',
  styleUrls: ['./vehicles-offline.component.scss']
})
export class VehiclesOfflineComponent extends TableUtil implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  // Private
  private trackedVehicles: any = []

  // Public
  offlineVehiclesQuery: Subscription | undefined
  offlineVehicleSubscription: Subscription | undefined
  columns: string[] = ['id', 'name', 'ip'];

  @Output() onClick:  EventEmitter<any> = new EventEmitter<any>()
  @Input() update: any = ""

  constructor(
    private gqlQuery: GqlQueryService
  ) {
    super()
   }

  ngOnInit(): void {
    this.offlineVehiclesQuery = this.gqlQuery
    .getOfflineVehicles()
    .subscribe((response:any)=>{
      this.trackedVehicles = response
      this.updateList(this.trackedVehicles)
    })
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes.update.currentValue)
    if(changes.update.currentValue.event)
      switch(changes.update.currentValue.event){
        case "INSERT":
          const offlineIndex = this.trackedVehicles.findIndex((vehicle:any)=>{
            return vehicle.vehicle_id === changes.update.currentValue.vehicle_id
          })
          
          if(offlineIndex !== -1)
            this.trackedVehicles.splice(offlineIndex,1)
          
            this.updateList(this.trackedVehicles)
          break;

        case "DELETE":
          this.trackedVehicles.push(changes.update.currentValue)
          this.updateList(this.trackedVehicles)
          break;
      }
  }

  ngAfterViewInit() {}

  ngOnDestroy(){
    this.offlineVehiclesQuery?.unsubscribe()
  }

}
