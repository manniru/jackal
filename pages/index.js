import Head from "next/head";
import React, { useState } from "react";
import Aside from "../components/Aside";
import Player from "../components/Player";
import Popup from "../components/Popup";

export default function Home({ listing }) {
  let localListing = [];
  if (process.browser) {
    if (localStorage.getItem("listing")) {
      localListing = JSON.parse(localStorage.getItem("listing"));
    } else {
      localStorage.setItem("listing", JSON.stringify(listing));
      localListing = JSON.parse(localStorage.getItem("listing"));
    }
  }
  const [show, setShow] = useState(false);
  const [channel, setChannel] = useState({
    url: null,
    urls: localListing,
    keyword: "",
    toggle: false,
  });
  const { keyword, url, toggle, urls } = channel;
  return (
    <>
      <Head>
        <meta name="title" content="Jackal" />
        <meta name="description" content="Watch live TV from your browser." />
        <meta
          name="keywords"
          content="tv, live-tv, open-source, internet, video, entertainment, jackal"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <title>Jackal</title>
      </Head>
      <Aside
        keyword={keyword}
        toggle={toggle}
        channel={channel}
        setShow={setShow}
        setChannel={setChannel}
      />
      <Player url={url} />
      <Popup
        urls={urls}
        show={show}
        setShow={setShow}
        channel={channel}
        setChannel={setChannel}
      />
    </>
  );
}

Home.getInitialProps = async () => {
  const mainUrls = [
    `https://raw.githubusercontent.com/iptv-org/iptv/master/index.m3u`,
    `https://iptv-org.github.io/iptv/categories/xxx.m3u`,
  ];
  const mainPromises = mainUrls.map(async (url) => {
    const req = await fetch(url);
    const text = await req.text();
    return text;
  });
  const parseBadLinks = (myPromise) => {
    return myPromise
      .split("#")
      .map((i) => i.replace(/\n/gi, ""))
      .filter((i) => i !== "")
      .filter((i) => (i.includes("EXTM3U") ? null : i))
      .map((i) => i.split("group-title")[1])
      .map((i) => {
        const currentIndex = i.indexOf("http");
        const currentUrl = i.slice(currentIndex);
        return currentUrl;
      });
  };
  const parseXLinks = (myPromise, badList, codes) => {
    return myPromise
      .map((i) => i.split("#"))
      .map((i) => i.filter((j) => j !== ""))
      .map((i) => i.filter((j) => (j.includes("EXTM3U") ? null : j)))
      .map((i) => i.map((j) => j.split(",")))
      .map((i) => i.map((j) => j[1]))
      .map((i) => i.filter((j) => (typeof j === undefined ? null : j)))
      .map((i) => i.map((j) => j.split("\n")))
      .map((i, index) =>
        i.map((j) => ({ title: j[0], url: j[1], country: codes[index] }))
      )
      .filter((i) => i.length !== 0)
      .map((i) =>
        i.sort((a, b) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
        )
      )
      .map((i) => i.filter((j) => (badList.indexOf(j.url) === -1 ? j : false)))
      .map((i) => i.filter((j) => (j.title.includes("XXX") ? false : j)));
  };
  const parseLinks = async (myPromise, badList) => {
    let codes = myPromise
      .split("#")
      .map((i) => i.replace(/\n/gi, ""))
      .filter((i) => i !== "")
      .filter((i) => (i.includes("EXTM3U") ? null : i))
      .map((i) => i.split("channels"))
      .map((i) => i[0])
      .map((i) => i.split(","))
      .map((i) => i[1]);
    const urls = myPromise
      .split("#")
      .map((i) => i.replace(/\n/gi, ""))
      .map((i) => i.replace(/EXTINF:-1,/gi, ""))
      .filter((i) => i !== "")
      .filter((i) => (i.includes("EXTM3U") ? null : i))
      .map((i) => i.split("/"))
      .map((i) => i[1])
      .map((i) => i.split("."))
      .map((i) => i[0])
      .map(
        (i) =>
          `https://raw.githubusercontent.com/iptv-org/iptv/master/channels/${i}.m3u`
      );
    const promises = urls.map(async (url) => {
      const req = await fetch(url);
      const text = await req.text();
      return text;
    });
    const results = await Promise.all(promises);
    return parseXLinks(results, badList, codes);
  };
  const results = await Promise.all(mainPromises);
  const [promiseMainList, promiseBadList] = results;
  const badList = parseBadLinks(promiseBadList);
  const mainList = await parseLinks(promiseMainList, badList);
  const keyedListing = mainList.map((i, idx) => {
    return {
      id: ++idx,
      content: [...i],
    };
  });
  return {
    listing: keyedListing,
  };
};
