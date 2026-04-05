import React from 'react';
import CryptoStatCard from './CryptoStatCard';
import styles from '../../css/crypto/CryptoStatsGrid.module.css';

const cards = [
  {
    title: 'Total balance',
    value: '$53,252',
    meta: '2.30 BTC',
    footer: '+6.15%',
    caption: 'Since last week',
    tone: 'positive',
    icon: 'ri-money-dollar-circle-line',
    iconClass: 'blue',
  },
  {
    title: 'USD/BTC',
    value: '$23.077,05',
    meta: 'EUR22.617,47',
    caption: 'Volume: 132,691 BTC',
    icon: 'ri-btc-line',
    iconClass: 'orange',
  },
  {
    title: 'LTC/BTC',
    value: '0.00256',
    meta: '$59.02',
    caption: 'Volume: 31,268 BTC',
    icon: 'ri-litecoin-fill',
    iconClass: 'indigo',
  },
  {
    title: 'ETH/BTC',
    value: '0.07334',
    meta: '$1,691.76',
    caption: 'Volume: 32,982 BTC',
    icon: 'ri-ethereum-fill',
    iconClass: 'violet',
  },
  {
    title: 'XMR/BTC',
    value: '0.006854',
    meta: '$157.68',
    caption: 'Volume: 28,567 BTC',
    icon: 'ri-coin-fill',
    iconClass: 'amber',
  },
];

const CryptoStatsGrid = () => (
  <div className={styles.grid}>
    {cards.map((card) => (
      <CryptoStatCard key={card.title} {...card} />
    ))}
  </div>
);

export default CryptoStatsGrid;