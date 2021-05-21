import { Component, OnInit, AfterViewInit } from '@angular/core';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  private map : any;
  private coordinates : number[][] = [    
          [-122.483696, 37.833818],
          [-122.483482, 37.833174],
          [-122.483396, 37.8327],
          [-122.483568, 37.832056],
          [-122.48404, 37.831141],
          [-122.48404, 37.830497],
          [-122.483482, 37.82992],
          [-122.483568, 37.829548],
          [-122.48507, 37.829446],
          [-122.4861, 37.828802],
          [-122.486958, 37.82931],
          [-122.487001, 37.830802],
          [-122.487516, 37.831683],
          [-122.488031, 37.832158],
          [-122.488889, 37.832971],
          [-122.489876, 37.832632],
          [-122.490434, 37.832937],
          [-122.49125, 37.832429],
          [-122.491636, 37.832564],
          [-122.492237, 37.833378],
          [-122.493782, 37.833683]
        ]

  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW50Ymx1ZXJpdmVydGVjaCIsImEiOiJja295a3IwemowbjMwMndwZ2RkdHY2bmJjIn0.xpY0kRQNFTeFgc5l6hqRtQ';
      this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/satellite-v9', // style URL
      center: [-122.483696, 37.833818], // starting position [lng, lat]
      zoom: 15 // starting zoom
    });

    
   }

   ngAfterViewInit(){
    this.map.on('load',  () =>{
      this.map.addSource('route', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': this.coordinates
        }
        }
      });
      this.map.loadImage(
        '/assets/tractor.png',
         (error:any, image:any) =>{
          if (error) throw error;
          
          // Add the image to the map style.
          this.map.addImage('tracker', image);
         
        // Add a data source containing one point feature.
        this.map.addSource('point', {
            'type': 'geojson',
            'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                'type': 'Feature',
                'geometry': {
                            'type': 'Point',
                            'coordinates': [-122.493782, 37.833683]
                            }
                }
              ]
          }
        });
 
        // Add a layer to use the image to represent the data.
      this.map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'point', // reference the data source
        'layout': {
            'icon-image': 'tracker', // reference the image
            'icon-size': 0.05
            }
        });
      });
      this.map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': 'rgba(255,0,0,1)',
          'line-width': 8
          }
        });
    });
   }

}
