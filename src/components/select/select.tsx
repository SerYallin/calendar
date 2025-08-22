import React, { memo, useEffect, useRef, useState } from 'react';
import { ISelectProps, ISelectUiProps } from './types';
import { SelectUi } from './select-ui';

export const Select: React.FC<ISelectProps> = memo((props) => {
  const { name, onChange, value, options, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const selected = options.find((option) => option.value === value);
  const handlerOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
  };
  const handlerClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  const handlerChange = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (onChange) {
      onChange({
        name: name,
        value: e.currentTarget.dataset.value as string,
      });
    }
    setIsOpen(false);
  };

  const selectProps: ISelectUiProps = {
    options,
    selected,
    isOpen,
    handlerOpen,
    handlerClose,
    onChange: handlerChange,
    rootRef,
    ...rest,
  };

  return <SelectUi {...selectProps} />;
});
