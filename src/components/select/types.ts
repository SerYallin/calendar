import React from 'react';
import { Icon, IValue } from '@lib/types';

export interface ISelectProps {
  name: string;
  label: string;
  options: Option[];
  value: string;
  onChange: (value: IValue) => void;
  message?: string;
  error?: boolean;
  icon?: Icon;
}
export type Option = { label: string; value: string };

export interface ISelectUiProps {
  label: string;
  options: Option[];
  selected?: Option;
  onChange: (e: React.MouseEvent<HTMLElement>) => void;
  handlerOpen: (e: React.MouseEvent) => void;
  handlerClose: (e: React.MouseEvent) => void;
  message?: string;
  error?: boolean;
  icon?: Icon;
  rootRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
}
