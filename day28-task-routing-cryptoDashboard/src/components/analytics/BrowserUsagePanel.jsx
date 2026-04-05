import React from 'react';
import SectionCard from './SectionCard';
import styles from '../../css/analytics/BrowserUsagePanel.module.css';

const browsers = [
  { name: 'Chrome', value: 4306, color: '#3f7de0', change: '+12%', tone: 'positive' },
  { name: 'Firefox', value: 3801, color: '#ffb529', change: '-3%', tone: 'negative' },
  { name: 'Edge', value: 1689, color: '#e6384d' },
  { name: 'Other', value: 3251, color: '#20262f' },
];

const BrowserUsagePanel = () => (
  <SectionCard title="Browser Usage">
    <div className={styles.chartWrap}>
      <div className={styles.ring} aria-hidden="true"></div>
    </div>

    <div className={styles.list}>
      {browsers.map((browser) => (
        <div key={browser.name} className={styles.row}>
          <div className={styles.labelWrap}>
            <span className={styles.dot} style={{ backgroundColor: browser.color }}></span>
            <span className={styles.name}>{browser.name}</span>
            {browser.change ? (
              <span className={`${styles.badge} ${browser.tone === 'positive' ? styles.positive : styles.negative}`}>
                {browser.change}
              </span>
            ) : null}
          </div>

          <span className={styles.value}>{browser.value}</span>
        </div>
      ))}
    </div>
  </SectionCard>
);

export default BrowserUsagePanel;