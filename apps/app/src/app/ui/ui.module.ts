
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
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
