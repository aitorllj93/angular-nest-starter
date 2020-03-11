
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { object, select } from '@storybook/addon-knobs';

import { NgxDatatableModule, ColumnMode } from '@swimlane/ngx-datatable';
import markdown from '@swimlane/ngx-datatable/README.md';

export default {
  title: 'UI - Datatable',
  decorators: [
    moduleMetadata({
      imports: [NgxDatatableModule],
    }),
  ],
};

export const SimpleDatatable = () => ({
  title: 'Datatable',
  template: `
    <div class="storybook-wrapper">
      <ngx-datatable
        class="material striped"
        [rows]="rows"
        [columns]="columns"
        [columnMode]="columnMode"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="50"
        (activate)="activate($event)">
      </ngx-datatable>
    </div>
  `,
  props: {
    rows: object('Rows', [
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
    ]),
    columns: object('Columns', [
      { prop: 'name' },
      { name: 'Gender' },
      { name: 'Company' }
    ]),
    columnMode: select('Column Mode', {
      Force: ColumnMode.force,
      Flex: ColumnMode.flex,
      Standard: ColumnMode.standard
    }, ColumnMode.force),
    activate: action('Cell or Row activated'),
  }
});

SimpleDatatable.story = {
  name: 'Simple Datatable',
  parameters: {
    notes: {
      'Developer README': markdown
    }
  },
};
