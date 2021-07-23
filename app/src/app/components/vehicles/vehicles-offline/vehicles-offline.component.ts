import { Component, OnInit,ViewChild, AfterViewInit, OnDestroy, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Subscription} from 'rxjs'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'


@Component({
  selector: 'app-vehicles-offline',
  templateUrl: './vehicles-offline.component.html',
  styleUrls: ['./vehicles-offline.component.scss']
})
export class VehiclesOfflineComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  // Private
  private trackedVehicles: any = []

  // Public
  offlineVehicleList = new MatTableDataSource([]);
  offlineVehiclesQuery: Subscription | undefined
  offlineVehicleSubscription: Subscription | undefined
  columns: string[] = ['id', 'name', 'ip'];

  @Output() onClick:  EventEmitter<any> = new EventEmitter<any>()
  @Input() update: any = ""

  constructor(
    private gqlQuery: GqlQueryService
  ) { }

  ngOnInit(): void {
    this.offlineVehiclesQuery = this.gqlQuery
    .getOfflineVehicles()
    .subscribe((response:any)=>{
      this.trackedVehicles.offline = response
      this.offlineVehicleList = new MatTableDataSource(this.trackedVehicles.offline)
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
          
          this.offlineVehicleList = new MatTableDataSource(this.trackedVehicles)
          break;

        case "DELETE":
          this.trackedVehicles.push(changes.update.currentValue)
          this.offlineVehicleList = new MatTableDataSource(this.trackedVehicles)
          break;
      }
  }

  ngAfterViewInit() {}

  ngOnDestroy(){
    this.offlineVehiclesQuery?.unsubscribe()
  }


  rowClick(row:any){
    this.onClick.emit(row.id)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.offlineVehicleList.filter = filterValue.trim().toLowerCase();

    if (this.offlineVehicleList.paginator) {
      this.offlineVehicleList.paginator.firstPage();
    }
  }
}
