import { Component, OnInit, Input } from '@angular/core';

import { RandomPersonGeneratorService } from '../services/random-person-generator.service';

@Component({
  selector: 'app-person-dashboard',
  template: `
    <div  class="mb-1">
      <div fxLayout="row" fxFlexFill>
        <div [fxFlex]="50" class="px-1">
          <app-person-gender-pie-chart [people$]="people$"></app-person-gender-pie-chart>
        </div>
        <div [fxFlex]="50" class="px-1">
          <app-person-age-pie-chart [people$]="people$"></app-person-age-pie-chart>
        </div>
      </div>
    </div>
    <div class="px-1">
      <app-person-identification-list [people$]="people$"></app-person-identification-list>
    </div>
  `
})

export class PersonDashboardComponent implements OnInit {

  @Input() people$ = this.randomPersonGenerator.generateMany();

  constructor(
    private randomPersonGenerator: RandomPersonGeneratorService
  ) { }

  ngOnInit() {}
}
