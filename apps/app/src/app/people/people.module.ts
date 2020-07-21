

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdcCardModule, MdcIconModule, MdcSliderModule } from '@angular-mdc/web';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxTippyModule } from 'ngx-tippy-wrapper';

import { PersonIdentificationCardComponent } from './components/person-identification-card.component';
import { PersonIdentificationListComponent } from './components/person-identification-list.component';
import { PersonAttributesCardComponent } from './components/person-attributes-card.component';
import { PersonDetailsComponent } from './components/person-details.component';
import { PersonSkillsCardComponent } from './components/person-skills-card.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdcCardModule,
    MdcIconModule,
    MdcSliderModule,
    NgxDatatableModule,
    NgxTippyModule,
  ],
  exports: [
    PersonIdentificationCardComponent,
    PersonIdentificationListComponent,
    PersonAttributesCardComponent,
    PersonSkillsCardComponent,
    PersonDetailsComponent,
  ],
  declarations: [
    PersonIdentificationCardComponent,
    PersonIdentificationListComponent,
    PersonAttributesCardComponent,
    PersonSkillsCardComponent,
    PersonDetailsComponent,
  ],
  providers: [],
})
export class PeopleModule { }
