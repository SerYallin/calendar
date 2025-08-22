import React from 'react';
import { Sizes, Icon, IconStyle, IconType } from '@lib/types';
export interface IButtonIconProps {
  icon: Icon;
  onClick?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
  size?: Sizes;
  style?: IconStyle;
  type?: IconType;
  disabled?: boolean;
  classes?: string[];
}
export interface IButtonIconUiProps {
  icon: Icon;
  onClick?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
  size: Sizes;
  style: IconStyle;
  type: IconType;
  disabled?: boolean;
  classes?: string[];
}
