
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
  MdcTextFieldModule,
  MdcTopAppBarModule,
  MdcDrawerModule,
  MdcListModule
} from '@angular-mdc/web';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule } from '@swimlane/ngx-charts';
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
    MdcDrawerModule,
    MdcFormFieldModule,
    MdcListModule,
    MdcTextFieldModule,
    MdcTopAppBarModule,

    NgxDatatableModule,
    NgxChartsModule,
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
    MdcDrawerModule,
    MdcFormFieldModule,
    MdcListModule,
    MdcTextFieldModule,
    MdcTopAppBarModule,

    NgxDatatableModule,
    NgxChartsModule,
    NgSelectModule
  ],
  providers: [],
})
export class UIModule { }
