import React from "react";
import SongCard from "./SongCard";
import styles from "../../css/Home.module.css";

const SongsSection = ({ title, songs, currentSong, onSelectSong }) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <button type="button" className={styles.showAll}>
          Show all
        </button>
      </div>

      <div className={styles.songGrid}>
        {songs.map((song) => (
          <SongCard
            key={song.url}
            song={song}
            isCurrent={currentSong?.url === song.url}
            onSelectSong={onSelectSong}
          />
        ))}
      </div>
    </section>
  );
};

export default SongsSection;
