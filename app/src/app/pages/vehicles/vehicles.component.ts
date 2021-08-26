import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class VehiclesComponent implements OnInit{
  breadcrumbConfig: any = {
    bgColor: 'inherit',
    fontSize: 'inherit',
    fontColor: 'inherit',
    lastLinkColor: 'inherit',
    symbol: ' > ',
  }

  constructor() {
  }

  ngOnInit(): void {}

}
