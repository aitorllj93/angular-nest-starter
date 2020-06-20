
import { Component, OnInit } from '@angular/core';
import { MdcDialogRef } from '@angular-mdc/web';

@Component({
  selector: 'app-demo-dialog-alert',
  template: `
    <mdc-dialog>
      <mdc-dialog-container>
        <mdc-dialog-surface>
          <mdc-dialog-title>Discard draft?</mdc-dialog-title>
          <mdc-dialog-actions>
            <button mdcDialogButton mdcDialogAction="close">Cancel</button>
            <button mdcDialogButton mdcDialogAction="accept">Discard</button>
          </mdc-dialog-actions>
        </mdc-dialog-surface>
      </mdc-dialog-container>
    </mdc-dialog>
  `
})

export class DemoDialogAlertComponent implements OnInit {

  constructor(public dialogRef: MdcDialogRef<DemoDialogAlertComponent>) { }

  ngOnInit() { }
}
