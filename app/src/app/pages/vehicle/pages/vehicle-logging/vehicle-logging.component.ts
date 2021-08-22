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
import {VehicleLoggingFilterService} from './filter.service'
import moment from "moment"

@Component({
  selector: 'app-vehicle-logging',
  templateUrl: './vehicle-logging.component.html',
  styleUrls: ['./vehicle-logging.component.scss']
})
export class VehicleLoggingComponent extends TableUtil implements OnInit, OnDestroy, AfterViewInit {
  private logQuery:Subscription | null = null
  private loggingSubscription: Subscription | null = null
  private objectSubscription: Subscription | null = null
  private statusSubscription: Subscription | null = null
  private infiniteScrollSubscription: Subscription | null = null
  private nodesSubscription: Subscription | null = null
  private timeFormat = 'YYYY-MM-DDTHH:mm:ss'

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
  nodes: {nodeType:string}[] = []
  isLive:boolean= false;
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
  paginationRange: number[] = [ 25, 50, 100]

  
  constructor(
    private graphQLSubscription: GqlSubscriptionService
    , private graphQLQuery: GqlQueryService
    , private route: ActivatedRoute 
    , public dialog: MatDialog
    , private scrollService: ScrollService
    , private filterService: VehicleLoggingFilterService
  ) { 
    super()
    this.vehicleId = (this.route.parent as any).snapshot.params.id
    this.formatTimestampForInputs()
    this.nodesSubscription = this.graphQLQuery.getLoggingNodes({ vehicleId:this.vehicleId}).subscribe((response:any)=>{
      this.nodes = response
    })
  }

  private updateTable({data, action} = {data:[], action:"replace"}){
    switch(action){
      case "concat":
        this.savedResults = this.savedResults.concat(data)
        break;
      case "prepend":
        this.savedResults.unshift(data)
        break;
      case "append":
        this.savedResults.push(data)
        break;
      case "replace":
      default:
          this.savedResults = data
          break;
    }

    this.updateList(this.savedResults)    
  }

  private formatTimestampForInputs(){
    
    this.startDateTime = moment().subtract(1,'hours').format(this.timeFormat)
    this.endDateTime = moment().format(this.timeFormat)
  }

  private loadData(scroll?:boolean){
    if(this.logQuery)
      this.logQuery.unsubscribe()
    
    this.isScrollDataLoading = true

    this.logQuery = this.graphQLQuery
    .getAllVehicleLogsStatusDetection({
      vehicleId: this.vehicleId
      , cursor: this.cursor
      , startDateTime: moment(this.fgLoggingFilter.value.startDateTime).utc().format(this.timeFormat)
      , endDateTime: moment(this.fgLoggingFilter.value.endDateTime).utc().format(this.timeFormat)
      , logType: this.fgLoggingFilter.value.logType
      , paginationRange: this.fgLoggingFilter.value.paginationRange
      , nodes: this.fgLoggingFilter.value.nodes

    })
    .subscribe((response:any)=>{
      this.isScrollDataLoading = false

        if(scroll)
          this.updateTable({data:response, action:"concat"})
        else
          this.updateTable({data:response, action:"replace"})      
    })
  }


  private initiateLiveSubscriptions(){
    this.fgLoggingFilter.value.logType.forEach((type:any)=>{
      switch(type){
        case "logging":
          if(this.loggingSubscription && !this.loggingSubscription.closed)
            this.loggingSubscription?.unsubscribe()

          this.loggingSubscription = this.graphQLSubscription
            .getLoggingByVehicleId({vehicleId:this.vehicleId})
            .subscribe((response:any)=>{
              if(!response)
                return
                
              if(this.fgLoggingFilter.value.nodes.indexOf(response.message.name) > -1)
                this.updateTable({data:response, action:"prepend"})   
            })
            break;
        case "status":
          if(this.statusSubscription && !this.statusSubscription.closed)
            this.statusSubscription?.unsubscribe()

          this.statusSubscription = this.graphQLSubscription
            .getVehicleStatus({vehicleId:this.vehicleId})
            .subscribe((response:any):void | null=> {
              if(!response)
                return null

              this.updateTable({data:response, action:"prepend"})  
            })
            break;
        case "object":
            if(this.objectSubscription && !this.objectSubscription.closed)
              this.objectSubscription?.unsubscribe()

            this.objectSubscription = this.graphQLSubscription
              .getObjectDetectionByVehicleId({vehicleId:this.vehicleId})
              .subscribe((response:any)=>{
                this.updateTable({data:response, action:"prepend"})  
              })
          break;
      }
    })
  }

  private unsubscribeLiveSubscriptions(){
    this.loggingSubscription?.unsubscribe()
    this.objectSubscription?.unsubscribe()
    this.statusSubscription?.unsubscribe()
  }

  isFormValid(){
    return  (this.fgLoggingFilter.valid 
      || (!this.fgLoggingFilter.valid 
          && !this.fgLoggingFilter.controls.nodes.valid
          && this.fgLoggingFilter.controls.logType.value.indexOf('logging') === -1
          && this.fgLoggingFilter.controls.startDateTime.valid
          && this.fgLoggingFilter.controls.endDateTime.valid
          )
    )
  }

  onTypeChange(){
    if(this.fgLoggingFilter.value.isLive)
      this.initiateLiveSubscriptions()
  }
  
  ngOnInit(): void {
    this.fgLoggingFilter = this.filterService.getFilterState() || new FormGroup({
      startDateTime: new FormControl(this.startDateTime,[Validators.required])
      , endDateTime: new FormControl(this.endDateTime,[Validators.required])
      , logType: new FormControl(this.logType, [Validators.required])
      , paginationRange: new FormControl(this.paginationRange[0], [Validators.required])
      , nodes: new FormControl([], [Validators.required])
      , isLive: new FormControl(this.isLive, [Validators.required])
    })
  
    this.loadData()
    this.infiniteScrollSubscription = this.scrollService.contentScroll.subscribe((scrolled:any)=>{
      if(scrolled){
        this.cursor  = this.pagination * ++this.cursor
        this.loadData(scrolled)
      }
    })
    if(this.fgLoggingFilter.value.isLive)
      this.initiateLiveSubscriptions()
  }

  ngOnDestroy():void {
    this.logQuery?.unsubscribe()
    this.unsubscribeLiveSubscriptions()
    this.infiniteScrollSubscription?.unsubscribe()
    this.filterService.saveFilterState(this.fgLoggingFilter)
    this.nodesSubscription?.unsubscribe()
  }

  ngAfterViewInit(): void{}

  refreshMap(){
    this.refresh = !this.refresh
    setTimeout(()=>this.refresh = !this.refresh, 0)
  }

  onLiveToggle(event:any){
    const isLive = !event.currentTarget.querySelector("input").checked
    if(isLive){
      this.initiateLiveSubscriptions()
    }
    else {
      this.unsubscribeLiveSubscriptions()
    }
  }

  onSubmit(): void{
    if(!this.isFormValid())
      return;
    
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
            return (col.message || col.statusMessage).header.node
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
          const reason = (col.vehicleStatusDetails.nodes || col.vehicleStatusDetails).filter((item:any)=>{
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
          return (col.alerts.alertType || col.alerts.nodes[0].alertType).name
            break;
        case "Object":
        case "VehicleLog":
            return "info"
            break;
    }
  }
}
