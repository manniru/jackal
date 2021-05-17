import React, { useContext, useEffect, useState } from "react";
import { FaList, FaLink, FaPlay } from "react-icons/fa";
import { BsShuffle } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { SiAirplayaudio } from "react-icons/si";
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
  return (
    <nav
      className={`nav ${isPlaying && label !== null ? "nav--bg" : ""}`}
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
          </div>
          <Cart channel={channel} setChannel={setChannel} />
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
