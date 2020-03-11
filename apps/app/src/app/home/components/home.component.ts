
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ColumnMode } from '@swimlane/ngx-datatable';

import { Message } from '@workspace/api-interfaces';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  template: `
    <div style="min-width: 300px;"
        fxLayout="row"
        fxLayout.xs="column"
        fxFlexFill >

      <div [fxFlex]="50">

        <ngx-datatable
          class="material striped"
          [rows]="[(hello$ | async)]"
          [columns]="columns"
          [columnMode]="columnMode"
          [headerHeight]="50"
          [footerHeight]="50"
          [rowHeight]="50">
        </ngx-datatable>

      </div>

      <div [fxFlex]="50">

        <ngx-charts-area-chart-stacked
          [view]="view"
          [scheme]="colorScheme"
          [legend]="legend"
          [showXAxisLabel]="showXAxisLabel"
          [showYAxisLabel]="showYAxisLabel"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          [xAxisLabel]="xAxisLabel"
          [yAxisLabel]="yAxisLabel"
          [timeline]="timeline"
          [results]="multi"
          (select)="onSelect($event)">
        </ngx-charts-area-chart-stacked>

      </div>

    </div>
  `
})

export class HomeComponent implements OnInit {
  // hello$ = this.http.get<Message>('/api/hello');
  hello$ = new BehaviorSubject({ message: 'Hello' })

  columnMode = ColumnMode.force;
  columns = [
    {
      name: 'Message'
    }
  ];

  multi: any[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "1990",
          "value": 62000000
        },
        {
          "name": "2010",
          "value": 73000000
        },
        {
          "name": "2011",
          "value": 89400000
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "1990",
          "value": 250000000
        },
        {
          "name": "2010",
          "value": 309000000
        },
        {
          "name": "2011",
          "value": 311000000
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "1990",
          "value": 58000000
        },
        {
          "name": "2010",
          "value": 50000020
        },
        {
          "name": "2011",
          "value": 58000000
        }
      ]
    },
    {
      "name": "UK",
      "series": [
        {
          "name": "1990",
          "value": 57000000
        },
        {
          "name": "2010",
          "value": 62000000
        }
      ]
    }
  ];
  view: any[] = [700, 300];

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Year';
  yAxisLabel = 'Population';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  // constructor(private http: HttpClient) {}

  ngOnInit() { }

  onSelect(event) {
    console.log(event);
  }
}
