import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
const QueryQL = require("src/app/graphql/query-syntax/query")

@Injectable({
  providedIn: 'root'
})
export class GqlQueryService {

  constructor( private graphService: Apollo ) { }

  getTopics(){
    return this.graphService
      .watchQuery<any>({ query: QueryQL.Topics })
      .valueChanges
  }
  getGeolocaton(){
    return this.graphService
      .watchQuery<any>({ query: QueryQL.Geolocation })
      .valueChanges
  }
}
