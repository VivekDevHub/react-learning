import React from 'react';
import styles from '../../css/analytics/SectionCard.module.css';

const SectionCard = ({ title, className = '', bodyClassName = '', children }) => (
  <section className={`${styles.card} ${className}`.trim()}>
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <button type="button" className={styles.moreButton} aria-label={`${title} options`}>
        <i className="ri-more-2-fill" aria-hidden="true"></i>
      </button>
    </div>

    <div className={`${styles.body} ${bodyClassName}`.trim()}>{children}</div>
  </section>
);

export default SectionCard;