import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, Tooltip } from 'chart.js';
import CryptoPanel from './CryptoPanel';
import styles from '../../css/crypto/PriceChartPanel.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const candles = [
  { x: 0, open: 52, close: 54, low: 51.2, high: 56.1 },
  { x: 1, open: 53.7, close: 53.0, low: 51.1, high: 55.0 },
  { x: 2, open: 52.9, close: 52.4, low: 51.4, high: 53.3 },
  { x: 3, open: 52.5, close: 49.2, low: 47.9, high: 52.7 },
  { x: 4, open: 49.1, close: 52.9, low: 47.7, high: 53.3 },
  { x: 5, open: 52.7, close: 52.9, low: 50.2, high: 53.4 },
  { x: 6, open: 52.3, close: 57.1, low: 51.9, high: 58.0 },
  { x: 7, open: 57.1, close: 56.2, low: 48.9, high: 58.5 },
  { x: 8, open: 56.1, close: 58.8, low: 55.4, high: 59.6 },
  { x: 9, open: 58.9, close: 60.1, low: 58.2, high: 61.0 },
  { x: 10, open: 60.2, close: 56.8, low: 56.5, high: 60.3 },
  { x: 11, open: 56.9, close: 56.7, low: 55.7, high: 59.6 },
  { x: 12, open: 56.9, close: 59.3, low: 54.8, high: 60.3 },
  { x: 13, open: 59.3, close: 59.9, low: 59.1, high: 62.2 },
  { x: 14, open: 59.9, close: 58.5, low: 55.5, high: 60.0 },
  { x: 15, open: 58.4, close: 57.5, low: 56.7, high: 60.8 },
  { x: 16, open: 57.7, close: 54.7, low: 53.2, high: 58.0 },
  { x: 17, open: 54.9, close: 57.4, low: 53.6, high: 61.3 },
  { x: 18, open: 57.7, close: 63.0, low: 56.9, high: 63.2 },
  { x: 19, open: 62.9, close: 61.7, low: 59.7, high: 63.5 },
  { x: 20, open: 61.7, close: 63.1, low: 61.2, high: 64.1 },
  { x: 21, open: 59.5, close: 60.3, low: 58.8, high: 61.0 },
  { x: 22, open: 60.3, close: 57.0, low: 56.2, high: 60.1 },
  { x: 23, open: 57.1, close: 57.0, low: 56.0, high: 59.7 },
  { x: 24, open: 57.1, close: 59.3, low: 54.8, high: 62.2 },
  { x: 25, open: 59.3, close: 59.8, low: 58.8, high: 60.3 },
  { x: 26, open: 59.9, close: 58.5, low: 55.5, high: 60.8 },
  { x: 27, open: 58.4, close: 57.5, low: 56.7, high: 58.0 },
  { x: 28, open: 57.7, close: 54.7, low: 51.0, high: 58.0 },
  { x: 29, open: 54.9, close: 57.4, low: 53.2, high: 61.3 },
  { x: 30, open: 57.7, close: 61.9, low: 56.9, high: 62.0 },
  { x: 31, open: 62.9, close: 61.7, low: 59.7, high: 63.0 },
  { x: 32, open: 61.7, close: 63.1, low: 60.8, high: 64.0 },
];

const axisLabels = Array.from({ length: candles.length }, (_, index) => {
  if (index === 4) return "Jul '16";
  if (index === 11) return '2017';
  if (index === 17) return "Jul '17";
  if (index === 22) return '2018';
  if (index === 28) return "Jul '18";
  return '';
});

const actions = (
  <div className={styles.toolbar}>
    {['1m', '5m', '30m', '1h', '1d'].map((item) => (
      <button key={item} type="button" className={`${styles.rangeButton} ${item === '5m' ? styles.active : ''}`}>
        {item}
      </button>
    ))}
  </div>
);

const PriceChartPanel = () => {
  const chartData = useMemo(() => {
    const wickColor = candles.map((candle) => (candle.close >= candle.open ? '#07b248' : '#f44336'));
    const bodyColor = wickColor;

    return {
      labels: axisLabels,
      datasets: [
        {
          label: 'Range',
          data: candles.map((candle) => [candle.low, candle.high]),
          backgroundColor: wickColor,
          borderSkipped: false,
          borderRadius: 0,
          barThickness: 2,
          grouped: false,
          order: 1,
          categoryPercentage: 1,
          barPercentage: 1,
        },
        {
          label: 'LTC/BTC',
          data: candles.map((candle) => [Math.min(candle.open, candle.close), Math.max(candle.open, candle.close)]),
          backgroundColor: bodyColor,
          borderSkipped: false,
          borderRadius: 0,
          barThickness: 14,
          grouped: false,
          order: 2,
          categoryPercentage: 1,
          barPercentage: 1,
        },
      ],
    };
  }, []);

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#5f6673',
          displayColors: false,
          padding: 12,
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          callbacks: {
            title: (items) => `Period ${items[0].dataIndex + 1}`,
            label: (context) => {
              const candle = candles[context.dataIndex];
              return [
                `Open: ${candle.open.toFixed(2)}`,
                `High: ${candle.high.toFixed(2)}`,
                `Low: ${candle.low.toFixed(2)}`,
                `Close: ${candle.close.toFixed(2)}`,
              ];
            },
          },
        },
      },
      scales: {
        x: {
          stacked: false,
          grid: { display: false },
          border: { display: false },
          ticks: {
            color: '#6f7c8d',
            maxRotation: 0,
            autoSkip: false,
            font: { size: 12 },
          },
        },
        y: {
          min: 45,
          max: 65,
          ticks: {
            stepSize: 5,
            color: '#6f7c8d',
            font: { size: 12 },
            callback: (value) => Number(value).toFixed(2),
          },
          grid: {
            color: '#e6ecf3',
          },
          border: { display: false },
        },
      },
    }),
    []
  );

  return (
    <CryptoPanel title="LTC/BTC" actions={actions}>
      <div className={styles.chartShell}>
        <div className={styles.overlayTools}>
          <i className="ri-add-circle-line" aria-hidden="true"></i>
          <i className="ri-indeterminate-circle-line" aria-hidden="true"></i>
          <i className="ri-search-line" aria-hidden="true"></i>
          <i className="ri-hand" aria-hidden="true"></i>
          <i className="ri-home-4-line" aria-hidden="true"></i>
          <i className="ri-menu-line" aria-hidden="true"></i>
        </div>

        <div className={styles.chart}>
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </CryptoPanel>
  );
};

export default PriceChartPanel;