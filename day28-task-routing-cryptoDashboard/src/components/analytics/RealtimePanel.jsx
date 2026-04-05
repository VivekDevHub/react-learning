import React from 'react';
import mapImage from '../../assets/analytics/map.png';
import SectionCard from './SectionCard';
import styles from '../../css/analytics/RealtimePanel.module.css';

const RealtimePanel = () => (
  <SectionCard title="Real-Time">
    <div className={styles.mapShell}>
      <img src={mapImage} alt="World activity map" className={styles.mapImage} />
    </div>
  </SectionCard>
);

export default RealtimePanel;