import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'
import { MenuService } from 'src/app/services/navigation/menu.service';
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CurrentVehicleTopic } from './services/current-topic.service'

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  providers:[CurrentVehicleTopic]
})
export class VehicleComponent implements OnInit, OnDestroy, DoCheck {

  geoUpdateSubscription:Subscription | null = null
  currentRoute: string =  ""
  vehicleId: string = "";
  paramSubscription: Subscription | undefined
  
  constructor(
    private menuService: MenuService
    , private router: Router
    , private route: ActivatedRoute
    , private graphqlQueryService: GqlQueryService
    , private currentVehicleTopicService : CurrentVehicleTopic) {
      this.paramSubscription = this.route.params.subscribe(data=>{
        this.vehicleId = data.id
      })
     }

    private loadMenu(obj:any) {
      const { data, loading } = obj
  
      if (!loading)
        this.menuService.menu.next({
          header: `Vehicle: ${this.vehicleId }`,
          links: [
            {
              label:"Overview"
              , url:`/vehicles/${this.vehicleId}/overview`
              , tooltip:`Vehicle: ${this.vehicleId} Overview Page`
            },
            // {
            //   label:"Geolocation"
            //   , url:`/vehicles/${this.vehicleId}/geolocation`
            //   , tooltip:`Vehicle: ${this.vehicleId} Geolocation Page`
            // },
            // {
            //   label:"Images"
            //   , url:`/vehicles/${this.vehicleId}/images`
            //   , tooltip:`Vehicle: ${this.vehicleId} Images Page`
            // },
            {
              label:"Logging"
              , url:`/vehicles/${this.vehicleId}/logging`
              , tooltip:`Vehicle: ${this.vehicleId} Logging Page`
            },
            // {
            //   label:"System"
            //   , url:`/vehicles/${this.vehicleId}/system`
            //   , tooltip:`Vehicle: ${this.vehicleId} System Page`
            // },
            // ...data.topics.nodes.map((vehicleTopic:any)=>{
            //     if(!vehicleTopic.vehicleTopics.nodes.length)
            //       return {}

            //     const topicType = vehicleTopic.vehicleTopics.nodes.map((topic:any)=>{
            //           return topic
            //       })[0]
            //     return  {
            //       label: topicType.topic.name,
            //       callback:()=> {
            //         this.currentVehicleTopicService.topicInfo = topicType
            //         this.loadTopic(topicType.topic)
            //       }
            //     }
            //   })
              ]
            }
        )
  }

  loadTopic(topic:any){
    // @ts-ignore
    this.router.navigateByUrl(`/${this.vehicleId}`, {skipLocationChange: false})
    .then(() => {
      this.router.navigate(
          [this.vehicleId, ...topic.name.replace(/\//,"").split("/")])
      })
  }

  ngOnInit(): void {
    this.currentRoute =  (this.route.url as any).value.join("/")
    this.graphqlQueryService
      .getTopicsByVehicleId({id:this.vehicleId})
      .subscribe(response=>
        this.loadMenu(response)
      );
  }

  ngOnDestroy(): void{
    this.menuService.menu.next(null)
    this.paramSubscription?.unsubscribe()
  }

  ngDoCheck(){
  }

}
