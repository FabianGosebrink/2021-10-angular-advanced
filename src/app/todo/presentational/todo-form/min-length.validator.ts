import { AbstractControl } from '@angular/forms';

export class MinLengthValidator {
  static minlengthValidator(control: AbstractControl) {
    if (!control) {
      return null;
    }

    const { value } = control;

    if (!value) {
      return null;
    }

    const valueLength = (value as string).length;

    if (valueLength >= 3) {
      return null;
    }

    return { giveMeDaMinLength: true };
  }
}
