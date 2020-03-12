
import { User } from '../models/user.model';

export interface AuthSchema {
  states: {
    boot: {};
    loggedOut: {};
    loggedIn: {};
    requestErr: {};
    loading: {};
  };
}

export interface AuthContext {
  user: User;
  errors: string[];
}
