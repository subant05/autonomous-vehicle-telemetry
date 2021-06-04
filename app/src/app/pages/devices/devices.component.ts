import { Component, OnInit, OnDestroy, DoCheck, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MenuService } from 'src/app/services/navigation/menu.service';
import { IMenu, IMenuLinks } from 'src/app/interfaces/navigation/menu'
import { Router, ActivatedRoute } from '@angular/router'
import {GqlQueryService} from 'src/app/services/graphql/gql-query.service'

const SubscriptionQL = require('src/app/graphql/query-syntax/subscriptions')
const QueryQL = require("src/app/graphql/query-syntax/query")


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit, OnDestroy, DoCheck, OnChanges {

  rootPath: string = "";

  constructor(
     private menuService: MenuService
    , private router: Router
    , private route: ActivatedRoute
    , private graphqlQueryService: GqlQueryService) {
  }

  private loadMenu(obj:any) {
    const { data, loading } = obj

    if (!loading)
      this.menuService.menu.next({
        header: "Device Topics",
        links: data.topics.map((topic: any) => {
          return {
            label: topic.name,
            callback:()=> {
              this.loadTopic(topic)
            }
          }
        })
      }
      )
  }
  ngOnInit(): void {
    this.rootPath = ""
    this.graphqlQueryService
      .getTopics()
      .subscribe(data=>this.loadMenu(data));
  }

  loadTopic(topic:any){
    this.router.navigateByUrl(``, {skipLocationChange: false})
    .then(() => this.router.navigate(
      [this.route.snapshot.routeConfig?.path,...topic.name.replace(/\//,"").split("/")]
    ))
  }

  ngOnDestroy() {
    this.menuService.menu.next(null)
  }

  ngDoCheck(){
    // @ts-ignore
    this.rootPath = this.route.snapshot._routerState.url.replace(`/${this.route.snapshot.routeConfig?.path}`,"")
  }

  ngOnChanges(){
  }

}
