import React from "react";
import styles from "../../css/Home.module.css";

const formatTime = (seconds) => {
  if (!seconds || Number.isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
};

const PlayerBar = ({
  currentSong,
  isPlaying,
  currentTime,
  duration,
  onPlayPause,
  onPrev,
  onNext,
  onSeek,
}) => {
  return (
    <footer className={styles.playerBar}>
      <div className={styles.playerSong}>
        {currentSong ? (
          <>
            <img
              src={currentSong.thumbnail}
              alt={currentSong.title}
              className={styles.playerThumb}
            />
            <div className={styles.playerMeta}>
              <h4>{currentSong.title}</h4>
              <p>{currentSong.artist}</p>
            </div>
          </>
        ) : (
          <p className={styles.playerEmpty}>Select a song to play</p>
        )}
      </div>

      <div className={styles.playerCenter}>
        <div className={styles.playerControls}>
          <button
            type="button"
            className={styles.playerIconBtn}
            aria-label="Previous"
            onClick={onPrev}
            disabled={!currentSong}
          >
            ⏮
          </button>
          <button
            type="button"
            className={styles.playerMainBtn}
            onClick={onPlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
            disabled={!currentSong}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>
          <button
            type="button"
            className={styles.playerIconBtn}
            aria-label="Next"
            onClick={onNext}
            disabled={!currentSong}
          >
            ⏭
          </button>
        </div>

        <div className={styles.seekRow}>
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={Math.max(duration, 0)}
            value={Math.min(currentTime, duration || 0)}
            step="0.1"
            className={styles.seekBar}
            onChange={(event) => onSeek(Number(event.target.value))}
            disabled={!currentSong}
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className={styles.playerRight}>
        <span>🔊</span>
      </div>
    </footer>
  );
};

export default PlayerBar;
