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
import {FilterService} from 'src/app/services/form/filter.service'
import moment from "moment"
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

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
  private initialDataLoadSubscription: Subscription | null = null
  private timeFormat = 'YYYY-MM-DDTHH:mm:ss'
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';

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
  paginationRange: number[] = [ 25, 50, 100]
  isQuerying:boolean = false
  
  constructor(
    private graphQLSubscription: GqlSubscriptionService
    , private graphQLQuery: GqlQueryService
    , private route: ActivatedRoute 
    , public dialog: MatDialog
    , private scrollService: ScrollService
    , private filterService: FilterService
    , private _snackBar: MatSnackBar
  ) { 
    super()
    this.vehicleId = (this.route.parent as any).snapshot.params.id
    this.formatTimestampForInputs()
  }

  private sort(a:any,b:any){
        const aTime = new Date(a.readingat).valueOf()
        const bTime = new Date(b.readingat).valueOf()
        if(aTime > bTime)
          return -1;
        else if(aTime < bTime)
          return 1
        else 
          return 0
  }

  private updateTable({data, action} = {data:[], action:"replace"}){
    switch(action){
      case "concat":
        this.savedResults = this.savedResults.concat(data).sort(this.sort)
        break;
      case "prepend":
        this.savedResults.unshift(data)
        break;
      case "append":
        this.savedResults.push(data)
        break;
      case "replace":
      default:
          this.savedResults = [...data]
          this.isQuerying =false
          break;
    }

    this.updateList(this.savedResults)    
  }

  private formatTimestampForInputs(){
    this.startDateTime = moment().subtract(1,'hours').format(this.timeFormat)
    this.endDateTime = moment().format(this.timeFormat)
  }

  private initialDataLoad(variables:any){
    if(!variables.nodes.length){
      this.isScrollDataLoading = false
      return
    }

    this.initialDataLoadSubscription = this.graphQLQuery
      .getCurrentLogsByVehicleId(variables)
      .subscribe((response:any)=>{
        this.isScrollDataLoading = false

        ;
        if(!response.length)
          return;

        this.updateTable({data:response, action:"replace"})
        this.fgLoggingFilter
          .controls.startDateTime
          .patchValue(
            moment(response[response.length-1].readingat).subtract(2,'day')
            .format(this.timeFormat)
          )
        this.fgLoggingFilter
          .controls.endDateTime
          .patchValue(
            moment().format(this.timeFormat)
          )
      })
  }

  private getDataLoad(variables:any, action="replace"){
    this.logQuery = this.graphQLQuery
      .getAllVehicleLogsStatusDetection(variables)
      .subscribe((response:any)=>{
        this.isScrollDataLoading = false
        if(!response.length){
          this.noResultsNotification();
        }

        this.updateTable({data:response, action})    
      })
  }

  private loadData(scroll?:boolean, init:boolean = false){
    if(this.logQuery)
      this.logQuery.unsubscribe()
    
    this.isScrollDataLoading = true
    const variables = {
      vehicleId: this.vehicleId
      , cursor: this.cursor
      , startDateTime: moment(this.fgLoggingFilter.value.startDateTime).utc().format(this.timeFormat)
      , endDateTime: moment(this.fgLoggingFilter.value.endDateTime).utc().format(this.timeFormat)
      , logType: this.fgLoggingFilter.value.logType
      , paginationRange: this.fgLoggingFilter.value.paginationRange
      , nodes: this.fgLoggingFilter.value.nodes
    }

    if(init){
      this.initialDataLoad(variables)
    } else {
      if(scroll)
        this.getDataLoad(variables, "concat")
      else{
        if(!variables.nodes.length && variables.logType.length === 1 && variables.logType.indexOf("logging") > -1 ){
          this.isScrollDataLoading = false
          return
        }
        this.getDataLoad(variables, "replace")  
      }
    }
  }
// 
 private initLiveLogging(){

  const addData = (response:any) => {
    this.updateTable({data:{
      ...response
      , stamp:null
      }, action:"prepend"})
  }
  this.loggingSubscription = this.graphQLSubscription
    .getLoggingByVehicleId({vehicleId:this.vehicleId})
    .subscribe((response:any)=>{
      if(response && 
        ( this.fgLoggingFilter.value.logType.indexOf("logging") !== -1 && 
          this.fgLoggingFilter.value.isLive)){
            if(this.fgLoggingFilter.value.nodes.indexOf(response.name) > -1){
              addData(response)
            } else if (this.nodes.indexOf(response.name) === -1){
                this.nodes.push(response.name)
                this.nodes = this.nodes.sort((a:any,b:any)=>{
                  if(a < b)
                    return -1
                  else if (a > a)
                    return 1
                  else 
                    return 0
                })
                addData(response)
            }else{}
          }        
        

    })
 }

 private initLiveStatus(){
  this.statusSubscription = this.graphQLSubscription
    .getVehicleStatus({vehicleId:this.vehicleId})
    .subscribe((response:any):void | null=> {
      if(response &&  this.fgLoggingFilter.value.logType.indexOf("status") !== -1 && this.fgLoggingFilter.value.isLive)
        this.updateTable({data:response, action:"prepend"})  
    })
 }

 private initLiveObject(){
  this.objectSubscription = this.graphQLSubscription
    .getObjectDetectionByVehicleId({vehicleId:this.vehicleId})
    .subscribe((response:any)=>{
      if(response && this.fgLoggingFilter.value.logType.indexOf("object") !== -1 && this.fgLoggingFilter.value.isLive)
        this.updateTable({data:response, action:"prepend"})  
  })
 }
// 

  private unsubscribeLiveSubscriptions(){
    this.loggingSubscription?.unsubscribe()
    this.objectSubscription?.unsubscribe()
    this.statusSubscription?.unsubscribe()
  }

  private noResultsNotification(){
    this._snackBar.open("No results found." , 'Dismiss', {
     duration: 1000,
     horizontalPosition: this.horizontalPosition,
     verticalPosition: this.verticalPosition,
   });
  }

  private setupFilter(savedForm:any){
    this.fgLoggingFilter = savedForm || new FormGroup({
      startDateTime: new FormControl(this.startDateTime,[Validators.required])
      , endDateTime: new FormControl(this.endDateTime,[Validators.required])
      , logType: new FormControl(this.logType, [Validators.required])
      , paginationRange: new FormControl(this.paginationRange[0], [Validators.required])
      , nodes: new FormControl(this.nodes, [Validators.required])
      , isLive: new FormControl(this.isLive, [Validators.required])
    })
  }

  private setupInfiniteScroll(){
    this.infiniteScrollSubscription = this.scrollService.contentScroll.subscribe((scrolled:any)=>{
      if(scrolled){
        this.cursor  = this.tableList.data.length
        this.loadData(scrolled)
      }
    })
  }

  private nodeSubscriptionHandler(response:any, isSavedForm:any){
    this.nodes = response.map((result:any)=>result.node)
    if(!isSavedForm 
      && this.nodes.length 
      && this.fgLoggingFilter.controls.logType.value.indexOf( "logging") > -1){
        this.isScrollDataLoading = true
        this.fgLoggingFilter.controls.nodes.patchValue( this.nodes)
        this.loadData(false, !isSavedForm)
    }
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
  }
  
  ngOnInit(): void {
    const savedForm = this.filterService.getFilterState(`logging-${this.vehicleId}`)
    this.nodesSubscription = this.graphQLQuery
    .getLoggingNodes({ vehicleId:this.vehicleId})
    .subscribe((response:any)=>{
      this.nodeSubscriptionHandler(response, savedForm)
      this.loadData(false, !savedForm)
    })
    this.setupFilter(savedForm)
    this.setupInfiniteScroll()
    this.initLiveLogging()
    this.initLiveObject()
    this.initLiveStatus()
  }

  ngOnDestroy():void {
    this.logQuery?.unsubscribe()
    this.unsubscribeLiveSubscriptions()
    this.infiniteScrollSubscription?.unsubscribe()
    this.filterService.saveFilterState(`logging-${this.vehicleId}`, this.fgLoggingFilter)
    this.nodesSubscription?.unsubscribe()
    this.initialDataLoadSubscription?.unsubscribe()
  }

  ngAfterViewInit(): void{}

  refreshMap(){
    this.refresh = !this.refresh
    setTimeout(()=>this.refresh = !this.refresh, 0)
  }

  onLiveToggle(event:any){
    const isLive = !event.currentTarget.querySelector("input").checked
    if(isLive){
      this.initLiveLogging()
      this.initLiveObject()
      this.initLiveStatus()
    } else {
      this.unsubscribeLiveSubscriptions()
    }
  }

  onSubmit(): void{
    if(!this.isFormValid())
      return;

    this.isQuerying = true
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
                 node: (row.message || row.statusMessage).header.node
                , timestamp: (row.message || row.statusMessage).header.readingat
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
      case "VehicleLogView":
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
          case "VehicleLogView":
              return col.name
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
        case "VehicleLogView":
            return col.msg
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
        case "VehicleLogView":
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
        case "VehicleLogView":
            return "info"
            break;
    }
  }

  onSelectAllNodes(){
    this.fgLoggingFilter.controls.nodes.patchValue( this.nodes)
  }
  onClearAllNodes(){
    this.fgLoggingFilter.controls.nodes.patchValue( [])
  }
}
