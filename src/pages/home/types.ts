import React from 'react';

export interface IHomeUiProps {
  requestClick:
    | ((e: React.MouseEvent<HTMLButtonElement>) => void)
    | (() => void);
}
