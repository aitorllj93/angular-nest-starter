
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { PeopleState } from '../state/people.state';

@Component({
  selector: 'app-person-gender-pie-chart',
  template: `
    <mdc-card>
      <div mdcBody class="p-1">

        <div mdcHeadline5 class="mb-1" *ngIf="showHeader">
          People by Gender
        </div>

        <div style="height: 200px" *ngIf="results$ | async as results; else skeleton">
          <ngx-charts-advanced-pie-chart
            [results]="results"
            [scheme]="'horizon'">
          </ngx-charts-advanced-pie-chart>
        </div>

      </div>
    </mdc-card>

    <ng-template #skeleton>
      <ngx-skeleton-loader count="5"></ngx-skeleton-loader>
    </ng-template>
  `
})

export class PersonGenderPieChartComponent {

  @Input() showHeader = true;

  @Select(PeopleState.genderPieChart) results$: Observable<any>;
}
