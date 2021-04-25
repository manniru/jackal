import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
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
    <p className="p-3 text-white">
      Your playlist is empty. Please add your favorite channels here by pressing
      Heart next to the channels.
    </p>
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClear = () => {
    localStorage.removeItem("playlist");
    setCart(false);
  };
  return (
    <>
      <Button
        variant="outline-light"
        onClick={handleShow}
        disabled={cart ? "" : "disabled"}
      >
        <FaShoppingCart />
      </Button>
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
