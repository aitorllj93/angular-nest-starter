
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { assign, MachineOptions, Machine, interpret } from 'xstate';
import { of, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { LocalStorageService } from 'ngx-webstorage';

import { AuthService } from '../../services/auth.service';

import { authMachineConfig } from './login-machine.config';
import { LoginSchema, LoginContext, LOGIN_MACHINE_SERVICES, LOGIN_MACHINE_GUARDS, LOGIN_MACHINE_ACTIONS } from './login-machine.schema';
import { LoginSuccess, LoginEvent, LoginFail, LogoutSuccess, LogoutFail } from './login-machine.events';

@Injectable({
  providedIn: 'root'
})
export class LoginMachine {

  config = authMachineConfig;

  services = {

    [LOGIN_MACHINE_SERVICES.REQUEST_LOGIN]: (_, event) =>
      this.auth
        .login({ email: event.username, password: event.password })
        .pipe(
          map(user => new LoginSuccess(user)),
          catchError(result => of(new LoginFail(result.error.errors)))
        ),

    [LOGIN_MACHINE_SERVICES.REQUEST_LOGOUT]: (_, event) =>
      this.auth
        .logout()
        .pipe(
          map(user => new LogoutSuccess()),
          catchError(result => of(new LogoutFail(result.error.errors)))
        ),
  }

  guards = {
    [LOGIN_MACHINE_GUARDS.IS_LOGGED_IN]: () => this.storage.retrieve('sessionToken'),
    [LOGIN_MACHINE_GUARDS.IS_LOGGED_OUT]: () => !this.storage.retrieve('sessionToken')
  }

  actions = {

    [LOGIN_MACHINE_ACTIONS.ASSIGN_USER]: assign<LoginContext, LoginSuccess>((_, event) => ({
      user: event.userInfo
    })),

    [LOGIN_MACHINE_ACTIONS.UNASSIGN_USER]: assign<LoginContext, LoginSuccess>((_, event) => ({
      user: null
    })),

    [LOGIN_MACHINE_ACTIONS.ASSIGN_ERRORS]: assign<LoginContext, LoginFail>((_, event) => ({
      errors: Object.keys(event.errors || {}).map(
        key => `${key} ${event.errors[key]}`
      )
    })),

    [LOGIN_MACHINE_ACTIONS.LOGIN_SUCCESS]: (ctx, _) => {
      this.storage.store('sessionToken', ctx.user.token);
      this.storage.store('sessionUser', ctx.user);
      this.router.navigateByUrl('');
    },

    [LOGIN_MACHINE_ACTIONS.LOGOUT_SUCCESS]: (ctx, _) => {
      this.storage.clear('sessionToken');
      this.storage.clear('sessionUser');
      this.router.navigateByUrl('auth');
    }
  }

  options: Partial<MachineOptions<LoginContext, LoginEvent>> = {
    services: this.services,
    guards: this.guards,
    actions: this.actions
  };

  machine = Machine<LoginContext, LoginSchema, LoginEvent>(
    this.config
  ).withConfig(this.options);

  service = interpret<LoginContext, LoginSchema, LoginEvent>(this.machine, { devTools: true }).start();

  state$ = from(this.service);

  constructor(
    private auth: AuthService,
    private router: Router,
    private storage: LocalStorageService,
  ) {}

  send(event: LoginEvent) {
    this.service.send(event);
  }
}
