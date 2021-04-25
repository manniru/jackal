import { createContext } from "react";

const MyPlaylistContext = createContext({
  show: false,
  playlist: null,
  playlistComponent: null,
  handleClose: () => {},
  handleClear: () => {},
});

export default MyPlaylistContext;
