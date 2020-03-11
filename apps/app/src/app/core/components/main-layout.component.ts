
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
    <app-header
      (menuToggleClick)="drawerOpened = !drawerOpened">
    </app-header>
    <div class="main-layout-content">

      <app-left-menu [drawerOpened]="drawerOpened">
      </app-left-menu>

      <div mdcDrawerAppContent>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})

export class MainLayoutComponent {

  drawerOpened = false;
}
