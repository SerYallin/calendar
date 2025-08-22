import React from 'react';
import { IRequestFormUiProps } from './types';
import { timeOptions, serviceOptions } from '@constants/options';
import { Input } from '@components/input';
import { Select } from '@components/select';
import styles from './request-form.module.scss';
import { Button } from '@components/button';
import { Calendar } from '@widgets/calendar';
import { clsx } from 'clsx';
import { Checkbox } from '@components/checkbox';
import Form from '@components/form';
import { Types, Icon } from '@lib/types';

export const RequestFormUI: React.FC<IRequestFormUiProps> = ({
  onSubmit,
  values,
  errors,
  onChange,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Calendar
        name={'date'}
        value={values.date || ''}
        onDayClick={onChange}
        error={typeof errors.date !== 'undefined'}
        message={errors?.date?.message}
      />
      <div className={clsx(styles.fieldsGroup, styles.g4)}>
        <Select
          name={'time'}
          label={'Время'}
          options={timeOptions}
          value={values.time || ''}
          onChange={onChange}
          error={typeof errors.time !== 'undefined'}
          message={errors?.time?.message}
          icon={Icon.Clock}
        />
        <Select
          name={'service'}
          label={'Услуга'}
          options={serviceOptions}
          value={values.service || ''}
          error={typeof errors.service !== 'undefined'}
          message={errors?.service?.message}
          onChange={onChange}
        />
        <Input
          name="name"
          label="Имя"
          value={values.name || ''}
          onChange={onChange}
          error={typeof errors.name !== 'undefined'}
          message={errors?.name?.message}
          required
        />
        <Input
          name="phone"
          type="tel"
          label="Телефон"
          value={values.phone || ''}
          error={typeof errors.phone !== 'undefined'}
          message={errors?.phone?.message}
          onChange={onChange}
          required
        />
      </div>
      <div className={styles.fieldsGroup}>
        <Checkbox
          name={'agreement'}
          onChange={onChange}
          value={values.agreement || ''}
          error={typeof errors.agreement !== 'undefined'}
          message={errors?.agreement?.message}
          required
        >
          Ознакомлен и согласен с Политикой конфиденциальности
        </Checkbox>
        <Button type={Types.Primary} htmlType={'submit'}>
          Заказать поверку
        </Button>
      </div>
    </Form>
  );
};
