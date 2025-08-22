import React from 'react';
import { ISelectUiProps } from './types';
import styles from './select.module.scss';
import { clsx } from 'clsx';
import { Option } from './option';
import { ButtonIcon } from '@components/button-icon';
import { Message } from '@components/message';
import { Icon as IconComponent } from '@components/icon';
import { Sizes, Icon, IconStyle, IconType } from '@lib/types';

export const SelectUi: React.FC<ISelectUiProps> = ({
  label,
  options,
  selected,
  onChange,
  message,
  error,
  rootRef,
  handlerOpen,
  handlerClose,
  icon,
  isOpen,
}) => {
  return (
    <div
      ref={rootRef}
      className={clsx(styles.fieldHolder, {
        [styles.hasError]: error,
        [styles.hasMessage]: message,
      })}
    >
      <div
        onClick={isOpen ? handlerClose : handlerOpen}
        className={clsx(styles.inputHolder, {
          [styles.isError]: error,
        })}
      >
        {icon && (
          <span className={styles.icon}>
            <IconComponent icon={icon} />
          </span>
        )}
        <span className={styles.label}>{selected?.label || label}</span>
        {!isOpen && (
          <ButtonIcon
            onClick={handlerOpen}
            icon={Icon.Down}
            type={IconType.NoBorder}
            style={IconStyle.Gray}
            size={Sizes.Large}
          />
        )}
        {isOpen && (
          <ButtonIcon
            onClick={handlerClose}
            icon={Icon.Up}
            type={IconType.NoBorder}
            style={IconStyle.Gray}
            size={Sizes.Large}
          />
        )}
      </div>
      {isOpen && (
        <ul className={styles.select}>
          {options.map((option) => (
            <Option
              key={option.value}
              option={option}
              isSelected={selected?.value === option.value}
              onClick={onChange}
            />
          ))}
        </ul>
      )}
      {message && <Message isError={error} children={message} />}
    </div>
  );
};
