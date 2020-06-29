
import { Injectable } from '@angular/core';

import { Chance } from 'chance';
import { Person } from '../models/person';

const chance = new Chance();

@Injectable({providedIn: 'root'})
export class RandomPersonGeneratorService {
  constructor() { }

  generate() {
    const gender = chance.gender().toLowerCase() as 'male' | 'female';
    const givenName = chance.first({ gender });
    const familyName = chance.last();
    const image = 'https://i.pravatar.cc/150?u=' + chance.guid();
    const birthday = chance.birthday();
    const address = `${chance.address()}, ${chance.city()}, ${chance.zip()}, ${chance.country()}`;
    const identifier = chance.cf({ first: givenName, last: familyName, gender, birthday });

    return new Person({
      identifier,
      givenName,
      familyName,
      image,
      birthday,
      gender,
      address
    })
  }

  generateMany(quantity = 20) {
    return Array(quantity).fill(null)
      .map(() => this.generate());
  }

}
