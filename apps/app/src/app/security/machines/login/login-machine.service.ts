
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { assign, MachineOptions, Machine, interpret, MachineConfig } from 'xstate';
import { of, from } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { LocalStorageService } from 'ngx-webstorage';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../services/auth.service';

import { loginMachineConfig, loginMachineContext } from './login-machine.config';
import { LoginSchema, LoginContext, LOGIN_MACHINE_SERVICES, LOGIN_MACHINE_GUARDS, LOGIN_MACHINE_ACTIONS } from './login-machine.schema';
import { LoginSuccess, LoginEvent, LoginFail, LogoutSuccess, LogoutFail } from './login-machine.events';

@Injectable({
  providedIn: 'root'
})
export class LoginMachine {

  config: MachineConfig<LoginContext, LoginSchema, LoginEvent> = {
    ...loginMachineConfig,
    context: {
      user: this.storage.retrieve('sessionUser') || loginMachineContext.user,
    }
  };

  services = {

    [LOGIN_MACHINE_SERVICES.REQUEST_LOGIN]: (_, event) =>
      this.auth
        .login({ username: event.username, password: event.password })
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

    [LOGIN_MACHINE_ACTIONS.NOTIFY_ERRORS]: (_, event) => {
      event.errors.forEach(error => {
        this.toast.error(error);
      });
    },

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
  context$ = this.state$.pipe(map(state => state.context));

  user$ = this.context$.pipe(map(context => context.user));
  token$ = this.context$.pipe(map(context => context.user.token));

  constructor(
    private auth: AuthService,
    private router: Router,
    private storage: LocalStorageService,
    private toast: ToastrService,
  ) {}

  send(event: LoginEvent) {
    this.service.send(event);
  }
}
