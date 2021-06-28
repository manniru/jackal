import lookup from "country-code-lookup";
// import nookies from "nookies";
import ReactCountryFlag from "react-country-flag";

const urls = [
  `https://raw.githubusercontent.com/iptv-org/iptv/master/index.m3u`,
];

const getTextFromFetch = async (url) => {
  const req = await fetch(url);
  const text = await req.text();
  return text;
};

// const parseBadLinks = (myPromise) => {
//   return myPromise
//     .split("#")
//     .map((i) => i.replace(/\n/gi, ""))
//     .filter((i) => i !== "")
//     .filter((i) => (i.includes("EXTM3U") ? null : i))
//     .map((i) => i.split("group-title")[1])
//     .map((i) => {
//       const currentIndex = i.indexOf("http");
//       const currentUrl = i.slice(currentIndex);
//       return currentUrl;
//     });
// };

const parseXLinks = (myPromise, codes) => {
  return (
    myPromise
      .map((i) => i.split("#"))
      .map((i) => i.filter((j) => j !== ""))
      .map((i) => i.filter((j) => (j.includes("EXTM3U") ? null : j)))
      .map((i) => i.map((j) => j.split(",")))
      .map((i) => i.map((j) => ({ type: j[0], url: j[1] })))
      .map((i) => i.filter((j) => (typeof j.url === undefined ? null : j)))
      .map((i) =>
        i.map((j) => {
          let word;
          if (j.type.includes("group-title=")) {
            const array = j.type.split("group-title=");
            word = array[1].replace(/"/g, "");
            word = word.trim() ? word : "None";
          } else {
            word = "None";
          }
          return {
            type: word,
            url: j.url ? j.url.split("\n") : null,
          };
        })
      )
      .map((i, index) =>
        i.map((j) => ({
          type: j.type,
          title: j.url ? j.url[0].trim() : null,
          url: j.url ? j.url[1] : null,
          country: codes[index],
        }))
      )
      .map((i) => i.filter((j) => j.url))
      .map((i) =>
        i.sort((a, b) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
        )
      )
      // .map((i) => i.filter((j) => (badList.indexOf(j.url) === -1 ? j : false)))
      .map((i) => i.filter((j) => j.type !== "XXX"))
      .map((i) => i.filter((j) => (j.title.includes("XXX") ? false : j)))
  );
};

const parseLinks = async (myPromise) => {
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
  const promises = urls.map(getTextFromFetch);
  const results = await Promise.all(promises);
  // return parseXLinks(results, badList, codes);
  return parseXLinks(results, codes);
};

// https://stackoverflow.com/questions/51805395/navigator-clipboard-is-undefined
const copyToClipboard = (textToCopy) => {
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard api method'
    return navigator.clipboard.writeText(textToCopy);
  } else {
    // text area method
    let textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    // make the textarea out of viewport
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    return new Promise((res, rej) => {
      // here the magic happens
      document.execCommand("copy") ? res() : rej();
      textArea.remove();
    });
  }
};

const getData = async () => {
  // let hasNoError = true;
  try {
    // const cookies = nookies.get(ctx);
    // const noCookies = cookies && isObjectEmpty(cookies);
    // if (noCookies) {
    const mainPromises = urls.map(getTextFromFetch);
    const results = await Promise.all(mainPromises);
    const [promiseMainList] = results;
    // const [promiseMainList, promiseBadList] = results;
    // const badList = parseBadLinks(promiseBadList);
    // const mainList = await parseLinks(promiseMainList, badList);
    const mainList = await parseLinks(promiseMainList);
    const finalList = mainList
      .filter((i) => i.length)
      .map((i, idx) => {
        return {
          id: ++idx,
          code: lookup.byCountry(i[0].country),
          content: [...i],
        };
      });
    return finalList;
    // }
  } catch (e) {
    // hasNoError = false;
    return "fail";
  }
  // finally {
  //   if (hasNoError) {
  //     nookies.set(ctx, "hasData", true, {
  //       maxAge: 30 * 24 * 60 * 60,
  //       path: "/",
  //     });
  //   } else {
  //     nookies.destroy(ctx, "hasData");
  //   }
  // }
};

const fixBrokenFlags = (country) => {
  if (country === "Gambia")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="gm" />
    );
  if (country === "Bahamas")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="bs" />
    );
  if (country === "Ivory Coast")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="ci" />
    );
  if (country === "Kosovo")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="xk" />
    );
  if (country === "Myanmar")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="mm" />
    );
  if (country === "Palestine")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="ps" />
    );
  if (country === "Vatican City")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="va" />
    );
  if (country === "Virgin Islands of the United States")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="vi" />
    );
  if (country === "Netherlands Antilles")
    return <img className="accordion__flag__img" src="./an.svg" />;
  return null;
};

// https://stackoverflow.com/a/43467144
const isValidUrl = (string) => {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};

export { getData, copyToClipboard, fixBrokenFlags, isValidUrl };
