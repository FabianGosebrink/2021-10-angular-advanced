import { FormControl } from '@angular/forms';
import { MinLengthValidator } from './min-length.validator';

describe('MinLengthValidator', () => {
  const testCases = [
    { input: '1234', result: null },
    { input: '12', result: { giveMeDaMinLength: true } },
  ];

  testCases.forEach(({ input, result }) => {
    it(`should return ${JSON.stringify(result)} when input is ${input}`, () => {
      const validatorFn = MinLengthValidator.minlengthValidator;

      const res = validatorFn(new FormControl(input));

      expect(res).toEqual(result);
    });
  });
});
