
import { Component } from '@angular/core';

import { AuthMachine } from '../machines/auth-machine.service';

import { User } from '../models/user.model';
import { LoginSubmit } from '../machines/auth-machine.events';

@Component({
  selector: 'app-login-container',
  template: `
    <app-login-form
      [thirdPartyOptions]="thirdPartyOptions"
      (thirdPartyClick)="onThirdPartyClick($event)"
      (submitForm)="onSubmitForm($event)"
      (registerClick)="onRegisterClick()"
      (forgotPasswordClick)="onForgotPasswordClick()"
    ></app-login-form>
  `
})
export class LoginContainerComponent {

  thirdPartyOptions = [];

  constructor(
    private machine: AuthMachine,
  ) { }

  onThirdPartyClick(type: string) {}

  onSubmitForm(user: User) {
    this.machine.send(new LoginSubmit(user.username, user.password));
  }

  onRegisterClick() {}

  onForgotPasswordClick() {}
}
