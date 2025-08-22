import React from 'react';
import { IDayUiProps } from './types';
import styles from './day.module.scss';
import { clsx } from 'clsx';

export const DayUI: React.FC<IDayUiProps> = ({
  isToday,
  isFree,
  day,
  dayOfWeek,
  isHoliday,
  onClick,
  isSelected,
}) => {
  return (
    <li
      className={clsx(styles.dayHolder, {
        [styles.today]: isToday,
        [styles.active]: isSelected,
        [styles.free]: isFree,
        [styles.holiday]: isHoliday,
      })}
      onClick={onClick}
    >
      <span className={styles.date}>{day}</span>
      <span className={styles.day}>{dayOfWeek}</span>
    </li>
  );
};
