import React from 'react';
import styles from '../../css/home/LineCount.module.css';

const LineCount = () => {
  return (
    <div className={styles.line}>
      <p className={styles.head}>Lastest Articles </p>
      <p className={styles.subHead}> 3 articles </p>
    </div>
  )
}

export default React.memo(LineCount)