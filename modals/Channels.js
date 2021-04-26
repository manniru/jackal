import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaSatelliteDish } from "react-icons/fa";
import MenuContext from "../context/MenuContext";
import ChannelsContext from "../context/ChannelsContext";
import ChannelsBox from "../components/ChannelsBox";

const Channels = () => {
  const { channel, handleClearStorage } = useContext(MenuContext);
  const { show, setShow } = useContext(ChannelsContext);
  const { urls } = channel;
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        className="bg-dark text-white rounded-0 d-flex justify-content-between align-items-center border-0"
        closeButton
      >
        <Modal.Title className="d-flex justify-content-center align-items-center">
          <FaSatelliteDish />
          <span className="ml-3">Live Channels</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white p-0 rounded-0 border-top border-secondary">
        {urls.length === 0 ? (
          <p className="pt-3 px-3">Loading Channels...</p>
        ) : (
          <ChannelsBox />
        )}
      </Modal.Body>
      <Modal.Footer className="rounded-0 bg-dark border-top border-secondary">
        <Button className="mr-2" variant="success" onClick={handleClearStorage}>
          Refresh
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Channels;
