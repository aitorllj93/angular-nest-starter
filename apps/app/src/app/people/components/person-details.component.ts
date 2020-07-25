
import { Component, OnInit, Input } from '@angular/core';
import { RandomPersonGeneratorService } from '../services/random-person-generator.service';

@Component({
  selector: 'app-person-details',
  template: `

    <app-person-identification-card [person$]="person$" class="d-block mb-1"></app-person-identification-card>
    <app-person-attributes-card [person$]="person$" class="d-block mb-1"></app-person-attributes-card>
    <app-person-skills-card [person$]="person$" class="d-block mb-1"></app-person-skills-card>
    <app-person-notes-card [person$]="person$" class="d-block mb-1"></app-person-notes-card>

    <button mdc-fab position='bottomRight'>
      <mdc-icon fontSet="mdi" fontIcon="mdi-pencil"></mdc-icon>
    </button>
  `
})

export class PersonDetailsComponent implements OnInit {

  @Input() person$ = this.randomPersonGenerator.generate();

  constructor(
    private randomPersonGenerator: RandomPersonGeneratorService
  ) { }

  ngOnInit() { }
}
