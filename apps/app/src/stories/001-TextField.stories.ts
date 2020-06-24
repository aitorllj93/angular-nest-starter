
import { moduleMetadata } from '@storybook/angular';
import { MdcFormFieldModule, MdcTextFieldModule, ErrorStateMatcher, MdcIconModule, MdcIconRegistry } from '@angular-mdc/web';

export default {
  title: 'UI - TextField',
  decorators: [
    moduleMetadata({
      imports: [
        MdcTextFieldModule,
        MdcFormFieldModule,
        MdcIconModule,
      ],
      providers: [ErrorStateMatcher, MdcIconRegistry]
    })
  ]
}

export const TextField = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-text-field label="Standard" name="txt-field-standard" required
        helper="Helper text" helperPersistent>
      </mdc-text-field>
    </div>
  `
});


export const Numeric = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-text-field type="number" name="demoweight" label="Weight"
        required validationMessage="Field is required"></mdc-text-field>
    </div>
  `
});


export const Date = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-text-field type="date" outlined label="Event date">
        <mdc-icon mdcTextFieldIcon leading fontSet="mdi" fontIcon="mdi-calendar"></mdc-icon>
      </mdc-text-field>
    </div>
  `
});


export const Time = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-text-field type="time" label="Time"></mdc-text-field>
    </div>
  `
});


export const Password = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-text-field type="password" label="Password" required outlined></mdc-text-field>
    </div>
  `
});


export const Color = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-text-field type="color" label="Color" style="width: 6rem;"></mdc-text-field>
    </div>
  `
});


export const NoLabel = () => ({
  template: `
    <div class="storybook-wrapper">
      <div style="margin: 5px;">
        <mdc-form-field>
          <mdc-text-field helper="Helper text"></mdc-text-field>
        </mdc-form-field>
      </div>

      <div style="margin: 5px;">
        <mdc-form-field>
          <mdc-text-field outlined helper="Helper text" helperPersistent></mdc-text-field>
        </mdc-form-field>
      </div>

      <div style="margin: 5px;">
        <mdc-form-field>
          <mdc-text-field outlined class="demo-shaped-text-field--outline"
          helper="Helper text" helperPersistent></mdc-text-field>
        </mdc-form-field>
      </div>

      <div style="margin: 5px;">
        <mdc-form-field>
          <mdc-text-field outlined required helper="Required with no label"></mdc-text-field>
        </mdc-form-field>
      </div>
    </div>
  `
});


export const LeadingAndTrailingIcons = () => ({
  template: `
    <div class="storybook-wrapper">
      <div style="margin: 5px;">
        <mdc-text-field autocomplete="tel" type="tel" label="Phone number">
          <mdc-icon mdcTextFieldIcon leading fontSet="mdi" fontIcon="mdi-phone"></mdc-icon>
          <mdc-icon mdcTextFieldIcon trailing fontSet="mdi" fontIcon="mdi-calendar"></mdc-icon>
        </mdc-text-field>
      </div>

      <div style="margin: 5px;">
        <mdc-text-field type="date" outlined label="Event date">
          <mdc-icon mdcTextFieldIcon leading fontSet="mdi" fontIcon="mdi-calendar"></mdc-icon>
        </mdc-text-field>
      </div>

      <div style="margin: 5px;">
        <mdc-text-field type="date" outlined label="Event date">
          <mdc-icon mdcTextFieldIcon trailing fontSet="mdi" fontIcon="mdi-calendar"></mdc-icon>
        </mdc-text-field>
      </div>

      <div style="margin: 5px;">
        <mdc-text-field disabled label="Disabled">
          <mdc-icon mdcTextFieldIcon leading fontSet="mdi" fontIcon="mdi-calendar"></mdc-icon>
        </mdc-text-field>
      </div>
    </div>
  `
});


export const Density = () => ({
  template: `
    <div class="storybook-wrapper">
      <div style="margin: 5px;">
        <mdc-text-field class="demo-density-text-field" label="Density"></mdc-text-field>
      </div>

      <div style="margin: 5px;">
        <mdc-text-field class="demo-density-outlined-text-field" outlined label="Density"></mdc-text-field>
      </div>

      <div style="margin: 5px;">
        <mdc-text-field class="demo-density-outlined-text-field-with-leading-icon" outlined label="Event date">
          <mdc-icon mdcTextFieldIcon leading fontSet="mdi" fontIcon="mdi-calendar"></mdc-icon>
        </mdc-text-field>
      </div>
    </div>
  `
});


export const Shape = () => ({
  template: `
    <div class="storybook-wrapper">
      <div style="margin: 5px;">
        <mdc-text-field label="Standard" required class="demo-text-field-custom-colors"></mdc-text-field>
      </div>

      <div style="margin: 5px;">
        <mdc-text-field label="Standard" class="demo-shaped-text-field"></mdc-text-field>
      </div>

      <div style="margin: 5px;">
        <mdc-text-field label="Standard" outlined class="demo-shaped-text-field--outline"></mdc-text-field>
      </div>
    </div>
  `
});


export const FullWidth = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-text-field label="Subject" fullwidth></mdc-text-field>
    </div>
  `
});

