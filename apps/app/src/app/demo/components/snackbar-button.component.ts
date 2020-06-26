
import { Component } from '@angular/core';
import { MdcSnackbar } from '@angular-mdc/web';

interface CustomClasses {
  classes: string | string[];
  actionClasses: string | string[];
  dismissClasses: string | string[];
}

@Component({
  selector: 'app-demo-snackbar-button',
  template: `
    <button mdc-button raised (click)="simple()">Simple</button>

    <button mdc-button raised (click)="withAction()">With Action</button>

    <button mdc-button raised (click)="dismissIcon()">Dismiss Icon</button>

    <button mdc-button raised (click)="dismissIconOnly()">Icon Only</button>

    <button mdc-button raised (click)="stacked()">Stacked</button>

    <button mdc-button raised (click)="maxTimeout()">Max Timeout</button>

    <button mdc-button raised (click)="openLeading()">Leading</button>

    <button mdc-button raised (click)="openTrailing()">Trailing</button>

    <button mdc-button raised (click)="openRtl()">RTL</button>

    <button mdc-button raised (click)="openCustom({classes: 'custom-snackbar--shape-radius'})">Shaped</button>

    <button mdc-button raised (click)="openCustom({classes: 'custom-snackbar--elevation'})">Elevation</button>

    <button mdc-button raised (click)="openCustom({classes: 'custom-snackbar--viewport-margin'})">Viewport Margin</button>

    <button mdc-button raised (click)="openCustom({classes: 'custom-snackbar--max-width'})">Max-Width</button>

    <button mdc-button raised (click)="openCustom({classes: 'custom-snackbar--min-width'})">Min-Width</button>

    <button mdc-button raised
      (click)="openCustom({classes: 'custom-snackbar--fill-color'})">Fill Color</button>

    <button mdc-button raised
      (click)="openCustom({classes: 'custom-snackbar--label-ink-color'})">Ink Color</button>

    <button mdc-button raised
      (click)="openCustom({classes: ['custom-snackbar--fill-color', 'custom-snackbar--label-ink-color']})">Fill/Ink Color</button>

    <button mdc-button raised
      (click)="openCustom({actionClasses: 'mdc-button--outlined'})">Action Outlined</button>

    <button mdc-button raised
      (click)="openCustom({dismissClasses: 'demo-icon-button-custom'})">Custom Dismiss Icon</button>
  `,
  styles: [
    `
      button {
        display: inline-block;
        margin: 5px;
      }
    `
  ]
})
export class DemoSnackbarButtonComponent {

  constructor(private snackbar: MdcSnackbar) { }

  simple() {
    const snackbarRef = this.snackbar.open('Marked as favorite.');
    snackbarRef.afterDismiss().subscribe(reason => {
      console.log(reason);
    });
  }

  withAction() {
    const snackbarRef = this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, 'Retry');
    snackbarRef.afterDismiss().subscribe(reason => {
      console.log(reason);
    });
  }

  dismissIcon() {
    const snackbarRef = this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, 'Retry', {
      dismiss: true
    });

    snackbarRef.afterDismiss().subscribe(reason => {
      console.log(reason);
    });
  }

  dismissIconOnly() {
    this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, undefined, {
      dismiss: true
    });
  }

  stacked() {
    const snackbarRef = this.snackbar.open(
      `This item already has the label "travel". You can add a new label.`,
      'Add a new label', {
        stacked: true,
        dismiss: true
      });

    snackbarRef.afterDismiss().subscribe(reason => {
      console.log(reason);
    });
  }

  maxTimeout() {
    const snackbarRef = this.snackbar.open(`Can't send photo. Retry in 10 seconds.`, 'Retry', {
      timeoutMs: 10000
    });

    snackbarRef.afterDismiss().subscribe(reason => {
      console.log(reason);
    });
  }

  openLeading(): void {
    this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, 'Retry', {
      leading: true
    });
  }

  openTrailing(): void {
    this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, 'Retry', {
      trailing: true
    });
  }

  openRtl(): void {
    this.snackbar.open('My content is right to left', 'Ok', {
      direction: 'rtl'
    });
  }

  openCustom(customClasses: CustomClasses) {
    this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, 'Retry', {
      dismiss: true,
      classes: customClasses.classes,
      actionClasses: customClasses.actionClasses,
      dismissClasses: customClasses.dismissClasses
    });
  }
}
