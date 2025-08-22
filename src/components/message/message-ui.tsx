import React from 'react';
import { IMessageProps } from './types';
import styles from './messages.module.scss';
import { clsx } from 'clsx';

export const MessageUi: React.FC<IMessageProps> = ({ children, isError }) => {
  return (
    <p
      className={clsx(styles.message, {
        [styles.isError]: isError,
      })}
    >
      {children}
    </p>
  );
};
