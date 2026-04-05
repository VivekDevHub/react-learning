import React from 'react';
import CryptoPanel from './CryptoPanel';
import styles from '../../css/crypto/MarketsPanel.module.css';

const markets = [
  ['ETH', '0.02309756', '427.563', '+1.91'],
  ['XRP', '0.00002205', '132.691', '+0.64'],
  ['ETC', '0.00077779', '32.982', '-6.71'],
  ['LTC', '0.00485685', '31.268', '+1.88'],
  ['XMR', '0.00700518', '28.567', '-1.26'],
  ['BSC', '0.02105473', '25.960', '+0.10'],
  ['ABC', '0.02613303', '21.597', '-3.20'],
  ['TRX', '0.00000165', '14.106', '-0.61'],
  ['SC', '0.00000026', '9.531', '+13.04'],
  ['OMG', '0.00019483', '8.820', '+3.67'],
  ['CHR', '0.00000223', '7.428', '-4.21'],
  ['AVA', '0.00003667', '6.863', '+13.60'],
  ['DASH', '0.00825500', '6.693', '-1.51'],
  ['LINK', '0.00043873', '6.290', '+2.44'],
  ['EOS', '0.00028505', '6.144', '-1.62'],
];

const MarketsPanel = () => (
  <CryptoPanel title="Markets">
    <div className={styles.table}>
      <div className={`${styles.row} ${styles.headerRow}`}>
        <span></span>
        <span>Coin</span>
        <span>Price</span>
        <span>Volume</span>
        <span>Change</span>
      </div>

      {markets.map(([coin, price, volume, change]) => (
        <div key={coin} className={styles.row}>
          <span className={styles.star}><i className={`${coin === 'BSC' || coin === 'ABC' ? 'ri-star-line' : 'ri-star-fill'}`} aria-hidden="true"></i></span>
          <span>{coin}</span>
          <span>{price}</span>
          <span>{volume}</span>
          <span className={change.startsWith('-') ? styles.negative : styles.positive}>{change}</span>
        </div>
      ))}
    </div>
  </CryptoPanel>
);

export default MarketsPanel;