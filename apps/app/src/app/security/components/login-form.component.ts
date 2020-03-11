
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login-form',
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

        <button mdc-button class="button-primary" [disabled]="!form.valid">Log In</button>
      </form>
    </mdc-card>
  `
})

export class LoginFormComponent {

  @Input() thirdPartyOptions: {
    label: string;
    value: string;
    icon?: string;
    color?: string;
  }[] = [];

  @Output() thirdPartyClick = new EventEmitter<string>();
  @Output() submitForm = new EventEmitter<User>();

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
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
}
