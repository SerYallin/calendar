import { FC, memo } from 'react';

import { ModalOverlay } from '@widgets/modal-overlay';

import { TModalType, TModalUIProps } from './types';
import styles from './modal.module.scss';
import { ButtonIcon } from '@components/button-icon';
import { Icon, IconStyle, IconType } from '@lib/types';
import { clsx } from 'clsx';
import { Icon as IconComponent } from '@components/icon';

export const ModalUI: FC<TModalUIProps> = memo(
  ({ onClose, children, type }) => {
    return (
      <>
        <div
          className={clsx(styles.container, {
            [styles.typeSuccess]: type && type === TModalType.SUCCESS,
          })}
          role="dialog"
          aria-modal="true"
        >
          {type && type === TModalType.SUCCESS && (
            <span className={clsx(styles.icon, styles.iconSuccess)}>
              <IconComponent icon={Icon.Ok} />
            </span>
          )}
          <div className={styles.content}>{children}</div>
          <ButtonIcon
            onClick={onClose}
            type={IconType.Icon24}
            style={IconStyle.Gray}
            icon={Icon.Close}
            classes={[styles.btnClose]}
          />
        </div>
        <ModalOverlay onClick={onClose} />
      </>
    );
  }
);
