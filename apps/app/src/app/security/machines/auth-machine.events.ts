
import { User } from '../models/user.model';
import { AUTH_MACHINE_TRANSITIONS } from './auth-machine.schema';

export class Init {
  readonly type = AUTH_MACHINE_TRANSITIONS.INIT;
}
export class LoginSubmit {
  readonly type = AUTH_MACHINE_TRANSITIONS.SUBMIT;
  constructor(public username: string, public password: string) {}
}

export class LoginFail {
  readonly type = AUTH_MACHINE_TRANSITIONS.FAILURE;
  constructor(public errors: Errors) {}
}

export class LoginSuccess {
  readonly type = AUTH_MACHINE_TRANSITIONS.SUCCESS;
  constructor(public userInfo: User) {}
}

export type AuthEvent = Init | LoginSubmit | LoginSuccess | LoginFail;

export interface Errors {
  [key: string]: string;
}
