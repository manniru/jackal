import React, { useState, useContext } from "react";
import { FaList, FaLink, FaPlay } from "react-icons/fa";
import { BsShuffle } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { isBrowser, isMobile } from "react-device-detect";
import { toast } from "react-toastify";
import MenuContext from "../context/MenuContext";
import ChannelsContext from "../context/ChannelsContext";
import { copyToClipboard } from "../common";
import Cart from "./Cart";
import Channels from "../modals/Channels";

const Menu = () => {
  const {
    channel,
    setChannel,
    showList,
    setShowList,
    handleShowList,
    handleShowFaq,
  } = useContext(MenuContext);
  const [link, setLink] = useState(false);
  const { keyword } = channel;
  const [isEmpty, setIsEmpty] = useState(true);
  const notify = (url, title, country) => {
    copyToClipboard(url);
    toast.dark(
      `Playing ${title} from ${country}. We copied channel link for you in case you want to keep a note of it!`,
      {
        autoClose: 3000,
        pauseOnHover: false,
        position: "top-center",
      }
    );
  };

  const notifyBadLink = () =>
    toast.error(
      `This live stream is broken or outdated. Please try another channel.`,
      {
        autoClose: 2000,
        pauseOnHover: false,
        position: "top-center",
      }
    );
  const handleRandom = (e) => {
    e.preventDefault();
    const { urls } = channel;
    const randomCountry = urls[Math.floor(Math.random() * urls.length)];
    const { content } = randomCountry;
    const randomChannel = content[Math.floor(Math.random() * content.length)];
    const { url, title, keyword, country } = randomChannel;
    notify(url, title, country);
    if (!url.includes(".m3u8")) {
      notifyBadLink();
      return;
    }
    if (isBrowser) {
      setChannel({
        ...channel,
        url,
        keyword,
      });
    }
    if (isMobile) {
      window.open(url, "_blank");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isBrowser) {
      setChannel({
        ...channel,
        url: keyword,
        keyword: "",
      });
    }
    if (isMobile) {
      setChannel({
        ...channel,
        keyword: "",
      });
      window.open(keyword, "_blank");
    }
  };
  const handleLink = () => setLink(!link);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setChannel({ ...channel, [name]: value });
    if (value && value.trim() !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };
  return (
    <>
      <nav className="nav" role="navigation">
        <div className="nav__row">
          <a
            href="#"
            className="nav__btn"
            onClick={handleLink}
            aria-label="Paste URL"
          >
            <FaLink />
          </a>
          <a
            href="#"
            className="nav__btn"
            onClick={handleShowFaq}
            aria-label="Get help"
          >
            <FiHelpCircle />
          </a>
          <a
            href="#"
            className="nav__btn"
            onClick={handleShowList}
            aria-label="See channels"
          >
            <FaList />
          </a>
          <a
            href="#"
            className="nav__btn"
            onClick={handleRandom}
            aria-label="See random channel"
          >
            <BsShuffle />
          </a>
          <Cart channel={channel} setChannel={setChannel} />
        </div>
        <form className="nav__form" onSubmit={handleSubmit}>
          {link && (
            <>
              <input
                className="nav__form__input"
                type="url"
                name="keyword"
                value={keyword}
                onChange={handleChange}
                placeholder="M3U8 URL..."
              />
              {link && (
                <a
                  href="#"
                  className={`nav__form__btn ${
                    isEmpty ? "nav__form__btn--off" : ""
                  }`}
                  type="submit"
                  aria-label="Play"
                >
                  <FaPlay />
                </a>
              )}
            </>
          )}
        </form>
      </nav>
      <ChannelsContext.Provider
        value={{
          showList,
          setShowList,
        }}
      >
        <Channels />
      </ChannelsContext.Provider>
    </>
  );
};

export default Menu;
