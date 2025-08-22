import React from 'react';
import { IFormUiProps } from './types';
import styles from './form.module.scss';
export const FormUi: React.FC<IFormUiProps> = ({ onSubmit, children }) => {
  return (
    <form method="post" noValidate onSubmit={onSubmit}>
      <fieldset className={styles.container}>{children}</fieldset>
    </form>
  );
};
