import React, { useState, useContext } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
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
      return (
        <ReactCountryFlag
          className="accordion__flag__img"
          svg
          countryCode="gm"
        />
      );
    if (country === "Bahamas")
      return (
        <ReactCountryFlag
          className="accordion__flag__img"
          svg
          countryCode="bs"
        />
      );
    if (country === "Ivory Coast")
      return (
        <ReactCountryFlag
          className="accordion__flag__img"
          svg
          countryCode="ie"
        />
      );
    if (country === "Kosovo")
      return (
        <ReactCountryFlag
          className="accordion__flag__img"
          svg
          countryCode="xk"
        />
      );
    if (country === "Myanmar")
      return (
        <ReactCountryFlag
          className="accordion__flag__img"
          svg
          countryCode="mm"
        />
      );
    if (country === "Palestine")
      return (
        <ReactCountryFlag
          className="accordion__flag__img"
          svg
          countryCode="ps"
        />
      );
    if (country === "Vatican City")
      return (
        <ReactCountryFlag
          className="accordion__flag__img"
          svg
          countryCode="va"
        />
      );
    if (country === "Virgin Islands of the United States")
      return (
        <ReactCountryFlag
          className="accordion__flag__img"
          svg
          countryCode="vi"
        />
      );
    return null;
  };
  return (
    <Accordion>
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
          <AccordionItem key={id}>
            <AccordionItemHeading
              className={`${show === id ? "active" : ""}`}
              data-key={id}
              onClick={(e) => handleClick(e, id)}
            >
              {content.length !== 0 ? (
                <AccordionItemButton className="accordion__btn">
                  <div className="accordion__details">
                    <div className="accordion__country">
                      {content[0].country}
                    </div>
                    <div className="accordion__data">
                      <div className="accordion__flag">
                        {code !== null ? (
                          <ReactCountryFlag
                            className="accordion__flag__img"
                            svg
                            countryCode={code.iso2}
                          />
                        ) : (
                          edgeFlags(content[0].country)
                        )}
                      </div>
                      <div className="accordion__content">{content.length}</div>
                    </div>
                  </div>
                </AccordionItemButton>
              ) : (
                "Undefined"
              )}
            </AccordionItemHeading>
            {show === id ? (
              <AccordionItemPanel
                children={
                  <ChannelsListContext.Provider
                    value={{
                      item: content,
                    }}
                  >
                    <ChannelsList />
                  </ChannelsListContext.Provider>
                }
              />
            ) : null}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default ChannelsBox;
