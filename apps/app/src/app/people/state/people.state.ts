
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';

import { PeopleActions } from './people.actions';
import { PeopleStateModel } from './people.state-model';
import { peopleInitialState } from './people.initial-state';

import { RandomPersonGeneratorService } from '../services/random-person-generator.service';
import { PersonChartGeneratorService } from '../services/person-chart-generator.service';

@State<PeopleStateModel>({
  name: 'peopleStore',
  defaults: peopleInitialState
})
@Injectable()
export class PeopleState {

  @Selector()
  static people(state: PeopleStateModel) {
    return state.people;
  }

  @Selector()
  static selectedPerson(state: PeopleStateModel) {
    return state.selectedPerson;
  }

  @Selector()
  static agePieChart(state: PeopleStateModel) {
    return state.agePieChart;
  }

  @Selector()
  static genderPieChart(state: PeopleStateModel) {
    return state.genderPieChart;
  }

  constructor(
    private randomGenerator: RandomPersonGeneratorService,
    private chartGenerator: PersonChartGeneratorService,
  ) {}

  @Action(PeopleActions.Add)
  addPerson(
    ctx: StateContext<PeopleStateModel>,
    action: PeopleActions.Add
  ) {
    const state = ctx.getState();
    const peopleState = state.people || [];
    const people = peopleState.concat(action.person);

    ctx.patchState({
      people,
      agePieChart: this.chartGenerator.generateAgePieChart(people),
      genderPieChart: this.chartGenerator.generateGenderPieChart(people)
    });
  }

  @Action(PeopleActions.AddMany)
  addPeople(
    ctx: StateContext<PeopleStateModel>,
    action: PeopleActions.AddMany
  ) {
    const state = ctx.getState();
    const peopleState = state.people || [];
    const people = peopleState.concat(action.people);

    ctx.patchState({
      people,
      agePieChart: this.chartGenerator.generateAgePieChart(people),
      genderPieChart: this.chartGenerator.generateGenderPieChart(people)
    });
  }

  @Action(PeopleActions.Select)
  selectPerson(
    ctx: StateContext<PeopleStateModel>,
    action: PeopleActions.Select
  ) {
    ctx.patchState({
      selectedPerson: action.person
    });
  }

  @Action(PeopleActions.GenerateRandom)
  generateRandomPeople(
    ctx: StateContext<PeopleStateModel>,
    action: PeopleActions.GenerateRandom
  ) {
    const randomPeople = this.randomGenerator.generateMany(action.quantity);

    return ctx.dispatch(new PeopleActions.AddMany(randomPeople));
  }
}
