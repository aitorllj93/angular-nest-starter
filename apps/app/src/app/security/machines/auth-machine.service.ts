import { of, from } from 'rxjs';
import {
  interpret,
  Machine,
  MachineOptions,
  State,
  assign,
  EventObject
} from 'xstate';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { authMachineConfig } from './auth-machine.config';
import { AuthSchema, AuthContext } from './auth-machine.schema';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginSuccess, AuthEvent, LoginFail } from './auth-machine.events';
import { BaseMachine } from '../../core/services/base/base.machine';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthMachine extends BaseMachine<AuthContext, AuthSchema, AuthEvent> {

  services = {
    requestLogin: (_, event) =>
      of(null)
      // this.authService
      //   .login({ email: event.username, password: event.password })
      //   .pipe(
      //     map(user => new LoginSuccess(user)),
      //     catchError(result => of(new LoginFail(result.error.errors)))
      //   )
  }

  guards = {
    isLoggedOut: () => !this.token.token
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
      this.token.token = ctx.user.token;
      this.router.navigateByUrl('');
    }
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private token: TokenService,
  ) {
    super();
  }
}
