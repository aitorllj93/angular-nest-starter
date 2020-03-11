import { ValidatorFn, AbstractControl } from '@angular/forms';


export const FieldIsSameValidator = (anotherFieldName = 'password'): ValidatorFn =>
  (control: AbstractControl): {[key: string]: any} | null => {
    if (!control || !control.parent) {
      return null;
    }
    const isSame = control.value === control.parent.get(anotherFieldName).value;
    return isSame ? null : { 'fieldIsNotSame': { value: control.value } };
  };
