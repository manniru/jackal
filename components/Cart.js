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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          className="bg-dark text-white rounded-0 d-flex justify-content-between align-items-center border-0"
        >
          <Modal.Title>My Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0 bg-dark border-top border-secondary">
          {myPlaylist}
        </Modal.Body>
        <Modal.Footer className="rounded-0 bg-dark border-top border-secondary">
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
