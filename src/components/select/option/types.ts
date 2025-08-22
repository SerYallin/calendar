import { Option } from '../types';
export interface IOptionProps {
  isSelected?: boolean;
  option: Option;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
export interface IOptionUiProps {
  isSelected?: boolean;
  value: string;
  label: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
