import { IValue, TFreeDaysMonth } from '@lib/types';
import React from 'react';

export interface ICalendarContext {
  name: string;
  value: string;
  onDayClick: (data: IValue) => void;
}

export interface ICalendarProps {
  onDayClick: (value: IValue) => void;
  name: string;
  error?: boolean;
  message?: string;
  value: string;
}
export interface ICalendarUiProps {
  dates: Date[];
  shift: number;
  maxShift: number;
  FreeDays: TFreeDaysMonth;
  nextClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  prevClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseUp: (e: React.MouseEvent) => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  error?: boolean;
  message?: string;
}
