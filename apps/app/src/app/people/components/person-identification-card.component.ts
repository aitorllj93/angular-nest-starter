
import { Component, OnInit, Input } from '@angular/core';

import { RandomPersonGeneratorService } from '../services/random-person-generator.service';

@Component({
  selector: 'app-person-identification-card',
  template: `
    <mdc-card>
      <div mdcBody class="p-1">

        <div mdcHeadline5 class="mb-1" *ngIf="showHeader">
          Identification
        </div>

        <div fxLayout="row" fxFlexFill *ngIf="person$ | async as person; else skeleton">
          <div [fxFlex]="'140px'">
            <img [src]="person.image" width="140px" style="border-radius: 20px;"/>
          </div>

          <div [fxFlex]="'auto'" class="px-1">

            <div fxLayout="row" fxFlexFill>

              <div [fxFlex]="50">
                <p class="mt-0">
                  <mdc-icon fontSet="mdi" fontIcon="mdi-account"></mdc-icon>
                  {{ person.fullName }}
                </p>

                <p class="text-gray">
                  <mdc-icon fontSet="mdi" fontIcon="mdi-identifier"></mdc-icon>
                  {{ person.identifier }}
                </p>

                <p>
                  <mdc-icon fontSet="mdi" fontIcon="mdi-gender-{{person.gender}}"></mdc-icon>
                </p>
              </div>

              <div [fxFlex]="50">

                <p class="mt-0">
                  <mdc-icon fontSet="mdi" fontIcon="mdi-city"></mdc-icon>
                  {{ person.address }}
                </p>

                <p>
                  <mdc-icon fontSet="mdi" fontIcon="mdi-cake"></mdc-icon>
                  {{ person.birthday | date:'shortDate' }} ({{ person.age }} years)
                </p>

              </div>

            </div>

          </div>
        </div>
      </div>
    </mdc-card>

    <ng-template #skeleton>
      <ngx-skeleton-loader count="4"></ngx-skeleton-loader>
    </ng-template>
  `
})
export class PersonIdentificationCardComponent implements OnInit {

  @Input() showHeader = true;

  @Input() person$ = this.randomPersonGenerator.generate();

  constructor(
    private randomPersonGenerator: RandomPersonGeneratorService
  ) { }

  ngOnInit() { }
}
