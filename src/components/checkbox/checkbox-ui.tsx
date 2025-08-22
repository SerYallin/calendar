import React from 'react';
import { ICheckboxUiProps } from './types';
import styles from './checkbox.module.scss';
import { clsx } from 'clsx';
import Icons from '@assets/icons';
import { Message } from '@components/message';

export const CheckboxUi: React.FC<ICheckboxUiProps> = ({
  name,
  onChange,
  required,
  isChecked,
  message,
  error,
  children,
  ...rest
}) => {
  const { Checked } = Icons;
  return (
    <div
      className={clsx(styles.fieldHolder, {
        [styles.isError]: error,
        [styles.hasMessage]: message,
      })}
    >
      <label>
        <span
          className={clsx(styles.icon, {
            [styles.checked]: isChecked,
          })}
        >
          {isChecked && <Checked />}
        </span>
        <input
          className={styles.hidden}
          name={name}
          type="checkbox"
          onChange={onChange}
          required={required}
          checked={isChecked}
          value="on"
          {...rest}
        />
        <span className={styles.label}>{children}</span>
      </label>
      {message && (
        <div className={styles.message}>
          <Message isError={error} children={message} />
        </div>
      )}
    </div>
  );
};
