import { MachineConfig } from 'xstate';
import { AuthSchema, AuthContext, AUTH_MACHINE_STATES, AUTH_MACHINE_ACTIONS, AUTH_MACHINE_SERVICES, AUTH_MACHINE_GUARDS, AUTH_MACHINE_ID } from './auth-machine.schema';
import { AuthEvent } from './auth-machine.events';

export const context: AuthContext = {
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
  AuthContext,
  AuthSchema,
  AuthEvent
> = {
  id: AUTH_MACHINE_ID,
  context,
  initial: AUTH_MACHINE_STATES.BOOT,
  states: {
    [AUTH_MACHINE_STATES.BOOT]: {
      on: {
        '': [
          { target: AUTH_MACHINE_STATES.LOGGED_OUT, cond: AUTH_MACHINE_GUARDS.IS_LOGGED_OUT },
          { target: AUTH_MACHINE_STATES.LOGGED_IN }
        ]
      }
    },
    [AUTH_MACHINE_STATES.LOGGED_OUT]: {
      on: {
        SUBMIT: [
          {
            target: AUTH_MACHINE_STATES.LOADING
          }
        ]
      }
    },
    [AUTH_MACHINE_STATES.LOGGED_IN]: {
      type: 'final'
    },
    [AUTH_MACHINE_STATES.REQUEST_ERR]: {
      on: {
        SUBMIT: AUTH_MACHINE_STATES.LOADING
      }
    },
    [AUTH_MACHINE_STATES.LOADING]: {
      invoke: {
        id: AUTH_MACHINE_ID,
        src: AUTH_MACHINE_SERVICES.REQUEST_LOGIN
      },
      on: {
        SUCCESS: {
          target: AUTH_MACHINE_STATES.LOGGED_IN,
          actions: [AUTH_MACHINE_ACTIONS.ASSIGN_USER, AUTH_MACHINE_ACTIONS.LOGIN_SUCCESS]
        },
        FAILURE: {
          target: AUTH_MACHINE_STATES.REQUEST_ERR,
          actions: [AUTH_MACHINE_ACTIONS.ASSIGN_ERRORS]
        }
      }
    }
  }
};
