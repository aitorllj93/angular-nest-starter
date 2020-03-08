
import { moduleMetadata } from '@storybook/angular';
import { object, text } from '@storybook/addon-knobs';

import { NgSelectModule } from '@ng-select/ng-select';
import markdown from '@ng-select/ng-select/README.md';

export default {
  title: 'Select',
  decorators: [
    moduleMetadata({
      imports: [NgSelectModule],
    }),
  ],
};

export const SimpleSelect = () => ({
  title: 'Select',
  template: `
    <div class="storybook-wrapper">
      <ng-select [items]="items"
        bindLabel="name"
        bindValue="id"
        [(ngModel)]="selectedPersonId">
      </ng-select>
    </div>
  `,
  props: {
    items: object('Items', [
      {
          'id': '5a15b13c36e7a7f00cf0d7cb',
          'name': 'Karyn Wright',
      },
      {
          'id': '5a15b13c2340978ec3d2c0ea',
          'name': 'Rochelle Estes',
      },
      {
          'id': '5a15b13c663ea0af9ad0dae8',
          'name': 'Mendoza Ruiz',
      }
    ]),
    selectedPersonId: text('Selected Person Id', '5a15b13c663ea0af9ad0dae8'),
  }
});

SimpleSelect.story = {
  name: 'Simple Select',
  parameters: {
    notes: {
      'Developer README': markdown
    }
  },
};
