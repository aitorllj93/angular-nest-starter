

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdcCardModule, MdcIconModule, MdcSliderModule, MdcButtonModule, MdcTypographyModule } from '@angular-mdc/web';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxTippyModule } from 'ngx-tippy-wrapper';

import { PersonIdentificationCardComponent } from './components/person-identification-card.component';
import { PersonIdentificationListComponent } from './components/person-identification-list.component';
import { PersonAttributesCardComponent } from './components/person-attributes-card.component';
import { PersonDetailsComponent } from './components/person-details.component';
import { PersonSkillsCardComponent } from './components/person-skills-card.component';
import { PersonNotesCardComponent } from './components/person-notes-card.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdcButtonModule,
    MdcCardModule,
    MdcIconModule,
    MdcSliderModule,
    MdcTypographyModule,
    NgxDatatableModule,
    NgxTippyModule,
  ],
  exports: [
    PersonIdentificationCardComponent,
    PersonIdentificationListComponent,
    PersonAttributesCardComponent,
    PersonSkillsCardComponent,
    PersonNotesCardComponent,
    PersonDetailsComponent,
  ],
  declarations: [
    PersonIdentificationCardComponent,
    PersonIdentificationListComponent,
    PersonAttributesCardComponent,
    PersonSkillsCardComponent,
    PersonNotesCardComponent,
    PersonDetailsComponent,
  ],
  providers: [],
})
export class PeopleModule { }
