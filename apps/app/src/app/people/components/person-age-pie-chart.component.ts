
import { Component, OnInit, Input } from '@angular/core';

import { RandomPersonGeneratorService } from '../services/random-person-generator.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-person-age-pie-chart',
  template: `
    <mdc-card>
      <div mdcBody class="p-1">

        <div mdcHeadline5 class="mb-1" *ngIf="showHeader">
          People by Age
        </div>

        <div style="height: 200px" *ngIf="ageChartResults$ | async as ageChartResults; else skeleton">
          <ngx-charts-advanced-pie-chart
            [results]="ageChartResults"
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

export class PersonAgePieChartComponent implements OnInit {

  @Input() showHeader = true;

  @Input() people$ = this.randomPersonGenerator.generateMany();

  @Input() ageChartResults$ = new Subject<any>();

  constructor(
    private randomPersonGenerator: RandomPersonGeneratorService
  ) { }

  ngOnInit() {
    this.people$.subscribe(
      (people) => {
        this.ageChartResults$.next([
          {
            name: '< 18',
            value: people.filter(person => person.age < 18).length
          },
          {
            name: '>= 18 < 30',
            value: people.filter(person => person.age >= 18 && person.age < 30).length
          },
          {
            name: '>= 30 < 45',
            value: people.filter(person => person.age >= 30 && person.age < 45).length
          },
          {
            name: '>= 45 < 65',
            value: people.filter(person => person.age >= 45 && person.age < 65).length
          },
          {
            name: '> 65',
            value: people.filter(person => person.age > 65).length
          },
        ]);
      }
    );
   }
}
