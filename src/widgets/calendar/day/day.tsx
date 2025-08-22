import React, { useContext } from 'react';
import { IDayProps } from './types';
import { days } from '@constants/dates';
import { DayUI } from './day-ui';
import { CalendarContext } from '@widgets/calendar';

export const Day: React.FC<IDayProps> = ({ date, isFree }) => {
  const { value, onDayClick } = useContext(CalendarContext);
  const today = new Date();
  const day = date.getDay();
  const isToday =
    date.getTime() ===
    new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const isHoliday = day === 0 || day === 6;
  const isSelected = value === date.toDateString();

  const handlerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFree) {
      onDayClick({
        name: 'date',
        value: date.toDateString(),
      });
    }
  };

  const dayUiProps = {
    isToday,
    isFree,
    isHoliday,
    isSelected,
    day: date.getDate(),
    dayOfWeek: days[day],
    onClick: isFree ? handlerClick : undefined,
  };
  return <DayUI {...dayUiProps} />;
};
