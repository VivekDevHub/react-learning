import React from 'react';
import CryptoHeader from './CryptoHeader';
import CryptoStatsGrid from './CryptoStatsGrid';
import PriceChartPanel from './PriceChartPanel';
import MarketsPanel from './MarketsPanel';
import OrdersTablePanel from './OrdersTablePanel';
import OperationsPanel from './OperationsPanel';
import styles from '../../css/crypto/CryptoDashboard.module.css';

const sellOrders = [
  ['0.03892501', '1.24864875', '1.26329659'],
  ['0.03893754', '0.19373225', '1.45702884'],
  ['0.03895189', '0.00011222', '1.45714106'],
  ['0.03896593', '0.05366476', '1.51080582'],
  ['0.03897932', '0.30856527', '1.81937109'],
  ['0.03897933', '0.01276398', '1.83213507'],
  ['0.03899180', '0.00029556', '1.83243063'],
  ['0.03899784', '0.08005194', '1.91248257'],
  ['0.03899998', '0.10106578', '2.01354835'],
  ['0.03899999', '0.11699997', '2.13054832'],
];

const buyOrders = [
  ['0.03892000', '0.00873616', '0.00873616'],
  ['0.03890500', '2.58305468', '2.59179084'],
  ['0.03890132', '2.19999989', '4.79179073'],
  ['0.03890053', '0.00322305', '4.79501378'],
  ['0.03889706', '0.60738409', '5.40239787'],
  ['0.03888117', '0.49926179', '5.90165966'],
  ['0.03885500', '0.03877729', '5.94043695'],
  ['0.03884325', '0.00798318', '5.94842013'],
  ['0.03883474', '0.29455407', '6.24297420'],
  ['0.03881616', '0.00970404', '6.25267824'],
];

const CryptoDashboard = () => (
  <section className={styles.wrapper}>
    <CryptoHeader />
    <CryptoStatsGrid />

    <div className={styles.topRow}>
      <PriceChartPanel />
      <MarketsPanel />
    </div>

    <div className={styles.bottomRow}>
      <div className={styles.sellOrders}>
        <OrdersTablePanel title="Sell Orders" rows={sellOrders} />
      </div>
      <div className={styles.buyOrders}>
        <OrdersTablePanel title="Buy Orders" rows={buyOrders} />
      </div>
      <div className={styles.operations}>
        <OperationsPanel />
      </div>
    </div>
  </section>
);

export default CryptoDashboard;