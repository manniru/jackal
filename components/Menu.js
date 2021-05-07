import React, { useState, useContext } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import MenuContext from "../context/MenuContext";
import ChannelsContext from "../context/ChannelsContext";
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
  const [randomChannel, setRandomChannel] = useState(null);
  const notify = (title, country) =>
    toast.dark(
      `Playing ${title} from ${country}. We copied channel link for you in case you want to keep a note of it!`,
      {
        autoClose: 3000,
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
    if (isBrowser) {
      setChannel({
        ...channel,
        url,
        keyword,
      });
      setRandomChannel(url);
      notify(title, country);
    }
    if (isMobile) {
      setChannel({
        ...channel,
        keyword: "",
      });
      window.open(keyword, "_blank");
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
          <button
            className="nav__btn"
            onClick={handleLink}
            aria-label="Paste URL"
          >
            Test
          </button>
          <button
            className="nav__btn"
            onClick={handleShowFaq}
            aria-label="Get help"
          >
            Help
          </button>
          <button
            className="nav__btn"
            onClick={handleShowList}
            aria-label="See channels"
          >
            List
          </button>
          {isBrowser && (
            <CopyToClipboard
              text={randomChannel}
              aria-label="Copy random channel URL"
              onCopy={() => setRandomChannel(randomChannel)}
            >
              <button
                className="nav__btn"
                onClick={handleRandom}
                aria-label="See random channel"
              >
                Random
              </button>
            </CopyToClipboard>
          )}
          {isMobile && (
            <button
              className="nav__btn"
              onClick={handleRandom}
              aria-label="See random channel"
            >
              Random
            </button>
          )}
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
                <button
                  className="nav__form__btn"
                  type="submit"
                  aria-label="Play"
                  disabled={isEmpty ? "disabled" : ""}
                >
                  Play
                </button>
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
