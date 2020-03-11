
import { NgModule } from '@angular/core';
import { UIModule } from '../ui/ui.module';
import { LoginFormComponent } from './components/login-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form.component';

@NgModule({
  imports: [UIModule],
  exports: [
    LoginFormComponent,
    ForgotPasswordFormComponent,
    ResetPasswordFormComponent
  ],
  declarations: [
    LoginFormComponent,
    ForgotPasswordFormComponent,
    ResetPasswordFormComponent
  ],
  providers: [],
})
export class SecurityModule { }
