import React from "react";
import EcommerceHeader from "./EcommerceHeader";
import EcommerceStatsGrid from "./EcommerceStatsGrid";
import RevenueOverview from "./RevenueOverview";
import SalesByStatePanel from "./SalesByStatePanel";
import SalesRevenuePanel from "./SalesRevenuePanel";
import TopSellingProductsPanel from "./TopSellingProductsPanel";
import styles from "../../css/ecommerce/EcommerceDashboard.module.css";

const EcommerceDashboard = () => (
  <section className={styles.wrapper}>
    <EcommerceHeader />
    <EcommerceStatsGrid />

    <div className={styles.analyticsRow}>
      <RevenueOverview />
      <SalesByStatePanel />
    </div>

    <div className={styles.bottomRow}>
      <SalesRevenuePanel />
      <TopSellingProductsPanel />
    </div>
  </section>
);

export default EcommerceDashboard;
