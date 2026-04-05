import React from 'react';
import SectionCard from './SectionCard';
import styles from '../../css/analytics/CalendarPanel.module.css';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dates = [
  { label: '1' },
  { label: '2' },
  { label: '3' },
  { label: '4' },
  { label: '5' },
  { label: '6' },
  { label: '7' },
  { label: '8' },
  { label: '9' },
  { label: '10' },
  { label: '11' },
  { label: '12' },
  { label: '13' },
  { label: '14' },
  { label: '15' },
  { label: '16' },
  { label: '17' },
  { label: '18' },
  { label: '19' },
  { label: '20' },
  { label: '21' },
  { label: '22' },
  { label: '23' },
  { label: '24' },
  { label: '25' },
  { label: '26' },
  { label: '27', active: true },
  { label: '28' },
  { label: '29' },
  { label: '30' },
  { label: '31' },
  { label: '1', muted: true },
  { label: '2', muted: true, marker: true },
  { label: '3', muted: true },
  { label: '4', muted: true },
  { label: '5', muted: true },
  { label: '6', muted: true },
  { label: '7', muted: true },
  { label: '8', muted: true },
  { label: '9', muted: true },
  { label: '10', muted: true },
  { label: '11', muted: true },
];

const CalendarPanel = () => (
  <SectionCard title="Calendar">
    <div className={styles.monthBar}>
      <button type="button" className={styles.navButton} aria-label="Previous month">
        <i className="ri-arrow-left-s-line" aria-hidden="true"></i>
      </button>

      <div className={styles.monthValue}>
        <span>March</span>
        <span>2026</span>
      </div>

      <button type="button" className={styles.navButton} aria-label="Next month">
        <i className="ri-arrow-right-s-line" aria-hidden="true"></i>
      </button>
    </div>

    <div className={styles.dayRow}>
      {days.map((day) => (
        <span key={day} className={styles.dayLabel}>
          {day}
        </span>
      ))}
    </div>

    <div className={styles.grid}>
      {dates.map((date) => (
        <button
          key={`${date.label}-${date.muted ? 'muted' : 'current'}`}
          type="button"
          className={`${styles.dateButton} ${date.active ? styles.active : ''} ${date.muted ? styles.muted : ''}`.trim()}
        >
          {date.label}
          {date.marker ? <span className={styles.marker} aria-hidden="true"></span> : null}
        </button>
      ))}
    </div>
  </SectionCard>
);

export default CalendarPanel;