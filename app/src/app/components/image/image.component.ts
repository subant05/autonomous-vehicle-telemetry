import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {v4 as uuid } from 'uuid'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, AfterViewInit {

  imageId: string = uuid()
  resultId: string = uuid()
  lensId: string = uuid()

  private result: any
  private lens: any
  private img:  any
  private cx: any
  private cy: any

  @Input() src:string = ""

  constructor( ) { }

  private movelens(e:any) {
    let pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = this.getCursorPos(e);
    /* Calculate the position of the this.lens: */
    x = pos.x - (this.lens.offsetWidth / 2);
    y = pos.y - (this.lens.offsetHeight / 2);
    /* Prevent the this.lens from being positioned outside the image: */
    if (x > this.img.width - this.lens.offsetWidth) {x = this.img.width - this.lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > this.img.height - this.lens.offsetHeight) {y = this.img.height - this.lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /* Set the position of the this.lens: */
    this.lens.style.left = x + "px";
    this.lens.style.top = y + "px";
    /* Display what the this.lens "sees": */
    this.result.style.backgroundPosition = "-" + (x * this.cx) + "px -" + (y * this.cy) + "px";
  }
  private getCursorPos(e:any) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = this.img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }

  private setupZoom(){
    this.result = document.getElementById(this.resultId);
    /* Create this.lens: */
    this.lens = document.getElementById(this.lensId);
    /* Insert this.lens: */
    this.img.parentElement.insertBefore(this.lens, this.img);
    /* Calculate the ratio between this.result DIV and this.lens: */
    this.cx = +(window.getComputedStyle(this.result).width.replace("px","")) / +(window.getComputedStyle(this.lens).width.replace("px",""));
    this.cy = +(window.getComputedStyle(this.result).height.replace("px","")) / +(window.getComputedStyle(this.lens).height.replace("px",""));
    /* Set background properties for the this.result DIV */
    this.result.style.backgroundImage = "url('" + this.img.src + "')";
    this.result.style.backgroundSize = (this.img.width * this.cx) + "px " + (this.img.height * this.cy) + "px";
    /* Execute a function when someone moves the cursor over the image, or the this.lens: */
    this.lens.addEventListener("mousemove", this.movelens.bind(this));
    this.img.addEventListener("mousemove",  this.movelens.bind(this));
    /* And also for touch screens: */
    this.lens.addEventListener("touchmove",  this.movelens.bind(this));
    this.img.addEventListener("touchmove",  this.movelens.bind(this));
  }

  private renderImageZoom (){
    this.img = document.getElementById(this.imageId);
    this.img.addEventListener("load", this.setupZoom.bind(this))
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.renderImageZoom()

  }


}
