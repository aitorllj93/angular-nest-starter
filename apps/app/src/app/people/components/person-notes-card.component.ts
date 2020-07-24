import { Component, OnInit, Input } from '@angular/core';
import { RandomPersonGeneratorService } from '../services/random-person-generator.service';

@Component({
  selector: 'app-person-notes-card',
  template: `
    <mdc-card>
      <div mdcBody class="p-1">

        <div mdcHeadline5 class="mb-1" *ngIf="showHeader">
          Notes
        </div>

        <div mdcBody1>
          {{ person.notes }}
        </div>

      </div>
    </mdc-card>
  `
})

export class PersonNotesCardComponent implements OnInit {

  @Input() showHeader = true;

  @Input() person = this.randomPersonGenerator.generate();

  constructor(
    private randomPersonGenerator: RandomPersonGeneratorService
  ) { }

  ngOnInit() { }
}
