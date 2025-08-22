import React from 'react';
import { IMessageProps } from './types';
import { MessageUi } from './message-ui';

export const Message: React.FC<IMessageProps> = (props) => (
  <MessageUi {...props} />
);
