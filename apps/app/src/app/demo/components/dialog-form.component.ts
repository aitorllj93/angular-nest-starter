
import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';

@Component({
  selector: 'app-demo-dialog-form',
  template: `
    <mdc-dialog>
      <mdc-dialog-container>
        <mdc-dialog-surface>
          <mdc-dialog-title>Create profile</mdc-dialog-title>
          <mdc-dialog-content>
            <form [formGroup]="profileForm" id="profileForm" (ngSubmit)="submit()" autocomplete="off">
              <mdc-form-field fluid>
                <mdc-text-field formControlName="first" label="First name" outlined></mdc-text-field>
                <mdc-helper-text persistent validation>*Required</mdc-helper-text>
              </mdc-form-field>
              <mdc-form-field fluid>
                <mdc-text-field formControlName="last" label="Last name" outlined></mdc-text-field>
                <mdc-helper-text persistent validation>*Required</mdc-helper-text>
              </mdc-form-field>
              <mdc-form-field fluid>
                <mdc-text-field type="email" formControlName="email" label="Email" maxlength="254"
                outlined></mdc-text-field>
                <mdc-helper-text validation>*Required</mdc-helper-text>
              </mdc-form-field>
            </form>
          </mdc-dialog-content>
          <mdc-dialog-actions>
            <button mdcDialogButton mdcDialogAction="close">Cancel</button>
            <button mdcDialogButton form="profileForm">Create</button>
          </mdc-dialog-actions>
        </mdc-dialog-surface>
      </mdc-dialog-container>
    </mdc-dialog>
  `
})

export class DemoDialogFormComponent {

  constructor(
    public dialogRef: MdcDialogRef<DemoDialogFormComponent>,
    @Inject(MDC_DIALOG_DATA) public data: any
  ) { }

  profileForm = new FormGroup({
    first: new FormControl('', Validators.required),
    last: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  submit(): void {
    if (this.profileForm.invalid) {
      return;
    }

    this.dialogRef.close();
  }
}
