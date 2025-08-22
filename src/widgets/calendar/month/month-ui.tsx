import { forwardRef } from 'react';
import styles from './month.module.scss';
import { IMonthUiProps } from './types';
import { months } from '@constants/dates';
import { Day } from '@widgets/calendar/day';

export const MonthUi = forwardRef<HTMLDivElement, IMonthUiProps>(
  ({ year, days, month, freeDays }, ref) => {
    const items = Array.from({ length: days }, (_, i) => i + 1);
    return (
      <div className={styles.monthHolder}>
        <header ref={ref} className={styles.header}>
          {months[month]}
        </header>
        <ul className={styles.dayList}>
          {items.map((day) => (
            <Day
              key={`${year}-${month}-${day}`}
              date={new Date(year, month, day)}
              isFree={freeDays[day] || false}
            />
          ))}
        </ul>
      </div>
    );
  }
);
