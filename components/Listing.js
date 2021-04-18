import React from "react";
import Icon from "./Icon";
import { ButtonGroup, Button, Table } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy, FaPlayCircle, FaCheck } from "react-icons/fa";
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
  return (
    <Table
      variant="dark"
      striped
      responsive
      borderless
      className="m-0"
      size="sm"
    >
      <thead>
        <tr>
          <td style={{ width: "50%" }} className="p-3">
            <strong>Channel</strong>
          </td>
          <td style={{ width: "30%" }} className="p-3">
            <strong>Controls</strong>
          </td>
          <td style={{ width: "20%" }} className="p-3 text-right">
            <strong>Status</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        {item.map((j, id) => {
          const { title, url } = j;
          const isHTTP = url.includes("http://") ? true : false;
          const status = isHTTP ? (
            <FaCheck style={{ fill: "orange" }} />
          ) : (
            <FaCheck style={{ fill: "green" }} />
          );
          return (
            <tr key={id}>
              <td className="text-wrap px-3 vm h-100">
                {++id}: <strong>{title}</strong>
              </td>
              <td className="text-wrap p-3">
                <ButtonGroup>
                  <Button
                    variant="success"
                    className="shadow-lg"
                    onClick={() => handlePlay(url)}
                  >
                    <Icon>
                      <FaPlayCircle />
                    </Icon>
                  </Button>
                  <CopyToClipboard
                    text={url}
                    onCopy={() => alert("URL copied successfully!")}
                  >
                    <Button variant="info" className="shadow-lg">
                      <Icon>
                        <FaRegCopy />
                      </Icon>
                    </Button>
                  </CopyToClipboard>
                </ButtonGroup>
              </td>
              <td
                style={{ verticalAlign: "middle" }}
                className="p-3 text-right"
              >
                {status}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Listing;
