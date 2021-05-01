import React, { useContext } from "react";
import Modal from "react-modal";
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
          <button onClick={handleClearStorage} aria-label="Refresh">
            Refresh
          </button>
          <button onClick={handleClose} aria-label="Close">
            Close
          </button>
        </footer>
      </header>
      <section className="modal__section">
        {urls.length === 0 ? <p>Loading Channels...</p> : <ChannelsBox />}
      </section>
    </Modal>
  );
};

export default Channels;
