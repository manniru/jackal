import React, { useState, useContext } from "react";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  ButtonGroup,
} from "react-bootstrap";
import { FaSatelliteDish, FaPlay, FaLink } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { isBrowser, isMobile } from "react-device-detect";
import MenuContext from "../context/MenuContext";
import ChannelsContext from "../context/ChannelsContext";
import Cart from "./Cart";
import Channels from "../modals/Channels";

const Menu = () => {
  const {
    channel,
    setChannel,
    showList,
    setShowList,
    handleShowList,
    handleShowFaq,
  } = useContext(MenuContext);
  const [link, setLink] = useState(false);
  const { keyword } = channel;
  const [isEmpty, setIsEmpty] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isBrowser) {
      setChannel({
        ...channel,
        url: keyword,
        keyword: "",
      });
    }
    if (isMobile) {
      setChannel({
        ...channel,
        keyword: "",
      });
      window.open(keyword, "_blank");
    }
  };
  const handleLink = () => setLink(!link);
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
      <aside className="d-flex justify-content-end">
        <Form
          className="d-flex justify-content-end mr-3"
          onSubmit={handleSubmit}
        >
          {link && (
            <InputGroup className="input">
              <FormControl
                type="url"
                name="keyword"
                value={keyword}
                onChange={handleChange}
                placeholder="Enter M3U8 URL"
              />
              <InputGroup.Append>
                {link && (
                  <Button
                    className="d-flex justify-content-center align-items-center"
                    type="submit"
                    variant="outline-light"
                    disabled={isEmpty ? "disabled" : ""}
                  >
                    <FaPlay />
                  </Button>
                )}
              </InputGroup.Append>
            </InputGroup>
          )}
        </Form>
        <ButtonGroup>
          <Button
            className="d-flex justify-content-center align-items-center"
            type="submit"
            variant="outline-light"
            onClick={handleLink}
          >
            <FaLink />
          </Button>

          <Button variant="outline-light" onClick={handleShowFaq}>
            <MdHelp />
          </Button>
          <Button
            variant="outline-light"
            onClick={handleShowList}
            className="d-flex justify-content-center align-items-center"
          >
            <FaSatelliteDish />
          </Button>
          <Cart channel={channel} setChannel={setChannel} />
        </ButtonGroup>
      </aside>
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
