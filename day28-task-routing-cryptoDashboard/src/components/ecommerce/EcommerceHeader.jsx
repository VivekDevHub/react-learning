import React from 'react';
import styles from '../../css/ecommerce/EcommerceHeader.module.css';

const EcommerceHeader = () => (
  <div className={styles.header}>
    <h1 className={styles.title}>E-Commerce Dashboard</h1>

    <div className={styles.actions}>
      <button type="button" className={styles.secondaryButton}>
        Invite a Friend
      </button>
      <button type="button" className={styles.primaryButton}>
        New Project
      </button>
    </div>
  </div>
);

export default EcommerceHeader;