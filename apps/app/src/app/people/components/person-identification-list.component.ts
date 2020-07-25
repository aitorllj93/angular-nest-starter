
import { Component, Output, EventEmitter } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Person } from '../models/person';
import { PeopleState } from '../state/people.state';

@Component({
  selector: 'app-person-identification-list',
  template: `
    <mdc-card>
      <ngx-datatable
        *ngIf="people$ | async as people; else skeleton"
        class="material striped"
        [rows]="people"
        [columnMode]="columnMode"
        [headerHeight]="50"
        [footerHeight]="50"
        rowHeight="auto"
        (activate)="onActivate($event)"
        [limit]="5">

        <ngx-datatable-column name="Picture" prop="image">
          <ng-template let-row="row" ngx-datatable-cell-template>
            <img style="border-radius: 10px;" [src]="row.image" width="50px">
          </ng-template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Name" prop="fullName">
          <ng-template let-row="row" ngx-datatable-cell-template>
            {{ row.fullName }}
          </ng-template>
        </ngx-datatable-column>

        <ngx-datatable-column name="ID" prop="identifier">
          <ng-template let-row="row" ngx-datatable-cell-template>
            {{ row.identifier }}
          </ng-template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Gender" prop="gender">
          <ng-template let-row="row" ngx-datatable-cell-template>
            <mdc-icon fontSet="mdi" fontIcon="mdi-gender-{{row.gender}}"></mdc-icon>
          </ng-template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Address" prop="address">
          <ng-template let-row="row" ngx-datatable-cell-template>
            {{ row.address }}
          </ng-template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Birthday" prop="age">
          <ng-template let-row="row" ngx-datatable-cell-template>
            {{ row.birthday | date:'shortDate' }} ({{ row.age }} years)
          </ng-template>
        </ngx-datatable-column>

      </ngx-datatable>
  </mdc-card>

  <ng-template #skeleton>
    <ngx-skeleton-loader class="p-1" count="10"></ngx-skeleton-loader>
  </ng-template>
  `
})

export class PersonIdentificationListComponent {

  @Select(PeopleState.people) people$: Observable<Person[]>;

  @Output() rowClick = new EventEmitter<Person>();

  columnMode = ColumnMode.force;

  onActivate(event) {
    switch (event.type) {
      case 'click':
        this.rowClick.emit(event.row);
        break;
    }
  }
}
