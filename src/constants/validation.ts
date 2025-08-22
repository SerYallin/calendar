import { IRules } from '@lib/types';
export const Rules: IRules = {
  name: {
    reg: /^[А-Яа-яЁёA-Za-z\s']+$/,
    required: true,
    message:
      'Имя должно содержать только  русские или латинские буквы и пробелы',
    messageReq: 'Имя обязательно для заполнения',
  },
  phone: {
    reg: /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
    required: true,
    message: 'Неверный формат номера телефона',
    messageReq: 'Номер телефона обязателен для заполнения',
  },
  service: {
    required: false,
  },
  time: {
    required: true,
    messageReq: 'Выберите время',
  },
  date: {
    required: true,
    messageReq: 'Выберите дату',
  },
  agreement: {
    required: true,
    messageReq: 'Нельзя не согласиться с пользовательским соглашением',
  },
};
