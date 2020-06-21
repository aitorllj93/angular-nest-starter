
import { moduleMetadata } from '@storybook/angular';
import { MdcFormFieldModule, MdcTextFieldModule, ErrorStateMatcher, MdcCheckboxModule, MdcSwitchModule, MdcRadioModule } from '@angular-mdc/web';


export default {
  title: 'UI - Form Field',
  decorators: [
    moduleMetadata({
      imports: [
        MdcFormFieldModule,
        MdcTextFieldModule,
        MdcCheckboxModule,
        MdcSwitchModule,
        MdcRadioModule,
      ],
      providers: [
        ErrorStateMatcher
      ]
    })
  ]
}

export const Fluid = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-form-field fluid>
        <mdc-text-field label="Fluid example"></mdc-text-field>
      </mdc-form-field>
    </div>
  `
});

export const NoWrap = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-form-field nowrap>
        <mdc-checkbox></mdc-checkbox>
        <label>This some really really really long text</label>
      </mdc-form-field>
    </div>
  `
});

export const SpaceBetween = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-form-field spaceBetween>
        <mdc-switch></mdc-switch>
        <label>off/on</label>
      </mdc-form-field>
    </div>
  `
});

export const Checkbox = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-form-field>
        <mdc-checkbox></mdc-checkbox>
        <label>Checkbox</label>
      </mdc-form-field>
    </div>
  `
});

export const Radio = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-form-field>
        <mdc-radio></mdc-radio>
        <label>Radio</label>
      </mdc-form-field>
    </div>
  `
});


export const Switch = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-form-field>
        <mdc-switch></mdc-switch>
        <label>off/on</label>
      </mdc-form-field>
    </div>
  `
});
