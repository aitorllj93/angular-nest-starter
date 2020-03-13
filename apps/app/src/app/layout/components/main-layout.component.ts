
import { Component, OnInit } from '@angular/core';

import { LoginMachine } from '../../security/machines/login/login-machine.service';
import { LogoutSubmit } from '../../security/machines/login/login-machine.events';

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
          <span *ngIf="user$ | async as user">{{ user.username }}</span>
          <button mdcTopAppBarActionItem (click)="onLogoutClick()">
            <mdc-icon fontSet="mdi" fontIcon="mdi-logout"></mdc-icon>
          </button>
        </mdc-top-app-bar-section>
      </mdc-top-app-bar-row>
    </mdc-top-app-bar>

    <div class="main-layout-content">

      <mdc-drawer drawer="dismissible" [(open)]="drawerOpened">
        <mdc-drawer-content>
          <mdc-list>
            <mdc-list-item *ngFor="let item of destinations" [routerLink]="item.route" routerLinkActive="mdc-list-item--activated">
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
    { label: 'Dashboard', icon: 'view-dashboard', route: '/dashboard' }
  ];

  user$ = this.loginMachine.user$;

  constructor(
    private loginMachine: LoginMachine
  ) {}

  onLogoutClick() {
    this.loginMachine.send(new LogoutSubmit());
  }
}
