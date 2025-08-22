import React from 'react';
import { IValue } from '@lib/types';

export interface ICheckboxProps {
  name: string;
  required?: boolean;
  value?: string;
  message?: string;
  error?: boolean;
  children?: React.ReactNode;
  onChange?: (value: IValue) => void;
}
export interface ICheckboxUiProps {
  name: string;
  required?: boolean;
  isChecked?: boolean;
  message?: string;
  error?: boolean;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
