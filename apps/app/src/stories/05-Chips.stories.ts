


import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import {
  MdcChipsModule, MdcIconRegistry
} from '@angular-mdc/web';
import { object, text } from '@storybook/addon-knobs';

export default {
  title: 'Chips',
  decorators: [
    moduleMetadata({
      imports: [
        MdcChipsModule
      ],
      providers: [
        MdcIconRegistry
      ]
    }),
  ],
};


export const Chips = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-chip-set>
        <mdc-chip>
          <mdc-chip-icon leading>face</mdc-chip-icon>
          <mdc-chip-text>Jane Smith</mdc-chip-text>
        </mdc-chip>
      </mdc-chip-set>
    </div>
  `
})

Chips.story = {
  name: 'Chips'
};


export const ChipsInput = () => ({
  template: `
  <div class="storybook-wrapper">
    <mdc-chip-set input>
      <mdc-chip label="Alice" (removalEvent)="onChipRemoved($event)">
        <mdc-chip-icon leading>face</mdc-chip-icon>
        <mdc-chip-icon trailing>cancel</mdc-chip-icon>
      </mdc-chip>
      <mdc-chip label="Bob" (removalEvent)="onChipRemoved($event)">
        <mdc-chip-icon leading>face</mdc-chip-icon>
        <mdc-chip-icon trailing>cancel</mdc-chip-icon>
      </mdc-chip>
      <mdc-chip label='Charlie' (removalEvent)="onChipRemoved($event)">
        <mdc-chip-icon leading>face</mdc-chip-icon>
        <mdc-chip-icon trailing>cancel</mdc-chip-icon>
      </mdc-chip>
      <mdc-chip label='David' (removalEvent)="onChipRemoved($event)">
        <mdc-chip-icon leading>face</mdc-chip-icon>
        <mdc-chip-icon trailing>cancel</mdc-chip-icon>
      </mdc-chip>
    </mdc-chip-set>
  </div>
  `,
  props: {
    onChipRemoved: action('Chip Removed'),
  }
});

ChipsInput.story = {
  name: 'Input Chips'
}


export const ChipsChoice = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-chip-set choice>
        <mdc-chip>
          <mdc-chip-text>Get Directions</mdc-chip-text>
        </mdc-chip>
        <mdc-chip>
          <mdc-chip-text>Get Weather</mdc-chip-text>
        </mdc-chip>
        <mdc-chip>
          <mdc-chip-text>Add to Calendar</mdc-chip-text>
        </mdc-chip>
      </mdc-chip-set>
    </div>
  `
})

ChipsChoice.story = {
  name: 'Choice Chips'
}

export const ChipsFilter = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-chip-set filter>
        <mdc-chip>
          <mdc-chip-text>Tops</mdc-chip-text>
        </mdc-chip>
        <mdc-chip>
          <mdc-chip-text>Bottoms</mdc-chip-text>
        </mdc-chip>
        <mdc-chip>
          <mdc-chip-text>Shoes</mdc-chip-text>
        </mdc-chip>
        <mdc-chip>
          <mdc-chip-text>Accessories</mdc-chip-text>
        </mdc-chip>
      </mdc-chip-set>
    </div>
  `
})

ChipsFilter.story = {
  name: 'Filter Chips'
}

export const ChipsFilterLeading = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-chip-set filter>
        <mdc-chip>
          <mdc-chip-icon leading>face</mdc-chip-icon>
          <mdc-chip-text>Alice</mdc-chip-text>
        </mdc-chip>
        <mdc-chip>
          <mdc-chip-icon leading>face</mdc-chip-icon>
          <mdc-chip-text>Bob</mdc-chip-text>
        </mdc-chip>
        <mdc-chip>
          <mdc-chip-icon leading>face</mdc-chip-icon>
          <mdc-chip-text>Charlie</mdc-chip-text>
        </mdc-chip>
        <mdc-chip>
          <mdc-chip-icon leading>face</mdc-chip-icon>
          <mdc-chip-text>David</mdc-chip-text>
        </mdc-chip>
      </mdc-chip-set>
    </div>
  `
})

ChipsFilterLeading.story = {
  name: 'Filter Chips with Leading Icon'
}

export const ChipsAction = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-chip-set>
        <mdc-chip>
          <mdc-chip-icon leading>wb_sunny</mdc-chip-icon>
          <mdc-chip-text>Turn on lights</mdc-chip-text>
        </mdc-chip>
        <mdc-chip>
          <mdc-chip-icon leading>bookmark</mdc-chip-icon>
          <mdc-chip-text>Bookmark</mdc-chip-text>
        </mdc-chip>
        <mdc-chip>
          <mdc-chip-icon leading>alarm</mdc-chip-icon>
          <mdc-chip-text>Set alarm</mdc-chip-text>
        </mdc-chip>
        <mdc-chip>
          <mdc-chip-icon leading>directions</mdc-chip-icon>
          <mdc-chip-text>Get Directions</mdc-chip-text>
        </mdc-chip>
      </mdc-chip-set>
    </div>
  `
})

ChipsAction.story = {
  name: 'Action Chips'
}

export const ChipsChoiceValue = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-chip-set choice #chipSetValue (change)="onChipSetChange($event)" [(ngModel)]="value">
        <mdc-chip *ngFor="let item of items" [value]="item.value"
          (interaction)="onChipInteraction($event)"
          (selectionChange)="onChipSelection($event)">
          {{item.viewValue}}
        </mdc-chip>
      </mdc-chip-set>
    </div>
  `,
  props: {
    items: object('Items', [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
    ]),
    value: text('Value', 'pizza-1'),
    onChipSetChange: action('On Chip Set Change'),
    onChipInteraction: action('On Chip Interaction'),
    onChipSelection: action('On Chip Selection'),
  }
})

ChipsChoiceValue.story = {
  name: 'Choice with Value'
}

export const ChipsShape = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-chip-set>
        <mdc-chip class="custom-chip--shape-radius">
          <mdc-chip-text>Turn on lights</mdc-chip-text>
        </mdc-chip>
        <mdc-chip class="custom-chip--shape-radius">
          <mdc-chip-text>Bookmark</mdc-chip-text>
        </mdc-chip>
        <mdc-chip class="custom-chip--shape-radius">
          <mdc-chip-text>Set alarm</mdc-chip-text>
        </mdc-chip>
        <mdc-chip class="custom-chip--shape-radius">
          <mdc-chip-text>Get Directions</mdc-chip-text>
        </mdc-chip>
      </mdc-chip-set>
    </div>
  `
})

ChipsShape.story = {
  name: 'Shaped Chips'
}

export const ChipsTheme = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-chip-set>
        <mdc-chip class="custom-chip-secondary">
          <mdc-chip-text>Turn on lights</mdc-chip-text>
        </mdc-chip>
        <mdc-chip class="custom-chip-secondary">
          <mdc-chip-text>Bookmark</mdc-chip-text>
        </mdc-chip>
        <mdc-chip class="custom-chip-secondary">
          <mdc-chip-text>Set alarm</mdc-chip-text>
        </mdc-chip>
        <mdc-chip class="custom-chip-secondary">
          <mdc-chip-text>Get Directions</mdc-chip-text>
        </mdc-chip>
      </mdc-chip-set>
    </div>
  `
})

ChipsTheme.story = {
  name: 'Themed Chips'
}

export const ChipsCustom = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-chip-set>
        <mdc-chip class="custom-chip--height">
          <mdc-chip-text>Height</mdc-chip-text>
        </mdc-chip>
        <mdc-chip class="custom-chip--horizontal-padding">
          <mdc-chip-text>Horizontal Padding</mdc-chip-text>
        </mdc-chip>
        <mdc-chip class="custom-chip--leading-icon-color">
          <mdc-chip-icon leading>wb_sunny</mdc-chip-icon>
          <mdc-chip-text>Leading Icon Color</mdc-chip-text>
        </mdc-chip>
        <mdc-chip class="custom-chip--trailing-icon-color">
          <mdc-chip-text>Trailing Icon Color</mdc-chip-text>
          <mdc-chip-icon trailing>wb_sunny</mdc-chip-icon>
        </mdc-chip>
        <mdc-chip class="custom-chip--leading-icon-size">
          <mdc-chip-icon leading>wb_sunny</mdc-chip-icon>
          <mdc-chip-text>Leading Icon Size</mdc-chip-text>
        </mdc-chip>
        <mdc-chip class="custom-chip--trailing-icon-size">
          <mdc-chip-text>Trailing Icon Size</mdc-chip-text>
          <mdc-chip-icon trailing>wb_sunny</mdc-chip-icon>
        </mdc-chip>
        <mdc-chip class="custom-chip--leading-icon-margin">
          <mdc-chip-icon leading>wb_sunny</mdc-chip-icon>
          <mdc-chip-text>Leading Icon Margin</mdc-chip-text>
        </mdc-chip>
        <mdc-chip class="custom-chip--trailing-icon-margin">
          <mdc-chip-text>Trailing Icon Margin</mdc-chip-text>
          <mdc-chip-icon trailing>wb_sunny</mdc-chip-icon>
        </mdc-chip>
      </mdc-chip-set>
    </div>
  `
});

ChipsCustom.story = {
  name: 'Custom Chips'
}

