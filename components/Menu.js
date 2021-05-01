import React, { useState, useContext } from "react";
import { isBrowser, isMobile } from "react-device-detect";
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
