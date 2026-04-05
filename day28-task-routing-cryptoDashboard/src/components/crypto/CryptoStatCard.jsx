import React from 'react';
import styles from '../../css/crypto/CryptoStatCard.module.css';

const CryptoStatCard = ({ title, value, meta, footer, caption, tone, icon, iconClass }) => (
  <article className={styles.card}>
    <div className={styles.top}>
      <span className={styles.title}>{title}</span>
      <span className={`${styles.iconWrap} ${styles[iconClass]}`}>
        <i className={icon} aria-hidden="true"></i>
      </span>
    </div>

    <div className={styles.valueRow}>
      <span className={styles.value}>{value}</span>
      <span className={styles.meta}>{meta}</span>
    </div>

    <div className={styles.bottom}>
      {footer ? <span className={`${styles.badge} ${tone === 'positive' ? styles.positive : ''}`}>{footer}</span> : null}
      <span className={styles.caption}>{caption}</span>
    </div>
  </article>
);

export default CryptoStatCard;