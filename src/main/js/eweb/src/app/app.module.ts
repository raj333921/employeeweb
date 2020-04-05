import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LogonComponent,
    BaseComponent,
    EhomeComponent,
    EmployeeComponent,
    EheaderComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

constructor(router:Router){

}
}
