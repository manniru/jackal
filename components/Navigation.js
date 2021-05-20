import React, { useContext, useEffect, useState } from "react";
import { isBrowser } from "react-device-detect";
import { FaList, FaLink, FaPlay } from "react-icons/fa";
import { BsShuffle } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { SiAirplayaudio } from "react-icons/si";
import { MdHttp } from "react-icons/md";
import MenuContext from "../context/MenuContext";
import NavigationContext from "../context/NavigationContext";
import Cart from "./Cart";

const Navigation = () => {
  const { channel, setChannel, handleShowList, handleShowFaq } =
    useContext(MenuContext);
  const { urls, url, keyword, isPlaying } = channel;
  const [label, setLabel] = useState(null);
  useEffect(() => {
    if (url !== null) {
      urls.forEach((c) => {
        const neededChannel = c.content.filter((i) => i.url === url);
        if (neededChannel.length !== 0) {
          setLabel(neededChannel[0]);
        }
      });
    }
  }, [url]);
  const {
    isEmpty,
    link,
    handleRandom,
    handleSubmit,
    handleLink,
    handleChange,
  } = useContext(NavigationContext);
  const isHTTP =
    process.browser && isBrowser && window.location.href.indexOf("https") > -1;
  return (
    <nav
      className={`nav ${isPlaying && label !== null ? "nav--two" : ""}`}
      role="navigation"
    >
      <div
        className={`nav__row ${
          isPlaying && label !== null ? "nav__row--two" : ""
        }`}
      >
        {isPlaying && label !== null && (
          <div className="nav__label">
            <SiAirplayaudio />
            {label.title} - {label.country}
          </div>
        )}
        <div>
          <div className="nav__content">
            {isHTTP && (
              <a
                href="http://jackal.surge.sh"
                className="nav__btn"
                onClick={handleLink}
                aria-label="Open HTTP version of this website"
                title="Open HTTP version of this website"
              >
                <MdHttp />
              </a>
            )}

            <a
              href="#"
              className="nav__btn"
              onClick={handleLink}
              aria-label="Enter video source"
              title="Enter video source"
            >
              <FaLink />
            </a>
            <a
              href="#"
              className="nav__btn"
              onClick={handleShowFaq}
              aria-label="Get help"
              title="Get help"
            >
              <FiHelpCircle />
            </a>
            <a
              href="#"
              className="nav__btn"
              onClick={handleShowList}
              aria-label="Watch channels"
              title="Watch channels"
            >
              <FaList />
            </a>
            <a
              href="#"
              className="nav__btn"
              onClick={handleRandom}
              aria-label="Watch random channel"
              title="Watch random channel"
            >
              <BsShuffle />
            </a>
            <Cart channel={channel} setChannel={setChannel} />
          </div>
          <form className="nav__form" onSubmit={handleSubmit}>
            {link && (
              <div className="nav__form__items">
                <input
                  className="nav__form__input"
                  type="url"
                  name="keyword"
                  value={keyword}
                  onChange={handleChange}
                  placeholder="Video source..."
                />
                <a
                  href="#"
                  className={`nav__form__btn ${
                    isEmpty ? "nav__form__btn--off" : ""
                  }`}
                  aria-label="Play"
                  onClick={handleSubmit}
                >
                  <FaPlay />
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
