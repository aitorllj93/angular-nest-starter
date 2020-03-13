
import { User } from '../../models/user.model';

export const LOGIN_MACHINE_ID = 'login';

export enum LOGIN_MACHINE_STATES {
  BOOT = 'boot',
  LOGGED_OUT = 'loggedOut',
  LOGGED_IN = 'loggedIn',
  LOGIN_LOADING = 'loginLoading',
  LOGOUT_LOADING = 'logoutLoading',
}

export enum LOGIN_MACHINE_TRANSITIONS {
  INIT = 'INIT',
  LOGIN_SUBMIT = 'LOGIN_SUBMIT',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT_SUBMIT = 'LOGOUT_SUBMIT',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE = 'LOGOUT_FAILURE',
}

export enum LOGIN_MACHINE_ACTIONS {
  ASSIGN_USER = 'assignUser',
  UNASSIGN_USER = 'unassignUser',
  LOGIN_SUCCESS = 'loginSuccess',
  LOGOUT_SUCCESS = 'logoutSuccess',
  ASSIGN_ERRORS = 'assignErrors'
}

export enum LOGIN_MACHINE_SERVICES {
  REQUEST_LOGIN = 'requestLogin',
  REQUEST_LOGOUT = 'requestLogout',
}

export enum LOGIN_MACHINE_GUARDS {
  IS_LOGGED_IN = 'isLoggedIn',
  IS_LOGGED_OUT = 'isLoggedOut'
}

export interface LoginSchema {
  states: {
    [LOGIN_MACHINE_STATES.BOOT]: {};
    [LOGIN_MACHINE_STATES.LOGGED_OUT]: {};
    [LOGIN_MACHINE_STATES.LOGGED_IN]: {};
    [LOGIN_MACHINE_STATES.LOGIN_LOADING]: {};
    [LOGIN_MACHINE_STATES.LOGOUT_LOADING]: {};
  };
}

export interface LoginContext {
  user: User;
  errors: string[];
}
