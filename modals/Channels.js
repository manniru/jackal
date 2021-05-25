import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import { FiRefreshCw } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import MenuContext from "../context/MenuContext";
import ChannelsContext from "../context/ChannelsContext";
import ChannelsBox from "../components/ChannelsBox";

const Channels = () => {
  const { channel, setChannel, handleClearStorage } = useContext(MenuContext);
  const { showList, setShowList } = useContext(ChannelsContext);
  const [searchText, setSearchText] = useState("");
  const [originalState] = useState(channel);
  const { urls } = channel;
  const handleClose = () => setShowList(false);
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };
  useEffect(() => {
    if (searchText.trim() !== "") {
      const newChannel = { ...originalState };
      const { urls } = newChannel;
      const newUrls = urls
        .map((i) => {
          const newContent = i.content.filter((j) =>
            j.title.toLowerCase().includes(searchText)
          );
          return {
            ...i,
            content: newContent,
          };
        })
        .filter((i) => i.content.length !== 0);
      const newChannels = {
        ...channels,
        urls: newUrls,
      };
      setChannel(newChannels);
    } else {
      setChannel(originalState);
    }
  }, [searchText]);
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
      <section className="modal__search">
        <input
          placeholder="Search a channel..."
          type="text"
          value={searchText}
          className="modal__input"
          onChange={handleChange}
        />
      </section>
      <section className="modal__section">
        {urls.length === 0 && searchText.trim() !== "" ? (
          <p className="empty-list">
            No matching channels found, please try again...
          </p>
        ) : (
          <ChannelsBox />
        )}
      </section>
    </Modal>
  );
};

export default Channels;
