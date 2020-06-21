
import { moduleMetadata } from '@storybook/angular';
import { MdcSwitchModule, MdcFormFieldModule } from '@angular-mdc/web';

export default {
  title: 'UI - Switch',
  decorators: [
    moduleMetadata({
      imports: [
        MdcSwitchModule,
        MdcFormFieldModule,
      ]
    })
  ]
}

export const Switch = () => ({
  template: `
    <div class="storybook-wrapper" style="display: flex">
      <div style="align-items: center; padding: 6px;">
        <mdc-switch></mdc-switch>
      </div>

      <div style="display: flex; align-items: center; padding: 6px;">
        <mdc-form-field>
          <mdc-switch></mdc-switch>
          <label>off/on</label>
        </mdc-form-field>
      </div>

      <div style="display: flex; align-items: center; padding: 6px;">
        <mdc-form-field>
          <mdc-switch disabled></mdc-switch>
          <label>off/on</label>
        </mdc-form-field>
      </div>

      <div style="display: flex; align-items: center; padding: 6px;">
        <mdc-form-field alignEnd>
          <mdc-switch></mdc-switch>
          <label>RTL</label>
        </mdc-form-field>
      </div>
    </div>
  `
});

export const Theme = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-form-field style="display: block; margin-bottom: 10px;">
        <mdc-switch class="demo-switch--custom"></mdc-switch>
        <label>Custom Theme</label>
      </mdc-form-field>

      <mdc-form-field style="display: block; margin-bottom: 10px;">
        <mdc-switch class="custom-switch--thumb-color"></mdc-switch>
        <label>Thumb Color</label>
      </mdc-form-field>

      <mdc-form-field style="display: block;">
        <mdc-switch class="custom-switch--track-color"></mdc-switch>
        <label>Track Color</label>
      </mdc-form-field>
    </div>
  `
})
