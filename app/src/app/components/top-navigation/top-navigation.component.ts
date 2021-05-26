import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {MenuService} from "../../services/navigation/menu.service"
import {IMenu} from "../../interfaces/navigation/menu"

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit, OnDestroy {

  menu:any
  showRightNav:boolean | null;

  constructor(private menuService: MenuService) {
    this.showRightNav = null
  }

  ngOnInit(): void {
    this.showRightNav = null

    this.menuService.menu.subscribe((data)=>{
      this.menu = data;
    })
  }

  toggleSideNav(){
    this.showRightNav = !this.showRightNav;
  }

  ngOnDestroy(){
    this.showRightNav = null
  }

}
