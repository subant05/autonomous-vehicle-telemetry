import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GqlMutationService {

  constructor( private graphService: Apollo ) { }
}
