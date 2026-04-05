import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
} from "chart.js";
import EcommercePanel from "./EcommercePanel";
import styles from "../../css/ecommerce/SalesRevenuePanel.module.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const values = [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79];

const SalesRevenuePanel = () => {
  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: "#3f7de0",
          borderRadius: 10,
          borderSkipped: false,
          barThickness: 9,
        },
      ],
    }),
    [],
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          displayColors: false,
          backgroundColor: "#64748b",
        },
      },
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: {
            color: "#6f7c8d",
            maxRotation: 48,
            minRotation: 48,
            font: { size: 12 },
          },
        },
        y: {
          min: 40,
          max: 80,
          ticks: {
            stepSize: 20,
            color: "#6f7c8d",
            font: { size: 12 },
          },
          grid: { display: false },
          border: { color: "#d8e0ea" },
        },
      },
    }),
    [],
  );

  return (
    <EcommercePanel title="Sales/Revenue">
      <div className={styles.chartWrap}>
        <Bar data={data} options={options} />
      </div>
    </EcommercePanel>
  );
};

export default SalesRevenuePanel;
