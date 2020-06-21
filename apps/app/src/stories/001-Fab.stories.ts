import { moduleMetadata } from '@storybook/angular';
import { MdcFabModule, MdcIconModule, MdcIconRegistry } from '@angular-mdc/web';


export default {
  title: 'UI - FAB',
  decorators: [
    moduleMetadata({
      imports: [MdcFabModule, MdcIconModule],
      providers: [MdcIconRegistry]
    })
  ]
}

export const FAB = () => ({
  template: `
    <div class="storybook-wrapper">
      <button mdc-fab>
        <mdc-icon fontSet="mdi" fontIcon="mdi-pencil"></mdc-icon>
      </button>
    </div>
  `
});


export const Mini = () => ({
  template: `
    <div class="storybook-wrapper">
      <button mdc-fab mini>
        <mdc-icon fontSet="mdi" fontIcon="mdi-pencil"></mdc-icon>
      </button>
    </div>
  `
});

export const ExtendedFAB = () => ({
  template: `
    <div class="storybook-wrapper">
      <button mdc-fab extended class="blackFab" style="margin: 5px;">
        <mdc-icon fontSet="mdi" fontIcon="mdi-cart-plus"></mdc-icon>
        Add to cart
      </button>

      <button mdc-fab extended class="blackFab" style="margin: 5px;">
        Create
      </button>

      <button mdc-fab extended label="Save Changes" class="purple500Fab" style="margin: 5px;">
        <mdc-icon fontSet="mdi" fontIcon="mdi-content-save"></mdc-icon>
      </button>

      <button mdc-fab extended style="margin: 5px;">
        <mdc-fab-label>Create</mdc-fab-label>
        <mdc-icon fontSet="mdi" fontIcon="mdi-plus"></mdc-icon>
      </button>

      <button mdc-fab extended class="demo-fab-extended-shape-radius" style="margin: 5px;">
        <mdc-fab-label>Shaped</mdc-fab-label>
        <mdc-icon fontSet="mdi" fontIcon="mdi-plus"></mdc-icon>
      </button>
    </div>
  `
});

export const ExtendedFABFluid = () => ({
  template: `
    <div class="storybook-wrapper">
      <button mdc-fab extended fluid>
        <mdc-icon fontSet="mdi" fontIcon="mdi-cart-plus"></mdc-icon>
        Add to cart
      </button>
    </div>
  `
});

export const Shaped = () => ({
  template: `
    <div class="storybook-wrapper">
      <button mdc-fab class="demo-fab-shaped--one" style="margin: 5px;">
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart-outline"></mdc-icon>
      </button>

      <button mdc-fab mini class="demo-fab-shaped--two" style="margin: 5px;">
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart-outline"></mdc-icon>
      </button>

      <button mdc-fab class="demo-fab-shape-radius" style="margin: 5px;">
        <mdc-icon fontSet="mdi" fontIcon="mdi-heart-outline"></mdc-icon>
      </button>
    </div>
  `
});


export const Themes = () => ({
  template: `
    <div class="storybook-wrapper">
      <button mdc-fab class="red800Fab" style="margin: 5px;">
        <mdc-icon fontSet="mdi" fontIcon="mdi-pencil"></mdc-icon>
      </button>

      <button mdc-fab class="yellow800Fab" style="margin: 5px;">
        <mdc-icon fontSet="mdi" fontIcon="mdi-pencil"></mdc-icon>
      </button>

      <button mdc-fab class="purple500Fab" style="margin: 5px;">
        <mdc-icon fontSet="mdi" fontIcon="mdi-pencil"></mdc-icon>
      </button>
    </div>
  `
});

export const AbsolutePosition = () => ({
  template: `
    <div class="storybook-wrapper">

      <button mdc-fab position='bottomLeft'>
        <mdc-icon fontSet="mdi" fontIcon="mdi-plus"></mdc-icon>
      </button>

      <button mdc-fab position='bottomRight'>
        <mdc-icon fontSet="mdi" fontIcon="mdi-plus"></mdc-icon>
      </button>
    </div>
  `
});
