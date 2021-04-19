import React from "react";
import ReactPlayer from "react-player";
import { FaListUl, FaPlayCircle, FaCheck } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { Button, ListGroup } from "react-bootstrap";
import Version from "./Version";

const Player = ({ url }) => {
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
            <Version />
            <h1 className="m-0 mb-2">
              <strong>Jackal</strong>
            </h1>
            <h3 className="mb-3">
              <em>
                Watch live TV channels from across the globe with your friends
                and family...
              </em>
            </h3>
            <ListGroup variant="flush" className="mb-3">
              <ListGroup.Item className="text-left" variant="dark">
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
              <ListGroup.Item className="text-left" variant="dark">
                <small className="d-block mb-2">
                  In status column, orange check-mark (
                  <FaCheck style={{ fill: "orange" }} />) means stream comes
                  from a server that uses HTTP protocol and green check-mark (
                  <FaCheck style={{ fill: "green" }} />) means stream uses HTTPS
                  protocol.
                </small>
                <span className="text-danger">
                  If a TV channel has orange check-mark besides it, please
                  reload this page with http protocol instead of https protocol
                  to view the TV channel. For example, under Vietnam, channel
                  no.1 (ANTV) will work if you load the page{" "}
                  <a
                    href="http://jackal.surge.sh"
                    className="text-decoration-none text-danger"
                  >
                    <strong>http://jackal.surge.sh</strong>
                  </a>{" "}
                  rather than <strong>https://jackal.surge.sh</strong>
                </span>
                .
              </ListGroup.Item>
              <ListGroup.Item className="text-left" variant="dark">
                See available channels by pressing{" "}
                <span className="mx-1">
                  <FaListUl />
                </span>{" "}
                button.
              </ListGroup.Item>
              <ListGroup.Item className="text-left" variant="dark">
                Open a live stream by pasting a M3U8 link in the box and hit the{" "}
                <span className="mx-1">
                  <FaPlayCircle />
                </span>{" "}
                button.
              </ListGroup.Item>
              <ListGroup.Item className="text-left" variant="dark">
                View live stream in theatre mode by pressing{" "}
                <span className="mx-1">
                  <BsArrowsFullscreen />
                </span>{" "}
                button.
              </ListGroup.Item>
              <ListGroup.Item className="text-left" variant="dark">
                If you have a Chromsecast, cast any tv channel to your TV by
                using Google Chrome browser from your PC/Laptop. Right click on
                the stream and click Cast.
              </ListGroup.Item>
              <ListGroup.Item className="text-left" variant="dark">
                If you are using a phone where M3U8 is not supported, stream
                will open in a new tab. If it tries to download a file, it
                means, your device does not support M3U8 format.
              </ListGroup.Item>
              <ListGroup.Item className="text-left" variant="dark">
                <em className="d-block">
                  We use localStorage API to store data received from IPTV, in
                  your browser. If you want to remove the local data, please
                  click "Refresh" button below.
                </em>
                <Button
                  className="mt-2 mb-2"
                  variant="secondary"
                  onClick={handleClearStorage}
                >
                  Refresh
                </Button>
              </ListGroup.Item>
              <ListGroup.Item className="text-left" variant="dark">
                <small className="d-block">
                  This application endorses general content only. If you notice
                  any unwanted stream, please report the stream
                  <a
                    href="https://github.com/tpkahlon/jackal/pulls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-danger"
                  >
                    <strong>&nbsp;here</strong>
                  </a>
                  . Such stream will be taken down immediately. If you notice
                  any bugs, you can report them using the same provided link.
                </small>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      ) : (
        <ReactPlayer className="app" playing controls url={url} />
      )}
    </>
  );
};

export default Player;
