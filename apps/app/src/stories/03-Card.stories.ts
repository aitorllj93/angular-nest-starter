

import { moduleMetadata } from '@storybook/angular';

import {
  MdcTypographyModule,
  MdcIconButtonModule,
  MdcCardModule
} from '@angular-mdc/web';

export default {
  title: 'Card',
  decorators: [
    moduleMetadata({
      imports: [
        MdcTypographyModule,
        MdcIconButtonModule,
        MdcCardModule
      ]
    }),
  ],
};

export const Card = () => ({
  template: `
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
            <mdc-icon mdcIconOn>favorite</mdc-icon>
            <mdc-icon>favorite_border</mdc-icon>
          </button>
          <button mdcIconButton mdcCardAction="icon" icon="share"></button>
          <button mdcIconButton mdcCardAction="icon" icon="more_vert"></button>
        </mdc-card-action-icons>
      </mdc-card-actions>
    </mdc-card>
  `
})

Card.story = {
  name: 'Card'
};


export const CardList = () => ({
  template: `
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
          <mdc-icon>arrow_forward</mdc-icon>
        </button>
      </mdc-card-actions>
    </mdc-card>
  `
});

CardList.story = {
  name: 'List Card'
}
