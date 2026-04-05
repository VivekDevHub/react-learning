import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, Tooltip } from 'chart.js';
import SectionCard from './SectionCard';
import styles from '../../css/analytics/MonthlySalesPanel.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const values = [54, 68, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79];

const MonthlySalesPanel = () => {
  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: '#3f7de0',
          borderRadius: 10,
          borderSkipped: false,
          barThickness: 9,
          hoverBackgroundColor: '#2563d6',
        },
      ],
    }),
    []
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          displayColors: false,
          backgroundColor: '#3f4b5c',
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
            color: '#6f7c8d',
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
            color: '#6f7c8d',
            font: { size: 12 },
          },
          border: {
            color: '#c2cad8',
          },
          grid: {
            display: false,
          },
        },
      },
    }),
    []
  );

  return (
    <SectionCard title="Monthly Sales">
      <div className={styles.chartWrap}>
        <Bar data={data} options={options} />
      </div>

      <button type="button" className={styles.floatingButton} aria-label="Adjust chart filters">
        <i className="ri-equalizer-2-line" aria-hidden="true"></i>
      </button>
    </SectionCard>
  );
};

export default MonthlySalesPanel;