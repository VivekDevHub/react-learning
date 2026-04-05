import React from 'react';
import EcommerceDashboard from '../components/ecommerce/EcommerceDashboard';
import styles from '../css/ecommerce/EcommercePage.module.css';

const Ecommerece = () => {
  return (
    <div className={styles.page}>
      <EcommerceDashboard />
    </div>
  );
};

export default Ecommerece;