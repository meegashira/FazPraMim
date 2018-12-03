import { FormControl } from '@angular/forms';

export class CVVValidator {
  static isValid(control: FormControl) {
    let cvv:string = control.value;

    if (cvv.length != 3 && cvv.length != 4 ) {
      return {invalidcvv: true};
    }

  
      return null;
  

  }
}