
import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FieldIsSameValidator } from '../../ui/forms/validators/field-is-same.validator';

@Component({
  selector: 'app-reset-password-form',
  template: `
    <mdc-card  style="padding: 1em;">

      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <mdc-form-field fluid>
          <mdc-text-field label="New Password" outlined formControlName="password" type="password">
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

        <button mdc-button class="button-primary" [disabled]="!form.valid">Reset Password</button>
      </form>
    </mdc-card>
  `
})
export class ResetPasswordFormComponent {

  @Output() submitForm = new EventEmitter<{
    password: string;
    repeatPassword: string;
  }>();

  form = new FormGroup({
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', [Validators.required, FieldIsSameValidator()]),
  });

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    this.submitForm.emit(this.form.value);
  }
}
