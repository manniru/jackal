import React, { useContext } from "react";
import { FaList, FaLink, FaPlay } from "react-icons/fa";
import { BsShuffle } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import MenuContext from "../context/MenuContext";
import NavigationContext from "../context/NavigationContext";
import Cart from "./Cart";

const Navigation = () => {
  const { channel, setChannel, handleShowList, handleShowFaq } =
    useContext(MenuContext);
  const { keyword } = channel;
  const {
    isEmpty,
    link,
    handleRandom,
    handleSubmit,
    handleLink,
    handleChange,
  } = useContext(NavigationContext);
  return (
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
          </>
        )}
      </form>
    </nav>
  );
};

export default Navigation;
