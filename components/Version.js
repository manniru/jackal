import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const Version = () => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert
        className=" mt-2 mb-3"
        onClose={() => setShow(false)}
        variant="success"
        dismissible
      >
        <Alert.Heading>
          Version: <strong>1.1</strong>
        </Alert.Heading>
        <p className="text-left m-0 mb-2">
          <strong>New release fixes following major bugs:</strong>
        </p>
        <p className="text-left m-0 mb-2">
          Visitors using Canary, Brave and Opera cannot load live stream.
        </p>
        <p className="text-left m-0">
          Improve rendering to make channel listing box load at faster speed.
        </p>
      </Alert>
    );
  }
  return null;
};
export default Version;
