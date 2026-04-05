import TopGrid from './TopGrid';
import EcommerceDashboard from './EcommerceDashboard';
import styles from '../../css/analytics/AnalyticsDashboard.module.css';

const AnalyticsDashboard = () => (
  <section className={styles.wrapper}>
    <TopGrid />
    <EcommerceDashboard />
  </section>
);

export default AnalyticsDashboard;