import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'
import { Image } from 'image-js';
import {ImageService} from 'src/app/services/images/image.service'


@Component({
  selector: 'app-image-pair',
  templateUrl: './image-pair.component.html',
  styleUrls: ['./image-pair.component.scss']
})
export class ImagePairComponent implements OnInit, OnDestroy {

  querySubscription: Subscription |null =null
  leftImageUrl:string = ""
  rightImageUrl:string = ""
  noImage: boolean = false

  @Input()   topic: string = "";
  @Input()   cursor: number = 0;
  constructor( 
    private gqlQueryService: GqlQueryService
    , private imageService : ImageService
    ) { }

  ngOnInit(): void {
    this.querySubscription = this.gqlQueryService
      .getImagePair(this.topic, this.cursor)
      .subscribe(response=>{
        if(!response.data.imagePair || !response.data.imagePair.length){
          this.noImage = true
          return;
        }
        
        const imagePair = response.data.imagePair[0]

        this.leftImageUrl = this.imageService.getDataURL(imagePair.msg.left_image)
        this.rightImageUrl = this.imageService.getDataURL(imagePair.msg.right_image)
      })
  }

  ngOnDestroy(): void{
    this.querySubscription?.unsubscribe()
  }

}
