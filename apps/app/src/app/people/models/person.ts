
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

  constructor(person: Partial<Person>) {
    Object.assign(this, person);

    this.fullName = `${this.givenName} ${this.familyName}`;

    if (this.birthday) {
      this.age = differenceInYears(new Date(), this.birthday);
    }
  }
}
