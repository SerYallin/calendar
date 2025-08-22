/*
 * Types enum mainly used for button.
 */
export enum Types {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tertiary = 'Tertiary',
  Custom = 'Custom',
}

/**
 * Size enum.
 */
export enum Sizes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

/**
 * List of available icons.
 */
export enum Icon {
  Close = 'Close',
  Search = 'Search',
  Clock = 'Clock',
  Ok = 'Ok',
  Arrow = 'Arrow',
  Up = 'Up',
  Down = 'Down',
  Next = 'Next',
  Previous = 'Previous',
  Help = 'Help',
  Checked = 'Checked',
}

/**
 * Icon style enum.
 */
export enum IconStyle {
  Light = 'Light',
  LightGray = 'LightGray',
  Gray = 'Gray',
  Blue = 'Blue',
  Dark = 'Dark',
}

/**
 * Button icon type.
 */
export enum IconType {
  Round = 'Round',
  Square = 'Square',
  NoBorder = 'NoBorder',
  Icon24 = 'Icon24',
}

/**
 * Value interface.
 */
export interface IValue {
  name: string;
  value: string;
}

/**
 * Validation rules interface.
 */
export interface IRule {
  reg?: RegExp;
  required: boolean;
  message?: string;
  messageReq?: string;
}

/**
 * Validation rules interface.
 */
export interface IRules {
  [key: string]: IRule;
}

/**
 * Validation result interface.
 */
export interface IValidateResult {
  message: string;
}

/**
 * Validation results interface.
 */
export interface IValidateResults {
  [key: string]: IValidateResult;
}
export type TFreeDays = Record<number, boolean>;
export type TFreeDaysMonth = Record<number, TFreeDays>;
