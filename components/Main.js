import React, { useState, useContext } from "react";
import ReactPlayer from "react-player";
import { FaTwitter } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import MenuContext from "../context/MenuContext";
import AboutContext from "../context/AboutContext";
import About from "../modals/About";

const Main = () => {
  const { channel, setChannel } = useContext(MenuContext);
  const [show, setShow] = useState(false);
  const { url, urls } = channel;
  const handleShow = () => setShow(true);
  const notifyOkay = () =>
    toast.success(
      "This live stream seems healthy. It will start playing in few seconds."
    );
  const notifyWarn = () =>
    toast.error(
      "This live stream is either broken or outdated. We are so sorry for this."
    );
  const changeTV = (e, tv, decision) => {
    if (decision && e.type === "error") {
      const newListing = [...urls];
      const foundCountry = newListing.filter((i) => {
        return i.content.find((j) => j.url === tv);
      });
      const revisedCountry = foundCountry.map((i) => {
        const newContent = i.content.map((j) => {
          if (j.url === tv) {
            return {
              ...j,
              ban: decision,
            };
          }
          return j;
        });
        return {
          ...i,
          content: newContent,
        };
      });
      const revisedListing = newListing.map((i) => {
        if (i.id === revisedCountry[0].id) {
          return revisedCountry[0];
        }
        return i;
      });
      setChannel({
        ...channel,
        urls: revisedListing,
      });
      localStorage.setItem("listing", JSON.stringify(revisedListing));
      notifyWarn();
    } else {
      notifyOkay();
    }
  };
  const banTV = (e, tv) => changeTV(e, tv, true);
  return (
    <>
      {url === null ? (
        <div className="banner position-relative min-vh-100 d-flex flex-column justify-content-center align-items-center text-white pt-5">
          <div className="banner__text mx-3 py-3 text-center position-relative mx-auto">
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
            <nav className="footer position-fixed d-flex justify-content-center align-items-center">
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
            <AboutContext.Provider
              value={{
                show,
                setShow,
              }}
            >
              <About />
            </AboutContext.Provider>
          </div>
        </div>
      ) : (
        <ReactPlayer
          className="app"
          playing
          controls
          url={url}
          onError={(e) => banTV(e, url)}
          width="inherit"
          height="inherit"
        />
      )}
      <ToastContainer />
    </>
  );
};

export default Main;
