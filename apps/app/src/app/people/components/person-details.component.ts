
import { Component } from '@angular/core';

@Component({
  selector: 'app-person-details',
  template: `
    <app-person-identification-card class="d-block mb-1"></app-person-identification-card>
    <app-person-attributes-card class="d-block mb-1"></app-person-attributes-card>
    <app-person-skills-card class="d-block mb-1"></app-person-skills-card>
    <app-person-notes-card class="d-block mb-1"></app-person-notes-card>

    <button mdc-fab position='bottomRight'>
      <mdc-icon fontSet="mdi" fontIcon="mdi-pencil"></mdc-icon>
    </button>
  `
})

export class PersonDetailsComponent {
}
