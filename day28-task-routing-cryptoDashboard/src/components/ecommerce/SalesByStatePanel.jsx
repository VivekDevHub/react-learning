import React from "react";
import mapImage from "../../assets/ecommerce/map.png";
import EcommercePanel from "./EcommercePanel";
import styles from "../../css/ecommerce/SalesByStatePanel.module.css";

const controls = (
  <>
    <button type="button" className={styles.filterButton}>
      Jan <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
    </button>
    <div className={styles.search}>
      <i className="ri-search-line" aria-hidden="true"></i>
      <input
        type="text"
        placeholder="Search.."
        aria-label="Search state sales"
      />
    </div>
  </>
);

const SalesByStatePanel = () => (
  <EcommercePanel title="Sales by State" controls={controls}>
    <div className={styles.mapShell}>
      {/* <div className={styles.zoomControls} aria-hidden="true">
        <span>+</span>
        <span>-</span>
      </div> */}
      <img
        src={mapImage}
        alt="Sales by state map"
        className={styles.mapImage}
      />
    </div>
  </EcommercePanel>
);

export default SalesByStatePanel;
