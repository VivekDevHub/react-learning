import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../api/SongsApi";
import {
  setCurrentSong,
  setIsPlaying,
  setSongs,
  setSongsLoaded,
} from "../state/SongsReducer/slicers/SongsSlice";

const HomeHook = () => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const { songs, loaded, currentSong, isPlaying } = useSelector(
    (state) => state.songsReducer
  );

  if (!audioRef.current) {
    audioRef.current = new Audio();
  }

  useEffect(() => {
    if (loaded) return;

    const allSongs = getSongs();
    dispatch(setSongs(allSongs));
    dispatch(setSongsLoaded(true));
  }, [dispatch, loaded]);

  useEffect(() => {
    const audio = audioRef.current;

    const onEnded = () => {
      dispatch(setIsPlaying(false));
    };
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };
    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("ended", onEnded);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);

    return () => {
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [dispatch]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!currentSong?.url) {
      audio.pause();
      return;
    }

    if (audio.src !== currentSong.url) {
      audio.src = currentSong.url;
      setCurrentTime(0);
    }

    if (isPlaying) {
      audio.play().catch(() => {
        dispatch(setIsPlaying(false));
      });
      return;
    }

    audio.pause();
  }, [currentSong, isPlaying, dispatch]);

  const onTogglePlay = (song) => {
    if (!song?.url) return;

    const isCurrentSong = currentSong?.url === song.url;

    if (isCurrentSong) {
      dispatch(setIsPlaying(!isPlaying));
      return;
    }

    dispatch(setCurrentSong(song));
    dispatch(setIsPlaying(true));
  };

  const onSeek = (nextTime) => {
    const audio = audioRef.current;
    const safeTime = Math.max(0, Math.min(nextTime, duration || 0));
    audio.currentTime = safeTime;
    setCurrentTime(safeTime);
  };

  const artistCredits = useMemo(() => {
    if (!currentSong?.artist) return [];

    return currentSong.artist
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean)
      .map((name, index) => ({
        id: `${name}-${index}`,
        name,
        role: index === 0 ? "Main Artist • Composer" : "Main Artist",
      }));
  }, [currentSong]);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const visibleSongs = useMemo(() => {
    if (!normalizedQuery) return songs;

    return songs.filter((song) => {
      const title = song.title?.toLowerCase() || "";
      const artist = song.artist?.toLowerCase() || "";
      const album = song.album?.toLowerCase() || "";

      return (
        title.includes(normalizedQuery) ||
        artist.includes(normalizedQuery) ||
        album.includes(normalizedQuery)
      );
    });
  }, [songs, normalizedQuery]);

  const onSelectSong = (song) => {
    if (!song?.url) return;
    dispatch(setCurrentSong(song));
    dispatch(setIsPlaying(true));
  };

  const onPlayPause = () => {
    if (!currentSong) return;
    dispatch(setIsPlaying(!isPlaying));
  };

  const getCurrentIndex = () => {
    if (!currentSong) return -1;
    return visibleSongs.findIndex((song) => song.url === currentSong.url);
  };

  const onPrev = () => {
    if (!visibleSongs.length) return;

    const currentIndex = getCurrentIndex();
    const prevIndex =
      currentIndex <= 0 ? visibleSongs.length - 1 : currentIndex - 1;
    const prevSong = visibleSongs[prevIndex];

    dispatch(setCurrentSong(prevSong));
    dispatch(setIsPlaying(true));
  };

  const onNext = () => {
    if (!visibleSongs.length) return;

    const currentIndex = getCurrentIndex();
    const nextIndex =
      currentIndex < 0 || currentIndex >= visibleSongs.length - 1
        ? 0
        : currentIndex + 1;
    const nextSong = visibleSongs[nextIndex];

    dispatch(setCurrentSong(nextSong));
    dispatch(setIsPlaying(true));
  };

  useEffect(() => {
    if (!currentSong) return;
    if (!visibleSongs.length) return;

    const existsInFilteredList = visibleSongs.some(
      (song) => song.url === currentSong.url
    );

    if (!existsInFilteredList) {
      dispatch(setCurrentSong(visibleSongs[0]));
      dispatch(setIsPlaying(false));
    }
  }, [currentSong, visibleSongs, dispatch]);

  return {
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
  };
};

export default HomeHook;
