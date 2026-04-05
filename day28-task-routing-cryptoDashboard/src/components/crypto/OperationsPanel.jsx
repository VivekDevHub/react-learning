import React from 'react';
import CryptoPanel from './CryptoPanel';
import styles from '../../css/crypto/OperationsPanel.module.css';

const actions = (
  <div className={styles.tabs}>
    <button type="button" className={`${styles.tab} ${styles.active}`}>
      Buy
    </button>
    <button type="button" className={styles.tab}>
      Sell
    </button>
    <button type="button" className={styles.tab}>
      Send
    </button>
  </div>
);

const OperationsPanel = () => (
  <CryptoPanel title="Operations" actions={actions}>
    <div className={styles.form}>
      <p className={styles.caption}>Place new order:</p>

      <div className={styles.row}>
        <div className={`${styles.inputGroup} ${styles.amountGroup}`}>
          <span className={styles.label}>Amount</span>
          <button type="button" className={styles.currencyButton}>
            BTC <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
          </button>
          <input type="text" defaultValue="0.25" aria-label="Amount" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <span className={styles.label}>Price</span>
          <input type="text" defaultValue="23,077.05" aria-label="Price" />
          <span className={styles.suffix}>$</span>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <span className={styles.label}>Total</span>
          <input type="text" defaultValue="5,769.27" aria-label="Total" />
          <span className={styles.suffix}>$</span>
        </div>
      </div>

      <button type="button" className={styles.submitButton}>
        Process to wallet
      </button>

      <p className={styles.note}>The final amount could change depending on current market conditions.</p>
    </div>
  </CryptoPanel>
);

export default OperationsPanel;