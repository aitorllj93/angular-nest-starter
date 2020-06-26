
import { moduleMetadata } from '@storybook/angular';
import { DemoModule } from '../app/demo/demo.module';
import { MdcSnackbar } from '@angular-mdc/web';

export default {
  title: 'UI - Snackbar',
  decorators: [
    moduleMetadata({
      imports: [
        DemoModule
      ],
      providers: [
        MdcSnackbar
      ]
    })
  ]
}

export const Snackbar = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-demo-snackbar-button></app-demo-snackbar-button>
    </div>
  `
});
