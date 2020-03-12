import { MachineOptions, Machine, EventObject, interpret } from 'xstate';
import { from } from 'rxjs';


export class BaseMachine<Context = any, Schema = any, Event extends EventObject = EventObject> {

  config = {};

  services = {};
  guards = {};
  actions = {};

  options: Partial<MachineOptions<Context, Event>> = {
    services: this.services,
    guards: this.guards,
    actions: this.actions
  };

  machine = Machine<Context, Schema, Event>(
    this.config
  ).withConfig(this.options);

  service = interpret(this.machine, { devTools: true }).start();

  state$ = from(this.service);

  send(event: Event) {
    this.service.send(event);
  }

}
