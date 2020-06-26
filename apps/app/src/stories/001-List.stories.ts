
import { moduleMetadata } from '@storybook/angular';
import { MdcListModule, MdcIconModule, MdcIconRegistry } from '@angular-mdc/web';
import { object } from '@storybook/addon-knobs';

export default {
  title: 'UI - List',
  decorators: [
    moduleMetadata({
      imports: [
        MdcListModule,
        MdcIconModule
      ],
      providers: [MdcIconRegistry]
    })
  ]
}

export const Custom = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-list-group subheader="Folders">
        <mdc-list twoLine avatar class="demo-list--custom">
          <mdc-list-item *ngFor="let folder of folders">
            <mdc-icon mdcListItemGraphic fontSet="mdi" fontIcon="mdi-{{folder.icon}}"></mdc-icon>
            <mdc-list-item-text [secondaryText]="folder.addDate">{{folder.name}}</mdc-list-item-text>
            <a href="#/list-demo/examples" mdcListItemMeta mdcIcon fontSet="mdi" fontIcon="mdi-information" aria-label="View more" title="More info"></a>
          </mdc-list-item>
          <mdc-list-divider inset></mdc-list-divider>
          <h3 mdcListGroupSubheader>Files</h3>
          <mdc-list-item *ngFor="let file of files">
            <mdc-icon mdcListItemGraphic fontSet="mdi" fontIcon="mdi-{{file.icon}}"></mdc-icon>
            <mdc-list-item-text [secondaryText]="file.addDate">{{file.name}}</mdc-list-item-text>
            <a href="#/list-demo/examples" mdcListItemMeta mdcIcon fontSet="mdi" fontIcon="mdi-information" aria-label="View more" title="More info"></a>
          </mdc-list-item>
        </mdc-list>
      </mdc-list-group>
    </div>
  `,
  props: {
    folders: object('Folders', [
      { name: 'Photos', icon: 'folder', addDate: 'Jan 9, 2015' },
      { name: 'Recipes', icon: 'folder', addDate: 'Jan 17, 2015' },
      { name: 'Work', icon: 'folder', addDate: 'Jan 28, 2015' }
    ]),
    files: object('Files', [
      { name: 'Vacation Itinerary', icon: 'file', addDate: 'Jan 10, 2015' },
      { name: 'Kitchen Remodel', icon: 'file', addDate: 'Jan 20, 2015' }
    ])
  }
});
