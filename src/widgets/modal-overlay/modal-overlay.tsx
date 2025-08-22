import React from 'react';
import { ModalOverlayProps } from './types';
import { ModalOverlayUI } from './modal-overlay-ui';
export const ModalOverlay: React.FC<ModalOverlayProps> = (props) => (
  <ModalOverlayUI {...props} />
);
