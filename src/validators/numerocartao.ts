import { FormControl } from '@angular/forms';

export class NumeroCartaoValidator {
  static isValid(control: FormControl) {
    let num:string = control.value;

  var tam = num.length
  var paridade = tam % 2
  var sum = 0
  for (var i = tam-2; i >= 0; i--) {
      var d = parseInt(num.charAt(i))
      if (i % 2 == paridade) { 
        d *= 2 ;
      }
      if (d > 9) {
        d -= 9 ;
      }
      sum += d
  }
  d=parseInt(num.charAt(tam-1));
  sum= sum % 10;
  sum=10-sum;

  if (d != sum) {
    return {invalidnum: true};
  }
  else {
      return null;
  }

  }
}