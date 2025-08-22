import React from 'react';

import styles from './home.module.scss';
import { Button } from '@components/button';
import { IHomeUiProps } from './types';
import { Icon } from '@lib/types';

export const HomeUi: React.FC<IHomeUiProps> = ({ requestClick }) => {
  return (
    <section className={styles.content}>
      <header>
        <h1 className={styles.title}>Welcome to Home</h1>
      </header>
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
        <Button onClick={requestClick} icon={Icon.Arrow}>
          Заказать проверку
        </Button>
      </article>
    </section>
  );
};
