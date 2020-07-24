
import differenceInYears from 'date-fns/differenceInYears';

export class Person {
  identifier: string;
  givenName: string;
  familyName: string;
  fullName: string;
  gender: string;
  image: string;
  birthday: Date;
  age: number;
  address: string;
  attributes: PersonAttributes;
  skills: PersonSkill[];
  notes: string;

  constructor(person: Partial<Person>) {
    Object.assign(this, person);

    this.fullName = `${this.givenName} ${this.familyName}`;

    if (this.birthday) {
      this.age = differenceInYears(new Date(), this.birthday);
    }
  }
}

export class PersonAttributes {
  strength: number;
  constitution: number;
  dexterity: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export class PersonSkill {
  label: string;
  level: number;
  detail: string;
}
