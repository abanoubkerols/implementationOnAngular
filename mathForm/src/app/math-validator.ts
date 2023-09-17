import { AbstractControl } from "@angular/forms";


export class MathValidator {
  static addition(target : string , sourceOne :string , sourceTwo : string ) {
    return (form: AbstractControl) => {
      const sum = form.value[target] 
      const Fnum = form.value[sourceOne]
      const Snum = form.value[sourceTwo]

      if (Fnum + Snum === parseInt(sum)) {
        return null;
      }
      return { addition: true };
    };
  }
}
