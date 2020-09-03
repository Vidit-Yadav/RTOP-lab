import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { Exp1Component } from './layout/exp1/exp1.component';
import { Exp2Component } from './layout/exp2/exp2.component';
import { Exp3Component } from './layout/exp3/exp3.component';
import { Exp4Component } from './layout/exp4/exp4.component';
import { Exp5Component } from './layout/exp5/exp5.component';
import { Exp6Component } from './layout/exp6/exp6.component';
import { Exp7Component } from './layout/exp7/exp7.component';
import { Exp8Component } from './layout/exp8/exp8.component';
import { Exp9Component } from './layout/exp9/exp9.component';
import { Exp10Component } from './layout/exp10/exp10.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'exp1', component: Exp1Component},
  {path: 'exp2', component: Exp2Component},
  {path: 'exp3', component: Exp3Component},
  {path: 'exp4', component: Exp4Component},
  {path: 'exp5', component: Exp5Component},
  {path: 'exp6', component: Exp6Component},
  {path: 'exp7', component: Exp7Component},
  {path: 'exp8', component: Exp8Component},
  {path: 'exp9', component: Exp9Component},
  {path: 'exp10', component: Exp10Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
