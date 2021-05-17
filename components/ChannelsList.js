import React, { useContext } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import { FaPlay, FaRegCopy, FaHeart } from "react-icons/fa";
import ChannelsListContext from "../context/ChannelsListContext";
import MenuContext from "../context/MenuContext";
import { copyToClipboard } from "../common";
import { errorNotification, darkNotification } from "../common/notification";

const ChannelsList = () => {
  const { item } = useContext(ChannelsListContext);
  const { channel, setChannel } = useContext(MenuContext);
  const notifyCopy = (url) => {
    copyToClipboard(url);
    darkNotification("URL copied successfully!");
  };
  const notifyWarn = () =>
    errorNotification("This channel is already available in your playlist!");
  const notifyAdd = () =>
    darkNotification("Channel added successfully to your playlist!");
  const handlePlay = (currentUrl) => {
    if (isBrowser) {
      setChannel({
        ...channel,
        url: currentUrl,
        keyword: "",
        isPlaying: true,
      });
    }
    if (isMobile) {
      window.open(currentUrl, "_blank");
    }
  };
  const handleStoreChannel = (item) => {
    const getPlaylist = localStorage.getItem("playlist");
    const checkDuplicates = (playList) =>
      playList.find((channel) => channel.url === item.url);
    if (getPlaylist) {
      const playList = JSON.parse(getPlaylist);
      if (checkDuplicates(playList)) {
        notifyWarn();
      } else {
        const revisedPlaylist = playList.concat(item);
        const sortedPlaylist = revisedPlaylist.sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        );
        localStorage.setItem("playlist", JSON.stringify(sortedPlaylist));
        notifyAdd();
      }
    } else {
      const newPlaylist = [];
      const revisedPlaylist = newPlaylist.concat(item);
      localStorage.setItem("playlist", JSON.stringify(revisedPlaylist));
      notifyAdd();
    }
  };
  return (
    <table className="table">
      <thead className="thead">
        <tr>
          <th>Channel</th>
          <th>Controls</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {item.map((j, id) => {
          const { title, url, ban } = j;
          const isHTTP = url && url.includes("http://") ? true : false;
          return (
            <tr key={id} className={ban ? "danger" : ""}>
              <td>
                <div className="title" title={title}>
                  <span>{++id}.</span>{" "}
                  <span className={isHTTP ? "red" : "green"}>{title}</span>
                </div>
              </td>
              <td>
                <div className="controls">
                  <a href="#" onClick={() => handlePlay(url)} aria-label="Play">
                    <FaPlay />
                  </a>
                  <a href="#" onClick={() => notifyCopy(url)}>
                    <FaRegCopy />
                  </a>
                  <a
                    href="#"
                    onClick={() => handleStoreChannel(j)}
                    aria-label="Add to my playlist"
                  >
                    <FaHeart />
                  </a>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ChannelsList;
