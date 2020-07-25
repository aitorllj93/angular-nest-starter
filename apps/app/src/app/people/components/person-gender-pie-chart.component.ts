
import { Component, OnInit, Input } from '@angular/core';

import { RandomPersonGeneratorService } from '../services/random-person-generator.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-person-gender-pie-chart',
  template: `
    <mdc-card>
      <div mdcBody class="p-1">

        <div mdcHeadline5 class="mb-1" *ngIf="showHeader">
          People by Gender
        </div>

        <div style="height: 200px" *ngIf="genderChartResults$ | async as genderChartResults; else skeleton">
          <ngx-charts-advanced-pie-chart
            [results]="genderChartResults"
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

export class PersonGenderPieChartComponent implements OnInit {

  @Input() showHeader = true;

  @Input() people$ = this.randomPersonGenerator.generateMany();

  @Input() genderChartResults$ = new Subject<any>();

  constructor(
    private randomPersonGenerator: RandomPersonGeneratorService
  ) { }

  ngOnInit() {
    this.people$.subscribe(
      (people) => {
        this.genderChartResults$.next([
          {
            name: 'Female',
            value: people.filter(person => person.gender === 'female').length
          },
          {
            name: 'Male',
            value: people.filter(person => person.gender === 'male').length
          },
        ]);
      }
    );
   }
}
