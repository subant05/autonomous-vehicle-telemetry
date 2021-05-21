import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  showLeftNav:boolean | null;

  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router
  ) { 
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

  logOut(): void {
    this.socialAuthService.signOut();
    this.router.navigate(["/login"])
  }

}
