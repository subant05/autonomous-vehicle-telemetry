import { Component, OnInit, OnDestroy } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { AlertService } from 'src/app/services/notifications/alert.service'
import {MenuService} from "../../services/navigation/menu.service"
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import {ScrollService} from 'src/app/services/layout/scroll.service'


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  faBars = faBars
  showRightNav=false;
  alertSubscription: Subscription | null = null
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private alertService: AlertService
    , private menuService: MenuService
    , private _snackBar: MatSnackBar
    , private scollService: ScrollService
  ) { 
  }

  ngOnInit(): void {
    this.menuService.menu.subscribe((data)=>{
      this.showRightNav = data ? true : false;
    })
    // this.alertSubscription = this.alertService.alerts.subscribe(data=>{
    //   this._snackBar.open(data.alertMessage , 'Dismiss', {
    //      duration: 1000,
    //     horizontalPosition: this.horizontalPosition,
    //     verticalPosition: this.verticalPosition,
    //   });
    // })
  }

  ngOnDestroy():void {
    this.alertSubscription?.unsubscribe()
  }

  toggleSideNav(){
    this.showRightNav = !this.showRightNav;
  }

  onScroll(){
    this.scollService.contentScroll.next(true)
  }

}
