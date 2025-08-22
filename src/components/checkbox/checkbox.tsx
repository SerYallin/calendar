import React, { memo } from 'react';
import { ICheckboxProps } from './types';
import { CheckboxUi } from './checkbox-ui';

export const Checkbox: React.FC<ICheckboxProps> = memo((props) => {
  const { name, onChange, value, ...rest } = props;
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange({
        name: name,
        value: e.target.checked ? 'on' : '',
      });
    }
  };

  const inputProps = {
    name: name,
    onChange: handlerChange,
    isChecked: value === 'on',
    ...rest,
  };

  return <CheckboxUi {...inputProps} />;
});
