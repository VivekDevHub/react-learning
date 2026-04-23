import React from "react";
import {
  Group,
  Panel,
  Separator,
} from "react-resizable-panels";
import HomeHook from "../../hooks/HomeHook";
import AppNavbar from "../../../../shared/ui/jsx/AppNavbar";
import SongsSection from "./components/SongsSection";
import PlayerBar from "./components/PlayerBar";
import styles from "../css/Home.module.css";

const Home = () => {
  const {
    visibleSongs,
    currentSong,
    isPlaying,
    currentTime,
    duration,
    onSelectSong,
    onPlayPause,
    onPrev,
    onNext,
    onSeek,
    artistCredits,
    searchQuery,
    setSearchQuery,
  } = HomeHook();

  return (
    <main className={styles.page}>
      <AppNavbar
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <Group orientation="horizontal" className={styles.panelGroup}>
        <Panel
          defaultSize="24%"
          minSize="20%"
          maxSize="32%"
          className={styles.panel}
        >
          <aside className={styles.libraryPanel}>
            <div className={styles.libraryHeader}>
              <h2>Your Library</h2>
              <button type="button" className={styles.smallPill}>
                + Create
              </button>
            </div>

            <div className={styles.libraryCard}>
              <h3>Create your first playlist</h3>
              <p>It's easy, we'll help you</p>
              <button type="button" className={styles.whitePill}>
                Create playlist
              </button>
            </div>

            <div className={styles.libraryCard}>
              <h3>Let's find some podcasts to follow</h3>
              <p>We'll keep you updated on new episodes</p>
              <button type="button" className={styles.whitePill}>
                Browse podcasts
              </button>
            </div>
          </aside>
        </Panel>

        <Separator className={styles.resizeHandle} />

        <Panel
          defaultSize="52%"
          minSize="40%"
          maxSize="65%"
          className={styles.panel}
        >
          <section className={styles.feedPanel}>
            <SongsSection
              title="Songs"
              songs={visibleSongs}
              currentSong={currentSong}
              onSelectSong={onSelectSong}
            />
          </section>
        </Panel>

        <Separator className={styles.resizeHandle} />

        <Panel
          defaultSize="24%"
          minSize="20%"
          maxSize="35%"
          className={styles.panel}
        >
          <aside className={styles.rightPanel}>
            {currentSong ? (
              <>
                <div className={styles.selectedSongCard}>
                  <p className={styles.selectedSongAlbum}>
                    {currentSong.album || "Now Playing"}
                  </p>
                  <img
                    src={currentSong.thumbnail}
                    alt={currentSong.title}
                    className={styles.selectedSongImage}
                  />
                  <div className={styles.selectedSongMeta}>
                    <h3>{currentSong.title}</h3>
                    <p>{currentSong.artist}</p>
                  </div>
                </div>

                <div className={styles.creditsCard}>
                  <div className={styles.creditsHeader}>
                    <h4>Credits</h4>
                    <button type="button" className={styles.showAll}>
                      Show all
                    </button>
                  </div>

                  <div className={styles.creditsList}>
                    {artistCredits.map((credit) => (
                      <div key={credit.id} className={styles.creditRow}>
                        <div>
                          <p className={styles.creditName}>{credit.name}</p>
                          <p className={styles.creditRole}>{credit.role}</p>
                        </div>
                        <button type="button" className={styles.followBtn}>
                          Follow
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.emptyRightPanel}>
                <p>Select a song to view details</p>
              </div>
            )}
          </aside>
        </Panel>
      </Group>

      <PlayerBar
        currentSong={currentSong}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        onPlayPause={onPlayPause}
        onPrev={onPrev}
        onNext={onNext}
        onSeek={onSeek}
      />
    </main>
  );
};

export default Home;
