import { Rules } from '@constants/validation';
import { IValidateResults } from '@lib/types';

export const validator = (values: {
  [key: string]: string;
}): IValidateResults => {
  const errors: IValidateResults = {};
  Object.keys(Rules).forEach((key) => {
    if (Rules[key].required && !values[key]) {
      errors[key] = {
        message:
          Rules[key].messageReq ||
          'Поле ' + key + ' обязательно для заполнения',
      };
    } else if (Rules[key].reg && !values[key].match(Rules[key].reg)) {
      errors[key] = { message: Rules[key].message || 'Неверный формат' };
    }
  });
  return errors;
};
