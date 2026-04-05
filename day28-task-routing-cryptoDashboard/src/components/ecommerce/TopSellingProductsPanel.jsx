import React from "react";
import apolloLogo from "../../assets/ecommerce/apolio.svg"
import bongoLogo from "../../assets/ecommerce/bongo.svg";
import canaryLogo from "../../assets/ecommerce/canary.svg";
import edisonLogo from "../../assets/ecommerce/edison.svg";
import indigoLogo from "../../assets/ecommerce/indigo.svg";
import EcommercePanel from "./EcommercePanel";
import styles from "../../css/ecommerce/TopSellingProductsPanel.module.css";

const products = [
  {
    name: "Aurora",
    type: "UI Kit",
    company: "Lechters",
    sector: "Real Estate",
    assigned: "Vanessa Tucker",
    stack: "HTML, JS, React",
    orders: 520,
    status: "In progress",
    tone: "progress",
    logo: edisonLogo,
  },
  {
    name: "Bender",
    type: "Dashboard",
    company: "Cellophane Transportation",
    sector: "Transportation",
    assigned: "William Harris",
    stack: "HTML, JS, Vue",
    orders: 240,
    status: "Paused",
    tone: "paused",
    logo: apolloLogo,
  },
  {
    name: "Camelot",
    type: "Dashboard",
    company: "Clemens",
    sector: "Insurance",
    assigned: "Darwin",
    stack: "HTML, JS, Laravel",
    orders: 180,
    status: "In progress",
    tone: "progress",
    logo: indigoLogo,
  },
  {
    name: "Edison",
    type: "UI Kit",
    company: "Affinity Investment Group",
    sector: "Finance",
    assigned: "Vanessa Tucker",
    stack: "HTML, JS, React",
    orders: 410,
    status: "Cancelled",
    tone: "cancelled",
    logo: bongoLogo,
  },
  {
    name: "Fusion",
    type: "Dashboard",
    company: "Konsili",
    sector: "Retail",
    assigned: "Christina Mason",
    stack: "HTML, JS, Vue",
    orders: 250,
    status: "Paused",
    tone: "paused",
    logo: canaryLogo,
  },
];

const TopSellingProductsPanel = () => (
  <EcommercePanel title="Top Selling Products">
    <div className={styles.table}>
      <div className={`${styles.row} ${styles.headerRow}`}>
        <span>Name</span>
        <span>Company</span>
        <span>Assigned</span>
        <span>Orders</span>
        <span>Status</span>
      </div>

      {products.map((product) => (
        <div key={product.name} className={styles.row}>
          <div className={styles.itemCell}>
            <div className={styles.logoWrap}>
              <img src={product.logo} alt="" className={styles.logo} />
            </div>
            <div>
              <div className={styles.primaryText}>{product.name}</div>
              <div className={styles.secondaryText}>{product.type}</div>
            </div>
          </div>

          <div>
            <div className={styles.primaryText}>{product.company}</div>
            <div className={styles.secondaryText}>{product.sector}</div>
          </div>

          <div>
            <div className={styles.primaryText}>{product.assigned}</div>
            <div className={styles.secondaryText}>{product.stack}</div>
          </div>

          <div className={styles.ordersCell}>{product.orders}</div>

          <div>
            <span className={`${styles.badge} ${styles[product.tone]}`}>
              {product.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  </EcommercePanel>
);

export default TopSellingProductsPanel;
