import React from 'react';
import { ButtonProps, ButtonUIProps } from './types';
import { Sizes, Types } from '@lib/types.ts';
import { ButtonUi } from './button-ui';

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, size, htmlType, icon, ...rest } = props;
  const uiProps: ButtonUIProps = {
    children,
    type: type || Types.Primary,
    size: size || Sizes.Medium,
    htmlType: htmlType || 'button',
    icon: icon,
    ...rest,
  };
  return <ButtonUi {...uiProps} />;
};
