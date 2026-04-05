import React from 'react';
import CalendarPanel from './CalendarPanel';
import RealtimePanel from './RealtimePanel';
import BrowserUsagePanel from './BrowserUsagePanel';
import LatestProjectsPanel from './LatestProjectsPanel';
import MonthlySalesPanel from './MonthlySalesPanel';
import styles from '../../css/analytics/EcommerceDashboard.module.css';

const EcommerceDashboard = () => (
  <div className={styles.layout}>
    <div className={styles.topGrid}>
      <div className={styles.calendar}>
        <CalendarPanel />
      </div>

      <div className={styles.realtime}>
        <RealtimePanel />
      </div>

      <div className={styles.browser}>
        <BrowserUsagePanel />
      </div>
    </div>

    <div className={styles.bottomGrid}>
      <div className={styles.projects}>
        <LatestProjectsPanel />
      </div>

      <div className={styles.sales}>
        <MonthlySalesPanel />
      </div>
    </div>
  </div>
);

export default EcommerceDashboard;