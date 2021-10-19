import { AbstractControl } from '@angular/forms';

export class MinLengthValidator {
  static minlengthValidator(control: AbstractControl) {
    const { value } = control;

    const valueLength = (value as string).length;

    if (valueLength >= 3) {
      return null;
    }

    return { giveMeDaMinLength: true };
  }
}
