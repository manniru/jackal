import React, { useContext } from "react";
import Modal from "react-modal";
import { FiRefreshCw } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import MenuContext from "../context/MenuContext";
import AboutContext from "../context/AboutContext";
import AboutPage from "../content/AboutPage";

Modal.setAppElement("#about");

const About = () => {
  const { handleClearStorage } = useContext(MenuContext);
  const { showFaq, setShowFaq } = useContext(AboutContext);
  const handleClose = (e) => {
    e.preventDefault();
    setShowFaq(false);
  };
  return (
    <Modal
      isOpen={showFaq}
      onRequestClose={handleClose}
      className="modal"
      overlayClassName="overlay"
    >
      <header className="modal__header">
        <aside className="modal__aside">FAQs</aside>
        <footer className="modal__footer">
          <a href="#" onClick={handleClearStorage} aria-label="Reset">
            <FiRefreshCw />
          </a>
          <a href="#" onClick={handleClose} aria-label="Exit">
            <AiOutlineCloseCircle />
          </a>
        </footer>
      </header>
      <section className="modal__section">
        <AboutPage />
      </section>
    </Modal>
  );
};

export default About;
