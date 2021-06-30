import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators'
const QueryQL = require("src/app/graphql/query-syntax/query")

@Injectable({
  providedIn: 'root'
})
export class GqlQueryService {

  constructor( private graphService: Apollo ) { }

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

  }
  
}
