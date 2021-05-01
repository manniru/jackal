import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
                    P
                  </button>
                  <CopyToClipboard
                    text={url}
                    onCopy={notify}
                    aria-label="Copy URL"
                  >
                    <button>C</button>
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
