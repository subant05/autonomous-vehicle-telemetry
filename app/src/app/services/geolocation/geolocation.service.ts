import { Injectable } from '@angular/core';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { IGeolocationConfig, IGeoJSONArgs, IAddImageArgs, IPaintLine } from '../../interfaces/geolocation/geolocation'

mapboxgl.accessToken = environment.mapboxAPIKey

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private readonly mapboxgl = mapboxgl

  constructor() {
    mapboxgl.accessToken = environment.mapboxAPIKey
  }


  private getGEOJSON({ type, dataType, geometryType, coordinates }: IGeoJSONArgs) {
    return {
      'type': type,
      'data': {
        'type': dataType,
        'properties': {},
        'geometry': {
          'type': geometryType,
          'coordinates': coordinates
        }
      }
    }
  }

  private getImageGEOJSON({ type, dataType, geometryType, coordinateType="Point", coordinates }: IGeoJSONArgs){
    return {
        'type': type,
        'data': {
          'type': dataType,
          'features': [
              {
              'type': geometryType,
              'geometry': {
                'type': coordinateType,
                'coordinates': coordinates
                }
              }
            ]
      }
    }
  }

  private setupMap(container: string, center: number[], zoom: number) {
    return new mapboxgl.Map({
      container, // container ID
      style: 'mapbox://styles/mapbox/satellite-v9', // style URL
      center, // starting position [lng, lat]
      zoom // starting zoom
    });
  }

  private addImage({ name="tractor",coordinates = [], map }: IAddImageArgs) {
    map.loadImage(
      '/assets/tractor.png',
      (error: any, image: any) => {
        if (error) throw error;

        // Add the image to the map style.
        map.addImage('tracker', image);

        // Add a data source containing one point feature.
        map.addSource('point'
          , this.getImageGEOJSON({ type: 'geojson', dataType: 'FeatureCollection', geometryType: 'Feature', coordinates }));

        // Add a layer to use the image to represent the data.
        map.addLayer({
          'id': 'points',
          'type': 'symbol',
          'source': 'point', // reference the data source
          'layout': {
            'icon-image': 'tracker', // reference the image
            'icon-size': 0.05
          }
        });
      });
  }

  private paintLine({ lineSize = 5, lineColor = "red", source = "route" }: IPaintLine, map: any) {
    map.addLayer({
      'id': 'route',
      'type': 'line',
      'source': source,
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': lineColor,
        'line-width': lineSize
      }
    });
  }

  private onLoadStaticMapHandler({ container, coordinates, center, showTractor, lineColor, lineSize }: IGeolocationConfig, map: any) {
    map.addSource('route'
      , this.getGEOJSON({ type: "geojson", dataType: 'Feature', geometryType: 'LineString', coordinates }));

    if (showTractor)
      this.addImage({ coordinates:coordinates[coordinates.length-1], map })

    this.paintLine({ source:"route", lineColor, lineSize }, map)
  }

  getStaticMap({ container = "map", coordinates = [[]], center = coordinates[0], showTractor = false, zoom = 15, lineColor, lineSize }: IGeolocationConfig) {
    const map = this.setupMap(container, center, zoom)
    map.on("load",()=>{
      this.onLoadStaticMapHandler({ container, coordinates, center, showTractor, lineColor, lineSize }, map)
    })
  }

  getReplayMap({ container = "map", coordinates = [[]], center = coordinates[0], showTractor = false, zoom = 20, lineColor, lineSize }: IGeolocationConfig){
    const map = this.setupMap(container, center, zoom)
    map.on("load",()=>{

      const geoJson = this.getImageGEOJSON({ 
        type: 'geojson'
        , dataType: 'FeatureCollection'
        , geometryType: 'Feature'
        , coordinateType: "LineString"
        , coordinates: [coordinates[0]] 
      })

      map.addSource('trace',geoJson );
      this.paintLine({ source:"trace", lineColor, lineSize }, map)

      map.jumpTo({ 'center': coordinates[0], 'zoom': 14 });
      map.setPitch(30);

      let i = 0;
      let timer = window.setInterval( () => {
          if (i < coordinates.length) {
            geoJson.data.features[0].geometry.coordinates.push(
              // @ts-ignore
              coordinates[i]
            )
            map.getSource('trace').setData(geoJson.data);
            map.panTo(coordinates[i]);
            i++;
          } else {
            window.clearInterval(timer);
          }
        }
      , 1000);
    });
  }
}
