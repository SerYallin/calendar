import React from 'react';

import { FormUi } from './form-ui';
import { IFormUiProps } from '@components/form/types';

export const Form: React.FC<IFormUiProps> = ({ children, onSubmit }) => {
  return <FormUi onSubmit={onSubmit} children={children} />;
};
