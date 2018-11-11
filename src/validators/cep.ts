import { FormControl } from '@angular/forms';

export class CepValidator {
  static isValid(control: FormControl) {
    const re = /^[0-9]{8}$/g.test(control.value);

    if (re) {
      return null;
    }

    return {
      invalidEmail: true,
    };
  }
}