import React from "react";
import Listing from "./Listing";
import { FaChevronDown } from "react-icons/fa";
import { Card, Accordion, Badge } from "react-bootstrap";

const CollapseBox = ({ urls, channel, setChannel }) => {
  return (
    <Accordion className="rounded-0">
      {urls.map(({ content, id }) => {
        return (
          <Card key={id} className="rounded-0 border-0 shadow-lg">
            <Accordion.Toggle
              className="bg-dark p-0"
              variant="dark"
              as={Card.Header}
              eventKey={id}
            >
              {content.length !== 0 ? (
                <div className="d-flex align-items-center">
                  <Badge variant="secondary" className="p-3 rounded-0 badge">
                    {content.length}
                  </Badge>
                  <div className="mx-3 w-100 d-flex justify-content-between align-items-center">
                    <span>{content[0].country} </span>
                    <FaChevronDown />
                  </div>
                </div>
              ) : (
                "Undefined"
              )}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={id}>
              <Card.Body className="bg-dark p-0">
                <Listing
                  item={content}
                  channel={channel}
                  setChannel={setChannel}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
};

export default CollapseBox;
