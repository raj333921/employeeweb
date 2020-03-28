import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LogonComponent } from './logon/logon.component';
import { NewComponentComponent } from './new-component/new-component.component';

const appRoutes: Routes = [
{ path: 'sign', component: SignupComponent },
  { path: 'logon', component: LogonComponent },
  { path: 'base',
    component: NewComponentComponent},

  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', component: NewComponentComponent }
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
        )
  ],
  exports: [RouterModule]
})
export class RoutingModule { }

