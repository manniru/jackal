import React from "react";
import { FaList, FaLink, FaHeart } from "react-icons/fa";
// import { FiRefreshCw } from "react-icons/fi";
import { BsShuffle } from "react-icons/bs";

const AboutPage = () => {
  return (
    <ul className="modal__ul">
      <li>
        Powered by{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <strong>Next</strong>
        </a>
        ,{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>React</strong>
        </a>
        . Hosted on&nbsp;
        <a href="https://surge.sh/" target="_blank" rel="noopener noreferrer">
          <strong>Surge</strong>
        </a>
        . Source code is available on{" "}
        <a
          href="https://github.com/tpkahlon/jackal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>GitHub</strong>
        </a>
        . Huge thanks to&nbsp;
        <a
          href="https://www.npmjs.com/package/country-code-lookup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>country-code-lookup</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-country-flag"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-country-flag</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-icons</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-device-detect"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-device-detect</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-player"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-player</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-toastify"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-toastify</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-modal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-modal</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-accessible-accordion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-accessible-accordion</strong>
        </a>
        &nbsp;libraries.
      </li>
      <li>
        If you would like to add a new channel in the database, please follow
        this{" "}
        <a
          href="https://github.com/iptv-org/iptv/pulls"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>link</strong>
        </a>
        . If you want to report a broken/outdated channel, please follow this{" "}
        <a
          href="https://github.com/iptv-org/iptv/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>link</strong>
        </a>
        .
      </li>
      <li className="li li--flex">
        <span>To check available channels, use:</span>
        <FaList />
      </li>
      <li className="li li--flex">
        <span>To watch a random channel, use:</span>
        <BsShuffle />
      </li>
      <li className="li li--flex">
        <span>To play a live stream through a M3U8 link, use:</span>
        <FaLink />
      </li>
      <li className="li li--flex">
        <span>To view or add channels to your playlist, use:</span>
        <FaHeart />
      </li>
      {/* <li className="li li--flex">
        <span>
          Jackal use localStorage API in your browser, to store data received
          from IPTV repository. To clear this data, use:
        </span>
        <FiRefreshCw />
      </li> */}
      <li>
        If you have a Chromecast, cast any stream to your TV by using Chromium
        based browser from your PC/Laptop. Right click on the playing live
        stream and click Cast.
      </li>
      <li>
        <span>
          In a channel, <span style={{ color: "red" }}>red text</span> means
          live stream uses HTTP protocol and{" "}
          <span style={{ color: "green" }}>green text</span> means live stream
          uses HTTPS protocol.
        </span>
        <br />
        <br />
        <span>
          <strong>Note:</strong> If you are using a Desktop/Laptop machine,
          please make sure that you load this site with http protocol instead of
          https.
          <br />
          For example, under Vietnam, channel no. 1 (ANTV) stream will work if
          you load the page{" "}
          <a href="http://jackal.surge.sh">
            <strong>http://jackal.surge.sh</strong>
          </a>{" "}
          rather than <strong>https://jackal.surge.sh</strong>.
          <br />
          <span>
            For example, under Vietnam, channel no. 4 (Bến Tre) stream may not
            work on desktop/laptop devices but it works on iPhone/iOS devices or
            VLC.
          </span>
          <br />
          <br />
          <span>
            If a stream does not load, please copy its URL and test it{" "}
            <a
              href="https://hls-js.netlify.app/demo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>here</strong>
            </a>
            . If it fails, it cannot work in the browser. In such cases, you can
            try VLC software.
            <br />
            For example, this{" "}
            <a href="http://hbbtvlive.v3.tvp.pl/hbbtvlive/livestream.php?app_id=tvpbialystok">
              <strong>stream</strong>
            </a>{" "}
            does not load in browser but works on iPhone/iOS devices or through
            VLC software.
          </span>
        </span>
      </li>
      <li>
        <small>
          No video files are stored in this repository. The repository simply
          contains user-submitted links to publicly available video stream URLs,
          which to the best of our knowledge have been intentionally made
          publicly by the copyright holders. If any links in these playlists
          infringe on your rights as a copyright holder, they may be removed by
          sending a pull request or opening an issue. However, note that we have
          no control over the destination of the link, and just removing the
          link from the playlist will not remove its contents from the web. Note
          that linking does not directly infringe copyright because no copy is
          made on the site providing the link, and thus this is not a valid
          reason to send a DMCA notice to GitHub. To remove this content from
          the web, you should contact the web host that's actually hosting the
          content (not GitHub, nor the maintainers of this repository).
        </small>
      </li>
    </ul>
  );
};

export default AboutPage;
