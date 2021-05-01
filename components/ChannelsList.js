import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { isBrowser, isMobile } from "react-device-detect";
import { toast } from "react-toastify";
import ChannelsListContext from "../context/ChannelsListContext";
import MenuContext from "../context/MenuContext";

const ChannelsList = () => {
  const { item } = useContext(ChannelsListContext);
  const { channel, setChannel } = useContext(MenuContext);
  const notifyCopy = () =>
    toast.dark("URL copied successfully!", {
      autoClose: 2000,
      pauseOnHover: false,
    });
  const notifyWarn = () =>
    toast.error("This channel is already available in your playlist!", {
      autoClose: 2000,
      pauseOnHover: false,
    });
  const notifyAdd = () =>
    toast.dark("Channel added successfully to your playlist!", {
      autoClose: 2000,
      pauseOnHover: false,
    });
  const handlePlay = (currentUrl) => {
    if (isBrowser) {
      setChannel({
        ...channel,
        url: currentUrl,
        keyword: "",
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
    <table>
      <thead>
        <tr>
          <th>
            <strong>Channel</strong>
          </th>
          <th>
            <strong>Controls</strong>
            <>
              <br />
              P=Play, C=Copy, L=Like,
            </>
          </th>
        </tr>
      </thead>
      <tbody>
        {item.map((j, id) => {
          const { title, url, ban } = j;
          const isHTTP = url && url.includes("http://") ? true : false;
          return (
            <tr key={id} className={ban ? "danger" : ""}>
              <td>
                <div className="title" title={title}>
                  <span>{++id}.</span>{" "}
                  <span className={isHTTP ? "orange" : "green"}>{title}</span>
                </div>
              </td>
              <td>
                <div className="controls">
                  <button onClick={() => handlePlay(url)} aria-label="Play">
                    P
                  </button>
                  <CopyToClipboard
                    text={url}
                    onCopy={notifyCopy}
                    aria-label="Copy URL"
                  >
                    <button>C</button>
                  </CopyToClipboard>
                  <button
                    onClick={() => handleStoreChannel(j)}
                    aria-label="Add to my playlist"
                  >
                    L
                  </button>
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
