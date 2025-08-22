import { type ReactNode } from 'react';

export enum TModalType {
  SUCCESS = 'success',
}

export type TModalUIProps = {
  title?: ReactNode;
  type?: TModalType;
  onClose: () => void;
  isHeader?: boolean;
  children?: ReactNode;
};
