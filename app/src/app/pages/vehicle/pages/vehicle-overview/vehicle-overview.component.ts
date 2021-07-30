import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {GeolocationService} from 'src/app/services/geolocation/geolocation.service'
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-vehicle-overview',
  templateUrl: './vehicle-overview.component.html',
  styleUrls: ['./vehicle-overview.component.scss']
})
export class VehicleOverviewComponent implements OnInit, OnDestroy, AfterViewInit {
  geoUpdateSubscription:Subscription | null = null
  gqlOnlineQuery:Subscription | null = null
  gqlOnlineSubscription:Subscription | null = null
  gqlPreviousCoordinateSubscription:Subscription | null = null
  vehiclesLastCoordinates:number[][] = []
  vehicleId: string=""
  isVehicleOnline: boolean = false;

  
  constructor(
    private gisService: GeolocationService
    , private graphQLSubscription: GqlSubscriptionService
    , private graphQLQuery: GqlQueryService
    , private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.vehicleId = (this.route.parent as any).snapshot.params.id
    this.gqlPreviousCoordinateSubscription = this.graphQLQuery
      .getVehiclePreviousLocation({vehicle_id:this.vehicleId})
      .subscribe((response:any)=>{
        if(response)
          this.vehiclesLastCoordinates = [[response.longitude, response.latitude]]
      })

    this.gqlOnlineQuery = this.graphQLQuery
      .getVehicleOnlineStatus({id:this.vehicleId})
      .subscribe((response:any)=>{
          this.isVehicleOnline = response.online ? true : false
      })

    this.gqlOnlineSubscription = this.graphQLSubscription.getVehicleOnlineStatus({id:this.vehicleId})
      .subscribe((response:any)=>{
        this.isVehicleOnline = response.online
      })
  }

  ngOnDestroy() :void{
    this.gqlOnlineSubscription?.unsubscribe()
    this.gqlOnlineQuery?.unsubscribe()
    this.gqlPreviousCoordinateSubscription?.unsubscribe()
  }

  ngAfterViewInit() :void{

  }


}
