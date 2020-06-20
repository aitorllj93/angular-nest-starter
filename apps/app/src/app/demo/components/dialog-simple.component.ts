
import { Component, OnInit } from '@angular/core';
import { MdcDialogRef } from '@angular-mdc/web';

@Component({
  selector: 'app-demo-dialog-simple',
  template: `
    <mdc-dialog>
      <mdc-dialog-container>
        <mdc-dialog-surface>
          <mdc-dialog-title>Select an account</mdc-dialog-title>
          <mdc-dialog-content>
            <mdc-list avatar>
              <mdc-list-item (click)="closeDialog()" cdkInitialFocus>
                <mdc-icon fontSet="mdi" fontIcon="mdi-account" mdcListItemGraphic></mdc-icon>username@gmail.com
              </mdc-list-item>
              <mdc-list-item (click)="closeDialog()">
                <mdc-icon fontSet="mdi" fontIcon="mdi-account" mdcListItemGraphic></mdc-icon>user02@gmail.com
              </mdc-list-item>
              <mdc-list-item (click)="closeDialog()">
                <mdc-icon fontSet="mdi" fontIcon="mdi-account-plus" mdcListItemGraphic></mdc-icon>add account
              </mdc-list-item>
            </mdc-list>
          </mdc-dialog-content>
        </mdc-dialog-surface>
      </mdc-dialog-container>
    </mdc-dialog>
  `
})

export class DemoDialogSimpleComponent implements OnInit {

  constructor(public dialogRef: MdcDialogRef<DemoDialogSimpleComponent>) { }

  ngOnInit() { }

  closeDialog(): void {
    this.dialogRef.close('Pizza');
  }
}
