
import { moduleMetadata } from '@storybook/angular';
import { MdcMenuModule, MdcListModule, MdcButtonModule, MdcIconModule, MdcIconRegistry, MdcCardModule, MdcIconButtonModule, MdcImageListModule } from '@angular-mdc/web';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import images3x2 from './data/images/3x2';

export default {
  title: 'UI - Menu',
  decorators: [
    moduleMetadata({
      imports: [
        MdcMenuModule,
        MdcListModule,
        MdcButtonModule,
        MdcIconModule,
        MdcCardModule,
        MdcIconButtonModule,
        MdcImageListModule,
      ],
      providers: [MdcIconRegistry]
    })
  ]
}

export const Menu = () => ({
  template: `
    <div class="storybook-wrapper">
      <div mdcMenuSurfaceAnchor #demoAnchor>
        <button mdc-button raised (click)="demo.open = !demo.open">
          Show Menu
        </button>

        <mdc-menu #demo [anchorElement]="demoAnchor" (selected)="onMenuSelect($event)">
          <mdc-list>
            <ng-container *ngFor="let fruit of fruits" [ngSwitch]="!!fruit.label">
              <mdc-list-item *ngSwitchCase="true">{{fruit.label}}</mdc-list-item>
              <mdc-list-divider *ngSwitchCase="false"></mdc-list-divider>
            </ng-container>
          </mdc-list>
        </mdc-menu>
      </div>
    </div>
  `,
  props: {
    fruits: object('Fruits', [
      { label: 'Passionfruit' },
      { label: 'Orange' },
      { label: 'Guava' },
      { label: 'Pitaya'},
      { label: null }, // The html uses ngSwitchCase to check for a null label, and displays mdc-list-divider
      { label: 'Pinaeapple'},
      { label: 'Mango'},
      { label: 'Papaya'},
      { label: 'Lychee'}
    ]),
    onMenuSelect: action('On Menu Select')
  }
});

export const SelectionGroupMenu = () => ({
  template: `
    <div class="storybook-wrapper">
      <div mdcMenuSurfaceAnchor #demoSelectionAnchor>
        <button mdc-button raised (click)="demoSelectionGroup.open = !demoSelectionGroup.open">
          Show Selection Group Menu
        </button>
        <mdc-menu #demoSelectionGroup [anchorElement]="demoSelectionAnchor">
          <mdc-list>
            <mdc-menu-selection-group>
              <mdc-list-item>
                <mdc-icon mdcMenuSelectionGroupIcon fontSet="mdi" fontIcon="mdi-check"></mdc-icon>
                Single
              </mdc-list-item>
              <mdc-list-item disabled>
                <mdc-icon mdcMenuSelectionGroupIcon fontSet="mdi" fontIcon="mdi-check"></mdc-icon>
                1.15
              </mdc-list-item>
              <mdc-list-item>
                <mdc-icon mdcMenuSelectionGroupIcon fontSet="mdi" fontIcon="mdi-check"></mdc-icon>
                Double
              </mdc-list-item>
              <mdc-list-item>
                <mdc-icon mdcMenuSelectionGroupIcon fontSet="mdi" fontIcon="mdi-check"></mdc-icon>
                Custom: 1.2
              </mdc-list-item>
            </mdc-menu-selection-group>
            <mdc-list-divider></mdc-list-divider>
            <mdc-menu-selection-group>
              <mdc-list-item>
                <mdc-icon mdcMenuSelectionGroupIcon fontSet="mdi" fontIcon="mdi-check"></mdc-icon>
                Item
              </mdc-list-item>
              <mdc-list-item>
                <mdc-icon mdcMenuSelectionGroupIcon fontSet="mdi" fontIcon="mdi-check"></mdc-icon>
                Another Item
              </mdc-list-item>
            </mdc-menu-selection-group>
            <mdc-list-divider></mdc-list-divider>
            <mdc-list-item>Add space before paragraph</mdc-list-item>
            <mdc-list-item>Add space after paragraph</mdc-list-item>
            <mdc-list-divider></mdc-list-divider>
            <mdc-list-item>Custom spacing...</mdc-list-item>
          </mdc-list>
        </mdc-menu>
      </div>
    </div>
  `
})

export const OpenMenuFromCard = () => ({
  template: `
    <div class="storybook-wrapper">
      <div class="demo-content">
        <mdc-card class="demo-card">
          <mdc-card-primary-action>
            <div class="demo-card__primary">
              <h2 class="demo-card__title" mdcHeadline6>Our Changing Planet</h2>
              <h3 class="demo-card__subtitle" mdcSubtitle2>by Kurt Wagner</h3>
            </div>
            <div class="demo-card__secondary" mdcBody2>
              Select the vertical menu icon button below.
            </div>
          </mdc-card-primary-action>
          <mdc-card-actions>
            <mdc-card-action-buttons>
              <button mdc-button mdcCardAction="button">Read</button>
            </mdc-card-action-buttons>
            <mdc-card-action-icons>
              <button mdcIconButton mdcCardAction="icon">
                <mdc-icon fontSet="mdi" fontIcon="mdi-share"></mdc-icon>
              </button>
              <div mdcMenuSurfaceAnchor #cardAnchor>
                <button mdcIconButton mdcCardAction="icon"
                  (click)="cardMenu.open = !cardMenu.open">
                  <mdc-icon fontSet="mdi" fontIcon="mdi-dots-vertical"></mdc-icon>
                </button>
                <mdc-menu #cardMenu [anchorElement]="cardAnchor">
                  <mdc-list>
                    <mdc-list-item>Open</mdc-list-item>
                    <mdc-list-item>Dismiss</mdc-list-item>
                  </mdc-list>
                </mdc-menu>
              </div>
            </mdc-card-action-icons>
          </mdc-card-actions>
        </mdc-card>
      </div>
    </div>
  `
});

export const MenuSurfaceWithImageList = () => ({
  template: `
    <div class="storybook-wrapper">
      <div mdcMenuSurfaceAnchor #demoAnchor>
        <button mdc-button raised (click)="demoSurface.open = !demoSurface.open">
          Show Menu Surface
        </button>
        <mdc-menu-surface #demoSurface class="demo-menu-surface--shaped" [anchorElement]="demoAnchor">
          <mdc-image-list class="menu-surface-image-list">
            <mdc-image-list-item *ngFor="let i of images">
              <mdc-image-list-image-aspect>
                <img mdcImageListImage [src]="i.src" />
              </mdc-image-list-image-aspect>
              <mdc-image-list-supporting>
                <span mdcImageListLabel>{{ i.label }}</span>
              </mdc-image-list-supporting>
            </mdc-image-list-item>
          </mdc-image-list>
        </mdc-menu-surface>
      </div>
    </div>
  `,
  props: {
    images: object('Images', images3x2)
  }
});
