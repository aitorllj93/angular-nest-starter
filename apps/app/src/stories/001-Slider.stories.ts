
import { moduleMetadata } from '@storybook/angular';
import { MdcSliderModule } from '@angular-mdc/web';

export default {
  title: 'UI - Slider',
  decorators: [
    moduleMetadata({
      imports: [
        MdcSliderModule
      ]
    })
  ]
}

export const Continuous = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-slider [min]="0" [max]="100" value="50"></mdc-slider>
    </div>
  `
});

export const DiscreteWithTickMarks = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-slider discrete markers [min]="0" [max]="100" [step]="5" [value]="20"></mdc-slider>
    </div>
  `
});

export const Theme = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-slider discrete markers class="demo-slider-custom" value="20"></mdc-slider>
    </div>
  `
})
