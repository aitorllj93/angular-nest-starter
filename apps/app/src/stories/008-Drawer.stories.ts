import { moduleMetadata } from '@storybook/angular';
import { MdcListModule, MdcIconModule, MdcDrawerModule, MdcIconRegistry } from '@angular-mdc/web';
import { object } from '@storybook/addon-knobs';


export default {
  title: 'UI - Drawer',
  decorators: [
    moduleMetadata({
      imports: [MdcListModule, MdcIconModule, MdcDrawerModule],
      providers: [MdcIconRegistry]
    })
  ]
}

export const Drawer = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-drawer>
        <mdc-drawer-header title="Drawer Title" subtitle="Subtitle"></mdc-drawer-header>
        <mdc-drawer-content>
          <mdc-list>
            <a mdc-list-item *ngFor="let item of destinations" href="#/drawer-demo/examples" [activated]="item.activated">
              <mdc-icon mdcListItemGraphic *ngIf="item.icon" fontSet="mdi" fontIcon="mdi-{{item.icon}}"></mdc-icon>{{item.label}}
            </a>
            <mdc-list-divider></mdc-list-divider>
            <h6 mdcListGroupSubheader>Labels</h6>
            <a mdc-list-item href="#/drawer-demo/examples">
              <mdc-icon mdcListItemGraphic fontSet="mdi" fontIcon="mdi-bookmark"></mdc-icon>Family
            </a>
            <a mdc-list-item href="#/drawer-demo/examples">
              <mdc-icon mdcListItemGraphic fontSet="mdi" fontIcon="mdi-bookmark"></mdc-icon>Friends
            </a>
            <a mdc-list-item href="#/drawer-demo/examples">
              <mdc-icon mdcListItemGraphic fontSet="mdi" fontIcon="mdi-bookmark"></mdc-icon>Work
            </a>
            <mdc-list-divider></mdc-list-divider>
            <a mdc-list-item href="#/drawer-demo/examples">
              <mdc-icon mdcListItemGraphic fontSet="mdi" fontIcon="mdi-bookmark"></mdc-icon>Settings
            </a>
            <a mdc-list-item href="#/drawer-demo/examples">
              <mdc-icon mdcListItemGraphic fontSet="mdi" fontIcon="mdi-message-alert"></mdc-icon>Help & feedback
            </a>
          </mdc-list>
        </mdc-drawer-content>
      </mdc-drawer>
    </div>
  `,
  props: {
    destinations: object('Items', [
      { label: 'Inbox', icon: 'inbox', activated: true },
      { label: 'Star', icon: 'star', activated: false },
      { label: 'Sent Mail', icon: 'send', activated: false },
      { label: 'Drafts', icon: 'email-open', activated: false }
    ])
  }
})

Drawer.story = {
  name: 'Drawer'
};
