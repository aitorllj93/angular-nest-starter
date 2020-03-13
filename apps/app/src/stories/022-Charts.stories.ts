import { moduleMetadata } from '@storybook/angular';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { object, boolean, text } from '@storybook/addon-knobs';

import populationByYears from './data/charts/population-by-years';

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
    // options
    legend: boolean('Legend', true),
    showLabels: boolean('Show Labels', true),
    animations: boolean('Animations', true),
    xAxis: boolean('X Axis', true),
    yAxis: boolean('Y Axis', true),
    showYAxisLabel: boolean('Show Y Axis Label', true),
    showXAxisLabel: boolean('Show X Axis Label', true),
    xAxisLabel: text('X Axis Label', 'Year'),
    yAxisLabel: text('Y Axis Label', 'Population'),
    timeline: boolean('Legend', true),
    colorScheme: object('Color Scheme', {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    }),
    items: object('Items', populationByYears),
  }
});

AreaChartStacked.story = {
  title: 'Area Chart Stacked'
};
