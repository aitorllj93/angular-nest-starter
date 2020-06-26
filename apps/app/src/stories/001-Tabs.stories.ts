
import { moduleMetadata } from '@storybook/angular';
import { MdcTabBarModule, MdcIconModule, MdcIconRegistry } from '@angular-mdc/web';

export default {
  title: 'UI - Tabs',
  decorators: [
    moduleMetadata({
      imports: [
        MdcTabBarModule,
        MdcIconModule
      ],
      providers: [MdcIconRegistry]
    })
  ]
}

export const Tabs = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-tab-bar>
        <mdc-tab-scroller>
          <mdc-tab>
            <mdc-icon mdcTabIcon fontSet="mdi" fontIcon="mdi-heart"></mdc-icon>
            <mdc-tab-label>Favorites</mdc-tab-label>
          </mdc-tab>
          <mdc-tab>
            <mdc-icon mdcTabIcon fontSet="mdi" fontIcon="mdi-airplane"></mdc-icon>
            <mdc-tab-label>Flights</mdc-tab-label>
          </mdc-tab>
          <mdc-tab>
            <mdc-icon mdcTabIcon fontSet="mdi" fontIcon="mdi-bed"></mdc-icon>
            <mdc-tab-label>Hotel</mdc-tab-label>
          </mdc-tab>
        </mdc-tab-scroller>
      </mdc-tab-bar>
    </div>
  `
});
