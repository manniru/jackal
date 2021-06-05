import React from "react";
import { FaTwitter, FaChild, FaUserFriends } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const Links = () => {
  return (
    <>
      <a
        href="https://counter.dev/dashboard.html?user=tpkahlon&token=qmZeMlhEmLNcn9wo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="See site performance"
        title="See site performance"
      >
        <FaUserFriends />
      </a>
      <a
        href="https://www.savethechildren.org/us/ways-to-help"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Help make a difference in a child's life"
        title="Help make a difference in a child's life"
      >
        <FaChild />
      </a>
      <a
        href="https://forms.gle/pQephvzviE7xxE6H8"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Use this form to send new feature requests or report bugs"
        title="Use this form to send new feature requests or report bugs"
      >
        <RiContactsFill />
      </a>
      <a
        href="https://twitter.com/jackalislive"
        target="_blank"
        rel="noopener noreferrer"
        className="main__a"
        aria-label="Follow our Twitter account for latest updates"
        title="Follow our Twitter account for latest updates"
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
          title="Check latest version metrics"
        >
          1.12
        </a>
      </small>
    </>
  );
};

export default Links;
