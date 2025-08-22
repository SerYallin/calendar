import React, { memo } from 'react';
import { IInputProps } from './types';
import { InputUI } from './input-ui';
import styles from './input.module.scss';

export const Input: React.FC<IInputProps> = memo((props) => {
  const { name, type, onChange, ...rest } = props;
  const [showClear, setShowClear] = React.useState(false);
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if ((e.target as HTMLInputElement).value.length === 0) {
      (e.target as HTMLInputElement)
        .closest('.' + styles.inputHolder)
        ?.classList.remove(styles.hasValue);
    }
    setTimeout(() => {
      setShowClear(false);
    }, 200);
  };
  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement)
      .closest('.' + styles.inputHolder)
      ?.classList.add(styles.hasValue);
    if (!showClear) {
      setShowClear(true);
    }
  };
  const handleClear = () => {
    if (onChange) {
      onChange({ name: name, value: '' });
    }
  };

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange({
        name: name,
        value: e.target.value,
      });
    }
  };

  const inputProps = {
    name: name,
    type: type || 'text',
    onBlur,
    onFocus,
    handleClear,
    showClear,
    onChange: handlerChange,
    ...rest,
  };

  return <InputUI {...inputProps} />;
});
