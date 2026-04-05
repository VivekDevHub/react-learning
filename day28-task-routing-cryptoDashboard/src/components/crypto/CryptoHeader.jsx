import React from 'react';
import styles from '../../css/crypto/CryptoHeader.module.css';

const CryptoHeader = () => (
  <div className={styles.header}>
    <h1 className={styles.title}>Crypto Dashboard</h1>

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

export default CryptoHeader;