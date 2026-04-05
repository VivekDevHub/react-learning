import React, { useMemo } from "react";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import EcommercePanel from "./EcommercePanel";
import styles from "../../css/ecommerce/RevenueOverview.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);

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
const values = [
  2100, 1550, 1580, 1900, 1600, 1930, 2550, 2430, 2810, 3430, 2910, 3320,
];

const RevenueOverview = () => {
  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data: values,
          borderColor: "#3f7de0",
          borderWidth: 3,
          tension: 0.42,
          fill: true,
          pointRadius: 3,
          pointHoverRadius: 4,
          pointBorderWidth: 1.5,
          pointBackgroundColor: "#dce9ff",
          pointBorderColor: "#3f7de0",
          backgroundColor: (context) => {
            const { chart } = context;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              return "rgba(63, 125, 224, 0.16)";
            }

            const gradient = ctx.createLinearGradient(
              0,
              chartArea.top,
              0,
              chartArea.bottom,
            );
            gradient.addColorStop(0, "rgba(63, 125, 224, 0.20)");
            gradient.addColorStop(1, "rgba(63, 125, 224, 0)");
            return gradient;
          },
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
          backgroundColor: "#64748b",
          displayColors: false,
          callbacks: {
            label: (context) => `Sales: ${context.parsed.y}`,
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: {
            color: "#7a8797",
            font: { size: 12 },
          },
        },
        y: {
          min: 1000,
          max: 4000,
          ticks: {
            stepSize: 1000,
            color: "#7a8797",
            font: { size: 12 },
          },
          grid: { display: false },
          border: { color: "#dfe5ef" },
        },
      },
    }),
    [],
  );

  const controls = (
    <>
      <button type="button" className={styles.filterButton}>
        Jan <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
      </button>
      <div className={styles.search}>
        <i className="ri-search-line" aria-hidden="true"></i>
        <input type="text" placeholder="Search.." aria-label="Search revenue" />
      </div>
    </>
  );

  return (
    <EcommercePanel title="Total Revenue" controls={controls}>
      <div className={styles.chartWrap}>
        <Line data={data} options={options} />
      </div>
    </EcommercePanel>
  );
};

export default RevenueOverview;
