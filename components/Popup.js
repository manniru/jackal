import React from "react";
import { Modal, Button } from "react-bootstrap";
import CollapseBox from "./CollapseBox";
import Icon from "./Icon";
import { FaSatelliteDish } from "react-icons/fa";

const Popup = ({
  urls,
  show,
  setShow,
  channel,
  setChannel,
  handleClearStorage,
}) => {
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        className="bg-dark text-white rounded-0 d-flex justify-content-between align-items-center border-0"
        closeButton
      >
        <Modal.Title>
          <Icon>
            <FaSatelliteDish />
            <span className="ml-3">Live Channels</span>
          </Icon>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white p-0 rounded-0">
        {urls.length === 0 ? (
          <p className="pt-3 px-3">Loading Channels...</p>
        ) : (
          <CollapseBox urls={urls} channel={channel} setChannel={setChannel} />
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

export default Popup;
