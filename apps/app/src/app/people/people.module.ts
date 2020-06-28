

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdcCardModule, MdcIconModule } from '@angular-mdc/web';

import { PersonIdentificationCardComponent } from './components/person-identification-card.component';
import { PersonIdentificationListComponent } from './components/person-identification-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdcCardModule,
    MdcIconModule,
    NgxDatatableModule,
  ],
  exports: [
    PersonIdentificationCardComponent,
    PersonIdentificationListComponent,
  ],
  declarations: [
    PersonIdentificationCardComponent,
    PersonIdentificationListComponent,
  ],
  providers: [],
})
export class PeopleModule { }
