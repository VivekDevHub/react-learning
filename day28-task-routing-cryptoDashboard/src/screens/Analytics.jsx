import AnalyticsDashboard from '../components/analytics/AnalyticsDashboard';
import styles from '../css/analytics/Analytics.module.css';

const Analytics = () => {
  return (
    <div className={styles.page}>
      <AnalyticsDashboard />
    </div>
  );
};

export default Analytics;