import React from 'react';
import { ButtonUIProps } from '@components/button/types';
import { clsx } from 'clsx';
import styles from './button.module.scss';
import { Icon } from '@components/icon';

export const ButtonUi: React.FC<ButtonUIProps> = ({
  onClick,
  type,
  size,
  children,
  htmlType,
  classes,
  icon,
  disabled = false,
  ...extraProps
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        {
          [styles.button]: type !== 'Custom',
          [styles.buttonPrimary]: type !== 'Custom' && type === 'Primary',
          [styles.buttonSecondary]: type !== 'Custom' && type === 'Secondary',
          [styles.buttonTertiary]: type !== 'Custom' && type === 'Tertiary',
          [styles.buttonLarge]: type !== 'Custom' && size === 'Large',
          [styles.buttonMedium]: type !== 'Custom' && size === 'Medium',
          [styles.buttonSmall]: type !== 'Custom' && size === 'Small',
          [styles.disabled]: disabled,
        },
        classes
      )}
      {...extraProps}
    >
      {children}
      {icon && <Icon icon={icon} />}
    </button>
  );
};
