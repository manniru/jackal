import lookup from "country-code-lookup";
import ReactCountryFlag from "react-country-flag";

const urls = [
  `https://raw.githubusercontent.com/iptv-org/iptv/master/index.m3u`,
];

const getTextFromFetch = async (url) => {
  const req = await fetch(url);
  const text = await req.text();
  return text;
};

const parseXLinks = (myPromise, codes) => {
  return myPromise.map((i, index) => {
    return i
      .split("#")
      .filter((j) => (j !== "" && j.includes("EXTM3U") ? null : j))
      .map((j) => ({ type: j.split(",")[0], url: j.split(",")[1] }))
      .filter((j) => (typeof j.url === undefined ? null : j))
      .map((j) => {
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
          title: j.url ? j.url.split("\n")[0].trim() : null,
          url: j.url ? j.url.split("\n")[1] : null,
          country: codes[index],
        };
      })
      .filter((j) => j.url && j.type !== "XXX")
      .sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1))
      .filter((j) => (j.title.includes("XXX") ? false : j));
  });
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
  return parseXLinks(results, codes);
};

// https://stackoverflow.com/questions/51805395/navigator-clipboard-is-undefined
const copyToClipboard = (textToCopy) => {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(textToCopy);
  } else {
    let textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    return new Promise((res, rej) => {
      document.execCommand("copy") ? res() : rej();
      textArea.remove();
    });
  }
};

const getData = async () => {
  try {
    const mainPromises = urls.map(getTextFromFetch);
    const results = await Promise.all(mainPromises);
    const [promiseMainList] = results;
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
  } catch (e) {
    return "fail";
  }
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
