
import { moduleMetadata } from '@storybook/angular';
import { ErrorStateMatcher, MdcIconRegistry } from '@angular-mdc/web';

import { SecurityModule } from '../app/security/security.module';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';

export default {
  title: 'Feature - Security',
  decorators: [
    moduleMetadata({
      imports: [SecurityModule],
      providers: [ErrorStateMatcher, MdcIconRegistry]
    })
  ]
}

export const LoginForm = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-login-form
        [thirdPartyOptions]="thirdPartyOptions"
        (thirdPartyClick)="thirdPartyClick($event)"
        (submitForm)="submitForm($event)">
      </app-login-form>
    </div>
  `,
  props: {
    thirdPartyOptions: object('Third Party Options', [
      { label: 'Google', value: 'google', icon: 'google' },
      { label: 'Microsoft', value: 'microsoft', icon: 'microsoft' },
      { label: 'Facebook', value: 'facebook', icon: 'facebook' },
      { label: 'Spotify', value: 'spotify', icon: 'spotify' },
    ]),
    thirdPartyClick: action('On Third Party Click'),
    submitForm: action('On Submit Form')
  }
});

LoginForm.story = {
  name: 'Login Form'
};
