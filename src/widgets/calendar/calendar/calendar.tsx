import React, { useEffect, useRef, useState, useCallback } from 'react';
import { CalendarUi } from './calendar-ui';
import { ICalendarProps } from './types';
import { CalendarContext } from './context';
import { freeDays } from '@constants/free-days';

export const Calendar: React.FC<ICalendarProps> = ({
  value,
  onDayClick,
  name,
  ...rest
}) => {
  const [shift, setShift] = useState(0);
  const [maxShift, setMaxShift] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [position, setPosition] = useState(0);
  const refObj = useRef<HTMLDivElement>(null);

  const today = new Date();

  const dates: Date[] = Array.from({ length: 12 }, (_, i) => {
    return new Date(today.getFullYear(), today.getMonth() + i + 1, 0);
  });

  const handleNext = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setShift((prev) => Math.min(prev + 60, maxShift));
    },
    [maxShift]
  );

  const handlePrev = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setShift((prev) => Math.max(prev - 60, 0));
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isDrag) {
      setIsDrag(true);
      setPosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDrag) {
      setIsDrag(false);
      setPosition(0);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDrag) {
      const deltaX = e.clientX - position;
      const newShift = Math.min(Math.max(shift - deltaX, 0), maxShift);
      setShift(newShift);
      setPosition(e.clientX);
    }
  };

  useEffect(() => {
    if (refObj.current) {
      refObj.current.style.marginLeft = `-${shift}px`;
    }
  }, [shift]);

  useEffect(() => {
    if (refObj.current) {
      const scrollWidth = refObj.current.scrollWidth;
      const clientWidth = refObj.current.clientWidth;
      setMaxShift(scrollWidth - clientWidth);
    }
  }, [refObj]);

  return (
    <CalendarContext.Provider value={{ name, value, onDayClick }}>
      <CalendarUi
        ref={refObj}
        nextClick={handleNext}
        prevClick={handlePrev}
        dates={dates}
        shift={shift}
        maxShift={maxShift}
        FreeDays={freeDays}
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        handleMouseMove={handleMouseMove}
        {...rest}
      />
    </CalendarContext.Provider>
  );
};
