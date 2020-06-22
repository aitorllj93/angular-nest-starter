
import { moduleMetadata } from '@storybook/angular';
import { MdcFormFieldModule, MdcTextFieldModule, ErrorStateMatcher } from '@angular-mdc/web';

export default {
  title: 'UI - Textarea',
  decorators: [
    moduleMetadata({
      imports: [
        MdcTextFieldModule,
        MdcFormFieldModule,
      ],
      providers: [ErrorStateMatcher]
    })
  ]
}

export const Textarea = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-textarea label="Comments" rows="4" cols="40" required
        helper="Helper text" validationMessage="Comments are required"></mdc-textarea>
    </div>
  `
});

export const TextareaNoLabel = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-textarea rows="2" cols="20"></mdc-textarea>
    </div>
  `
});


export const FullWidthTextarea = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-textarea label="Type your message here" fullwidth required
        rows="4" helper="Helper text" validationMessage="Message required"></mdc-textarea>
    </div>
  `
});
