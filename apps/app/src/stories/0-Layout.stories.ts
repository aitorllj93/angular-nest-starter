
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { object, select, number } from '@storybook/addon-knobs';

import { FlexLayoutModule } from '@angular/flex-layout';
import markdown from '@angular/flex-layout/README.md';

export default {
  title: 'Layout',
  decorators: [
    moduleMetadata({
      imports: [FlexLayoutModule],
    }),
  ],
};

export const SimpleLayout = () => ({
  template: `
    <div class="storybook-wrapper" style="height: 60vh;">

      <div style="min-width: 300px;"
          fxLayout="row"
          fxLayout.xs="column"
          fxFlexFill >

          <div [fxFlex]="firstColumnSize" style="
            background: #2977cc;
          ">
              first-section
          </div>
          <div [fxFlex]="secondColumnSize" style="
            background: #de0031;
          ">
              second-section
          </div>
          <div [fxFlex]="thirdColumnSize" style="
            background: #c40030;
          ">
              third-section
          </div>

      </div>

    </div>
  `,
  props: {
    firstColumnSize: number('First Col Size', 15),
    secondColumnSize: number('Second Col Size', 30),
    thirdColumnSize: number('Third Col Size', 55),
  }
});

SimpleLayout.story = {
  name: 'Simple Layout',
  parameters: {
    notes: {
      'Developer README': markdown
    }
  },
};
