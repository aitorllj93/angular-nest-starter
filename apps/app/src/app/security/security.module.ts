
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { LoginFormComponent } from './components/login-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form.component';
import { RegisterFormComponent } from './components/register-form.component';
import { LoginContainerComponent } from './containers/login-container.component';

@NgModule({
  imports: [
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginContainerComponent
      }
    ])
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent,
    ForgotPasswordFormComponent,
    ResetPasswordFormComponent,

    LoginContainerComponent,
  ],
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    ForgotPasswordFormComponent,
    ResetPasswordFormComponent,

    LoginContainerComponent,
  ],
  providers: [],
})
export class SecurityModule { }
