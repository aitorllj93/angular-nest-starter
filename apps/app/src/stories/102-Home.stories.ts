import { moduleMetadata } from '@storybook/angular';
import { MdcIconRegistry } from '@angular-mdc/web';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from '../app/home/home.module';


export default {
  title: 'Feature - Home',
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        HomeModule
      ],
      providers: [MdcIconRegistry]
    })
  ]
}

export const Home = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-home></app-home>
    </div>
  `
})

Home.story = {
  name: 'Home'
};
