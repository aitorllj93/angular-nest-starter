
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { assign } from 'xstate';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { BaseMachine } from '../../core/machines/base.machine';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

import { authMachineConfig } from './auth-machine.config';
import { AuthSchema, AuthContext } from './auth-machine.schema';
import { LoginSuccess, AuthEvent, LoginFail } from './auth-machine.events';

@Injectable({
  providedIn: 'root'
})
export class AuthMachine extends BaseMachine<AuthContext, AuthSchema, AuthEvent> {

  config = authMachineConfig;

  services = {
    requestLogin: (_, event) =>
      this.authService
        .login({ email: event.username, password: event.password })
        .pipe(
          map(user => new LoginSuccess(user)),
          catchError(result => of(new LoginFail(result.error.errors)))
        )
  }

  guards = {
    isLoggedOut: () => !this.tokenService.token
  }

  actions = {

    assignUser: assign<AuthContext, LoginSuccess>((_, event) => ({
      user: event.userInfo
    })),

    assignErrors: assign<AuthContext, LoginFail>((_, event) => ({
      errors: Object.keys(event.errors || {}).map(
        key => `${key} ${event.errors[key]}`
      )
    })),

    loginSuccess: (ctx, _) => {
      this.tokenService.token = ctx.user.token;
      this.router.navigateByUrl('');
    }
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
  ) {
    super();
  }
}
