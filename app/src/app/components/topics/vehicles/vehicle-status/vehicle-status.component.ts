import { Component, OnDestroy, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service';
import {ActivatedRoute, Router} from '@angular/router'
import { TableUtil } from 'src/app/components/table/table-utils';
import { PageEvent } from '@angular/material/paginator';
import { throwServerError } from '@apollo/client/core';
import {MatDialog} from '@angular/material/dialog';
import {VehicleStatusDetailComponent} from 'src/app/components/modals/vehicle-status-detail/vehicle-status-detail.component'
import { BreakingChange } from 'graphql';

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
  isInitDataLoaded: boolean = false
  downloadButtonDisabled: boolean = false


  @Input() vehicleId: number | string |undefined;
  @Input() cursor: number = 0
  @Input() startDateTime: string | undefined
  @Input() endDateTime: string | undefined

  @ViewChild('statusContainer') statusContainer: HTMLElement | undefined
  
  constructor(   
    private graphQLSubscription: GqlSubscriptionService
    , private graphQLQuery: GqlQueryService
    , private route: ActivatedRoute
    , public dialog: MatDialog) { 
      super()
    }

  private sortStatus(val:any){
​   const list = [val, ...this.statusList]
   const marker = Math.ceil(list.length/2) < 20 ?  Math.ceil(list.length/2) : 20
   const sortedPortion =  list.slice(0,marker).sort((a:any,b:any) :any=> {
     const aTime = new Date(a.readingat).valueOf()
     const bTime = new Date(b.readingat).valueOf()

     if(aTime > bTime)
      return -1;
     else if(aTime < bTime)
      return 1
     else 
      return 0
   })
    this.statusList = [...sortedPortion , ...list.slice(marker, list.length)]
  }

  private getStatus(){
    if(this.gqlOnlineQuery)
      this.gqlOnlineQuery.unsubscribe()

    this.gqlOnlineQuery = this.graphQLQuery
        [ this.startDateTime && this.endDateTime ? "getVehicleStatusByDateRange" :"getVehicleStatus"]({
          vehicle_id:this.vehicleId
          , cursor:this.cursor
          , size:this.pageSize
          , startDateTime:this.startDateTime
          , endDateTime:this.endDateTime })
        .subscribe((response:any)=>{
          this.isInitDataLoaded =true
          const results =  response.nodes.map((result:any)=>{
            return {
              ...result
              , status: result.state.name
              , alerts: result.alerts.length ? result.alerts[0] : null
            }
          })
          this.pagesLength = response.totalCount
          this.statusList = this.statusList.concat(results)
          this.isDataLoaded = true
          this.cursor = !this.cursor ? this.pageSize-1 : this.cursor+5
          this.updateList(this.statusList)

          if(!results.length)
            this.downloadButtonDisabled = !results.length
          // @ts-ignore
          this.statusContainer?.nativeElement.scrollTop = this.statusContainer.nativeElement.scrollHeight
      })
    
    if(!this.startDateTime && !this.endDateTime )
      this.gqlOnlineSubscription = this.graphQLSubscription
          .getVehicleStatus({vehicleId:this.vehicleId})
          .subscribe((response:any):void | null=>{
            if(!response || !this.isInitDataLoaded)
              return;

            this.sortStatus(response)
            // this.statusList.unshift(response)
            this.cursor++
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
    this.gqlOnlineSubscription?.unsubscribe()
  }

  ngAfterViewInit(): void{
  }


  onScroll(){
      this.isDataLoaded = false
      this.cursor = this.statusList.length
      this.getStatus()
    
  }

  openDialog(row:any): void{
    const dialogRef = this.dialog.open(VehicleStatusDetailComponent, {data:row});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
    });
  }

  renderAlertsColumn(row:any){
    if(!row.alerts)
      return 'information'

    switch(row.alerts.alertType.severity){
      case 1:
        return 'priority_high'
        break;
      case 2:
        return row.alerts.alertType.name
        break;
      default:
          return 'information'
    }
  }

}
