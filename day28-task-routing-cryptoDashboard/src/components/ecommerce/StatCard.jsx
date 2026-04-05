import React from "react";
import styles from "../../css/ecommerce/StatCard.module.css";

const StatCard = ({ title, value, change, tone, icon }) => (
  <article className={styles.card}>
    <div className={styles.top}>
      <span className={styles.title}>{title}</span>
      <span className={styles.iconWrap}>
        <i className={icon} aria-hidden="true"></i>
      </span>
    </div>

    <h2 className={styles.value}>{value}</h2>

    <div className={styles.bottom}>
      <span
        className={`${styles.badge} ${tone === "negative" ? styles.negative : styles.positive}`}
      >
        {change}
      </span>
      <span className={styles.caption}>Since last week</span>
    </div>
  </article>
);

export default StatCard;
