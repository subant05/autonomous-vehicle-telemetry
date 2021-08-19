import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ActivatedRoute, Event} from '@angular/router'
import { Subscription } from 'rxjs';
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'
import moment from 'moment';

@Component({
  selector: 'app-vehicle-images',
  templateUrl: './vehicle-images.component.html',
  styleUrls: ['./vehicle-images.component.scss']
})
export class VehicleImagesComponent implements OnInit {
  private topicsSubscription : Subscription | null = null;
  vehicleId: string=""
  startDateTime:string = "" 
  endDateTime:string  = "" 
  fgImageFilter: FormGroup = new FormGroup({})
  topics: {name:any, id:any}[] =  []
  selectedTopic :string = ""

  constructor(
    private route: ActivatedRoute
    , private gqlQuery: GqlQueryService
  ) { 
      this.formatTimestampForInputs()
    }

  private formatTimestampForInputs(){
    const format = 'YYYY-MM-DDTHH:mm:ss'
    this.startDateTime = moment().subtract(1,'hours').format(format)
    this.endDateTime = moment().format(format)
  }

  ngOnInit(): void {
    this.vehicleId = (this.route.parent as any).snapshot.params.id

    this.topicsSubscription = this.gqlQuery
      .getTopicsByCategoryVehicleId({
        vehicleId:this.vehicleId
        , topicName:"%/left/preview"
        , category:"images"
      })
      .subscribe((response:any)=>{
        this.topics = response
        this.fgImageFilter = new FormGroup({
          // startDateTime: new FormControl(this.startDateTime,[Validators.required]),
          // endDateTime: new FormControl(this.endDateTime,[Validators.required]),
          topics: new FormControl(this.topics[0],[Validators.required]),
          isLive: new FormControl(false,[Validators.required])
        })
        debugger;
      })
  }

  onTopicChange(){
    this.selectedTopic = "" 
    setTimeout(()=>this.selectedTopic = this.fgImageFilter.controls.topics.value,0)
  }
  onLiveToggle(event:any){

  }
  onSubmit(){

  }

}
