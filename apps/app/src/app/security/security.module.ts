
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { SecurityRoutingModule } from './security-routing.module';

import { LoginFormComponent } from './components/login-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form.component';
import { ChangePasswordFormComponent } from './components/change-password-form.component';
import { RegisterFormComponent } from './components/register-form.component';

import { LoginContainerComponent } from './containers/login-container.component';
import { RegisterContainerComponent } from './containers/register-container.component';
import { ForgotPasswordContainerComponent } from './containers/forgot-password-container.component';
import { ChangePasswordContainerComponent } from './containers/change-password-container.component';

@NgModule({
  imports: [
    UIModule,
    SecurityRoutingModule,
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent,
    ForgotPasswordFormComponent,
    ChangePasswordFormComponent,

    LoginContainerComponent,
    RegisterContainerComponent,
    ForgotPasswordContainerComponent,
    ChangePasswordContainerComponent,
  ],
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    ForgotPasswordFormComponent,
    ChangePasswordFormComponent,

    LoginContainerComponent,
    RegisterContainerComponent,
    ForgotPasswordContainerComponent,
    ChangePasswordContainerComponent,
  ],
  providers: [],
})
export class SecurityModule { }
