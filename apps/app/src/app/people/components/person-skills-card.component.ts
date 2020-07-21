
import { Component, OnInit, Input } from '@angular/core';
import { RandomPersonGeneratorService } from '../services/random-person-generator.service';

@Component({
  selector: 'app-person-skills-card',
  template: `
    <mdc-card>
      <div mdcBody class="p-1">

        <div fxLayout="row wrap" fxFlexFill>
          <ng-container *ngFor="let skill of person.skills">
            <div [fxFlex]="25" class="p-1" [ngxTippy]="tooltip"
              [tippyProps]="{
                allowHTML: true,
                interactive: true,
                theme: 'material'
              }">
              <mdc-icon fontSet="mdi" fontIcon="mdi-star"></mdc-icon>
              {{ skill.label }}
            </div>
            <div #tooltip>
              {{ skill.detail }}
            </div>
          </ng-container>
        </div>
      </div>
    </mdc-card>
  `
})

export class PersonSkillsCardComponent implements OnInit {

  @Input() person = this.randomPersonGenerator.generate();

  constructor(
    private randomPersonGenerator: RandomPersonGeneratorService
  ) { }

  ngOnInit() { }
}
