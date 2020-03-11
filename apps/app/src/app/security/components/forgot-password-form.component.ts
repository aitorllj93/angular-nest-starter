
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-form',
  template: `
    <mdc-card  style="padding: 1em;">

      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <mdc-form-field fluid>
          <mdc-text-field label="Email" outlined formControlName="email">
            <mdc-icon mdcTextFieldIcon leading fontSet="mdi" fontIcon="mdi-email"></mdc-icon>
          </mdc-text-field>
          <mdc-helper-text validation>
            <span *ngIf="form.controls['email'].hasError('required')">Email is required</span>
          </mdc-helper-text>
        </mdc-form-field>

        <button mdc-button class="button-primary" [disabled]="!form.valid">Reset Password</button>

      </form>

    </mdc-card>
  `
})

export class ForgotPasswordFormComponent {

  @Output() submitForm = new EventEmitter<{ email: string }>();

  form = new FormGroup({
    email: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    this.submitForm.emit(this.form.value);
  }
}
