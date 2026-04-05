import React from 'react';
import Head from './Head';
import MinCard from './MinCard';
import MomentGraph from './MomentGraph';
import styles from '../../css/analytics/TopGrid.module.css';

const cards = [
  {
    title: 'Sales',
    value: '2.382',
    change: '-3.65%',
    icon: 'ri-truck-line',
    changeTone: 'info',
  },
  {
    title: 'Earnings',
    value: '$21.300',
    change: '6.65%',
    icon: 'ri-money-dollar-circle-line',
    changeTone: 'success',
  },
  {
    title: 'Visitors',
    value: '14.212',
    change: '5.25%',
    icon: 'ri-group-line',
    changeTone: 'success',
  },
  {
    title: 'Orders',
    value: '64',
    change: '-2.25%',
    icon: 'ri-shopping-cart-2-line',
    changeTone: 'danger',
  },
];

const TopGrid = () => {
  return (
    <section className={styles.wrapper}>
      <Head />

      <div className={styles.content}>
        <div className={styles.cards}>
          {cards.map((card) => (
            <MinCard key={card.title} {...card} />
          ))}
        </div>

        <MomentGraph />
      </div>
    </section>
  );
};

export default TopGrid;