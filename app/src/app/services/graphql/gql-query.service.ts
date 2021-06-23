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
      .watchQuery<any>({ query: QueryQL.Topics })
      .valueChanges
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
  
}
