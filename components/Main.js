import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import MenuContext from "../context/MenuContext";
import AboutContext from "../context/AboutContext";
import About from "../modals/About";

const Main = () => {
  const { channel, setChannel, showFaq, setShowFaq } = useContext(MenuContext);
  const { url, urls } = channel;
  const notifyOkay = () =>
    toast.success(
      "This live stream seems healthy. It will start playing in few seconds.",
      {
        autoClose: 2000,
        pauseOnHover: false,
      }
    );
  const notifyWarn = () =>
    toast.error(
      "This live stream is either broken or outdated. We are so sorry for this.",
      {
        autoClose: 2000,
        pauseOnHover: false,
      }
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
    <main role="main" className="main">
      {url === null ? (
        <div className="main__text">
          <h1 role="heading">Jackal</h1>
          <p>
            <em>
              Watch live TV channels from across the globe with your friends and
              family...
            </em>
          </p>
          <p>
            Follow Jackal on
            <a
              href="https://twitter.com/jackalislive"
              target="_blank"
              rel="noopener noreferrer"
              className="main__a"
              aria-label="Follow our Twitter account for latest updates"
            >
              Twitter
            </a>
          </p>
        </div>
      ) : (
        <ReactPlayer
          playing
          controls
          url={url}
          onError={(e) => banTV(e, url)}
          width="inherit"
          height="inherit"
        />
      )}
      <AboutContext.Provider
        value={{
          showFaq,
          setShowFaq,
        }}
      >
        <About />
      </AboutContext.Provider>
    </main>
  );
};

export default Main;
