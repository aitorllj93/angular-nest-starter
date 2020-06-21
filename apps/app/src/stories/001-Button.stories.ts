
import { moduleMetadata } from '@storybook/angular';

import {
  MdcButtonModule,
  MdcIconModule,
  MdcIconRegistry,
} from '@angular-mdc/web';

export default {
  title: 'UI - Button',
  decorators: [
    moduleMetadata({
      imports: [MdcIconModule, MdcButtonModule],
      providers: [MdcIconRegistry]
    }),
  ],
};

export const ButtonStyles = () => ({
  template: `
    <div class="storybook-wrapper">
      <button style="margin: 10px;" mdc-button>Default</button>

      <a style="margin: 10px;" mdc-button href="#/button-demo/examples">Href link</a>

      <a style="margin: 10px;" mdc-button raised href="#/button-demo/examples">Href link</a>

      <button style="margin: 10px;" mdc-button raised>Raised</button>

      <button style="margin: 10px;" mdc-button unelevated>Unelevated</button>

      <button style="margin: 10px;" mdc-button outlined>Outlined</button>

      <button style="margin: 10px;" mdc-button outlined class="thick-outline-button">Thick Outlined</button>

      <button style="margin: 10px;" mdc-button disabled>Disabled</button>

      <button style="margin: 10px;" mdc-button class="button-primary">Primary Color</button>

      <button style="margin: 10px;" mdc-button class="button-secondary">Secondary Color</button>
    </div>
  `
});

ButtonStyles.story = {
  name: 'Button Styles'
};

export const ButtonDensity = () => ({
  template: `
    <div class="storybook-wrapper">
      <button style="margin: 10px;" mdc-button class="density-button">Density (-3)</button>

      <button style="margin: 10px;" mdc-button raised class="density-button">Density (-3)</button>

      <button style="margin: 10px;" mdc-button outlined class="density-button">Density (-3)</button>
    </div>
  `
});

ButtonDensity.story = {
  name: 'Button Density'
};

export const ButtonIcons = () => ({
  template: `
    <div class="storybook-wrapper">
      <button style="margin: 10px;" mdc-button>
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart"></mdc-icon>Icon
      </button>

      <button style="margin: 10px;" mdc-button outlined>
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart"></mdc-icon>Icon
      </button>

      <button style="margin: 10px;" mdc-button raised class="button-primary">
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart"></mdc-icon>Icon
      </button>

      <button style="margin: 10px;" mdc-button raised class="button-secondary">
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart"></mdc-icon>Icon
      </button>

      <button style="margin: 10px;" mdc-button raised>
        <mdc-icon>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M23 12c0-6.07-4.93-11-11-11S1 5.93 1 12s4.93 11 11 11 11-4.93 11-11zM5 17.64C3.75 16.1 3
            14.14 3 12c0-2.13.76-4.08 2-5.63v11.27zM17.64 5H6.36C7.9 3.75 9.86 3 12 3s4.1.75 5.64 2zM12 14.53L8.24
            7h7.53L12 14.53zM17 9v8h-4l4-8zm-6 8H7V9l4 8zm6.64 2c-1.55 1.25-3.51 2-5.64 2s-4.1-.75-5.64-2h11.28zM21
            12c0 2.14-.75 4.1-2 5.64V6.37c1.24 1.55 2 3.5 2 5.63z" />
          </svg>
        </mdc-icon>
        SVG Icon
      </button>

      <button style="margin: 10px;" mdc-button>
        <span mdcButtonLabel>Trailing Icon</span>
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart"></mdc-icon>
      </button>

      <button style="margin: 10px;" mdc-button raised class="button-primary">
        <mdc-button-label>Trailing Icon</mdc-button-label>
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart"></mdc-icon>
      </button>

      <button style="margin: 10px;" mdc-button outlined label="Trailing Icon">
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart"></mdc-icon>
      </button>
    </div>
  `
});

ButtonIcons.story = {
  name: 'Button Icons'
};

export const ButtonThemes = () => ({
  template: `
    <div class="storybook-wrapper">
      <button style="margin: 10px;" mdc-button unelevated class="button-ink-color">
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart"></mdc-icon>Ink Color
      </button>

      <button style="margin: 10px;" mdc-button outlined class="button-icon-color">
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart"></mdc-icon>Icon Color
      </button>
    </div>
  `
});

ButtonThemes.story = {
  name: 'Button Themes'
};

export const ButtonShaped = () => ({
  template: `
    <div class="storybook-wrapper">
      <button style="margin: 10px;" mdc-button unelevated class="big-round-shape-button">Corner Radius</button>

      <button style="margin: 10px;" mdc-button raised class="big-round-shape-button">
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart"></mdc-icon>Icon
      </button>
    </div>
  `
});

ButtonShaped.story = {
  name: 'Button Shaped'
};
