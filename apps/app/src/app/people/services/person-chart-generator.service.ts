
import { Injectable } from '@angular/core';

import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonChartGeneratorService {

  generateAgePieChart(people: Person[]) {
    return [
      {
        name: '< 18',
        value: people.filter(person => person.age < 18).length
      },
      {
        name: '>= 18 < 30',
        value: people.filter(person => person.age >= 18 && person.age < 30).length
      },
      {
        name: '>= 30 < 45',
        value: people.filter(person => person.age >= 30 && person.age < 45).length
      },
      {
        name: '>= 45 < 65',
        value: people.filter(person => person.age >= 45 && person.age < 65).length
      },
      {
        name: '>= 65',
        value: people.filter(person => person.age >= 65).length
      },
    ];
  }

  generateGenderPieChart(people: Person[]) {
    return [
      {
        name: 'Female',
        value: people.filter(person => person.gender === 'female').length
      },
      {
        name: 'Male',
        value: people.filter(person => person.gender === 'male').length
      },
    ]
  }
}
