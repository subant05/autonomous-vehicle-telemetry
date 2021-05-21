import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {MenuService} from "../../services/navigation/menu.service"
import {IMenu} from "../../interfaces/navigation/menu"

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  menu:IMenu[] | null = []
  showRightNav:boolean | undefined;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.menu.subscribe((data)=>{
      this.menu = data;
    })
  }

  toggleSideNav(){
    this.showRightNav = !this.showRightNav;
  }

}
