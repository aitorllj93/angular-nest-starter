
import { Component, OnInit, Input } from '@angular/core';
import { MdcDialog } from '@angular-mdc/web';
import { DemoDialogAlertComponent } from './dialog-alert.component';
import { DemoDialogSimpleComponent } from './dialog-simple.component';
import { DemoDialogConfirmationComponent } from './dialog-confirmation.component';
import { DemoDialogFormComponent } from './dialog-form.component';

@Component({
  selector: 'app-demo-dialog-button',
  template: `
    <button *ngIf="dialogType === 'alert'" mdc-button (click)="openAlert()">Open Alert</button>
    <button *ngIf="dialogType === 'confirmation'" mdc-button (click)="openConfirmation()">Open Confirmation</button>
    <button *ngIf="dialogType === 'form'" mdc-button (click)="openForm()">Open Form</button>
    <button *ngIf="dialogType === 'simple'" mdc-button (click)="openSimple()">Open Simple</button>
  `
})

export class DemoDialogButtonComponent implements OnInit {

  @Input() dialogType: 'alert' | 'confirmation' | 'form' | 'simple' = 'alert';

  constructor(public dialog: MdcDialog) { }

  ngOnInit() { }

  openAlert() {
    const dialogRef = this.dialog.open(DemoDialogAlertComponent, {
      escapeToClose: false,
      clickOutsideToClose: false,
      buttonsStacked: false,
      id: 'my-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openConfirmation() {
    const dialogRef = this.dialog.open(DemoDialogConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openForm() {
    const dialogRef = this.dialog.open(DemoDialogFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openSimple() {
    const dialogRef = this.dialog.open(DemoDialogSimpleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
