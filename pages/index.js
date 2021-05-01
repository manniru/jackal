import Head from "next/head";
import React, { useState } from "react";
import lookup from "country-code-lookup";
import { ToastContainer } from "react-toastify";
import nookies, { parseCookies, destroyCookie } from "nookies";
import MenuContext from "../context/MenuContext";
import Menu from "../components/Menu";
import Main from "../components/Main";

export default function Home({ listing }) {
  const { goodCall } = parseCookies();
  let localListing = [];
  if (process.browser) {
    if (goodCall && localStorage.getItem("listing")) {
      localListing = JSON.parse(localStorage.getItem("listing"));
    } else {
      localStorage.setItem("listing", JSON.stringify(listing));
      localListing = JSON.parse(localStorage.getItem("listing"));
    }
  }
  const [showFaq, setShowFaq] = useState(false);
  const handleShowFaq = () => setShowFaq(true);
  const [showList, setShowList] = useState(false);
  const handleShowList = () => setShowList(true);
  const [channel, setChannel] = useState({
    url: null,
    urls: localListing,
    keyword: "",
  });
  const handleClearStorage = (e) => {
    e.preventDefault();
    localStorage.removeItem("listing");
    destroyCookie(null, "goodCall");
    window.location.reload();
  };
  return (
    <>
      <Head>
        <meta name="title" content="Jackal" />
        <meta name="description" content="Watch live TV from your browser." />
        <meta
          name="keywords"
          content="tv, live-tv, open-source, internet, video, entertainment, jackal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <title>Jackal</title>
      </Head>
      <MenuContext.Provider
        value={{
          channel,
          setChannel,
          handleClearStorage,
          showFaq,
          setShowFaq,
          handleShowFaq,
          showList,
          setShowList,
          handleShowList,
        }}
      >
        <Menu />
        <Main />
        <div id="about"></div>
        <div id="channels"></div>
        <div id="my-playlist"></div>
      </MenuContext.Provider>
      <ToastContainer />
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const checkBadCall =
    cookies &&
    Object.keys(cookies).length === 0 &&
    cookies.constructor === Object;
  const mainUrls = [
    `https://raw.githubusercontent.com/iptv-org/iptv/master/index.m3u`,
    // Clean/filter garbage data
    `https://iptv-org.github.io/iptv/categories/xxx.m3u`,
  ];
  let keyedListing;
  try {
    if (checkBadCall) {
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
          .map((i) =>
            i.filter((j) => (badList.indexOf(j.url) === -1 ? j : false))
          )
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
      keyedListing = mainList.map((i, idx) => {
        return {
          id: ++idx,
          code: lookup.byCountry(i[0].country),
          content: [...i],
        };
      });
      nookies.set(ctx, "goodCall", true, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    }
  } catch (err) {
    console.log(err);
  }
  return {
    listing: keyedListing,
    cookies,
  };
};
