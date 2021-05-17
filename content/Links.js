import React from "react";
import { FaTwitter, FaChild, FaUserFriends } from "react-icons/fa";

const Links = () => {
  return (
    <>
      <a
        href="https://counter.dev/dashboard.html?user=tpkahlon&token=qmZeMlhEmLNcn9wo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="See site performance"
      >
        <FaUserFriends />
      </a>
      <a
        href="https://www.savethechildren.org/us/ways-to-help"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Help make a difference in a child's life"
      >
        <FaChild />
      </a>
      <a
        href="https://twitter.com/jackalislive"
        target="_blank"
        rel="noopener noreferrer"
        className="main__a"
        aria-label="Follow our Twitter account for latest updates"
      >
        <FaTwitter />
      </a>
      <small>
        v
        <a
          href="http://jackal.surge.sh/report.html"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Check latest version metrics"
        >
          1.9
        </a>
      </small>
    </>
  );
};

export default Links;
