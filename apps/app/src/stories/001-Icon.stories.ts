
import { moduleMetadata } from '@storybook/angular';
import { MdcIconRegistry, MdcIconModule, MdcIconButtonModule } from '@angular-mdc/web';


export default {
  title: 'UI - Icon',
  decorators: [
    moduleMetadata({
      imports: [
        MdcIconModule,
        MdcIconButtonModule
      ],
      providers: [
        MdcIconRegistry
      ]
    })
  ]
}

export const MaterialIcons = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-icon fontSet="mdi" fontIcon="mdi-home"></mdc-icon>
    </div>
  `
});


export const MaterialIconsTheme = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-icon class="demo-icon-custom-colors" fontSet="mdi" fontIcon="mdi-home"></mdc-icon>
    </div>
  `
});

export const SVGIcon = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
        </svg>
      </mdc-icon>
    </div>
  `
});


export const Inline = () => ({
  template: `
    <div class="storybook-wrapper">
      <p>
        My <span>dog</span>
        <mdc-icon fontSet="mdi" fontIcon="mdi-paw" inline></mdc-icon> is my
        <span>favorite</span>
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart" inline></mdc-icon>,
        he loves to go on <span>walks</span>
        <mdc-icon fontSet="mdi" fontIcon="mdi-walk" inline></mdc-icon>
      </p>
    </div>
  `
});

export const IconButton = () => ({
  template: `
    <div class="storybook-wrapper">
      <button mdc-icon-button>
        <mdc-icon fontSet="mdi" fontIcon="mdi-chevron-left"></mdc-icon>
      </button>

      <button mdc-icon-button>
        <mdc-icon fontSet="mdi" fontIcon="mdi-chevron-right"></mdc-icon>
      </button>

      <button mdcIconButton>
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart"></mdc-icon>
      </button>
    </div>
  `
});

export const IconToggle = () => ({
  template: `
    <div class="storybook-wrapper">
      <button mdcIconButton>
        <mdc-icon fontSet="mdi" fontIcon="mdi-star" mdcIconOn></mdc-icon>
        <mdc-icon fontSet="mdi" fontIcon="mdi-star-outline"></mdc-icon>
      </button>
    </div>
  `
});

export const Theme = () => ({
  template: `
    <div class="storybook-wrapper">
      <button mdcIconButton class="demo-icon-button-custom">
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart" mdcIconOn></mdc-icon>
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart-outline"></mdc-icon>
      </button>
      <button mdcIconButton class="demo-icon-button-primary">
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart" mdcIconOn></mdc-icon>
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart-outline"></mdc-icon>
      </button>
      <button mdcIconButton class="demo-icon-button-secondary">
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart" mdcIconOn></mdc-icon>
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart-outline"></mdc-icon>
      </button>
    </div>
  `
});
