import { createSlice } from "@reduxjs/toolkit";
import {
  setCurrentSongAction,
  setIsPlayingAction,
  setSongsAction,
  setSongsLoadedAction,
} from "../actions/SongsActions";

const SongsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    loaded: false,
    currentSong: null,
    isPlaying: false,
  },
  reducers: {
    setSongs: setSongsAction,
    setSongsLoaded: setSongsLoadedAction,
    setCurrentSong: setCurrentSongAction,
    setIsPlaying: setIsPlayingAction,
  },
});

export const { setSongs, setSongsLoaded, setCurrentSong, setIsPlaying } =
  SongsSlice.actions;

export default SongsSlice.reducer;
