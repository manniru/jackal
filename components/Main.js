import React, { useContext } from "react";
import ReactPlayer from "react-player";
import MenuContext from "../context/MenuContext";
import AboutContext from "../context/AboutContext";
import { successNotification, errorNotification } from "../common/notification";
import About from "../modals/About";
import Toggle from "../components/Toggle";
import Links from "../content/Links";

const Main = () => {
  const { channel, setChannel, showFaq, setShowFaq, theme, toggleTheme } =
    useContext(MenuContext);
  const { url, urls } = channel;
  const notifyOkay = () =>
    successNotification(
      "This live stream seems healthy. It will start playing in few seconds."
    );
  const notifyWarn = () =>
    errorNotification(
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
      <main role="main" className="main">
        {url === null ? (
          <div className="main__text">
            <h1 role="heading">Jackal</h1>
            <p>
              <em>Watch TV beyond boundaries...</em>
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
      <footer className="footer">
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Links />
      </footer>
    </>
  );
};

export default Main;
