import { MachineConfig } from 'xstate';

import { MACHINE_FINAL_TYPE } from '../../../core/machines/machines.constants';

import {
  LoginSchema,
  LoginContext,
  LOGIN_MACHINE_ID,
  LOGIN_MACHINE_STATES,
  LOGIN_MACHINE_ACTIONS,
  LOGIN_MACHINE_SERVICES,
  LOGIN_MACHINE_GUARDS,
  LOGIN_MACHINE_TRANSITIONS,
} from './login-machine.schema';

import { LoginEvent } from './login-machine.events';

export const context: LoginContext = {
  user: {
    email: '',
    token: '',
    username: '',
    bio: '',
    image: ''
  },
  errors: []
};

export const authMachineConfig: MachineConfig<
  LoginContext,
  LoginSchema,
  LoginEvent
> = {
  id: LOGIN_MACHINE_ID,
  context,
  initial: LOGIN_MACHINE_STATES.BOOT,
  states: {
    [LOGIN_MACHINE_STATES.BOOT]: {
      on: {
        '': [
          { target: LOGIN_MACHINE_STATES.LOGGED_OUT, cond: LOGIN_MACHINE_GUARDS.IS_LOGGED_OUT },
          { target: LOGIN_MACHINE_STATES.LOGGED_IN }
        ]
      }
    },
    [LOGIN_MACHINE_STATES.LOGGED_OUT]: {
      on: {
        [LOGIN_MACHINE_TRANSITIONS.LOGIN_SUBMIT]: [
          {
            target: LOGIN_MACHINE_STATES.LOGIN_LOADING
          }
        ]
      }
    },
    [LOGIN_MACHINE_STATES.LOGGED_IN]: {
      on: {
        [LOGIN_MACHINE_TRANSITIONS.LOGOUT_SUBMIT]: [
          {
            target: LOGIN_MACHINE_STATES.LOGOUT_LOADING
          }
        ]
      }
    },
    [LOGIN_MACHINE_STATES.LOGIN_LOADING]: {
      invoke: {
        id: LOGIN_MACHINE_ID,
        src: LOGIN_MACHINE_SERVICES.REQUEST_LOGIN
      },
      on: {
        [LOGIN_MACHINE_TRANSITIONS.LOGIN_SUCCESS]: {
          target: LOGIN_MACHINE_STATES.LOGGED_IN,
          actions: [LOGIN_MACHINE_ACTIONS.ASSIGN_USER, LOGIN_MACHINE_ACTIONS.LOGIN_SUCCESS]
        },
        [LOGIN_MACHINE_TRANSITIONS.LOGIN_FAILURE]: {
          target: LOGIN_MACHINE_STATES.LOGGED_OUT,
          actions: [LOGIN_MACHINE_ACTIONS.ASSIGN_ERRORS]
        }
      }
    },
    [LOGIN_MACHINE_STATES.LOGOUT_LOADING]: {
      invoke: {
        id: LOGIN_MACHINE_ID,
        src: LOGIN_MACHINE_SERVICES.REQUEST_LOGOUT
      },
      on: {
        [LOGIN_MACHINE_TRANSITIONS.LOGOUT_SUCCESS]: {
          target: LOGIN_MACHINE_STATES.LOGGED_OUT,
          actions: [LOGIN_MACHINE_ACTIONS.UNASSIGN_USER, LOGIN_MACHINE_ACTIONS.LOGOUT_SUCCESS]
        },
        [LOGIN_MACHINE_TRANSITIONS.LOGOUT_FAILURE]: {
          target: LOGIN_MACHINE_STATES.LOGGED_OUT,
          actions: [LOGIN_MACHINE_ACTIONS.UNASSIGN_USER, LOGIN_MACHINE_ACTIONS.LOGOUT_SUCCESS]
        }
      }
    }
  }
};
