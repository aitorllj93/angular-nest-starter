
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MdcElevationModule,
  MdcRippleModule,
  MdcTypographyModule,
  MdcButtonModule,
  MdcIconButtonModule,
  MdcCardModule,
  MdcFormFieldModule,
  MdcTextFieldModule
} from '@angular-mdc/web';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MdcElevationModule,
    MdcRippleModule,
    MdcTypographyModule,

    MdcButtonModule,
    MdcIconButtonModule,
    MdcCardModule,
    MdcFormFieldModule,
    MdcTextFieldModule,

    NgxDatatableModule,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MdcElevationModule,
    MdcRippleModule,
    MdcTypographyModule,

    MdcButtonModule,
    MdcIconButtonModule,
    MdcCardModule,
    MdcFormFieldModule,
    MdcTextFieldModule,

    NgxDatatableModule,
    NgSelectModule
  ],
  providers: [],
})
export class UIModule { }
