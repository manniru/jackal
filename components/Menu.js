import React, { useState, useContext } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import MenuContext from "../context/MenuContext";
import ChannelsContext from "../context/ChannelsContext";
import NavigationContext from "../context/NavigationContext";
import { copyToClipboard, isValidUrl } from "../common";
import { darkNotification } from "../common/notification";
import Channels from "../modals/Channels";
import Navigation from "./Navigation";

const Menu = () => {
  const { channel, setChannel, showList, setShowList } =
    useContext(MenuContext);
  const [link, setLink] = useState(false);
  const { keyword } = channel;
  const [isEmpty, setIsEmpty] = useState(true);
  const notify = (url, title, country) => {
    copyToClipboard(url);
    darkNotification(
      `You are watching ${title} from ${country}. We copied the channel link for you.`
    );
  };
  const handleRandom = (e) => {
    e.preventDefault();
    const { urls } = channel;
    const randomCountry = urls[Math.floor(Math.random() * urls.length)];
    const { content } = randomCountry;
    const randomChannel = content[Math.floor(Math.random() * content.length)];
    const { url, title, keyword, country } = randomChannel;
    if (isBrowser) {
      setChannel({
        ...channel,
        url,
        keyword,
        isPlaying: true,
      });
      notify(url, title, country);
    }
    if (isMobile) {
      window.open(url, "_blank");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidUrl(keyword)) {
      darkNotification(`Please enter a valid stream link.`);
      return;
    }
    if (isBrowser) {
      setChannel({
        ...channel,
        url: keyword,
        keyword: "",
        isPlaying: true,
      });
    }
    if (isMobile) {
      window.open(keyword, "_blank");
    }
  };
  const handleLink = (e) => {
    e.preventDefault();
    setLink(!link);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setChannel({ ...channel, [name]: value });
    if (value && value.trim() !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };
  return (
    <>
      <NavigationContext.Provider
        value={{
          link,
          isEmpty,
          handleRandom,
          handleSubmit,
          handleLink,
          handleChange,
        }}
      >
        <Navigation />
      </NavigationContext.Provider>
      <ChannelsContext.Provider
        value={{
          showList,
          setShowList,
        }}
      >
        <Channels />
      </ChannelsContext.Provider>
    </>
  );
};

export default Menu;
