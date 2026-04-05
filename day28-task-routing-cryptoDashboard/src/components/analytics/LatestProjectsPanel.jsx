import React from 'react';
import apolloLogo from '../../assets/analytics/apolio.svg';
import bongoLogo from '../../assets/analytics/bongo.svg';
import canaryLogo from '../../assets/analytics/canary.svg';
import edisonLogo from '../../assets/analytics/edison.svg';
import indigoLogo from '../../assets/analytics/indigo.svg';
import SectionCard from './SectionCard';
import styles from '../../css/analytics/LatestProjectsPanel.module.css';

const projects = [
  {
    name: 'Project Apollo',
    category: 'Web, UI/UX Design',
    company: 'Lechters',
    sector: 'Real Estate',
    author: 'Vanessa Tucker',
    stack: 'HTML, JS, React',
    progress: 65,
    color: '#20b486',
    logo: apolloLogo,
  },
  {
    name: 'Project Bongo',
    category: 'Web',
    company: 'Cellophane Transportation',
    sector: 'Transportation',
    author: 'William Harris',
    stack: 'HTML, JS, Vue',
    progress: 33,
    color: '#e6384d',
    logo: bongoLogo,
  },
  {
    name: 'Project Canary',
    category: 'Web, UI/UX Design',
    company: 'Clemens',
    sector: 'Insurance',
    author: 'Sharon Lessman',
    stack: 'HTML, JS, Laravel',
    progress: 50,
    color: '#ffb529',
    logo: canaryLogo,
  },
  {
    name: 'Project Edison',
    category: 'UI/UX Design',
    company: 'Affinity Investment Group',
    sector: 'Finance',
    author: 'Vanessa Tucker',
    stack: 'HTML, JS, React',
    progress: 80,
    color: '#20b486',
    logo: edisonLogo,
  },
  {
    name: 'Project Indigo',
    category: 'Web, UI/UX Design',
    company: 'Konsili',
    sector: 'Retail',
    author: 'Christina Mason',
    stack: 'HTML, JS, Vue',
    progress: 78,
    color: '#3f7de0',
    logo: indigoLogo,
  },
];

const LatestProjectsPanel = () => (
  <SectionCard title="Latest Projects">
    <div className={styles.table}>
      <div className={`${styles.row} ${styles.headerRow}`}>
        <span>Name</span>
        <span>Company</span>
        <span>Author</span>
        <span>Status</span>
        <span>Action</span>
      </div>

      {projects.map((project) => (
        <div key={project.name} className={styles.row}>
          <div className={styles.projectCell}>
            <div className={styles.logoWrap}>
              <img src={project.logo} alt="" className={styles.logo} />
            </div>
            <div>
              <div className={styles.primaryText}>{project.name}</div>
              <div className={styles.secondaryText}>{project.category}</div>
            </div>
          </div>

          <div>
            <div className={styles.primaryText}>{project.company}</div>
            <div className={styles.secondaryText}>{project.sector}</div>
          </div>

          <div>
            <div className={styles.primaryText}>{project.author}</div>
            <div className={styles.secondaryText}>{project.stack}</div>
          </div>

          <div className={styles.statusCell}>
            <span className={styles.statusValue}>{project.progress}%</span>
            <span className={styles.progressTrack}>
              <span
                className={styles.progressFill}
                style={{ width: `${project.progress}%`, backgroundColor: project.color }}
              ></span>
            </span>
          </div>

          <div className={styles.actionCell}>
            <button type="button" className={styles.viewButton}>
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  </SectionCard>
);

export default LatestProjectsPanel;