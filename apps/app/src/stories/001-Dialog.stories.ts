
import { moduleMetadata } from '@storybook/angular';

import { DemoModule } from '../app/demo/demo.module';

export default {
  title: 'UI - Dialog',
  decorators: [
    moduleMetadata({
      imports: [DemoModule],
    }),
  ],
};

export const DialogAlert = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-demo-dialog-button dialogType="alert"></app-demo-dialog-button>
    </div>
  `
});

DialogAlert.story = {
  name: 'Dialog Alert'
};

export const DialogSimple = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-demo-dialog-button dialogType="simple"></app-demo-dialog-button>
    </div>
  `
});

DialogSimple.story = {
  name: 'Dialog Simple'
};

export const DialogConfirmation = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-demo-dialog-button dialogType="confirmation"></app-demo-dialog-button>
    </div>
  `
});

DialogConfirmation.story = {
  name: 'Dialog Confirmation'
};

export const DialogForm = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-demo-dialog-button dialogType="form"></app-demo-dialog-button>
    </div>
  `
});

DialogForm.story = {
  name: 'Dialog Form'
};
