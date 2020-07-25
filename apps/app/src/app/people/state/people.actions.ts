import { Person } from '../models/person';

export namespace PeopleActions {

  export class Add {
    static readonly type = '[People] Add Person';
    constructor(public person: Person) {}
  }

  export class AddMany {
    static readonly type = '[People] Add People';
    constructor(public people: Person[]) {}
  }

  export class Select {
    static readonly type = '[People] Select Person';
    constructor(public selectedPerson: Person) {}
  }

  export class GenerateCharts {
    static readonly type = '[People] Generate Charts';
    constructor() {}
  }

  export class GenerateRandom {
    static readonly type = '[People] Generate Random People';
    constructor(public quantity: number = 50) {}
  }

}
