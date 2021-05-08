import React, { useContext } from "react";
import Modal from "react-modal";
import { FiRefreshCw } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import MenuContext from "../context/MenuContext";
import ChannelsContext from "../context/ChannelsContext";
import ChannelsBox from "../components/ChannelsBox";

const Channels = () => {
  const { channel, handleClearStorage } = useContext(MenuContext);
  const { showList, setShowList } = useContext(ChannelsContext);
  const { urls } = channel;
  const handleClose = () => setShowList(false);
  return (
    <Modal
      isOpen={showList}
      className="modal"
      overlayClassName="overlay"
      onRequestClose={handleClose}
    >
      <header className="modal__header">
        <aside className="modal__aside">Channels</aside>
        <footer className="modal__footer">
          <a href="#" onClick={handleClearStorage} aria-label="Reset">
            <FiRefreshCw />
          </a>
          <a href="#" onClick={handleClose} aria-label="Exit">
            <AiOutlineCloseCircle />
          </a>
        </footer>
      </header>
      <section className="modal__section">
        {urls.length === 0 ? (
          <p className="empty-list">Loading Channels...</p>
        ) : (
          <ChannelsBox />
        )}
      </section>
    </Modal>
  );
};

export default Channels;
