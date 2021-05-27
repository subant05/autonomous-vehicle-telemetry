import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs';
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'

@Component({
  selector: 'app-device-topic',
  templateUrl: './device-topic.component.html',
  styleUrls: ['./device-topic.component.scss']
})
export class DeviceTopicComponent implements OnInit, OnDestroy {

  querySubscription: Subscription |null =null
  coordinates: number[][] = []
  currentRoute: string =  ""

  constructor(
    private router: Router
    , private route: ActivatedRoute
    , private gqlQueryService: GqlQueryService) { 
  }

  ngOnInit(): void {
    this.currentRoute =  (this.route.url as any).value.join("/")

    switch(this.currentRoute){
      case "starfire":
        this.querySubscription = this.gqlQueryService.getGeolocaton().subscribe((subscription:any)=>{
          if(!subscription.loading)
          this.coordinates = subscription.data.geolocation.map((geo:any)=>{
            return geo.msg ? [geo.msg.longitude, geo.msg.latitude] : []
          })
        })
        break;
    }
  }

  ngOnDestroy(){
    this.querySubscription?.unsubscribe()
  }

}
