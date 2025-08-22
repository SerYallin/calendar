import React from 'react';
import { SuccessUi } from './success-ui';
import { useSelector } from '@services/store';
import { getResponse } from '@services/slices/requests';

export const Success: React.FC = () => {
  const { data } = useSelector(getResponse);
  return <SuccessUi {...data} />;
};
