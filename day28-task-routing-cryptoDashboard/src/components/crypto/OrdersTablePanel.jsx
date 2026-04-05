import React from 'react';
import CryptoPanel from './CryptoPanel';
import styles from '../../css/crypto/OrdersTablePanel.module.css';

const OrdersTablePanel = ({ title, rows }) => {
  const actions = (
    <button type="button" className={styles.viewAll}>
      View all
    </button>
  );

  return (
    <CryptoPanel title={title} actions={actions}>
      <div className={styles.table}>
        <div className={`${styles.row} ${styles.headerRow}`}>
          <span>Price</span>
          <span>BTC</span>
          <span>Sum(BTC)</span>
        </div>

        {rows.map((row, index) => (
          <div key={`${title}-${index}`} className={styles.row}>
            {row.map((cell) => (
              <span key={cell}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    </CryptoPanel>
  );
};

export default OrdersTablePanel;