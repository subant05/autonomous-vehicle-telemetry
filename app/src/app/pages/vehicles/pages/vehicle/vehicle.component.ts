import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'
import { MenuService } from 'src/app/services/navigation/menu.service';
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
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
    , private graphqlQueryService: GqlQueryService) {
      this.paramSubscription = this.route.params.subscribe(data=>{
        this.vehicleId = data.id
      })
     }

    private loadMenu(obj:any) {
      const { data, loading } = obj
  
      if (!loading)
        this.menuService.menu.next({
          header: "Device Topics",
          links: [
            {
              label:"Live"
              , callback:()=>{
                this.router.navigate(['vehicles',this.vehicleId])
              }
            },...data.vehicle.vehicleTopics.nodes.map((topicType: any) => {
            return {
              label: topicType.topic.name,
              callback:()=> {
                this.loadTopic(topicType.topic)
              }
            }
          })]
        }
        )
  }

  loadTopic(topic:any){
    // @ts-ignore
    this.router.navigateByUrl(`/vehicles/${this.vehicleId}`, {skipLocationChange: false})
    .then(() => {
      this.router.navigate(
          ["vehicles", this.vehicleId, ...topic.name.replace(/\//,"").split("/")])
      })
  }

  ngOnInit(): void {
    this.currentRoute =  (this.route.url as any).value.join("/")
    this.graphqlQueryService
      .getTopicsByVehicleId({id:this.vehicleId})
      .subscribe(response=>this.loadMenu(response));
  }

  ngOnDestroy(): void{
    this.menuService.menu.next(null)
    this.paramSubscription?.unsubscribe()
  }

  ngDoCheck(){
  }

}
