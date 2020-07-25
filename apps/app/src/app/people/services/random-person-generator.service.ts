
import { Injectable } from '@angular/core';

import { Chance } from 'chance';
import { Person, PersonAttributes, PersonSkill } from '../models/person';
import { Observable, of, merge, forkJoin } from 'rxjs';
import { delay } from 'rxjs/operators';

const chance = new Chance();

@Injectable({providedIn: 'root'})
export class RandomPersonGeneratorService {
  constructor() { }

  generate(): Observable<Person> {
    const gender = chance.gender().toLowerCase() as 'male' | 'female';
    const givenName = chance.first({ gender });
    const familyName = chance.last();
    const image = 'https://i.pravatar.cc/150?u=' + chance.guid();
    const birthday = chance.birthday();
    const address = `${chance.address()}, ${chance.city()}, ${chance.zip()}, ${chance.country()}`;
    const identifier = chance.cf({ first: givenName, last: familyName, gender, birthday });
    const attributes: PersonAttributes = {
      strength: chance.integer({ min: 1, max: 20 }),
      constitution: chance.integer({ min: 1, max: 20 }),
      dexterity: chance.integer({ min: 1, max: 20 }),
      intelligence: chance.integer({ min: 1, max: 20 }),
      wisdom: chance.integer({ min: 1, max: 20 }),
      charisma: chance.integer({ min: 1, max: 20 }),
    }
    const skills: PersonSkill[] = chance.n(chance.profession, chance.integer({ min: 1, max: 20 })).map(
      label => ({
        label,
        level: chance.integer({ min: 1, max: 5 }),
        detail: chance.paragraph()
      })
    );
    const notes = chance.paragraph();

    return of(new Person({
      identifier,
      givenName,
      familyName,
      image,
      birthday,
      gender,
      address,
      attributes,
      skills,
      notes
    })).pipe(delay(3000));
  }

  generateMany(quantity = 20) {
    const data$ = Array(quantity).fill(null)
    .map(() => this.generate());

    return forkJoin(data$);
  }

}
