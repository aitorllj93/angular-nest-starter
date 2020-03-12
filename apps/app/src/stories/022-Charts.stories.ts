import { moduleMetadata } from '@storybook/angular';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { object } from '@storybook/addon-knobs';

export default {
  title: 'UI - Charts',
  decorators: [
    moduleMetadata({
      imports: [NgxChartsModule],
    }),
  ],
};


export const AreaChartStacked = () => ({
  template: `
    <ngx-charts-area-chart-stacked
      [scheme]="colorScheme"
      [legend]="legend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxis]="xAxis"
      [yAxis]="yAxis"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      [timeline]="timeline"
      [results]="items"
      (select)="onSelect($event)">
    </ngx-charts-area-chart-stacked>
  `,
  props: {
    items: object('Items', [
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
    ]),
    // options
    legend: true,
    showLabels: true,
    animations: true,
    xAxis: true,
    yAxis: true,
    showYAxisLabel: true,
    showXAxisLabel: true,
    xAxisLabel: 'Year',
    yAxisLabel: 'Population',
    timeline: true,
    colorScheme: {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    },
  }
});

AreaChartStacked.story = {
  title: 'Area Chart Stacked'
};
