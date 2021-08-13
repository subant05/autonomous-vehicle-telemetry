import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-medallion',
  templateUrl: './medallion.component.html',
  styleUrls: ['./medallion.component.scss']
})
export class MedallionComponent implements OnInit {

  @Input() title: string =""
  @Input() content: string =""
  constructor() { }

  ngOnInit(): void {
  }

}
