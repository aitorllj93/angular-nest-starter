
import { NgModule } from '@angular/core';
import { UIModule } from '../ui/ui.module';
import { LoginFormComponent } from './components/login-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form.component';
import { RegisterFormComponent } from './components/register-form.component';

@NgModule({
  imports: [UIModule],
  exports: [
    LoginFormComponent,
    RegisterFormComponent,
    ForgotPasswordFormComponent,
    ResetPasswordFormComponent
  ],
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    ForgotPasswordFormComponent,
    ResetPasswordFormComponent
  ],
  providers: [],
})
export class SecurityModule { }
