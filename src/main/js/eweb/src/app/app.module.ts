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



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LogonComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

constructor(router:Router){

}
}
