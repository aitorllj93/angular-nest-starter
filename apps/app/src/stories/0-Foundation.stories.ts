
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { object, select, number } from '@storybook/addon-knobs';

import {
  MdcElevationModule,
  MdcRippleModule,
} from '@angular-mdc/web';

export default {
  title: 'Foundation',
  decorators: [
    moduleMetadata({
      imports: [MdcElevationModule, MdcRippleModule],
    }),
  ],
};

export const Elevation = () => ({
  template: `
    <div class="storybook-wrapper">
      <div [mdcElevation]="1"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">1</div>
      <div [mdcElevation]="2"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">2</div>
      <div [mdcElevation]="3"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">3</div>
      <div [mdcElevation]="4"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">4</div>
      <div [mdcElevation]="5"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">5</div>
      <div [mdcElevation]="6"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">6</div>
      <div [mdcElevation]="7"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">7</div>
      <div [mdcElevation]="8"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">8</div>
      <div [mdcElevation]="9"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">9</div>
      <div [mdcElevation]="10"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">10</div>
      <div [mdcElevation]="11"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">11</div>
      <div [mdcElevation]="12"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">12</div>
      <div [mdcElevation]="13"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">13</div>
      <div [mdcElevation]="14"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">14</div>
      <div [mdcElevation]="15"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">15</div>
      <div [mdcElevation]="16"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">16</div>
      <div [mdcElevation]="17"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">17</div>
      <div [mdcElevation]="18"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">18</div>
      <div [mdcElevation]="19"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">19</div>
      <div [mdcElevation]="20"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">20</div>
      <div [mdcElevation]="21"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">21</div>
      <div [mdcElevation]="22"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">22</div>
      <div [mdcElevation]="23"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">23</div>
      <div [mdcElevation]="24"style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;">24</div>
    </div>
  `,
});

Elevation.story = {
  name: 'Elevation',
};

export const Ripple = () => ({
  template: `
  <div #rippleExample mdcRipple [attachTo]="demodiv">
    <div style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;" #demodiv>
      Click me
    </div>
  </div>

  <div mdcRipple [attachTo]="demoPrimary" primary>
    <div style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;"  #demoPrimary>
      Primary Color
    </div>
  </div>

  <div mdcRipple [attachTo]="demoSecondary" secondary>
    <div style="height: 100px; width: 100px; background: white; text-align: center; display: inline-block; margin: 10px;"  #demoSecondary>
      Secondary Color
    </div>
  </div>

  `
});

Ripple.story = {
  name: 'Ripple',
};
