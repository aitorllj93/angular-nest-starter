
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
    <mdc-top-app-bar fixed>
      <mdc-top-app-bar-row>
        <mdc-top-app-bar-section align="start" title="Angular + Nest Starter">
          <button mdcTopAppBarNavIcon (click)="drawerOpened = !drawerOpened">
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

    <div class="main-layout-content">

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

      <div mdcDrawerAppContent>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})

export class MainLayoutComponent {

  drawerOpened = false;

  destinations = [
    { label: 'Inbox', icon: 'inbox', activated: true },
    { label: 'Star', icon: 'star', activated: false },
    { label: 'Sent Mail', icon: 'send', activated: false },
    { label: 'Drafts', icon: 'email-open', activated: false }
  ];
}
