import React, { ReactNode } from 'react';
import { Icon, Sizes, Types } from '@lib/types.ts';

export type ButtonProps = {
  onClick?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
  type?: Types;
  size?: Sizes;
  children?: ReactNode;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  icon?: Icon;
  classes?: string | string[];
};

export type ButtonUIProps = {
  onClick?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
  type: Types;
  size: Sizes;
  children?: ReactNode;
  htmlType: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  icon?: Icon;
  classes?: string | string[];
};
