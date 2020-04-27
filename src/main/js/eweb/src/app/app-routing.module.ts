import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogonComponent } from './logon/logon.component';
import { BaseComponent } from './base/base.component';
import { SignupComponent } from './signup/signup.component';
import { EhomeComponent } from './ehome/ehome.component';
import { EmployeeComponent } from './ehome/employee/employee.component';
import { EheaderComponent } from './ehome/eheader/eheader.component';
import { AddemployeeComponent } from './ehome/addemployee/addemployee.component';
import { CpdComponent } from './ehome/cpd/cpd.component';
import { ProfileComponent } from './ehome/profile/profile.component';
import { TsheetComponent } from './ehome/tsheet/tsheet.component';

const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'sign', component: SignupComponent },
  { path: 'logon', component: LogonComponent },
  { path: 'home', component: BaseComponent },
  { path: 'ehome', component: EhomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'eheader', component: EheaderComponent },
  { path: 'addemp', component: AddemployeeComponent },
  { path: 'cpd', component: CpdComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'tsheet', component: TsheetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
