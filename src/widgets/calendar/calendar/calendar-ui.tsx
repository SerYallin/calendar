import { forwardRef } from 'react';
import { Month } from '@widgets/calendar/month/month';
import { ICalendarUiProps } from '@widgets/calendar/calendar/types';
import styles from './calendar.module.scss';
import { ButtonIcon } from '@components/button-icon';
import { clsx } from 'clsx';
import { Message } from '@components/message';
import { Icon, IconStyle, IconType } from '@lib/types';

export const CalendarUi = forwardRef<HTMLDivElement, ICalendarUiProps>(
  (
    {
      FreeDays,
      dates,
      nextClick,
      prevClick,
      shift,
      maxShift,
      handleMouseDown,
      handleMouseUp,
      handleMouseMove,
      error,
      message,
    },
    ref
  ) => {
    return (
      <>
        <div
          className={clsx(styles.container, {
            [styles.isError]: error,
          })}
        >
          <div className={styles.viewport}>
            <div
              ref={ref}
              className={styles.slides}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {dates.map((date) => (
                <Month
                  key={date.getTime()}
                  date={date}
                  freeDays={FreeDays[date.getMonth()]}
                />
              ))}
            </div>
          </div>
          <div className={styles.controls}>
            <ButtonIcon
              disabled={shift <= 0}
              type={IconType.NoBorder}
              style={IconStyle.Gray}
              icon={Icon.Previous}
              onClick={prevClick}
              classes={[styles.btnPrev]}
            />
            <ButtonIcon
              disabled={shift >= maxShift}
              type={IconType.NoBorder}
              icon={Icon.Next}
              style={IconStyle.Gray}
              onClick={nextClick}
              classes={[styles.btnNext]}
            />
          </div>
        </div>
        {message && <Message isError={error} children={message} />}
      </>
    );
  }
);
