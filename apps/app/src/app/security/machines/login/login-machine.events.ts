
import { User } from '../../models/user.model';
import { LOGIN_MACHINE_TRANSITIONS } from './login-machine.schema';

export class Init {
  readonly type = LOGIN_MACHINE_TRANSITIONS.INIT;
}

export class LoginSubmit {
  readonly type = LOGIN_MACHINE_TRANSITIONS.LOGIN_SUBMIT;
  constructor(public username: string, public password: string) {}
}

export class LoginFail {
  readonly type = LOGIN_MACHINE_TRANSITIONS.LOGIN_FAILURE;
  constructor(public errors: Errors) {}
}

export class LoginSuccess {
  readonly type = LOGIN_MACHINE_TRANSITIONS.LOGIN_SUCCESS;
  constructor(public userInfo: User) {}
}

export class LogoutSubmit {
  readonly type = LOGIN_MACHINE_TRANSITIONS.LOGOUT_SUBMIT;
  constructor() {}
}

export class LogoutFail {
  readonly type = LOGIN_MACHINE_TRANSITIONS.LOGOUT_FAILURE;
  constructor(public errors: Errors) {}
}

export class LogoutSuccess {
  readonly type = LOGIN_MACHINE_TRANSITIONS.LOGOUT_SUCCESS;
  constructor() {}
}

export type LoginEvent =
  Init |
  LoginSubmit |
  LoginSuccess |
  LoginFail |
  LogoutSubmit |
  LogoutSuccess |
  LogoutFail;

export interface Errors {
  [key: string]: string;
}
