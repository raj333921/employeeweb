import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { LogonComponent } from './logon/logon.component';
import { BaseComponent } from './base/base.component';
import {FormsModule} from "@angular/forms";
import { EhomeComponent } from './ehome/ehome.component';
import { AddemployeeComponent } from './ehome/addemployee/addemployee.component';
import { EmployeeComponent } from './ehome/employee/employee.component';
import { EheaderComponent } from './ehome/eheader/eheader.component';
import { CpdComponent } from './ehome/cpd/cpd.component';
import { ProfileComponent } from './ehome/profile/profile.component';
import { TsheetComponent } from './ehome/tsheet/tsheet.component';
import { TesheetComponent } from './ehome/tesheet/tesheet.component';
import { SettingsComponent } from './ehome/settings/settings.component';
import { PayslipsComponent } from './ehome/payslips/payslips.component';
import { EpayslipsComponent } from './ehome/epayslips/epayslips.component';
import { AexpenseComponent } from './ehome/aexpense/aexpense.component';
import { EmpexpenseComponent } from './ehome/empexpense/empexpense.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LogonComponent,
    BaseComponent,
    EhomeComponent,
    EmployeeComponent,
    EheaderComponent,
    AddemployeeComponent,
    CpdComponent,
    SettingsComponent,
    PayslipsComponent,
    EpayslipsComponent,
    ProfileComponent,
    TsheetComponent,
    TesheetComponent,
    AexpenseComponent,
    EmpexpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

constructor(router:Router){

}
}
