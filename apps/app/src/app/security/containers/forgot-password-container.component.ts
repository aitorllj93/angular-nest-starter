
import { Component } from '@angular/core';

import { User } from '../models/user.model';

@Component({
  selector: 'app-forgot-password-container',
  template: `
    <app-forgot-password-form
      [logoUrl]="logoUrl"
      (submitForm)="onSubmitForm($event)"
    ></app-forgot-password-form>
  `
})

export class ForgotPasswordContainerComponent {

  logoUrl = 'assets/shield.png';

  constructor() { }

  onSubmitForm(user: User) {}
}
