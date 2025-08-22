import React from 'react';
import { Button } from '@components/button';
import { IButtonIconUiProps } from './types';
import styles from './button-icon.module.scss';
import { Types } from '@lib/types';
export const ButtonIconUi: React.FC<IButtonIconUiProps> = ({
  type,
  size,
  style,
  icon,
  onClick,
  classes,
  disabled,
}) => (
  <Button
    icon={icon}
    type={Types.Custom}
    onClick={onClick}
    disabled={disabled}
    classes={[
      styles.icon,
      styles['icon' + type],
      styles['icon' + style],
      styles['icon' + size],
      ...(classes || []),
    ]}
  />
);
