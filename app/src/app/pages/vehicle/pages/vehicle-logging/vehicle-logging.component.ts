import { Component, OnDestroy, OnInit, AfterViewInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ActivatedRoute, Event} from '@angular/router'
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service';
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
import { TableUtil } from 'src/app/components/table/table-utils';
import {MatDialog} from '@angular/material/dialog';
import {VehicleStatusDetailComponent} from 'src/app/components/modals/vehicle-status-detail/vehicle-status-detail.component'
import {ObjectDetectionDetailComponent} from 'src/app/components/modals/object-detection-detail/object-detection-detail.component'
import {ScrollService} from 'src/app/services/layout/scroll.service'

@Component({
  selector: 'app-vehicle-logging',
  templateUrl: './vehicle-logging.component.html',
  styleUrls: ['./vehicle-logging.component.scss']
})
export class VehicleLoggingComponent extends TableUtil implements OnInit, OnDestroy, AfterViewInit {
  logQuery:Subscription | null = null
  fgLoggingFilter: any 
  vehicleId: string=""
  startDateTime:string = "" 
  endDateTime:string  = "" 
  logType:string[]=[
    "logging"
  ]
  refresh: boolean = false
  description: string =""
  logTypeOptions: any= [
    {value: "logging", label: "Logs"},
    {value: "status", label: "Autonomy State"},
    {value: "object", label: "Object Detection"}
  ]
  columns: string[] = [
    'status'
    , 'timestamp'
    , 'type'
    , 'node'
    , 'description'];
  cursor:number = 0
  isScrollDataLoading:boolean = false
  savedResults: any[] =[]
  pagination: number = 20
  paginationRange: number[] = [10, 25, 50, 100]
  nodes: string[] = [
    "stereo_to_disparity"
    , "message_cache"
  ]
  
  constructor(
    private graphQLSubscription: GqlSubscriptionService
    , private graphQLQuery: GqlQueryService
    , private route: ActivatedRoute 
    , public dialog: MatDialog
    , private scrollService: ScrollService
  ) { 
    super()
    this.formatTimestampForInputs()
  }

  private formatTimestampForInputs(){
    const regex = /(:)([0-9]+)(\.[0-9Z]+)/
    this.startDateTime = new Date(new Date().valueOf() - (1000*60*60)).toISOString().replace(regex, "");
    this.endDateTime = new Date().toISOString().replace(regex, "")
  }

  private loadData(scroll?:boolean){
    if(this.logQuery)
      this.logQuery.unsubscribe()
    
    this.isScrollDataLoading = true

    this.logQuery = this.graphQLQuery
    .getAllVehicleLogsStatusDetection({
      vehicleId: this.vehicleId
      , cursor: this.cursor
      , startDateTime: this.startDateTime
      , endDateTime: this.endDateTime
      , logType: this.fgLoggingFilter.value.logType
      , paginationRange: this.fgLoggingFilter.value.paginationRange
    })
    .subscribe((response:any)=>{
      this.isScrollDataLoading = false

        if(scroll)
          this.savedResults = this.savedResults.concat(response)
        else
          this.savedResults = response   
      
      this.updateList(this.savedResults)        
    })
  }

  ngOnInit(): void {
    this.vehicleId = (this.route.parent as any).snapshot.params.id
    this.fgLoggingFilter = new FormGroup({
      startDateTime: new FormControl(this.startDateTime,[Validators.required])
      , endDateTime: new FormControl(this.endDateTime,[Validators.required])
      , logType: new FormControl(this.logType, [Validators.required])
      , paginationRange: new FormControl(this.paginationRange[1], [Validators.required])
      , node: new FormControl(this.nodes, [Validators.required])

      // , description: new FormControl(this.description,[Validators.required])
    })
    this.loadData()
    this.scrollService.contentScroll.subscribe((scrolled:any)=>{
      if(scrolled){
        this.cursor  = this.pagination * ++this.cursor
        this.loadData(scrolled)
      }
    })
  }

  ngOnDestroy():void {
    this.logQuery?.unsubscribe()
  }

  ngAfterViewInit(): void{}

  refreshMap(){
    this.refresh = !this.refresh
    setTimeout(()=>this.refresh = !this.refresh, 0)
  }

  onSubmit(): void{
    this.cursor = 0
    this.startDateTime = this.fgLoggingFilter.value.startDateTime
    this.endDateTime = this.fgLoggingFilter.value.endDateTime
    this.loadData()
    this.refreshMap()
   }

   openDialog(row:any): void{
    let dialogRef;
    switch(row.__typename){
      case "VehicleStatus":
          dialogRef = this.dialog.open(VehicleStatusDetailComponent, {
            data:{
                 node: row.message.header.node
                , topic: row.topic.name
                , alerts: row.alerts.nodes[0]
                , vehicleStatusDetails: row.vehicleStatusDetails.nodes
            }
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog closed: ${result}`);
          });
          break;
      case "Object":
          dialogRef = this.dialog.open(ObjectDetectionDetailComponent, {
            data:row
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog closed: ${result}`);
          });
          break;
      case "VehicleLog":
          break;
    }

  }


  renderNodeColumn(col:any){
      switch(col.__typename){
        case "VehicleStatus":
            return col.message.header.node
              break;
          case "Object":
              return col.message.header.node
              break;
          case "VehicleLog":
              return col.message.name
              break;
      }
  }

  renderDescriptionColumn(col:any){
    switch(col.__typename){
      case "VehicleStatus":
          const reason = col.vehicleStatusDetails.nodes.filter((item:any)=>{
            return item.isActive
          })
          return `${col.state.name}  ${reason.length ? "(" + reason[0].reason.name + ")" : ""}`
            break;
        case "Object":
            return col.message.header.node
            break;
        case "VehicleLog":
            return col.message.msg
            break;
    }
  }

  renderTypeColumn(col:any){
    let type = ""
    switch(col.__typename){
      case "VehicleStatus":
            type = "Autonomy"
            break;
        case "Object":
            type =  "Object"
            break;
        case "VehicleLog":
            type = "Log"
            break;
    }

    return type
  }

  renderAlertsColumn(col:any){
    switch(col.__typename){
      case "VehicleStatus":
          return col.alerts.nodes[0].alertType.name
            break;
        case "Object":
        case "VehicleLog":
            return "info"
            break;
    }
  }
}
