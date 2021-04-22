import React from "react";
import Icon from "./Icon";
import { ButtonGroup, Button, Table, Alert } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy, FaPlayCircle, FaCheck, FaHeart } from "react-icons/fa";
import { isBrowser, isMobile } from "react-device-detect";

const CartList = ({ playlist, channel, setChannel }) => {
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
    <Table variant="dark" striped responsive borderless className="m-0">
      <thead>
        <tr>
          <td>
            <strong>ID</strong>
          </td>
          <td>
            <strong>Channel</strong>
          </td>
          <td>
            <strong>Controls</strong>
          </td>
          <td className="text-right">
            <strong>Status</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        {JSON.parse(playlist).map((j, id) => {
          const { title, url } = j;
          const isHTTP = url && url.includes("http://") ? true : false;
          const status = isHTTP ? (
            <FaCheck style={{ fill: "orange" }} />
          ) : (
            <FaCheck style={{ fill: "green" }} />
          );
          return (
            <tr key={id}>
              <td className="text-wrap vm h-100">{++id}</td>
              <td className="text-wrap vm h-100">{title}</td>
              <td className="text-wrap vm">
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
                    onCopy={() => alert("Channel link copied successfully!")}
                  >
                    <Button variant="info" className="shadow-lg">
                      <Icon>
                        <FaRegCopy />
                      </Icon>
                    </Button>
                  </CopyToClipboard>
                </ButtonGroup>
              </td>
              <td className="vm text-right">{status}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CartList;
