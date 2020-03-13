
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginMachine } from '../machines/login/login-machine.service';
import { LoginSubmit } from '../machines/login/login-machine.events';

import { User } from '../models/user.model';

@Component({
  selector: 'app-login-container',
  template: `
    <app-login-form
      [logoUrl]="logoUrl"
      [thirdPartyOptions]="thirdPartyOptions"
      (thirdPartyClick)="onThirdPartyClick($event)"
      (submitForm)="onSubmitForm($event)"
      (registerClick)="onRegisterClick()"
      (forgotPasswordClick)="onForgotPasswordClick()"
    ></app-login-form>
  `
})
export class LoginContainerComponent {

  logoUrl = 'assets/shield.png';

  thirdPartyOptions = [];

  constructor(
    private machine: LoginMachine,
    private router: Router
  ) { }

  onThirdPartyClick(type: string) {}

  onSubmitForm(user: User) {
    this.machine.send(new LoginSubmit(user.username, user.password));
  }

  onRegisterClick() {
    this.router.navigate(['auth/register']);
  }

  onForgotPasswordClick() {
    this.router.navigate(['auth/forgot-password']);
  }
}
