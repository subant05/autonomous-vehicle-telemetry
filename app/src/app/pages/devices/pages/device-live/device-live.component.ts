import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {GeolocationService} from 'src/app/services/geolocation/geolocation.service'
import {GqlSubscriptionService} from 'src/app/services/graphql/gql-subscription.service'
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

@Component({
  selector: 'app-device-live',
  templateUrl: './device-live.component.html',
  styleUrls: ['./device-live.component.scss']
})
export class DeviceLiveComponent implements OnInit, OnDestroy {

  geoUpdateSubscription:Subscription | null = null
  constructor(private gisService: GeolocationService, private graphQLSubscription: GqlSubscriptionService) { }

  async ngOnInit() {
    const {map,geoJson} = await this.gisService.getLiveMap(
      {
        container:"map1"
        , showTractor:true
        , coordinates:[]
        , zoom:15}
    )

    this.geoUpdateSubscription = this.graphQLSubscription.getGeolocationStream().subscribe(
      (response:any) => {
        console.log(response.data.geographicCoordinates)
        const {longitude,latitude} = (response.data.geographicCoordinates as {longitude:number, latitude:number})

        // @ts-ignore
        geoJson.data.features[0].geometry.coordinates.push([longitude,latitude])
        map.getSource('trace').setData(geoJson.data);
        map.panTo([longitude,latitude]);
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnDestroy(): void{
    this.geoUpdateSubscription?.unsubscribe()
  }

}
