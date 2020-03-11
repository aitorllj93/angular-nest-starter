
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mdc-top-app-bar fixed>
      <mdc-top-app-bar-row>
        <mdc-top-app-bar-section align="start" title="Angular + Nest Starter">
          <button mdcTopAppBarNavIcon (click)="menuToggleClick.emit()">
            <mdc-icon fontSet="mdi" fontIcon="mdi-menu"></mdc-icon>
          </button>
        </mdc-top-app-bar-section>
        <mdc-top-app-bar-section align="end">
          <button mdcTopAppBarActionItem>
            <mdc-icon fontSet="mdi" fontIcon="mdi-file-download"></mdc-icon>
          </button>
          <button mdcTopAppBarActionItem>
            <mdc-icon fontSet="mdi" fontIcon="mdi-printer"></mdc-icon>
          </button>
          <button mdcTopAppBarActionItem>
            <mdc-icon fontSet="mdi" fontIcon="mdi-bookmark"></mdc-icon>
          </button>
        </mdc-top-app-bar-section>
      </mdc-top-app-bar-row>
    </mdc-top-app-bar>
  `
})

export class HeaderComponent {

  @Output() menuToggleClick = new EventEmitter();
}
