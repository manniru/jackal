import React, { useContext } from "react";
import Modal from "react-modal";
import { BsTrash } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import MyPlaylistContext from "../context/MyPlaylistContext";

const MyPlaylist = () => {
  const { show, playlistComponent, handleClear, handleClose } = useContext(
    MyPlaylistContext
  );
  return (
    <Modal
      className="modal"
      overlayClassName="overlay"
      isOpen={show}
      onRequestClose={handleClose}
    >
      <header className="modal__header">
        <aside className="modal__aside">My Playlist</aside>
        <footer className="modal__footer">
          <a href="#" onClick={handleClear} aria-label="Clear playlist">
            <BsTrash />
          </a>
          <a href="#" onClick={handleClose} aria-label="Exit">
            <AiOutlineCloseCircle />
          </a>
        </footer>
      </header>
      <section className="modal__section">{playlistComponent}</section>
    </Modal>
  );
};

export default MyPlaylist;
