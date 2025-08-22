import React from 'react';

import styles from './success.module.scss';
import { ISuccessUiProps } from './types';
export const SuccessUi: React.FC<ISuccessUiProps> = ({
  title,
  message,
  notice,
}) => {
  return (
    <>
      <section className={styles.content}>
        {title && (
          <header>
            <h2 className={styles.title}>{title}</h2>
          </header>
        )}
        <article>
          {message && <p>{message}</p>}
          {notice && <p>{notice}</p>}
        </article>
      </section>
    </>
  );
};
