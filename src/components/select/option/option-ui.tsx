import React from 'react';
import styles from './option.module.scss';
import { clsx } from 'clsx';
import { IOptionUiProps } from './types';

export const OptionUi: React.FC<IOptionUiProps> = ({
  value,
  label,
  isSelected,
  onClick,
}) => {
  return (
    <li
      className={clsx(styles.options, {
        [styles.active]: isSelected,
      })}
      data-value={value}
      onClick={onClick}
    >
      {label}
    </li>
  );
};
