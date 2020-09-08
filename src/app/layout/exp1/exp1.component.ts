import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exp1',
  templateUrl: './exp1.component.html',
  styleUrls: ['./exp1.component.css']
})
export class Exp1Component implements OnInit {

  data: any = {};
  ts: any;
  per: any
  video;
  constructor() {
  }

  ngOnInit(): void {
    this.ts = "-----";
    this.per = "-----"
    this.video = document.getElementById('video1') as HTMLVideoElement;
  }

  calcTS() {
    console.log("1" + this.data.w);
    let ans = this.data.w / (this.data.b * this.data.t);
    ans = Math.round((ans + Number.EPSILON) * 100) / 100;
    this.ts = ans;
    alert("Result is " + ans + " kgf/cm²");

  }
  calcEle() {
    console.log("2");
    let ans = ((this.data.l1 - this.data.l0) / this.data.l0) * 100;
    ans = Math.round((ans + Number.EPSILON) * 100) / 100;
    this.per = ans;
    alert("Elongation at break of film sample is " + ans + " %");
  }
  changeImage() {
    var image: any = document.getElementById('loose sample');
    if (image.src.match("bulbon")) {
      image.src = "../../../assets/images/exp1/3.1.png";
    } else {
      image.src = "../../../assets/images/exp1/3.2.png";
    }
  }
  myFunction() {
    document.getElementById("vernier scale").innerHTML = "11.24 cm" + " is the gauge length measured by vernier callipers ";
  }

  play() {
    this.video.play();
  }

  pause() {
    this.video.pause();
  }

  reRun() {
    this.pause();
    this.video.currentTime = 0;
    this.play();
  }
}

