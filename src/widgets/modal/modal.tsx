import { FC, memo, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ModalUI } from './modal-ui';
import { TModalUIProps } from './types';

const modalRoot = document.getElementById('modals');

export const Modal: FC<TModalUIProps> = memo(
  ({ onClose, children, ...props }) => {
    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEsc);
      return () => {
        document.removeEventListener('keydown', handleEsc);
      };
    }, [onClose]);

    return ReactDOM.createPortal(
      <ModalUI onClose={onClose} {...props}>
        {children}
      </ModalUI>,
      modalRoot as HTMLDivElement
    );
  }
);
