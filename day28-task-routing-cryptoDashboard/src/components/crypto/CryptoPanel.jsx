import React from "react";
import styles from "../../css/crypto/CryptoPanel.module.css";

const CryptoPanel = ({ title, actions, children, className = "" }) => (
  <section className={`${styles.panel} ${className}`.trim()}>
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {actions ? (
        <div className={styles.actions}>{actions}</div>
      ) : (
        <button type="button" className={styles.moreButton}>
          <i className="ri-more-2-fill" aria-hidden="true"></i>
        </button>
      )}
    </div>
    <div className={styles.body}>{children}</div>
  </section>
);

export default CryptoPanel;
