import React from 'react';
import styles from '../../css/analytics/MinCard.module.css';

const MinCard = ({
  title = 'Sales',
  value = '2.234',
  change = '-23%',
  icon = 'ri-truck-line',
  changeTone,
  caption = 'Since last week',
}) => {
  const resolvedTone =
    changeTone ??
    (change.startsWith('-') ? 'danger' : change.startsWith('+') ? 'success' : 'info');

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <div className={styles.iconWrap}>
          <i className={`${icon} ${styles.icon}`} aria-hidden="true"></i>
        </div>
      </div>

      <h3 className={styles.value}>{value}</h3>

      <div className={styles.footer}>
        <span className={`${styles.badge} ${styles[resolvedTone]}`}>{change}</span>
        <span className={styles.caption}>{caption}</span>
      </div>
    </article>
  );
};

export default MinCard;