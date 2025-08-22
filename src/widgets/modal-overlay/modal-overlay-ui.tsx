import React from 'react';

import styles from './modal-overlay.module.scss';

import { ModalOverlayProps } from './types';

export const ModalOverlayUI: React.FC<ModalOverlayProps> = ({ onClick }) => (
  <div
    className={styles.overlay}
    onClick={onClick}
    role="presentation"
    aria-hidden="true"
  />
);
