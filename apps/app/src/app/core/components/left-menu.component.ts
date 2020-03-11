
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  template: `
    <mdc-drawer drawer="dismissible" [(open)]="drawerOpened">
      <mdc-drawer-header>
        <h3 mdcDrawerTitle>Drawer Title</h3>
        <h6 mdcDrawerSubtitle>Subtitle</h6>
      </mdc-drawer-header>
      <mdc-drawer-content>
        <mdc-list>
          <mdc-list-item *ngFor="let item of destinations" [activated]="item.activated">
            <mdc-icon mdcListItemGraphic *ngIf="item.icon" fontSet="mdi" fontIcon="mdi-{{item.icon}}"></mdc-icon>{{item.label}}
          </mdc-list-item>
        </mdc-list>
      </mdc-drawer-content>
    </mdc-drawer>
  `
})

export class LeftMenuComponent implements OnInit {

  @Input() drawerOpened = false;

  destinations = [
    { label: 'Inbox', icon: 'inbox', activated: true },
    { label: 'Star', icon: 'star', activated: false },
    { label: 'Sent Mail', icon: 'send', activated: false },
    { label: 'Drafts', icon: 'email-open', activated: false }
  ];

  constructor() { }

  ngOnInit() { }
}
