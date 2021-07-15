import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { rawListeners } from 'process';
import { v4 as uuid } from "uuid"
import { map } from 'rxjs/operators'
import {ImageService} from 'src/app/services/images/image.service'
const QueryQL = require("src/app/graphql/query-syntax/query")

@Injectable({
  providedIn: 'root'
})
export class GqlQueryService {

  constructor( 
    private graphService: Apollo
    , private imageService:ImageService 
  ) { }

  private basicFilteredQuery (Query:any, variables:any={}) {
    return this.graphService
    .watchQuery<any>({ 
      query: Query, 
      variables
    })
    .valueChanges
  }

  getTopics(){
    return this.graphService
      .watchQuery<any>({ query: QueryQL.Topics.All })
      .valueChanges
  }

  getTopicsByVehicleId(variables:any){
    return this.basicFilteredQuery(QueryQL.Topics.ByVehicleId, variables)
  }

  getGeolocaton(variables:any){
    return this.graphService
      .watchQuery<any>({ query: QueryQL.Geolocation.ById,variables })
      .valueChanges
  }

  getImagePair(variables:any){
    return this.basicFilteredQuery(QueryQL.ImagePair, variables)
  }

  getSegmentationMap(variables:any){
    return this.basicFilteredQuery(QueryQL.SegmentationMap, variables)
  }

  getAllVehicles(){
    return this.basicFilteredQuery(QueryQL.Vehicles.All)
      .pipe(map(response=>{
        return response.data.vehicles.nodes.map((vehicle:any)=>{
          return {...vehicle, type: vehicle.type.type}
        })
      }))
  }

  getVehicleById(variables:any){
    return this.basicFilteredQuery(QueryQL.Vehicles.ById, variables)
  }

  getSegmentationMapByHeaderId(variables:any){
    return this
      .basicFilteredQuery(QueryQL.Images.SegmentationMapByHeaderId, variables)
      .pipe(map(response=>{
        return response.data.cameraMessageHeaders.nodes.filter((msg:any) =>{
          if(!msg.cameraMessagesByHeaderId.nodes.length)
            return false
            
          return msg.cameraMessagesByHeaderId.nodes[0].image.encoding === "rgb8" || 
                  msg.cameraMessagesByHeaderId.nodes[0].image.encoding === "mono8"
            }).map((msg:any)=>{
                const image = {...msg.cameraMessagesByHeaderId.nodes[0].image}
                image.data = JSON.parse(image.data.data)
                return image
            })
      }))
  }

  getImagePreview(variables:any){
    return this.basicFilteredQuery(QueryQL.Images.PreviewByVehicleIdTopicName, variables)
    .pipe(map((response:any)=>{
      const cameraData = response.data.topics.nodes[0].cameras
      const totalCount = cameraData.totalCount
      const images = cameraData.nodes.map((info:any)=>{
        const image =  {
            ...info.msg.image
            , timestamp: new Date(info.readingat).toUTCString()
            , vehicle: info.vehicle.name
            , id: info.id
            , imageId: uuid()
            , data: JSON.parse(info.msg.image.data.data) 
            , headerId : info.msg.header.headerId
            , meta : info.msg.cameraMeta
          }
          image.url = this.imageService.getDataURL(image)
        
        return image
      })
      return {cameraData, totalCount, images }
    }))
  }
  getAlerts(){
    return this.graphService
      .watchQuery<any>({ query: QueryQL.Notifications.Alerts })
      .valueChanges
  }
  
}
