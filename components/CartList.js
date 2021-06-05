import React, { useContext } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import { FaPlay, FaRegCopy } from "react-icons/fa";
import MenuContext from "../context/MenuContext";
import MyPlaylistContext from "../context/MyPlaylistContext";
import { copyToClipboard } from "../common";
import { darkNotification } from "../common/notification";

const CartList = () => {
  const { channel, setChannel } = useContext(MenuContext);
  const { playlist } = useContext(MyPlaylistContext);
  const notifyCopy = (url, e) => {
    e.preventDefault();
    copyToClipboard(url);
    darkNotification("URL copied successfully!");
  };
  const handlePlay = (currentUrl, e) => {
    e.preventDefault();
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
  return (
    <table className="table">
      <thead className="thead">
        <tr>
          <th>
            <strong>Channel</strong>
          </th>
          <th>
            <strong>Controls</strong>
          </th>
        </tr>
      </thead>
      <tbody className="tbody">
        {JSON.parse(playlist).map((j, id) => {
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
                  <a
                    href="#"
                    onClick={(e) => handlePlay(url, e)}
                    aria-label="Play"
                  >
                    <FaPlay />
                  </a>
                  <a href="#" onClick={(e) => notifyCopy(url, e)}>
                    <FaRegCopy />
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

export default CartList;
