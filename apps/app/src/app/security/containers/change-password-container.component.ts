
import { Component } from '@angular/core';

import { User } from '../models/user.model';

@Component({
  selector: 'app-change-password-container',
  template: `
    <app-change-password-form
      [logoUrl]="logoUrl"
      (submitForm)="onSubmitForm($event)"
    ></app-change-password-form>
  `
})

export class ChangePasswordContainerComponent {

  logoUrl = 'assets/shield.png';

  constructor() { }

  onSubmitForm(user: User) {}
}
