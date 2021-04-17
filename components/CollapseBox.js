import React from "react";
import Listing from "./Listing";
import Icon from "./Icon";
import { HiDotsHorizontal } from "react-icons/hi";
import { Card, Accordion, Badge } from "react-bootstrap";

const CollapseBox = ({ urls, channel, setChannel }) => {
  return (
    <Accordion className="rounded-0">
      {urls.map(({ content, id }) => {
        return (
          <Card key={id} className="rounded-0 border-0 shadow-lg">
            <Accordion.Toggle
              className="bg-dark"
              variant="dark"
              as={Card.Header}
              eventKey={id}
            >
              {content.length !== 0 ? (
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    {content[0].country}{" "}
                    <Badge variant="light" className="ml-2">
                      {content.length}
                    </Badge>
                  </span>
                  <Icon>
                    <HiDotsHorizontal />
                  </Icon>
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
