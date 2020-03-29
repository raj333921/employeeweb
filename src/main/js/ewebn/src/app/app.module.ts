import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LogonComponent } from './logon/logon.component';
import { RoutingModule } from './routing.module';
import { NewComponentComponent } from './new-component/new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LogonComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


