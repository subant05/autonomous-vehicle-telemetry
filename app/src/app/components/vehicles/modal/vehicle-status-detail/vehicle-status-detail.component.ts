import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-vehicle-status-detail',
  templateUrl: './vehicle-status-detail.component.html',
  styleUrls: ['./vehicle-status-detail.component.scss']
})
export class VehicleStatusDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: number,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data)
      console.log(this.data)
  }

}
