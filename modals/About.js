import React, { useContext } from "react";
import {
  FaHeart,
  FaListUl,
  FaPlayCircle,
  FaShoppingCart,
} from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { Button, ListGroup, Modal } from "react-bootstrap";
import MenuContext from "../context/MenuContext";
import AboutContext from "../context/AboutContext";

const About = () => {
  const { handleClearStorage } = useContext(MenuContext);
  const { show, setShow } = useContext(AboutContext);
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        className="bg-dark text-white rounded-0 d-flex justify-content-between align-items-center border-0 shadow-lg modal-header"
      >
        <Modal.Title>FAQs</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0 bg-dark border-top border-secondary">
        <ListGroup variant="flush">
          <ListGroup.Item className="bg-dark text-white text-left bg-warning">
            Powered by{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-warning"
            >
              <strong>Next</strong>
            </a>
            ,{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-warning"
            >
              <strong>React</strong>
            </a>
            ,&nbsp;
            <a
              href="https://react-bootstrap.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-warning"
            >
              <strong>Bootstrap</strong>
            </a>
            . Hosted on&nbsp;
            <a
              href="https://surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-warning"
            >
              <strong>Surge</strong>
            </a>
            . Source code is available on{" "}
            <a
              href="https://github.com/tpkahlon/jackal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-warning"
            >
              <strong>GitHub</strong>
            </a>
            . Huge thanks to&nbsp;
            <a
              href="https://www.npmjs.com/package/country-code-lookup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-warning"
            >
              <strong>country-code-lookup</strong>
            </a>
            ,&nbsp;
            <a
              href="https://www.npmjs.com/package/react-copy-to-clipboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-warning"
            >
              <strong>react-copy-to-clipboard</strong>
            </a>
            ,&nbsp;
            <a
              href="https://www.npmjs.com/package/react-country-flag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-warning"
            >
              <strong>react-country-flag</strong>
            </a>
            ,&nbsp;
            <a
              href="https://www.npmjs.com/package/react-device-detect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-warning"
            >
              <strong>react-device-detect</strong>
            </a>
            ,&nbsp;
            <a
              href="https://www.npmjs.com/package/react-icons"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-warning"
            >
              <strong>react-icons</strong>
            </a>
            ,&nbsp;
            <a
              href="https://www.npmjs.com/package/react-player"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-warning"
            >
              <strong>react-player</strong>
            </a>
            ,&nbsp;
            <a
              href="https://www.npmjs.com/package/react-toastify"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-warning"
            >
              <strong>react-toastify</strong>
            </a>
            &nbsp;libraries.
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white text-left">
            The site performs best on iPhone devices. If you are using an
            iPhone, every stream will open in a new tab. We recommend you use
            Safari to view this site on iPhone.
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white text-left">
            See available channels by pressing{" "}
            <span className="mx-1">
              <FaListUl />
            </span>{" "}
            button.
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white text-left">
            Open a live stream by pasting a M3U8 link in the box and hit the{" "}
            <span className="mx-1">
              <FaPlayCircle />
            </span>{" "}
            button.
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white text-left">
            View live stream in theatre mode by pressing{" "}
            <span className="mx-1">
              <BsArrowsFullscreen />
            </span>{" "}
            button.
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white text-left">
            Save your favorite channels on your device by pressing{" "}
            <span className="mx-1">
              <FaHeart />
            </span>{" "}
            button. View your liked channels by pressing{" "}
            <span className="mx-1">
              <FaShoppingCart />
            </span>{" "}
            button.
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white text-left">
            <em className="d-block">
              We use localStorage API to store data received from IPTV, in your
              browser. If you want to remove the local data, please click
              "Refresh" button below. This step is done to make sure site loads
              faster on your browser.
            </em>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white text-left">
            <small className="d-block mb-2">
              Inside ID column, orange box means stream comes from a server that
              uses HTTP protocol and green box means stream uses HTTPS protocol.
            </small>
            <span className="text-warning">
              <strong>Note:</strong> For desktop/laptop users, make sure you
              load site with http protocol instead of https protocol to view
              streams. For example, under Vietnam, channel no. 1 (ANTV) stream
              will work if you load the page{" "}
              <a
                href="http://jackal.surge.sh"
                className="text-decoration-none text-warning"
              >
                <strong>http://jackal.surge.sh</strong>
              </a>{" "}
              rather than <strong>https://jackal.surge.sh</strong>.
            </span>
            <span className="mt-2 d-block text-warning">
              If a stream does not load, please copy its URL and test it{" "}
              <a
                href="https://hls-js.netlify.app/demo/"
                className="text-decoration-none text-warning"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>here</strong>
              </a>
              . If it does not load, it can likely work on iPad/iPhone devices
              but may not work on desktop/laptop. In such cases, you may use
              VLC.
            </span>
            <span className="mt-2 d-block text-warning">
              <strong>Note:</strong> For example, under Vietnam, channel no. 4
              (Bến Tre) stream does not work on desktop/laptop devices but it
              works on iPhone/iOS devices or VLC.
            </span>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white text-left">
            If you have a Chromecast, cast any stream to your TV by using Google
            Chrome browser from your PC/Laptop. Right click on the stream and
            click Cast.
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white text-left">
            <small className="d-block">
              This application endorses general content only. If you notice any
              unwanted stream, please report the stream
              <a
                href="https://github.com/tpkahlon/jackal/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-warning"
              >
                <strong>&nbsp;here</strong>
              </a>
              . Such stream will be taken down immediately. If you notice any
              bugs, you can report them using the same provided link. No video
              files are stored in this repository. The repository simply
              contains user-submitted links to publicly available video stream
              URLs, which to the best of our knowledge have been intentionally
              made publicly by the copyright holders. If any links in these
              playlists infringe on your rights as a copyright holder, they may
              be removed by sending a pull request or opening an issue. However,
              note that we have no control over the destination of the link, and
              just removing the link from the playlist will not remove its
              contents from the web. Note that linking does not directly
              infringe copyright because no copy is made on the site providing
              the link, and thus this is not a valid reason to send a DMCA
              notice to GitHub. To remove this content from the web, you should
              contact the web host that's actually hosting the content (not
              GitHub, nor the maintainers of this repository).
            </small>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer className="rounded-0 bg-dark border-top border-secondary">
        <Button className="mr-2" variant="success" onClick={handleClearStorage}>
          Refresh
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default About;
