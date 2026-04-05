import React, { useMemo } from 'react';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from '../../css/analytics/MomentGraph.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const values = [2100, 1550, 1600, 1900, 1580, 1920, 2566, 2430, 2800, 3450, 2920, 3320];

const MomentGraph = () => {
  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: 'Sales ($)',
          data: values,
          borderColor: '#3b7be3',
          borderWidth: 3,
          tension: 0.42,
          fill: true,
          pointRadius: 3,
          pointHoverRadius: 4,
          pointBorderWidth: 1.5,
          pointBackgroundColor: '#dfe9ff',
          pointBorderColor: '#3b7be3',
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              return 'rgba(59, 123, 227, 0.16)';
            }

            const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
            gradient.addColorStop(0, 'rgba(59, 123, 227, 0.28)');
            gradient.addColorStop(1, 'rgba(59, 123, 227, 0)');
            return gradient;
          },
        },
      ],
    }),
    []
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: '#5f6673',
          displayColors: true,
          padding: 12,
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          titleFont: {
            size: 12,
            weight: '700',
          },
          bodyFont: {
            size: 12,
          },
          callbacks: {
            label: (context) => `Sales ($): ${context.parsed.y}`,
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
          ticks: {
            color: '#7b8794',
            font: {
              size: 12,
            },
          },
        },
        y: {
          min: 1000,
          max: 4000,
          ticks: {
            stepSize: 1000,
            color: '#7b8794',
            font: {
              size: 12,
            },
            callback: (tickValue) => `${tickValue}`,
          },
          grid: {
            display: false,
          },
          border: {
            color: '#dfe6f2',
          },
        },
      },
    }),
    []
  );

  return (
    <section className={styles.graphCard}>
      <div className={styles.topBar}>
        <h2 className={styles.title}>Recent Movement</h2>

        <div className={styles.filters}>
          <button type="button" className={styles.monthButton}>
            Jan <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
          </button>
          <div className={styles.search}>
            <i className="ri-search-line" aria-hidden="true"></i>
            <input type="text" placeholder="Search.." aria-label="Search chart data" />
          </div>
        </div>
      </div>

      <div className={styles.chartWrap}>
        <Line data={data} options={options} />
      </div>
    </section>
  );
};

export default MomentGraph;