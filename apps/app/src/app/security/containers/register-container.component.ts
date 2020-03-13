
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';

@Component({
  selector: 'app-register-container',
  template: `
    <app-register-form
      [logoUrl]="logoUrl"
      [thirdPartyOptions]="thirdPartyOptions"
      (thirdPartyClick)="onThirdPartyClick($event)"
      (submitForm)="onSubmitForm($event)"
      (loginClick)="onLoginClick()"
      (forgotPasswordClick)="onForgotPasswordClick()"
    ></app-register-form>
  `
})

export class RegisterContainerComponent {

  logoUrl = 'assets/shield.png';

  thirdPartyOptions = [];

  constructor(
    private router: Router
  ) { }

  onThirdPartyClick(type: string) {}

  onSubmitForm(user: User) {}

  onLoginClick() {
    this.router.navigate(['auth/login'],);
  }

  onForgotPasswordClick() {
    this.router.navigate(['auth/forgot-password'])
  }
}
