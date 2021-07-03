import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import MyPlaylistContext from "../context/MyPlaylistContext";
import CartList from "./CartList";
import MyPlaylist from "../modals/MyPlaylist";

const Cart = () => {
  let playlist =
    typeof localStorage === "undefined"
      ? false
      : localStorage.getItem("playlist");
  const [cart, setCart] = useState(null);
  useEffect(() => {
    setCart(localStorage.getItem("playlist"));
  }, [playlist]);
  const playlistComponent = playlist ? (
    <CartList />
  ) : (
    <p className="empty-cart">
      Your playlist is empty. Please add your favorite channels here by pressing
      Heart next to the channels.
    </p>
  );
  const myCart = cart ? false : true;
  const [show, setShow] = useState(false);
  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const handleClear = (e) => {
    e.preventDefault();
    localStorage.removeItem("playlist");
    setCart(false);
  };
  return (
    <>
      <a
        href="#"
        className={`nav__btn ${myCart ? "nav__btn--hide" : ""}`}
        onClick={handleShow}
        aria-label="My playlist"
        title="My playlist"
      >
        <FaHeart />
      </a>
      <MyPlaylistContext.Provider
        value={{
          show,
          playlist,
          playlistComponent,
          handleClose,
          handleClear,
        }}
      >
        <MyPlaylist />
      </MyPlaylistContext.Provider>
    </>
  );
};

export default Cart;
