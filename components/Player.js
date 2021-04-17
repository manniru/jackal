import React from "react";
import ReactPlayer from "react-player";
import { FaListUl } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { Button } from "react-bootstrap";

const Player = ({ url }) => {
  const handleClearStorage = (e) => {
    e.preventDefault();
    localStorage.removeItem("listing");
    window.location.reload();
  };
  return (
    <>
      {url === null ? (
        <div className="banner min-vh-100 vw-100 d-flex flex-column justify-content-center align-items-center text-white">
          <div className="banner__text mx-3 py-3 text-center">
            <h1 className="m-0 mb-2">
              <strong>Jackal</strong>
            </h1>
            <h3 className="mb-3">
              <em>
                Watch live TV channels from across the globe with your friends
                and family...
              </em>
            </h3>
            <p>
              Watch live streams via M3U8 URL or see available channels by
              pressing{" "}
              <span className="mx-1">
                <FaListUl />
              </span>{" "}
              button
            </p>
            <p>
              Watch TV channel in theatre mode by pressing{" "}
              <span className="mx-1">
                <BsArrowsFullscreen />
              </span>{" "}
              button
            </p>
            <p>
              If you are using a phone where M3U8 is not supported, stream will
              open in a new tab.
            </p>
            <p>
              This application endorses general content only. The database comes
              from{" "}
              <a
                href="https://github.com/iptv-org/iptv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>IPTV</strong>
              </a>
              's repository. If a user notice any unwanted stream listed here,
              please report the stream
              <a
                href="https://github.com/tpkahlon/jackal/pulls"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>&nbsp;here</strong>
              </a>
              . Such stream will be taken down immediately. If you notice any
              bugs, you can report them using the same link.
            </p>
            <p>
              We use localStorage API to store data received from IPTV and store
              it in your browser to improve speed. If you want to get a fresh
              stream of data from IPTV, please click "Refresh" button below.
            </p>
            <Button variant="outline-light" onClick={handleClearStorage}>
              Refresh
            </Button>
          </div>
        </div>
      ) : (
        <ReactPlayer className="app" playing controls url={url} />
      )}
    </>
  );
};

export default Player;
