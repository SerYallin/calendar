import React from 'react';
import { IValue } from '@lib/types';

export interface IInputProps {
  name: string;
  type?: string;
  required?: boolean;
  value?: string;
  placeholder?: string;
  label?: string;
  message?: string;
  error?: boolean;
  tip?: string;
  onChange?: (value: IValue) => void;
}
export interface IInputUiProps {
  name: string;
  type: string;
  required?: boolean;
  value?: string;
  placeholder?: string;
  label?: string;
  message?: string;
  error?: boolean;
  tip?: string;
  showClear?: boolean;
  handleClear?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
