
import { User } from '../models/user.model';

export const AUTH_MACHINE_ID = 'login';

export enum AUTH_MACHINE_STATES {
  BOOT = 'boot',
  LOGGED_OUT = 'loggedOut',
  LOGGED_IN = 'loggedIn',
  REQUEST_ERR = 'requestErr',
  LOADING = 'loading'
}

export enum AUTH_MACHINE_TRANSITIONS {
  INIT = 'INIT',
  SUBMIT = 'SUBMIT',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}

export enum AUTH_MACHINE_ACTIONS {
  ASSIGN_USER = 'assignUser',
  LOGIN_SUCCESS = 'loginSuccess',
  ASSIGN_ERRORS = 'assignErrors'
}

export enum AUTH_MACHINE_SERVICES {
  REQUEST_LOGIN = 'requestLogin'
}

export enum AUTH_MACHINE_GUARDS {
  IS_LOGGED_OUT = 'isLoggedOut'
}

export interface AuthSchema {
  states: {
    [AUTH_MACHINE_STATES.BOOT]: {};
    [AUTH_MACHINE_STATES.LOGGED_OUT]: {};
    [AUTH_MACHINE_STATES.LOGGED_IN]: {};
    [AUTH_MACHINE_STATES.REQUEST_ERR]: {};
    [AUTH_MACHINE_STATES.LOADING]: {};
  };
}

export interface AuthContext {
  user: User;
  errors: string[];
}
