
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { patch, append } from '@ngxs/store/operators';

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
    { setState, dispatch }: StateContext<PeopleStateModel>,
    { person }: PeopleActions.Add
  ) {
    setState(
      patch({
        people: append([person]),
      })
    );

    return dispatch(new PeopleActions.GenerateCharts());
  }

  @Action(PeopleActions.AddMany)
  addPeople(
    { setState, dispatch }: StateContext<PeopleStateModel>,
    { people }: PeopleActions.AddMany
  ) {
    setState(
      patch({
        people: append(people),
      })
    );

    return dispatch(new PeopleActions.GenerateCharts());
  }

  @Action(PeopleActions.Select)
  selectPerson(
    { setState }: StateContext<PeopleStateModel>,
    { selectedPerson }: PeopleActions.Select
  ) {
    setState(
      patch({
        selectedPerson,
      })
    );
  }

  @Action(PeopleActions.GenerateCharts)
  generateCharts(
    { getState, setState }: StateContext<PeopleStateModel>,
  ) {
    const people = getState().people || [];

    setState(
      patch({
        agePieChart: this.chartGenerator.generateAgePieChart(people),
        genderPieChart: this.chartGenerator.generateGenderPieChart(people)
      })
    );
  }

  @Action(PeopleActions.GenerateRandom)
  generateRandomPeople(
    { dispatch }: StateContext<PeopleStateModel>,
    { quantity }: PeopleActions.GenerateRandom
  ) {
    const randomPeople = this.randomGenerator.generateMany(quantity);

    return dispatch(new PeopleActions.AddMany(randomPeople));
  }
}
