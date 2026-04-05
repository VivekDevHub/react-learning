import React from 'react';
import CryptoDashboard from '../components/crypto/CryptoDashboard';
import styles from '../css/crypto/CryptoPage.module.css';

const Crypto = () => {
  return (
    <div className={styles.page}>
      <CryptoDashboard />
    </div>
  );
};

export default Crypto;