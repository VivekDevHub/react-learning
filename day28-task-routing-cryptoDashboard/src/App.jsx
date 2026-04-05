import React from 'react';
import Navbar from './components/globals/Navbar';
import Sidebar from './components/globals/Sidebar';
import AppRoutes from './routes/Routes';
import styles from './css/globals/AppShell.module.css';

const App = () => (
  <div className={styles.shell}>
    <Sidebar />

    <div className={styles.main}>
      <Navbar />
      <main className={styles.content}>
        <AppRoutes />
      </main>
    </div>
  </div>
);

export default React.memo(App);