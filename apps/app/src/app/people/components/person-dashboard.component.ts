import { Component } from '@angular/core';

@Component({
  selector: 'app-person-dashboard',
  template: `
    <div  class="mb-1">
      <div fxLayout="row" fxFlexFill>
        <div [fxFlex]="50" class="px-1">
          <app-person-gender-pie-chart></app-person-gender-pie-chart>
        </div>
        <div [fxFlex]="50" class="px-1">
          <app-person-age-pie-chart></app-person-age-pie-chart>
        </div>
      </div>
    </div>
    <div class="px-1">
      <app-person-identification-list></app-person-identification-list>
    </div>
  `
})

export class PersonDashboardComponent {
}
