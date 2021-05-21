import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  showLeftNav:boolean | null;

  constructor() { 
    this.showLeftNav = null
  }

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.showLeftNav = !this.showLeftNav;
  }

  ngOnDestroy(){
    this.showLeftNav = null
  }

}
