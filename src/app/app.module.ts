import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { Exp10Component } from './layout/exp10/exp10.component';
import { Exp9Component } from './layout/exp9/exp9.component';
import { Exp8Component } from './layout/exp8/exp8.component';
import { Exp7Component } from './layout/exp7/exp7.component';
import { Exp6Component } from './layout/exp6/exp6.component';
import { Exp5Component } from './layout/exp5/exp5.component';
import { Exp4Component } from './layout/exp4/exp4.component';
import { Exp3Component } from './layout/exp3/exp3.component';
import { Exp2Component } from './layout/exp2/exp2.component';
import { Exp1Component } from './layout/exp1/exp1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Exp10Component,
    Exp9Component,
    Exp8Component,
    Exp7Component,
    Exp6Component,
    Exp5Component,
    Exp4Component,
    Exp3Component,
    Exp2Component,
    Exp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
