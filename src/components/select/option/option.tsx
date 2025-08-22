import React from 'react';
import { IOptionProps } from './types';
import { OptionUi } from './option-ui';

export const Option: React.FC<IOptionProps> = (props) => {
  const { option, ...rest } = props;

  const uiOptions = {
    value: option.value,
    label: option.label,
    ...rest,
  };
  return <OptionUi {...uiOptions} />;
};
