import React from 'react';
import { IInputUiProps } from './types';
import styles from './input.module.scss';
import { clsx } from 'clsx';
import { ButtonIcon } from '@components/button-icon';
import { Message } from '@components/message';
import { Sizes, Icon, IconStyle, IconType } from '@lib/types';

export const InputUI: React.FC<IInputUiProps> = ({
  name,
  type,
  onChange,
  required,
  value,
  placeholder,
  label,
  message,
  error,
  handleClear,
  showClear,
  ...rest
}) => {
  return (
    (type === 'hidden' && (
      <input type="hidden" name={name} value={value} />
    )) || (
      <div
        className={clsx(styles.fieldHolder, {
          [styles.hasError]: error,
          [styles.hasMessage]: message,
        })}
      >
        <div
          className={clsx(styles.inputHolder, {
            [styles.hasValue]: value && value.length > 0,
            [styles.isError]: error,
          })}
        >
          <label>
            <span className={styles.label}>
              {label}
              {required && <sup>*</sup>}
            </span>
            <input
              name={name}
              type={type}
              onChange={onChange}
              required={required}
              value={value}
              {...rest}
            />
          </label>
          {value && value.length > 0 && showClear && (
            <ButtonIcon
              onClick={handleClear}
              icon={Icon.Close}
              type={IconType.NoBorder}
              style={IconStyle.Gray}
              size={Sizes.Large}
              classes={[styles.btnClear]}
            />
          )}
        </div>
        {message && <Message isError={error} children={message} />}
      </div>
    )
  );
};
