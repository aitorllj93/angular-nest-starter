import { moduleMetadata } from '@storybook/angular';

import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

const swiperCards = [
  { image: 'http://via.placeholder.com/150' },
  { image: 'http://via.placeholder.com/150' },
  { image: 'http://via.placeholder.com/150' },
  { image: 'http://via.placeholder.com/150' },
  { image: 'http://via.placeholder.com/150' },
  { image: 'http://via.placeholder.com/150' },
  { image: 'http://via.placeholder.com/150' },
  { image: 'http://via.placeholder.com/150' },
];

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

export default {
  title: 'UI - Swiper',
  decorators: [
    moduleMetadata({
      imports: [SwiperModule],
      providers: [
        {
          provide: SWIPER_CONFIG,
          useValue: DEFAULT_SWIPER_CONFIG
        }
      ],
    }),
  ],
};

export const SwiperSingle = () => ({
  template: `
    <div class="storybook-wrapper">
      <div style="width:300px; height: 150px; margin: 0 auto;">
      <swiper [config]="swiperConfig" [(index)]="selectedIndex" (indexChange)="onSwipeChange($event)">
        <div style="overflow: hidden;" *ngFor="let item of cards">
          <img width="100%" height="100%" [src]="item.image">
        </div>
      </swiper>
      </div>
    </div>
  `,
  props: {
    swiperConfig: object('Swiper Config', {
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
    }),
    selectedIndex: 0,
    cards: object('Cards', swiperCards),
    onSwipeChange: action('On Swipe Change')
  }
})

SwiperSingle.story = {
  title: 'Simple Slides'
};

export const SwiperMultiple = () => ({
  template: `
    <div class="storybook-wrapper">
      <swiper [config]="swiperConfig" [(index)]="selectedIndex" (indexChange)="onSwipeChange($event)">
        <div style="width: 150px; height: 150px; overflow: hidden;" *ngFor="let item of cards">
          <img [src]="item.image">
        </div>
      </swiper>
    </div>
  `,
  props: {
    swiperConfig: object('Swiper Config', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      keyboard: {
        enabled: true,
      },
    }),
    selectedIndex: 0,
    cards: object('Cards', swiperCards),
    onSwipeChange: action('On Swipe Change')
  }
})

SwiperMultiple.story = {
  title: 'Multiple Slides per view'
};

export const SwipperVertical = () => ({
  template: `
    <div class="storybook-wrapper">
      <div style="width:150px; height: 300px;  margin: 0 auto;">
        <swiper [config]="swiperConfig" [(index)]="selectedIndex" (indexChange)="onSwipeChange($event)">
          <div style="overflow: hidden;" *ngFor="let item of cards">
            <img width="100%" height="100%" [src]="item.image">
          </div>
        </swiper>
      </div>
    </div>
  `,
  props: {
    swiperConfig: object('Swiper Config', {
      slidesPerView: 1,
      spaceBetween: 30,
      direction: 'vertical',
      keyboard: {
        enabled: true,
      },
    }),
    selectedIndex: 0,
    cards: object('Cards', swiperCards),
    onSwipeChange: action('On Swipe Change')
  }
})

SwipperVertical.story = {
  title: 'Vertical'
};
