import React, { useContext } from "react";
import ReactPlayer from "react-player";
import MenuContext from "../context/MenuContext";
import AboutContext from "../context/AboutContext";
import { successNotification, errorNotification } from "../common/notification";
import About from "../modals/About";
import Toggle from "../components/Toggle";
import Links from "../content/Links";
import Intro from "../content/Intro";

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
      "This live stream cannot work in the browser. Please read FAQs section for more information."
    );
  const changeTV = (e, f, tv, decision) => {
    if (decision && (e.type === "error" || (e === "hlsError" && f.fatal))) {
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
        url: null,
        keyword: "",
        isPlaying: false,
      });
      localStorage.setItem("listing", JSON.stringify(revisedListing));
      notifyWarn();
    } else {
      notifyOkay();
      setChannel({
        ...channel,
        isPlaying: true,
      });
    }
  };
  const banTV = (e, f, tv) => changeTV(e, f, tv, true);
  return (
    <>
      <main role="main" className="main">
        {url === null ? (
          <Intro />
        ) : (
          <ReactPlayer
            playing
            controls
            url={url}
            onError={(e, f) => banTV(e, f, url)}
            height="inherit"
            width="auto"
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
