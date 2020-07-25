
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-person-age-pie-chart',
  template: `
    <mdc-card>
      <div mdcBody class="p-1">

        <div mdcHeadline5 class="mb-1" *ngIf="showHeader">
          People by Age
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

export class PersonAgePieChartComponent {

  @Input() showHeader = true;

  @Select(state => state.peopleStore.agePieChart) results$: Observable<any>;
}
