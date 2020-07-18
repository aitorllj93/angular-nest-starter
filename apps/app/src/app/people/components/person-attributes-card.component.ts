import { Component, OnInit, Input } from '@angular/core';
import { RandomPersonGeneratorService } from '../services/random-person-generator.service';

@Component({
  selector: 'app-person-attributes-card',
  template: `
    <mdc-card>
      <div mdcBody class="p-1">

        <div fxLayout="row" fxFlexFill>
          <div [fxFlex]="50" class="px-1">

            <p class="mt-0 person-attributes-text-strength">
              Strength: {{ person.attributes.strength }}
              <mdc-slider class="person-attributes-slider-strength" discrete [min]="0" [max]="20" [step]="1" [value]="person.attributes.strength" [disabled]="true"></mdc-slider>
            </p>

            <p class="mt-0 person-attributes-text-constitution">
              Constitution: {{ person.attributes.constitution }}
              <mdc-slider class="person-attributes-slider-constitution" discrete [min]="0" [max]="20" [step]="1" [value]="person.attributes.constitution" [disabled]="true"></mdc-slider>
            </p>

            <p class="mt-0 person-attributes-text-dexterity">
              Dexterity: {{ person.attributes.dexterity }}
              <mdc-slider class="person-attributes-slider-dexterity" discrete [min]="0" [max]="20" [step]="1" [value]="person.attributes.dexterity" [disabled]="true"></mdc-slider>
            </p>

          </div>

          <div [fxFlex]="50" class="px-1">

            <p class="mt-0 person-attributes-text-intelligence">
              Intelligence: {{ person.attributes.intelligence }}
              <mdc-slider class="person-attributes-slider-intelligence" discrete [min]="0" [max]="20" [step]="1" [value]="person.attributes.intelligence" [disabled]="true"></mdc-slider>
            </p>

            <p class="mt-0 person-attributes-text-wisdom">
              Wisdom: {{ person.attributes.wisdom }}
              <mdc-slider class="person-attributes-slider-wisdom" discrete [min]="0" [max]="20" [step]="1" [value]="person.attributes.wisdom" [disabled]="true"></mdc-slider>
            </p>

            <p class="mt-0 person-attributes-text-charisma">
              Charisma: {{ person.attributes.charisma }}
              <mdc-slider class="person-attributes-slider-charisma" discrete [min]="0" [max]="20" [step]="1" [value]="person.attributes.charisma" [disabled]="true"></mdc-slider>
            </p>

          </div>
        </div>

      </div>
    </mdc-card>
  `
})

export class PersonAttributesCardComponent implements OnInit {

  @Input() person = this.randomPersonGenerator.generate();

  constructor(
    private randomPersonGenerator: RandomPersonGeneratorService
  ) { }

  ngOnInit() { }
}
