
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
      { label: 'Google', value: 'google', icon: 'google', color: 'button-google' },
      { label: 'Microsoft', value: 'microsoft', icon: 'microsoft', color: 'button-microsoft' },
      { label: 'Facebook', value: 'facebook', icon: 'facebook', color: 'button-facebook' },
      { label: 'Spotify', value: 'spotify', icon: 'spotify', color: 'button-spotify' },
    ]),
    thirdPartyClick: action('On Third Party Click'),
    submitForm: action('On Submit Form')
  }
});

LoginForm.story = {
  name: 'Login Form'
};

export const ForgotPasswordForm = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-forgot-password-form
        (submitForm)="submitForm($event)">
      </app-forgot-password-form>
    </div>
  `,
  props: {
    submitForm: action('On Submit Form')
  }
});

ForgotPasswordForm.story = {
  name: 'Forgot Password Form'
};

export const ResetPasswordForm = () => ({
  template: `
    <div class="storybook-wrapper">
      <app-reset-password-form
        (submitForm)="submitForm($event)">
      </app-reset-password-form>
    </div>
  `,
  props: {
    submitForm: action('On Submit Form')
  }
});

ResetPasswordForm.story = {
  name: 'Reset Password Form'
};
