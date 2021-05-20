import { Component, OnInit } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  faBars = faBars
  showRightNav=false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.showRightNav = !this.showRightNav;
  }

}
