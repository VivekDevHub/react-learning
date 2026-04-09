import React from 'react';
import styles from '../../css/dashboard/Count.module.css';

const Count = () => {
  return (
    <div className={styles.countHead}>
        <div className={styles.box}>
            <p className={styles.title}>Total Articles</p>
            <p className={`${styles.count} ${styles.normal}`}> {0} </p>
        </div>
        <div className={styles.box}>
            <p className={styles.title}>Published</p>
            <p className={`${styles.count} ${styles.bright}`}> {0} </p>
        </div>
        <div className={styles.box}>
            <p className={styles.title}>Drafts</p>
            <p className={`${styles.count} ${styles.dim}`}> {0} </p>
        </div>
    </div>
  )
}

export default Count