import React, { useContext } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Button, Modal } from "react-bootstrap";
import MyPlaylistContext from "../context/MyPlaylistContext";

const MyPlaylist = () => {
  const { show, playlistComponent, handleClear, handleClose } = useContext(
    MyPlaylistContext
  );
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        className="bg-dark text-white rounded-0 d-flex justify-content-between align-items-center border-0"
      >
        <Modal.Title className="d-flex justify-content-center align-items-center">
          <BiUserCircle />
          <span className="ml-3">My Playlist</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0 bg-dark border-top border-secondary">
        {playlistComponent}
      </Modal.Body>
      <Modal.Footer className="rounded-0 bg-dark border-top border-secondary">
        <Button variant="danger" onClick={handleClear}>
          Clear
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyPlaylist;
