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
import { TesheetComponent } from './ehome/tesheet/tesheet.component';
import { SettingsComponent } from './ehome/settings/settings.component';
import { PayslipsComponent } from './ehome/payslips/payslips.component';
import { EpayslipsComponent } from './ehome/epayslips/epayslips.component';


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
  { path: 'tsheet', component: TsheetComponent },
  { path: 'tesheet', component: TesheetComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'payslips', component: PayslipsComponent },
  { path: 'epay', component: EpayslipsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
