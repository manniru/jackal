import React, { useState } from "react";
import { parseCookies, destroyCookie } from "nookies";
import MenuContext from "../context/MenuContext";
import { useDarkMode } from "../common/useDarkMode";
import Menu from "../components/Menu";
import Main from "../components/Main";

const App = ({ listing }) => {
  let localListing = [];
  const { hasData } = parseCookies();
  if (process.browser) {
    if (hasData && localStorage.getItem("listing")) {
      localListing = JSON.parse(localStorage.getItem("listing"));
    } else {
      localStorage.setItem("listing", JSON.stringify(listing));
      localListing = JSON.parse(localStorage.getItem("listing"));
    }
  }
  const [theme, toggleTheme] = useDarkMode();
  const [showFaq, setShowFaq] = useState(false);
  const [showList, setShowList] = useState(false);
  const [channel, setChannel] = useState({
    url: null,
    urls: localListing,
    keyword: "",
  });
  const handleShowFaq = () => setShowFaq(true);
  const handleShowList = () => setShowList(true);
  const handleClearStorage = (e) => {
    e.preventDefault();
    localStorage.removeItem("listing");
    destroyCookie(null, "hasData");
    window.location.reload();
  };
  if (process.browser && theme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
  if (process.browser && theme === "light") {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
  return (
    <>
      <MenuContext.Provider
        value={{
          channel,
          theme,
          toggleTheme,
          showFaq,
          showList,
          setChannel,
          setShowFaq,
          setShowList,
          handleShowFaq,
          handleShowList,
          handleClearStorage,
        }}
      >
        <Menu />
        <Main />
      </MenuContext.Provider>
    </>
  );
};

export default App;
