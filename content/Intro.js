import React from "react";
import Total from "./Total";

const Intro = () => {
  return (
    <div className="main__text">
      <h1 role="heading">Jackal</h1>
      <p>
        Watch TV beyond boundaries{" "}
        <em>
          <strong>
            <Total />
          </strong>{" "}
          live channels at your service and updated regularly by open source
          community
        </em>
      </p>
      {/* <h2>Featured on</h2>
      <div className="main__ft">
        <a
          className="main__ft__a"
          href="https://www.loopinsight.com/2021/04/20/watch-tv-channels-around-the-world/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Follow The Loop"
          title="Follow The Loop"
        >
          <img
            className="main__ft__img"
            loading="lazy"
            width="520"
            height="208"
            src="https://www.loopinsight.com/images/logo.png"
            alt="The Loop logo"
          />
        </a>
        <a
          className="main__ft__a"
          href="https://youtu.be/YvZBF2moLio?t=252"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Follow Sơn Đù"
          title="Follow Sơn Đù"
        >
          <img
            className="main__ft__img"
            loading="lazy"
            width="520"
            height="208"
            src="https://yt3.ggpht.com/ytc/AKedOLRjY6XQDbvT-ZP2orWB526AQeGbZRkjapF4BH-e5Q=s176-c-k-c0x00ffffff-no-rj"
            alt="Follow Sơn Đù"
          />
        </a>
        <a
          className="main__ft__a"
          href="https://freesoff.com/t/requested-live-tv-streaming-websites-for-free-2021/37842"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit FreesOff"
          title="Visit FreesOff"
        >
          <img
            className="main__ft__img"
            loading="lazy"
            width="520"
            height="208"
            src="https://freesoff.com/uploads/default/original/2X/7/795ae78ab85d3096c09b97842fe55e6416e46dd3.png"
            alt="Visit FreesOff"
          />
        </a>
      </div> */}
      <h2>Please Support</h2>
      <div className="main__ft">
        <a
          className="main__ft__a"
          href="https://www.savethechildren.org/us/about-us"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Giving to Save the Children is one of the world’s best investments."
          title="Giving to Save the Children is one of the world’s best investments."
        >
          <img
            className="main__ft__img"
            loading="lazy"
            width="520"
            height="208"
            src="https://i.ibb.co/XpCBLWn/stc.jpg"
            alt="Giving to Save the Children is one of the world’s best investments."
          />
        </a>
        <a
          className="main__ft__a"
          href="https://opencollective.com/iptv-org#category-CONTRIBUTE"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Please support maintainers of IPTV project"
          title="Please support maintainers of IPTV project"
        >
          <img
            className="main__ft__img"
            loading="lazy"
            width="520"
            height="208"
            src="https://images.opencollective.com/iptv-org/cb888b4/logo/256.png"
            alt="Please support maintainers of IPTV project"
          />
        </a>
      </div>
      <footer className="trademark">
        &copy; {new Date().getFullYear()} - Made with ❤️ for the people
      </footer>
    </div>
  );
};

export default Intro;
