
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
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
