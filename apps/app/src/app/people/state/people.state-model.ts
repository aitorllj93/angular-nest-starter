
import { Person } from '../models/person';

export class PeopleStateModel {
  people: Person[];
  selectedPerson: Person;
  agePieChart: { name: string, value: number }[];
  genderPieChart: { name: string, value: number }[];
}
