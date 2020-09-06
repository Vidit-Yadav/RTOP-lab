import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp1',
  templateUrl: './exp1.component.html',
  styleUrls: ['./exp1.component.css']
})
export class Exp1Component implements OnInit {

  data: any = {};
  ts: any;
  per: any

  constructor() {
  }

  ngOnInit(): void {
    this.ts = "-----";
    this.per = "-----"
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
    let ans = (Math.abs(this.data.l0 - this.data.l1) / this.data.l0) * 100;
    ans = Math.round((ans + Number.EPSILON) * 100) / 100;
    this.per = ans;
    alert("Elongation at break of film sample is " + ans + " %");
  }
}
