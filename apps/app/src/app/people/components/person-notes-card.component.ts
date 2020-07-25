import { Component, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Person } from '../models/person';

@Component({
  selector: 'app-person-notes-card',
  template: `
    <mdc-card>
      <div mdcBody class="p-1">

        <div mdcHeadline5 class="mb-1" *ngIf="showHeader">
          Notes
        </div>

        <div mdcBody1 *ngIf="person$ | async as person; else skeleton">
          {{ person.notes }}
        </div>

      </div>
    </mdc-card>

    <ng-template #skeleton>
      <ngx-skeleton-loader count="5"></ngx-skeleton-loader>
    </ng-template>
  `
})

export class PersonNotesCardComponent {

  @Input() showHeader = true;

  @Select(state => state.peopleStore.selectedPerson) person$: Observable<Person>;
}
