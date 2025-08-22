export interface IDayProps {
  date: Date;
  isFree: boolean;
}

export interface IDayUiProps {
  isToday: boolean;
  isFree: boolean;
  isHoliday: boolean;
  isSelected: boolean;
  day: number;
  dayOfWeek: string;
  onClick?: (e: React.MouseEvent) => void;
}
