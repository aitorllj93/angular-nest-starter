
import { moduleMetadata } from '@storybook/angular';
import { PeopleModule } from '../app/people/people.module';
import { MdcIconRegistry } from '@angular-mdc/web';
import { linkTo } from '@storybook/addon-links';


export default {
  title: 'Feature - People',
  decorators: [
    moduleMetadata({
      imports: [
        PeopleModule
      ],
      providers: [
        MdcIconRegistry
      ]
    })
  ]
}


export const PersonIdentificationList = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-person-identification-list (rowClick)="rowClick($event)"></app-person-identification-list>
    </div>
  `,
  props: {
    rowClick: linkTo('Feature - People', 'Person Identification Card')
  }
})

export const PersonIdentificationCard = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-person-identification-card></app-person-identification-card>
    </div>
  `
})
