
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-form',
  template: `
    <mdc-card  style="padding: 1em;">

      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <ng-container *ngIf="logoUrl">
          <img class="security-logo" [src]="logoUrl">
        </ng-container>

        <mdc-form-field fluid>
          <mdc-text-field label="Email" outlined formControlName="email">
            <mdc-icon mdcTextFieldIcon leading fontSet="mdi" fontIcon="mdi-email"></mdc-icon>
          </mdc-text-field>
          <mdc-helper-text validation>
            <span *ngIf="form.controls['email'].hasError('required')">Email is required</span>
            <span *ngIf="form.controls['email'].hasError('email')">Input must be an email</span>
          </mdc-helper-text>
        </mdc-form-field>

        <button mdc-button class="button-primary" [disabled]="!form.valid">Reset Password</button>

      </form>

    </mdc-card>
  `
})

export class ForgotPasswordFormComponent {

  @Input() logoUrl = null;

  @Output() submitForm = new EventEmitter<{ email: string }>();

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    this.submitForm.emit(this.form.value);
  }
}
