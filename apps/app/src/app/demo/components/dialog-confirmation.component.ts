
import { Component, OnInit, Inject } from '@angular/core';
import { MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';

@Component({
  selector: 'app-demo-dialog-confirmation',
  template: `
    <mdc-dialog>
      <mdc-dialog-container>
        <mdc-dialog-surface>
          <mdc-dialog-title>Phone ringtone</mdc-dialog-title>
          <mdc-dialog-content>
            <mdc-list>
              <mdc-list-item>
                <mdc-radio mdcListItemGraphic name="demo-radio-set" checked></mdc-radio>
                Never Gonna Give You Up
              </mdc-list-item>
              <mdc-list-item>
                <mdc-radio mdcListItemGraphic name="demo-radio-set"></mdc-radio>
                Hot Cross Buns
              </mdc-list-item>
              <mdc-list-item>
                <mdc-radio mdcListItemGraphic name="demo-radio-set"></mdc-radio>
                None
              </mdc-list-item>
            </mdc-list>
          </mdc-dialog-content>
          <mdc-dialog-actions>
            <button mdcDialogButton mdcDialogAction="close">Cancel</button>
            <button mdcDialogButton default mdcDialogAction="accept">Ok</button>
          </mdc-dialog-actions>
        </mdc-dialog-surface>
      </mdc-dialog-container>
    </mdc-dialog>
  `
})

export class DemoDialogConfirmationComponent implements OnInit {

  constructor(
    public dialogRef: MdcDialogRef<DemoDialogConfirmationComponent>,
    @Inject(MDC_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() { }
}
