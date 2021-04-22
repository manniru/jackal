import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import CartList from "./CartList";

const Cart = ({ channel, setChannel }) => {
  let playlist =
    typeof localStorage === "undefined"
      ? false
      : localStorage.getItem("playlist");
  const [cart, setCart] = useState(null);
  useEffect(() => {
    setCart(localStorage.getItem("playlist"));
  }, [playlist]);

  const myPlaylist = playlist ? (
    <CartList playlist={playlist} channel={channel} setChannel={setChannel} />
  ) : (
    "Your playlist is empty. Please add your favorite channels here by pressing Heart next to the channels."
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClear = () => {
    localStorage.removeItem("playlist");
    setCart(false);
    // window.location.reload();
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
      <Modal show={show} onHide={handleClose} className="modal--faq">
        <Modal.Header closeButton>
          <Modal.Title>My Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">{myPlaylist}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClear}>
            Clear
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
