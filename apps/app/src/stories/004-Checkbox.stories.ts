

import { moduleMetadata } from '@storybook/angular';

import {
  MdcCheckboxModule, MdcFormFieldModule
} from '@angular-mdc/web';

export default {
  title: 'UI - Checkbox',
  decorators: [
    moduleMetadata({
      imports: [
        MdcCheckboxModule,
        MdcFormFieldModule,
      ],
      providers: [
        // MdcIconRegistry
      ]
    }),
  ],
};

export const Checkbox = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-checkbox></mdc-checkbox>

      <mdc-checkbox checked></mdc-checkbox>

      <mdc-checkbox disabled></mdc-checkbox>

      <mdc-checkbox checked disabled></mdc-checkbox>

      <mdc-checkbox indeterminate></mdc-checkbox>

      <mdc-checkbox indeterminate indeterminateToChecked="false"></mdc-checkbox>
    </div>
  `
});

Checkbox.story = {
  name: 'Checkbox'
};

export const CheckboxLabel = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-form-field>
        <mdc-checkbox></mdc-checkbox>
        <label>Label</label>
      </mdc-form-field>
      <br/>
      <mdc-form-field>
        <mdc-checkbox disabled></mdc-checkbox>
        <label>Disabled</label>
      </mdc-form-field>
      <br/>
      <mdc-form-field alignEnd>
        <mdc-checkbox></mdc-checkbox>
        <label>Label (RTL)</label>
      </mdc-form-field>
    </div>
  `
})

CheckboxLabel.story = {
  name: 'Labeled Checkbox'
}

export const CheckboxTheme = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-form-field>
        <mdc-checkbox class="demo-checkbox--custom-all"></mdc-checkbox>
        <label>Custom Stroke/Fill/Ink</label>
      </mdc-form-field>

      <mdc-form-field>
        <mdc-checkbox class="demo-checkbox--custom-stroke-and-fill"></mdc-checkbox>
        <label>Custom Stroke and Fill</label>
      </mdc-form-field>
    </div>
  `
})

CheckboxTheme.story = {
  name: 'Themed Checkbox'
}

