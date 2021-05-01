import React, { useState, useEffect } from "react";
import { destroyCookie } from "nookies";
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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClear = () => {
    localStorage.removeItem("playlist");
    destroyCookie(null, "goodCall");
    setCart(false);
  };
  return (
    <>
      <button
        className="nav__btn"
        onClick={handleShow}
        disabled={myCart}
        aria-label="My playlist"
      >
        Likes
      </button>
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
