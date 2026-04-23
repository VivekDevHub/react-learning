import React from "react";
import styles from "../../css/Home.module.css";

const SongCard = ({ song, isCurrent, onSelectSong }) => {
  return (
    <article
      className={`${styles.songCard} ${isCurrent ? styles.songCardActive : ""}`.trim()}
      onClick={() => onSelectSong(song)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onSelectSong(song);
        }
      }}
    >
      <div className={styles.songImageWrap}>
        <img
          src={song.thumbnail}
          alt={song.title}
          className={styles.songImage}
          loading="lazy"
        />
      </div>
      <h3 className={styles.songTitle}>{song.title}</h3>
      <p className={styles.songMeta}>
        {song.artist}. {song.album || "Top picks for you."}
      </p>
    </article>
  );
};

export default SongCard;
