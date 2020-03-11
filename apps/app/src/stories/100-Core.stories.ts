import { moduleMetadata } from '@storybook/angular';
import { CoreModule } from '../app/core/core.module';
import { MdcIconRegistry } from '@angular-mdc/web';

export default {
  title: 'Feature - Core',
  decorators: [
    moduleMetadata({
      imports: [CoreModule],
      providers: [MdcIconRegistry]
    })
  ]
}

export const Header = () => ({
  template: `
    <app-header>
    </app-header>
  `,
});

Header.story = {
  name: 'Header'
};

export const LeftMenu = () => ({
  template: `
      <app-left-menu [drawerOpened]="true">
      </app-left-menu>
  `,
});

LeftMenu.story = {
  name: 'Left Menu'
};

export const MainLayout = () => ({
  template: `
    <app-header
      (menuToggleClick)="drawerOpened = !drawerOpened">
    </app-header>
    <div class="main-layout-content">

      <app-left-menu [drawerOpened]="drawerOpened">
      </app-left-menu>

    </div>
  `,
});

MainLayout.story = {
  name: 'Full Layout'
};
