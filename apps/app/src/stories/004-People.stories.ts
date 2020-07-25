
import { moduleMetadata } from '@storybook/angular';
import { PeopleModule } from '../app/people/people.module';
import { MdcIconRegistry } from '@angular-mdc/web';
import { linkTo } from '@storybook/addon-links';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
  title: 'Feature - People',
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        PeopleModule
      ],
      providers: [
        MdcIconRegistry
      ]
    })
  ]
}

export const PersonDashboard = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-person-dashboard></app-person-dashboard>
    </div>
  `
})

export const PersonIdentificationList = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-person-identification-list (rowClick)="rowClick($event)"></app-person-identification-list>
    </div>
  `,
  props: {
    rowClick: linkTo('Feature - People', 'Person Details')
  }
})

export const PersonGenderPieChart = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-person-gender-pie-chart></app-person-gender-pie-chart>
    </div>
  `
})

export const PersonAgePieChart = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-person-age-pie-chart></app-person-age-pie-chart>
    </div>
  `
})

export const PersonDetails = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-person-details></app-person-details>
    </div>
  `
})

export const PersonIdentificationCard = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-person-identification-card></app-person-identification-card>
    </div>
  `
})

export const PersonAttributesCard = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-person-attributes-card></app-person-attributes-card>
    </div>
  `
})

export const PersonSkillsCard = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-person-skills-card></app-person-skills-card>
    </div>
  `
})

export const PersonNotesCard = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-person-notes-card></app-person-notes-card>
    </div>
  `
})
