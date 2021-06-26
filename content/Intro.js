import React, { useEffect, useState } from "react";
import Total from "./Total";

const Intro = () => {
  return (
    <div className="main__text">
      <h1 role="heading">Jackal</h1>
      <p>
        <em>Watch TV beyond boundaries.</em>{" "}
        <strong>
          <Total />
        </strong>{" "}
        live channels at your service and updated regularly by open source
        community.
      </p>
      <h2>Featured on</h2>
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
      </div>
    </div>
  );
};

export default Intro;
