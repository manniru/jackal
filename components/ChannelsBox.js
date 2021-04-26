import React, { useState, useContext } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Card, Accordion, Badge } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import MenuContext from "../context/MenuContext";
import ChannelsListContext from "../context/ChannelsListContext";
import ChannelsList from "./ChannelsList";

const ChannelsBox = () => {
  const { channel } = useContext(MenuContext);
  const { urls } = channel;
  const [show, setShow] = useState(null);
  const edgeFlags = (country) => {
    if (country === "Gambia")
      return <ReactCountryFlag className="w-100" svg countryCode="gm" />;
    if (country === "Bahamas")
      return <ReactCountryFlag className="w-100" svg countryCode="bs" />;
    if (country === "Ivory Coast")
      return <ReactCountryFlag className="w-100" svg countryCode="ie" />;
    if (country === "Kosovo")
      return <ReactCountryFlag className="w-100" svg countryCode="xk" />;
    if (country === "Myanmar")
      return <ReactCountryFlag className="w-100" svg countryCode="mm" />;
    if (country === "Palestine")
      return <ReactCountryFlag className="w-100" svg countryCode="ps" />;
    if (country === "Vatican City")
      return <ReactCountryFlag className="w-100" svg countryCode="va" />;
    if (country === "Virgin Islands of the United States")
      return <ReactCountryFlag className="w-100" svg countryCode="vi" />;
    return null;
  };
  return (
    <Accordion className="rounded-0">
      {urls.map(({ content, id, code }) => {
        const handleClick = (e, id) => {
          const key = e.currentTarget.dataset.key
            ? Number(e.currentTarget.dataset.key)
            : 0;
          if (key === id) {
            setShow(id);
          } else {
            setShow(null);
          }
        };
        return (
          <Card key={id} className="rounded-0 border-0 shadow-lg">
            <Accordion.Toggle
              className={`bg-dark p-0 d-flex align-items-center ${
                show === id ? "bg-black" : ""
              }`}
              variant="dark"
              as={Card.Header}
              eventKey={id}
              data-key={id}
              onClick={(e) => handleClick(e, id)}
            >
              {content.length !== 0 ? (
                <>
                  <Badge variant="secondary" className="badge">
                    <div>
                      <span>{content.length}</span>
                    </div>
                    {code !== null ? (
                      <ReactCountryFlag
                        className="w-100"
                        svg
                        countryCode={code.iso2}
                      />
                    ) : (
                      edgeFlags(content[0].country)
                    )}
                  </Badge>
                  <div className="mx-3 w-100 d-flex justify-content-between align-items-center">
                    <span className="title d-flex align-items-center">
                      {content[0].country}
                    </span>
                    {show === id ? (
                      <FaChevronUp style={{ fill: "#888" }} />
                    ) : (
                      <FaChevronDown style={{ fill: "#888" }} />
                    )}
                  </div>
                </>
              ) : (
                "Undefined"
              )}
            </Accordion.Toggle>
            {show === id ? (
              <Accordion.Collapse
                eventKey={id}
                children={
                  <Card.Body className="bg-dark p-0">
                    <ChannelsListContext.Provider
                      value={{
                        item: content,
                      }}
                    >
                      <ChannelsList />
                    </ChannelsListContext.Provider>
                  </Card.Body>
                }
              />
            ) : null}
          </Card>
        );
      })}
    </Accordion>
  );
};

export default ChannelsBox;
