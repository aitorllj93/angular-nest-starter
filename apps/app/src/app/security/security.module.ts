
import { NgModule } from '@angular/core';
import { UIModule } from '../ui/ui.module';
import { LoginFormComponent } from './components/login-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form.component';

@NgModule({
  imports: [UIModule],
  exports: [
    LoginFormComponent,
    ForgotPasswordFormComponent,
  ],
  declarations: [
    LoginFormComponent,
    ForgotPasswordFormComponent,
  ],
  providers: [],
})
export class SecurityModule { }
