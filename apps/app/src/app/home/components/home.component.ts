
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

      <div [fxFlex]="50" style=" padding: 20px;">

        <mdc-card>
          <ngx-datatable
            class="material striped"
            [rows]="hello$ | async"
            [columns]="columns"
            [columnMode]="columnMode"
            [headerHeight]="50"
            [footerHeight]="50"
            [rowHeight]="50">
          </ngx-datatable>
        </mdc-card>

      </div>

      <div [fxFlex]="50" style=" padding: 20px;">

        <mdc-card style="height: 300px; padding-top: 20px;">
          <ngx-charts-area-chart-stacked
            [scheme]="'horizon'"
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
        </mdc-card>

      </div>

    </div>
  `
})

export class HomeComponent implements OnInit {
  // hello$ = this.http.get<Message>('/api/hello');
  hello$ = new BehaviorSubject([
    { message: 'Hello' },
    { message: 'World' },
  ])

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

  // constructor(private http: HttpClient) {}

  ngOnInit() { }

  onSelect(event) {
    console.log(event);
  }
}
