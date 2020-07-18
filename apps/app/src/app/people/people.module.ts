

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdcCardModule, MdcIconModule, MdcSliderModule } from '@angular-mdc/web';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PersonIdentificationCardComponent } from './components/person-identification-card.component';
import { PersonIdentificationListComponent } from './components/person-identification-list.component';
import { PersonAttributesCardComponent } from './components/person-attributes-card.component';
import { PersonDetailsComponent } from './components/person-details.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdcCardModule,
    MdcIconModule,
    MdcSliderModule,
    NgxDatatableModule,
  ],
  exports: [
    PersonIdentificationCardComponent,
    PersonIdentificationListComponent,
    PersonAttributesCardComponent,
    PersonDetailsComponent,
  ],
  declarations: [
    PersonIdentificationCardComponent,
    PersonIdentificationListComponent,
    PersonAttributesCardComponent,
    PersonDetailsComponent,
  ],
  providers: [],
})
export class PeopleModule { }
