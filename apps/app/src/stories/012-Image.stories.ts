
import { moduleMetadata } from '@storybook/angular';
import { MdcImageListModule } from '@angular-mdc/web';
import { boolean, object } from '@storybook/addon-knobs';

import images3x2 from './data/images/3x2';
import imagesMasonry from './data/images/masonry';

export default {
  title: 'UI - Image',
  decorators: [
    moduleMetadata({
      imports: [
        MdcImageListModule
      ]
    })
  ]
}

export const StandardImageList = () => ({
  template: `
    <div class="storybook-wrapper" style="overflow-y: auto; height: 500px;">
      <mdc-image-list class="standard-image-list image-list--rounded-corners" [textProtection]="textProtection">
        <mdc-image-list-item *ngFor="let i of images">
          <mdc-image-list-image-aspect>
            <img mdcImageListImage [src]="i.src" />
          </mdc-image-list-image-aspect>
          <mdc-image-list-supporting>
            <span mdcImageListLabel>{{ i.label }}</span>
          </mdc-image-list-supporting>
        </mdc-image-list-item>
      </mdc-image-list>
    </div>
  `,
  props: {
    textProtection: boolean('Text Protection', false),
    images: object('Images', images3x2),
  }
});


export const MasonryImageList = () => ({
  template: `
    <div class="storybook-wrapper" style="overflow-y: auto; height: 500px;">
      <mdc-image-list masonry class="masonry-image-list" [textProtection]="textProtection">
        <mdc-image-list-item *ngFor="let item of images">
          <img mdcImageListImage src="{{item.src}}" />
          <mdc-image-list-supporting>
            <span mdcImageListLabel>{{ item.label }}</span>
          </mdc-image-list-supporting>
        </mdc-image-list-item>
      </mdc-image-list>
    </div>
  `,
  props: {
    textProtection: boolean('Text Protection', false),
    images: object('Images', imagesMasonry),
  }
});
