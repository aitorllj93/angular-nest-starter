
import { NgModule } from '@angular/core';

import { LoginContainerComponent } from './containers/login-container.component';
import { RegisterContainerComponent } from './containers/register-container.component';
import { ForgotPasswordContainerComponent } from './containers/forgot-password-container.component';
import { ChangePasswordContainerComponent } from './containers/change-password-container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginContainerComponent
  },
  {
    path: 'register',
    component: RegisterContainerComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordContainerComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordContainerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class SecurityRoutingModule { }
