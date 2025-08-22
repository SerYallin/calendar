import React from 'react';
import { ButtonIconUi } from './button-icon-ui';
import { IButtonIconProps, IButtonIconUiProps } from './types';
import { Sizes, IconStyle, IconType } from '@lib/types';

export const ButtonIcon: React.FC<IButtonIconProps> = (props) => {
  const { type, size, style, icon, onClick, disabled, classes } = props;
  const iconProps: IButtonIconUiProps = {
    icon,
    type: type || IconType.Round,
    size: size || Sizes.Small,
    style: style || IconStyle.Dark,
    disabled,
    onClick,
    classes,
  };
  return <ButtonIconUi {...iconProps} />;
};
