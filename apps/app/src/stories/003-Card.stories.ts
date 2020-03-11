

import { moduleMetadata } from '@storybook/angular';

import {
  MdcTypographyModule,
  MdcIconButtonModule,
  MdcCardModule,
  MdcIconRegistry,
  MdcButtonModule,
  MdcListModule,
  MdcRippleModule
} from '@angular-mdc/web';

export default {
  title: 'UI - Card',
  decorators: [
    moduleMetadata({
      imports: [
        MdcTypographyModule,
        MdcButtonModule,
        MdcIconButtonModule,
        MdcListModule,
        MdcRippleModule,
        MdcCardModule
      ],
      providers: [
        MdcIconRegistry
      ]
    }),
  ],
};

export const Card = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-card class="demo-card">
        <mdc-card-primary-action>
          <mdc-card-media class="demo-card__media--16-9" wide></mdc-card-media>
          <div class="demo-card__primary">
            <h2 class="demo-card__title" mdcHeadline6>Our Changing Planet</h2>
            <h3 class="demo-card__subtitle" mdcSubtitle2>by Kurt Wagner</h3>
          </div>
          <div class="demo-card__secondary" mdcBody2>
            Visit ten places on our planet that are undergoing the biggest changes today.
          </div>
        </mdc-card-primary-action>
        <mdc-card-actions>
          <mdc-card-action-buttons>
            <button mdc-button mdcCardAction="button">Read</button>
            <button mdc-button mdcCardAction="button">Bookmark</button>
          </mdc-card-action-buttons>
          <mdc-card-action-icons>
            <button mdcIconButton mdcCardAction="icon">
              <mdc-icon mdcIconOn fontSet="mdi" fontIcon="mdi-heart"></mdc-icon>
              <mdc-icon fontSet="mdi" fontIcon="mdi-heart-outline"></mdc-icon>
            </button>
            <button mdcIconButton mdcCardAction="icon">
              <mdc-icon fontSet="mdi" fontIcon="mdi-share"></mdc-icon>
            </button>
            <button mdcIconButton mdcCardAction="icon">
              <mdc-icon fontSet="mdi" fontIcon="mdi-dots-vertical"></mdc-icon>
            </button>
          </mdc-card-action-icons>
        </mdc-card-actions>
      </mdc-card>
    </div>
  `
})

Card.story = {
  name: 'Card'
};


export const CardList = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-card class="demo-card" outlined>
        <div class="demo-card-article-group-heading" mdcSubtitle2>Headlines</div>
        <mdc-list-divider></mdc-list-divider>
        <mdc-ripple class="demo-card-article">
          <h2 class="demo-card-article__title" mdcHeadline5>Copper on the rise</h2>
          <p class="demo-card-article__snippet" mdcBody2>
            Copper price soars amid global market optimism and increased demand.
          </p>
        </mdc-ripple>
        <mdc-list-divider></mdc-list-divider>
        <mdc-ripple class="demo-card-article">
          <h2 class="demo-card-article__title" mdcHeadline5>U.S. tech startups rebound</h2>
          <p class="demo-card-article__snippet" mdcBody2>
            Favorable business conditions have allowed startups to secure more fundraising deals compared to last year.
          </p>
        </mdc-ripple>
        <mdc-list-divider></mdc-list-divider>
        <mdc-ripple class="demo-card-article">
          <h2 class="demo-card-article__title" mdcHeadline5>Asia's clean energy ambitions</h2>
          <p class="demo-card-article__snippet" mdcBody2>
            China plans to invest billions of dollars for the development of over 300 clean energy projects in Southeast
            Asia.
          </p>
        </mdc-ripple>
        <mdc-list-divider></mdc-list-divider>
        <mdc-card-actions fullBleed>
          <button mdc-button mdcCardAction="button">
            All Business Headlines
            <mdc-icon fontSet="mdi" fontIcon="mdi-arrow-right"></mdc-icon>
          </button>
        </mdc-card-actions>
      </mdc-card>
    </div>
  `
});

CardList.story = {
  name: 'List Card'
}


export const CardPhoto = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-card class="demo-card demo-card--photo">
        <mdc-card-primary-action>
          <mdc-card-media square class="demo-card__media">
            <mdc-card-media-content class="demo-card__media-content--with-title">
              <div class="demo-card__media-title" mdcSubtitle2>Vacation Photos</div>
            </mdc-card-media-content>
          </mdc-card-media>
        </mdc-card-primary-action>
        <mdc-card-actions>
          <mdc-card-action-icons>
            <button mdcIconButton mdcCardAction="icon">
              <mdc-icon mdcIconOn fontSet="mdi" fontIcon="mdi-heart"></mdc-icon>
              <mdc-icon fontSet="mdi" fontIcon="mdi-heart-outline"></mdc-icon>
            </button>
            <button mdcIconButton mdcCardAction="icon">
              <mdc-icon mdcIconOn fontSet="mdi" fontIcon="mdi-bookmark"></mdc-icon>
              <mdc-icon fontSet="mdi" fontIcon="mdi-bookmark-outline"></mdc-icon>
            </button>
            <button mdcIconButton mdcCardAction="icon">
              <mdc-icon fontSet="mdi" fontIcon="mdi-share"></mdc-icon>
            </button>
          </mdc-card-action-icons>
        </mdc-card-actions>
      </mdc-card>
    </div>
  `
});

CardPhoto.story = {
  name: 'Photo Card'
};


export const CardMusic = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-card class="demo-card demo-card--music">
        <mdc-card-primary-action>
          <div class="demo-card__music-row">
            <mdc-card-media square class="demo-card__media demo-card__media--music"></mdc-card-media>
            <div class="demo-card__music-info">
              <div class="demo-card__music-title" mdcHeadline5>Title</div>
              <div class="demo-card__music-artist" mdcBody2>Under the Grave</div>
              <div class="demo-card__music-year" mdcBody2>(2016)</div>
            </div>
          </div>
        </mdc-card-primary-action>
        <mdc-list-divider></mdc-list-divider>
        <mdc-card-actions>
          <mdc-card-action-buttons class="demo-card__action-buttons--text-only">Rate album</mdc-card-action-buttons>
          <mdc-card-action-icons>
            <button mdcIconButton mdcCardAction="icon">
              <mdc-icon mdcIconOn fontSet="mdi" fontIcon="mdi-star"></mdc-icon>
              <mdc-icon fontSet="mdi" fontIcon="mdi-star-outline"></mdc-icon>
            </button>
            <button mdcIconButton mdcCardAction="icon">
              <mdc-icon mdcIconOn fontSet="mdi" fontIcon="mdi-star"></mdc-icon>
              <mdc-icon fontSet="mdi" fontIcon="mdi-star-outline"></mdc-icon>
            </button>
            <button mdcIconButton mdcCardAction="icon">
              <mdc-icon mdcIconOn fontSet="mdi" fontIcon="mdi-star"></mdc-icon>
              <mdc-icon fontSet="mdi" fontIcon="mdi-star-outline"></mdc-icon>
            </button>
            <button mdcIconButton mdcCardAction="icon">
              <mdc-icon mdcIconOn fontSet="mdi" fontIcon="mdi-star"></mdc-icon>
              <mdc-icon fontSet="mdi" fontIcon="mdi-star-outline"></mdc-icon>
            </button>
            <button mdcIconButton mdcCardAction="icon">
              <mdc-icon mdcIconOn fontSet="mdi" fontIcon="mdi-star"></mdc-icon>
              <mdc-icon fontSet="mdi" fontIcon="mdi-star-outline"></mdc-icon>
            </button>
          </mdc-card-action-icons>
        </mdc-card-actions>
      </mdc-card>
    </div>
  `
});

CardMusic.story = {
  name: 'Music Card'
};
