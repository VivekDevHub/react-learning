export const setSongsAction = (state, action) => {
  state.songs = action.payload;
};

export const setSongsLoadedAction = (state, action) => {
  state.loaded = action.payload;
};

export const setCurrentSongAction = (state, action) => {
  state.currentSong = action.payload;
};

export const setIsPlayingAction = (state, action) => {
  state.isPlaying = action.payload;
};
