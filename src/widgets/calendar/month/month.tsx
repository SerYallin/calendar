import React, { useRef } from 'react';
import { MonthUi } from './month-ui';
import { IMonthUiProps, IMonthProps } from './types';

export const Month: React.FC<IMonthProps> = ({ date, freeDays }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const days = new Date(year, month + 1, 0).getDate();
  const refHeader = useRef<HTMLDivElement>(null);

  const monthProps: IMonthUiProps = {
    year,
    month,
    days,
    freeDays,
  };
  return <MonthUi {...monthProps} ref={refHeader} />;
};
