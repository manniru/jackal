import React from "react";
import { ButtonGroup, Button, Table } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy, FaPlay, FaHeart } from "react-icons/fa";
import { isBrowser, isMobile } from "react-device-detect";

const Listing = ({ item, channel, setChannel }) => {
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
        alert("This channel is already available in your playlist.");
      } else {
        const revisedPlaylist = playList.concat(item);
        const sortedPlaylist = revisedPlaylist.sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        );
        localStorage.setItem("playlist", JSON.stringify(sortedPlaylist));
        alert("Channel added successfully to your playlist.");
      }
    } else {
      const newPlaylist = [];
      const revisedPlaylist = newPlaylist.concat(item);
      localStorage.setItem("playlist", JSON.stringify(revisedPlaylist));
      alert("Channel added successfully to your playlist.");
    }
  };
  return (
    <Table variant="dark" striped responsive borderless className="m-0">
      <thead>
        <tr>
          <td style={{ width: "15%" }}>
            <strong>ID</strong>
          </td>
          <td>
            <strong>Channel</strong>
          </td>
          <td>
            <strong>Controls</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        {item.map((j, id) => {
          const { title, url } = j;
          const isHTTP = url && url.includes("http://") ? true : false;
          return (
            <tr key={id}>
              <td
                className="text-wrap vm h-100"
                style={{ background: isHTTP ? "orange" : "green" }}
              >
                {++id}
              </td>
              <td className="text-wrap vm h-100">{title}</td>
              <td className="text-wrap vm">
                <div className="d-flex align-items-center">
                  <ButtonGroup>
                    <Button variant="success" onClick={() => handlePlay(url)}>
                      <FaPlay />
                    </Button>
                    <CopyToClipboard
                      text={url}
                      onCopy={() => alert("URL copied successfully!")}
                    >
                      <Button variant="info">
                        <FaRegCopy />
                      </Button>
                    </CopyToClipboard>
                    <Button
                      variant="secondary"
                      onClick={() => handleStoreChannel(j)}
                    >
                      <FaHeart />
                    </Button>
                  </ButtonGroup>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Listing;
