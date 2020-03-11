
import { NgModule } from '@angular/core';
import { UIModule } from '../ui/ui.module';
import { LoginFormComponent } from './components/login-form.component';

@NgModule({
  imports: [UIModule],
  exports: [LoginFormComponent],
  declarations: [LoginFormComponent],
  providers: [],
})
export class SecurityModule { }
