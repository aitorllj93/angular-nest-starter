
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MdcElevationModule,
  MdcRippleModule,
  MdcButtonModule
} from '@angular-mdc/web';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    MdcElevationModule,
    MdcRippleModule,
    MdcButtonModule,

    NgxDatatableModule,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    NgxDatatableModule,
    NgSelectModule
  ],
  providers: [],
})
export class UIModule { }
