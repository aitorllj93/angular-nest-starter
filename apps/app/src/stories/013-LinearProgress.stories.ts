
import { moduleMetadata } from '@storybook/angular';
import { MdcLinearProgressModule } from '@angular-mdc/web';

export default {
  title: 'UI - Linear Progress',
  decorators: [
    moduleMetadata({
      imports: [
        MdcLinearProgressModule
      ]
    })
  ]
}

export const IndeterminateProgress = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-linear-progress></mdc-linear-progress>
    </div>
  `
});

export const DeterminateProgress = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-linear-progress determinate [progress]="0.5" [buffer]="0.75"></mdc-linear-progress>
    </div>
  `
});
