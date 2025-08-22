import React, { memo } from 'react';
import styles from './contact.module.scss';
import RequestForm from '@widgets/request-form';

export const ContactUi: React.FC = memo(() => (
  <section className={styles.container}>
    <div className={styles.content}>
      <header>
        <h2>Оформить заявку</h2>
      </header>
      <article>
        <p>Выберите удобные для вас дату и время и оформите вызов мастера</p>
      </article>
    </div>
    <RequestForm />
  </section>
));
