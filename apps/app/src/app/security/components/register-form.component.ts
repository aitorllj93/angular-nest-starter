
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { FieldIsSameValidator } from '../../ui/forms/validators/field-is-same.validator';

@Component({
  selector: 'app-register-form',
  template: `
    <mdc-card  style="padding: 1em;">

      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <div class="third-party-container" style="margin: 0 auto; display: table;">
          <button mdc-button type="button" *ngFor="let option of thirdPartyOptions" style="margin: 0 0 0.5em;"
            (click)="onThirdPartyClick(option.value)" [ngClass]="option.color">
            <mdc-icon mdcListItemGraphic *ngIf="option.icon" fontSet="mdi" fontIcon="mdi-{{option.icon}}"></mdc-icon>
            {{ option.label }}
          </button>
        </div>

        <mdc-form-field fluid>
          <mdc-text-field label="Username" outlined formControlName="username">
            <mdc-icon mdcTextFieldIcon leading fontSet="mdi" fontIcon="mdi-account"></mdc-icon>
          </mdc-text-field>
          <mdc-helper-text validation>
            <span *ngIf="form.controls['username'].hasError('required')">Username is required</span>
          </mdc-helper-text>
        </mdc-form-field>

        <mdc-form-field fluid>
          <mdc-text-field label="Password" outlined formControlName="password" type="password">
            <mdc-icon mdcTextFieldIcon leading fontSet="mdi" fontIcon="mdi-key"></mdc-icon>
          </mdc-text-field>
          <mdc-helper-text validation>
            <span *ngIf="form.controls['password'].hasError('required')">Password is required</span>
          </mdc-helper-text>
        </mdc-form-field>

        <mdc-form-field fluid>
          <mdc-text-field label="Repeat Password" outlined formControlName="repeatPassword" type="password">
            <mdc-icon mdcTextFieldIcon leading fontSet="mdi" fontIcon="mdi-key"></mdc-icon>
          </mdc-text-field>
          <mdc-helper-text validation>
            <span *ngIf="form.controls['repeatPassword'].hasError('required')">Repeat password is required</span>
            <span *ngIf="form.controls['repeatPassword'].hasError('fieldIsNotSame')">Password is not same</span>
          </mdc-helper-text>
        </mdc-form-field>

        <div class="form-button-container" style="margin: 0 auto; display: table;">
          <button mdc-button [disabled]="!form.valid" style="margin: 0.5em;">Register</button>
          <button mdc-button type="button" style="margin: 0.5em;" (click)="onLoginClick()">Login</button>
          <button mdc-button type="button" style="margin: 0.5em;" (click)="onForgotPasswordClick()">Forgot Password</button>
        </div>
      </form>
    </mdc-card>


  `
})
export class RegisterFormComponent {

  @Input() thirdPartyOptions: {
    label: string;
    value: string;
    icon?: string;
    color?: string;
  }[] = [];

  @Output() thirdPartyClick = new EventEmitter<string>();
  @Output() submitForm = new EventEmitter<User>();
  @Output() loginClick = new EventEmitter();
  @Output() forgotPasswordClick = new EventEmitter();

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', [Validators.required, FieldIsSameValidator()])
  });

  onThirdPartyClick(value: string) {
    this.thirdPartyClick.emit(value);
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    this.submitForm.emit(this.form.value);
  }

  onLoginClick() {
    this.loginClick.emit();
  }

  onForgotPasswordClick() {
    this.forgotPasswordClick.emit();
  }
}
