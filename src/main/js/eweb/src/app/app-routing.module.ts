import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogonComponent } from './logon/logon.component';
import { BaseComponent } from './base/base.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'sign', component: SignupComponent },
  { path: 'logon', component: LogonComponent },
  { path: 'home', component: BaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
