import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy, FaPlay } from "react-icons/fa";
import { isBrowser, isMobile } from "react-device-detect";
import { toast } from "react-toastify";
import MenuContext from "../context/MenuContext";
import MyPlaylistContext from "../context/MyPlaylistContext";

const CartList = () => {
  const { channel, setChannel } = useContext(MenuContext);
  const { playlist } = useContext(MyPlaylistContext);
  const notify = () =>
    toast.dark("Channel link copied successfully!", {
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
  return (
    <table>
      <thead>
        <tr>
          <td>
            <strong>Channel</strong>
          </td>
          <td>
            <strong>Controls</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        {JSON.parse(playlist).map((j, id) => {
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
                    <FaPlay />
                  </button>
                  <CopyToClipboard
                    text={url}
                    onCopy={notify}
                    aria-label="Copy URL"
                  >
                    <button>
                      <FaRegCopy />
                    </button>
                  </CopyToClipboard>
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
