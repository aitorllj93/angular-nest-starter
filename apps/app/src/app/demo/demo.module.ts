
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdcDialogModule, MdcButtonModule, MdcFormFieldModule, MdcTextFieldModule, MdcListModule, MdcIconModule, MdcRadioModule, MdcIconRegistry, ErrorStateMatcher } from '@angular-mdc/web';

import { DemoDialogButtonComponent } from './components/dialog-button.component';
import { DemoDialogAlertComponent } from './components/dialog-alert.component';
import { DemoDialogSimpleComponent } from './components/dialog-simple.component';
import { DemoDialogConfirmationComponent } from './components/dialog-confirmation.component';
import { DemoDialogFormComponent } from './components/dialog-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdcDialogModule,
    MdcButtonModule,
    MdcFormFieldModule,
    MdcTextFieldModule,
    MdcListModule,
    MdcIconModule,
    MdcRadioModule,
  ],
  exports: [DemoDialogButtonComponent],
  declarations: [
    DemoDialogButtonComponent,
    DemoDialogAlertComponent,
    DemoDialogSimpleComponent,
    DemoDialogConfirmationComponent,
    DemoDialogFormComponent,
  ],
  providers: [MdcIconRegistry, ErrorStateMatcher],
  entryComponents: [
    DemoDialogAlertComponent,
    DemoDialogSimpleComponent,
    DemoDialogConfirmationComponent,
    DemoDialogFormComponent,
  ]
})
export class DemoModule { }
