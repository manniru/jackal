import React, { useState, useEffect } from "react";
import MenuContext from "../context/MenuContext";
import { useDarkMode } from "../common/useDarkMode";
import Menu from "../components/Menu";
import Main from "../components/Main";

const App = ({ listing }) => {
  const [theme, toggleTheme] = useDarkMode();
  const [showFaq, setShowFaq] = useState(false);
  const [showList, setShowList] = useState(false);
  const [channel, setChannel] = useState({
    url: null,
    urls: listing,
    keyword: "",
  });
  const handleShowFaq = (e) => {
    e.preventDefault();
    setShowFaq(true);
  };
  const handleShowList = (e) => {
    e.preventDefault();
    setShowList(true);
  };
  if (process.browser && theme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
  if (process.browser && theme === "light") {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
  useEffect(() => {
    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);
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
        }}
      >
        <Menu />
        <Main />
      </MenuContext.Provider>
    </>
  );
};

export default App;
