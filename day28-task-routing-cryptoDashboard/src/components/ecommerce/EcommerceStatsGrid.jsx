import React from "react";
import StatCard from "./StatCard";
import styles from "../../css/ecommerce/EcommerceStatsGrid.module.css";

const stats = [
  {
    title: "Income",
    value: "$47.482",
    change: "3.65%",
    tone: "positive",
    icon: "ri-money-dollar-circle-line",
  },
  {
    title: "Orders",
    value: "2.542",
    change: "-5.25%",
    tone: "negative",
    icon: "ri-inbox-archive-line",
  },
  {
    title: "Activity",
    value: "16.300",
    change: "4.65%",
    tone: "positive",
    icon: "ri-pulse-line",
  },
  {
    title: "Revenue",
    value: "$20.120",
    change: "2.35%",
    tone: "positive",
    icon: "ri-shopping-cart-2-line",
  },
];

const EcommerceStatsGrid = () => (
  <div className={styles.grid}>
    {stats.map((stat) => (
      <StatCard key={stat.title} {...stat} />
    ))}
  </div>
);

export default EcommerceStatsGrid;
