import React from "react";
import { FaChild } from "react-icons/fa";

const Links = () => {
  return (
    <>
      <a
        className="children"
        href="https://www.savethechildren.org/us/ways-to-help"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Help make a difference in a child's life"
        title="Help make a difference in a child's life"
      >
        <FaChild />
      </a>
      <small>
        v
        <a
          href="http://jackal.surge.sh/report.html"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Check latest version metrics"
          title="Check latest version metrics"
        >
          1.14
        </a>
      </small>
    </>
  );
};

export default Links;
