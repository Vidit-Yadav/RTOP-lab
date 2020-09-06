import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  index: any;

  public setIndex(index: any) {
    this.index = index;
    this.router.navigate([""]);
  }
  constructor(private router: Router) {
    this. index = 1;
   }
}
