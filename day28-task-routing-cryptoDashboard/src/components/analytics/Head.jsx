import React from 'react';
import styles from '../../css/analytics/Head.module.css';

const Head = () => {
  return (
    <div className={styles.head}>
      <h1 className={styles.title}>Analytics Dashboard</h1>

      <div className={styles.actions}>
        <button type="button" className={styles.secondaryButton}>
          Invite a Friend
        </button>
        <button type="button" className={styles.primaryButton}>
          New Project
        </button>
      </div>
    </div>
  );
};

export default Head;