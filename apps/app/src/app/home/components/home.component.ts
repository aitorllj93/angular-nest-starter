
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ColumnMode } from '@swimlane/ngx-datatable';

import { Message } from '@workspace/api-interfaces';

@Component({
  selector: 'app-home',
  template: `
    <ngx-datatable
      class="material striped"
      [rows]="[(hello$ | async)]"
      [columns]="columns"
      [columnMode]="columnMode"
      [headerHeight]="50"
      [footerHeight]="50"
      [rowHeight]="50">
    </ngx-datatable>
  `
})

export class HomeComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/hello');

  columnMode = ColumnMode.force;
  columns = [
    {
      name: 'Message'
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() { }
}
