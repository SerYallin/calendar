import { TFreeDays } from '@lib/types';

export interface IMonthProps {
  date: Date;
  freeDays: TFreeDays;
}

export interface IMonthUiProps {
  year: number;
  days: number;
  month: number;
  freeDays: TFreeDays;
}
