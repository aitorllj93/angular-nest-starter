

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdcCardModule, MdcIconModule, MdcSliderModule, MdcButtonModule, MdcTypographyModule, MdcFabModule } from '@angular-mdc/web';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PersonIdentificationCardComponent } from './components/person-identification-card.component';
import { PersonIdentificationListComponent } from './components/person-identification-list.component';
import { PersonAttributesCardComponent } from './components/person-attributes-card.component';
import { PersonDetailsComponent } from './components/person-details.component';
import { PersonSkillsCardComponent } from './components/person-skills-card.component';
import { PersonNotesCardComponent } from './components/person-notes-card.component';
import { PersonGenderPieChartComponent } from './components/person-gender-pie-chart.component';
import { PersonDashboardComponent } from './components/person-dashboard.component';
import { PersonAgePieChartComponent } from './components/person-age-pie-chart.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdcButtonModule,
    MdcCardModule,
    MdcFabModule,
    MdcIconModule,
    MdcSliderModule,
    MdcTypographyModule,
    NgxDatatableModule,
    NgxTippyModule,
    NgxSkeletonLoaderModule,
    NgxChartsModule,
  ],
  exports: [
    PersonIdentificationCardComponent,
    PersonIdentificationListComponent,
    PersonAttributesCardComponent,
    PersonSkillsCardComponent,
    PersonNotesCardComponent,
    PersonGenderPieChartComponent,
    PersonAgePieChartComponent,
    PersonDetailsComponent,
    PersonDashboardComponent,
  ],
  declarations: [
    PersonIdentificationCardComponent,
    PersonIdentificationListComponent,
    PersonAttributesCardComponent,
    PersonSkillsCardComponent,
    PersonNotesCardComponent,
    PersonGenderPieChartComponent,
    PersonAgePieChartComponent,
    PersonDetailsComponent,
    PersonDashboardComponent,
  ],
  providers: [],
})
export class PeopleModule { }
