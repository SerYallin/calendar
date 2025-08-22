import { validator } from './validator';
import { describe, it, expect } from '@jest/globals';

describe('Проверка валидатора', () => {
  const validValues = {
    name: 'Иван Иванов',
    phone: '+7 (123) 456-7890',
    service: 'someService', // необязательное поле
    time: '12:00',
    date: '2023-12-31',
    agreement: 'yes',
  };

  it('должен возвращать пустой объект для валидных данных', () => {
    const result = validator(validValues);
    expect(result).toEqual({});
  });

  it('должен возвращать ошибку, если обязательное поле отсутствует', () => {
    const { name, ...valuesWithoutName } = validValues;
    const result = validator(valuesWithoutName);
    expect(result).toHaveProperty('name');
    expect(result.name).toEqual({
      message: 'Имя обязательно для заполнения',
    });
  });

  it('должен возвращать ошибку, если имя содержит недопустимые символы', () => {
    const invalidValues = { ...validValues, name: 'John123' };
    const result = validator(invalidValues);
    expect(result).toHaveProperty('name');
    expect(result.name).toEqual({
      message:
        'Имя должно содержать только  русские или латинские буквы и пробелы',
    });
  });

  it('должен возвращать ошибку, если номер телефона некорректен', () => {
    const invalidValues = { ...validValues, phone: 'abc123' };
    const result = validator(invalidValues);
    expect(result).toHaveProperty('phone');
    expect(result.phone).toEqual({
      message: 'Неверный формат номера телефона',
    });
  });

  it('не должен возвращать ошибку для необязательного поля service, если оно отсутствует', () => {
    const { service, ...valuesWithoutService } = validValues;
    const result = validator(valuesWithoutService);
    expect(result).not.toHaveProperty('service');
  });

  it('должен возвращать ошибку, если время не указано', () => {
    const { time, ...valuesWithoutTime } = validValues;
    const result = validator(valuesWithoutTime);
    expect(result).toHaveProperty('time');
    expect(result.time).toEqual({
      message: 'Выберите время',
    });
  });

  it('должен возвращать ошибку, если дата не указана', () => {
    const { date, ...valuesWithoutDate } = validValues;
    const result = validator(valuesWithoutDate);
    expect(result).toHaveProperty('date');
    expect(result.date).toEqual({
      message: 'Выберите дату',
    });
  });

  it('должен возвращать ошибку, если пользовательское соглашение не согласовано', () => {
    const invalidValues = { ...validValues, agreement: '' };
    const result = validator(invalidValues);
    expect(result).toHaveProperty('agreement');
    expect(result.agreement).toEqual({
      message: 'Нельзя не согласиться с пользовательским соглашением',
    });
  });
});
