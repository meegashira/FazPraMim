import { FormControl } from '@angular/forms';

export class DataValidator {
  static isValid(control: FormControl) {
    const re = /^[0-9]{2}\/[0-9]{4}$/g.test(control.value);

    if (re) {
      return null;
    }

    return {
      invalidData: true,
    };
  }
}