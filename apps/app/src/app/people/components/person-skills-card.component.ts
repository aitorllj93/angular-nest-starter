
import { Component, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Person } from '../models/person';
import { PeopleState } from '../state/people.state';

@Component({
  selector: 'app-person-skills-card',
  template: `
    <mdc-card>
      <div mdcBody class="p-1">

        <div mdcHeadline5 class="mb-1" *ngIf="showHeader">
          Skills
        </div>

        <div fxLayout="row wrap" fxFlexFill *ngIf="person$ | async as person; else skeleton">
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
              Level:
              <mdc-icon *ngIf="skill.level > 0" fontSet="mdi" fontIcon="mdi-star"></mdc-icon>
              <mdc-icon *ngIf="skill.level <= 0" fontSet="mdi" fontIcon="mdi-star-outline"></mdc-icon>
              <mdc-icon *ngIf="skill.level > 1" fontSet="mdi" fontIcon="mdi-star"></mdc-icon>
              <mdc-icon *ngIf="skill.level <= 1" fontSet="mdi" fontIcon="mdi-star-outline"></mdc-icon>
              <mdc-icon *ngIf="skill.level > 2" fontSet="mdi" fontIcon="mdi-star"></mdc-icon>
              <mdc-icon *ngIf="skill.level <= 2" fontSet="mdi" fontIcon="mdi-star-outline"></mdc-icon>
              <mdc-icon *ngIf="skill.level > 3" fontSet="mdi" fontIcon="mdi-star"></mdc-icon>
              <mdc-icon *ngIf="skill.level <= 3" fontSet="mdi" fontIcon="mdi-star-outline"></mdc-icon>
              <mdc-icon *ngIf="skill.level > 4" fontSet="mdi" fontIcon="mdi-star"></mdc-icon>
              <mdc-icon *ngIf="skill.level <= 4" fontSet="mdi" fontIcon="mdi-star-outline"></mdc-icon>
              <br/>
              Description: {{ skill.detail }}
            </div>
          </ng-container>
        </div>
      </div>
    </mdc-card>

    <ng-template #skeleton>
      <ngx-skeleton-loader count="5"></ngx-skeleton-loader>
    </ng-template>
  `
})

export class PersonSkillsCardComponent {

  @Input() showHeader = true;

  @Select(PeopleState.selectedPerson) person$: Observable<Person>;
}
