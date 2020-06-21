
import { moduleMetadata } from '@storybook/angular';
import { MdcRadioModule, MdcFormFieldModule } from '@angular-mdc/web';
import { text, array } from '@storybook/addon-knobs';

export default {
  title: 'UI - Radio Button',
  decorators: [
    moduleMetadata({
      imports: [
        MdcRadioModule,
        MdcFormFieldModule,
      ]
    })
  ]
}

export const Radio = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-radio></mdc-radio>
    </div>
  `
});

export const FormField = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-form-field>
        <mdc-radio name="demo-radio-set"></mdc-radio>
        <label>Radio 1</label>
      </mdc-form-field>
      <mdc-form-field>
        <mdc-radio name="demo-radio-set"></mdc-radio>
        <label>Radio 2</label>
      </mdc-form-field>
    </div>
  `
});

export const RadioGroup = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-radio-group [(ngModel)]="favoriteSeason">
        <mdc-form-field *ngFor="let season of seasons">
          <mdc-radio [value]="season"></mdc-radio>
          <label>{{season}}</label>
        </mdc-form-field>
      </mdc-radio-group>
      <p>Your favorite season is: {{favoriteSeason}}</p>
    </div>
  `,
  props: {
    favoriteSeason: text('Favorite Season', null),
    seasons: array('Seasons', ['Winter', 'Spring', 'Summer', 'Autumn']),
  }
});
