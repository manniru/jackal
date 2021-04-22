import React, { useState } from "react";
import ReactPlayer from "react-player";
import {
  FaListUl,
  FaPlayCircle,
  FaCheck,
  FaTwitter,
  // FaShoppingCart,
} from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { Button, ListGroup, Modal } from "react-bootstrap";
// import Version from "./Version";

const Player = ({ url }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClearStorage = (e) => {
    e.preventDefault();
    localStorage.removeItem("listing");
    window.location.reload();
  };

  return (
    <>
      {url === null ? (
        <div className="banner min-vh-100 d-flex flex-column justify-content-center align-items-center text-white pt-5">
          <div className="banner__text mx-3 py-3 text-center">
            {/* <Version /> */}
            <h1 className="m-0 mb-2">
              <strong>Jackal</strong>
            </h1>
            <h3 className="mb-3">
              <em>
                Watch live TV channels from across the globe with your friends
                and family...
              </em>
            </h3>
            <Button
              variant="outline-light"
              className="mb-3"
              onClick={handleShow}
            >
              Need assistance?
            </Button>
            <nav className="site-footer d-flex justify-content-center align-items-center">
              <span className="d-flex align-items-center">
                Follow Jackal on
                <a
                  href="https://twitter.com/jackalislive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none d-flex align-items-center"
                >
                  <FaTwitter className="ml-2" />
                </a>
              </span>
            </nav>
            <Modal className="modal--faq" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>FAQs</Modal.Title>
              </Modal.Header>
              <Modal.Body className="p-0">
                <ListGroup variant="flush">
                  <ListGroup.Item className="text-left bg-warning">
                    Powered by{" "}
                    <a
                      href="https://nextjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-danger"
                    >
                      <strong>Next</strong>
                    </a>
                    ,{" "}
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-danger"
                    >
                      <strong>React</strong>
                    </a>
                    ,&nbsp;
                    <a
                      href="https://react-bootstrap.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-danger"
                    >
                      <strong>Bootstrap</strong>
                    </a>
                    . Hosted on&nbsp;
                    <a
                      href="https://surge.sh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-danger"
                    >
                      <strong>Surge</strong>
                    </a>
                    . Source code is available on{" "}
                    <a
                      href="https://github.com/tpkahlon/jackal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-danger"
                    >
                      <strong>GitHub</strong>
                    </a>
                    . Huge thanks to&nbsp;
                    <a
                      href="https://www.npmjs.com/package/country-code-lookup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-danger"
                    >
                      <strong>country-code-lookup</strong>
                    </a>
                    ,&nbsp;
                    <a
                      href="https://www.npmjs.com/package/react-copy-to-clipboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-danger"
                    >
                      <strong>react-copy-to-clipboard</strong>
                    </a>
                    ,&nbsp;
                    <a
                      href="https://www.npmjs.com/package/react-country-flag"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-danger"
                    >
                      <strong>react-country-flag</strong>
                    </a>
                    ,&nbsp;
                    <a
                      href="https://www.npmjs.com/package/react-device-detect"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-danger"
                    >
                      <strong>react-device-detect</strong>
                    </a>
                    ,&nbsp;
                    <a
                      href="https://www.npmjs.com/package/react-icons"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-danger"
                    >
                      <strong>react-icons</strong>
                    </a>
                    ,&nbsp;
                    <a
                      href="https://www.npmjs.com/package/react-player"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-danger"
                    >
                      <strong>react-player</strong>
                    </a>
                    &nbsp;libraries.
                  </ListGroup.Item>
                  <ListGroup.Item className="text-left">
                    The site performs best on iPhone devices. If you are using
                    an iPhone, every stream will open in a new tab. We recommend
                    you use Safari to view this site on iPhone.
                  </ListGroup.Item>
                  <ListGroup.Item className="text-left">
                    All live streams come from{" "}
                    <a
                      href="https://github.com/iptv-org/iptv/tree/master/channels"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-danger"
                    >
                      <strong>IPTV</strong>
                    </a>{" "}
                    project. In case you notice a broken/outdated stream, please
                    raise the issue{" "}
                    <a
                      href="https://github.com/iptv-org/iptv/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-danger"
                    >
                      <strong>here</strong>
                    </a>
                    .{" "}
                  </ListGroup.Item>
                  <ListGroup.Item className="text-left">
                    See available channels by pressing{" "}
                    <span className="mx-1">
                      <FaListUl />
                    </span>{" "}
                    button.
                  </ListGroup.Item>
                  <ListGroup.Item className="text-left">
                    Open a live stream by pasting a M3U8 link in the box and hit
                    the{" "}
                    <span className="mx-1">
                      <FaPlayCircle />
                    </span>{" "}
                    button.
                  </ListGroup.Item>
                  <ListGroup.Item className="text-left">
                    View live stream in theatre mode by pressing{" "}
                    <span className="mx-1">
                      <BsArrowsFullscreen />
                    </span>{" "}
                    button.
                  </ListGroup.Item>
                  <ListGroup.Item className="text-left">
                    <em className="d-block">
                      We use localStorage API to store data received from IPTV,
                      in your browser. If you want to remove the local data,
                      please click "Refresh" button below. This step is done to
                      make sure site loads faster on your browser.
                    </em>
                  </ListGroup.Item>
                  <ListGroup.Item className="text-left">
                    <small className="d-block mb-2">
                      In status column, orange check-mark (
                      <FaCheck style={{ fill: "orange" }} />) means stream comes
                      from a server that uses HTTP protocol and green check-mark
                      (
                      <FaCheck style={{ fill: "green" }} />) means stream uses
                      HTTPS protocol.
                    </small>
                    <span className="text-danger">
                      <strong>Note:</strong> For desktop/laptop users, make sure
                      you load site with http protocol instead of https protocol
                      to view streams. For example, under Vietnam, channel no. 1
                      (ANTV) stream will work if you load the page{" "}
                      <a
                        href="http://jackal.surge.sh"
                        className="text-decoration-none text-danger"
                      >
                        <strong>http://jackal.surge.sh</strong>
                      </a>{" "}
                      rather than <strong>https://jackal.surge.sh</strong>.
                    </span>
                    <span className="mt-2 d-block text-danger">
                      If a stream does not load, please copy its URL and test it{" "}
                      <a
                        href="https://hls-js.netlify.app/demo/"
                        className="text-decoration-none text-danger"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>here</strong>
                      </a>
                      . If it does not load, it can likely work on iPad/iPhone
                      devices but may not work on desktop/laptop. In such cases,
                      you may use VLC.
                    </span>
                    <span className="mt-2 d-block text-danger">
                      <strong>Note:</strong> For example, under Vietnam, channel
                      no. 4 (Bến Tre) stream does not work on desktop/laptop
                      devices but it works on iPhone/iOS devices or VLC.
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="text-left">
                    If you have a Chromecast, cast any stream to your TV by
                    using Google Chrome browser from your PC/Laptop. Right click
                    on the stream and click Cast.
                  </ListGroup.Item>
                  <ListGroup.Item className="text-left">
                    <small className="d-block">
                      This application endorses general content only. If you
                      notice any unwanted stream, please report the stream
                      <a
                        href="https://github.com/tpkahlon/jackal/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-danger"
                      >
                        <strong>&nbsp;here</strong>
                      </a>
                      . Such stream will be taken down immediately. If you
                      notice any bugs, you can report them using the same
                      provided link.
                    </small>
                  </ListGroup.Item>
                </ListGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="mr-2"
                  variant="success"
                  onClick={handleClearStorage}
                >
                  Refresh
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      ) : (
        <ReactPlayer className="app" playing controls url={url} />
      )}
    </>
  );
};

export default Player;
