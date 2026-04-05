import React from "react";
import styles from "../../css/ecommerce/EcommercePanel.module.css";

const EcommercePanel = ({ title, children, controls, className = "" }) => (
  <section className={`${styles.panel} ${className}`.trim()}>
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {controls ? (
        <div className={styles.controls}>{controls}</div>
      ) : (
        <button type="button" className={styles.moreButton}>
          <i className="ri-more-2-fill" aria-hidden="true"></i>
        </button>
      )}
    </div>
    <div className={styles.body}>{children}</div>
  </section>
);

export default EcommercePanel;
