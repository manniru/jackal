import React, { useState, useContext } from "react";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  ButtonGroup,
} from "react-bootstrap";
import { FaListUl, FaPlay } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { isBrowser, isMobile } from "react-device-detect";
import MenuContext from "../context/MenuContext";
import ChannelsContext from "../context/ChannelsContext";
import Cart from "./Cart";
import Channels from "./Channels";

const Menu = () => {
  const { channel, setChannel } = useContext(MenuContext);
  const { keyword, toggle } = channel;
  const [show, setShow] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const handleShow = () => setShow(true);
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setChannel({ ...channel, [name]: value });
    if (value && value.trim() !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };
  const handleToggle = () => {
    setChannel({ ...channel, toggle: !toggle });
  };
  return (
    <>
      <aside className="d-flex justify-content-end">
        {!toggle && (
          <Form className="d-flex justify-content-end" onSubmit={handleSubmit}>
            <InputGroup className="input">
              <FormControl
                type="url"
                name="keyword"
                value={keyword}
                onChange={handleChange}
                placeholder="Enter M3U8 URL"
              />
              <InputGroup.Append>
                <ButtonGroup>
                  <Button
                    className="rounded-0 d-flex justify-content-center align-items-center"
                    type="submit"
                    variant="outline-light"
                    disabled={isEmpty ? "disabled" : ""}
                  >
                    <FaPlay />
                  </Button>
                  <Cart channel={channel} setChannel={setChannel} />
                  <Button
                    variant="outline-light"
                    onClick={handleShow}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <FaListUl />
                  </Button>
                </ButtonGroup>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        )}
        <Button
          className="ml-3 menu d-flex justify-content-center align-items-center"
          variant="outline-light"
          onClick={handleToggle}
        >
          <BsArrowsFullscreen />
        </Button>
      </aside>
      <ChannelsContext.Provider
        value={{
          show,
          setShow,
        }}
      >
        <Channels />
      </ChannelsContext.Provider>
    </>
  );
};

export default Menu;
