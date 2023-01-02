import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Candy Shop",
      duration: "2:04",
    },
    {
      title: "Stronger",
      duration: "4:04",
    },
    {
      title: "Power",
      duration: "3:04",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
