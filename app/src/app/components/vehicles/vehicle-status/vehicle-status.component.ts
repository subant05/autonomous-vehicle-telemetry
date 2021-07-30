import { Component, OnDestroy, OnInit, AfterViewInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service';
import {ActivatedRoute} from '@angular/router'
import { TableUtil } from 'src/app/components/Table/table-utils';
import { PageEvent } from '@angular/material/paginator';
import { throwServerError } from '@apollo/client/core';
import {MatDialog} from '@angular/material/dialog';
import {VehicleStatusDetailComponent} from 'src/app/components/vehicles/modal/vehicle-status-detail/vehicle-status-detail.component'

@Component({
  selector: 'app-vehicle-status',
  templateUrl: './vehicle-status.component.html',
  styleUrls: ['./vehicle-status.component.scss']
})
export class VehicleStatusComponent extends TableUtil implements OnInit, OnDestroy, AfterViewInit  {
  private gqlOnlineQuery:Subscription | null = null
  private gqlOnlineSubscription:Subscription | null = null

  statusList:any[] = []
  columns: string[] = ['alerts','status','timestamp'];
  pageSize:number = 5
  pageSizeOptions: number[] = [5]
  pagesLength: number = 0
  isDataLoaded: boolean = false


  @Input() vehicleId: number | string |undefined;
  @Input() cursor: number = 0
  
  constructor(   
    private graphQLSubscription: GqlSubscriptionService
    , private graphQLQuery: GqlQueryService
    , private route: ActivatedRoute
    , public dialog: MatDialog) { 
      super()
    }

  private getStatus(){
    if(this.gqlOnlineQuery)
      this.gqlOnlineQuery.unsubscribe()

    this.gqlOnlineQuery = this.graphQLQuery
        .getVehicleStatus({vehicle_id:this.vehicleId, cursor:this.cursor, size:this.pageSize })
        .subscribe((response:any)=>{
          this.pagesLength = response.totalCount
          this.statusList =response.nodes.map((result:any)=>{
            return {
              ...result
              , status: result.state.name
              , alerts: result.alerts.length ? result.alerts[0] : null
            }
          })
          this.isDataLoaded = true
          this.updateList(this.statusList)
      })
    
    this.gqlOnlineSubscription = this.graphQLSubscription
        .getVehicleStatus({vehicleId:this.vehicleId})
        .subscribe((response:any)=>{
          this.statusList.unshift(response)
          this.statusList.pop()
          this.updateList(this.statusList)
        })
    
  }

  ngOnInit(): void {
    if(!isNaN((this.vehicleId as number))){
      this.getStatus()
    }
  }

  ngOnDestroy() :void{
    this.gqlOnlineQuery?.unsubscribe()
  }

  ngAfterViewInit(): void{}


  onPagination(event:PageEvent){
    if( this.cursor !== event.pageIndex || event.pageSize !== this.pageSize ){
      this.isDataLoaded = false
      this.cursor = event.pageIndex
      this.statusList =[];
      this.pageSize = event.pageSize;
      this.updateList(this.statusList)
      this.getStatus()
    }
  }

  openDialog(row:any): void{
    console.log(row)
    const dialogRef = this.dialog.open(VehicleStatusDetailComponent, {data:row});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
    });
  }

}
