import React from 'react';
import icons from '@assets/icons';
import { IIconProps } from './types.ts';

export const Icon: React.FC<IIconProps> = ({ icon, ...props }) => {
  const IconComponent = icons[icon];
  return <IconComponent {...props} />;
};
