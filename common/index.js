import lookup from "country-code-lookup";

const BASE_URL =
  "https://raw.githubusercontent.com/iptv-org/iptv/master/index.m3u";

const getTextFromFetch = async (url) => {
  const req = await fetch(url);
  const text = await req.text();
  return text;
};

const methodForEXTVLCOPT = (i, brokenIndex) => {
  const textString = i
    .split("#")
    .filter((j) => j)
    .filter((j) => (j.includes("EXTM3U") ? null : j))
    .filter((i, idx) => idx === brokenIndex)
    .map((j) => {
      const text = j.split('",')[1];
      const finalText = text.replace(/\n/g, "");
      return finalText;
    });
  const urlString = i
    .split("#")
    .filter((j) => j)
    .filter((j) => (j.includes("EXTM3U") ? null : j))
    .filter((i, idx) => idx === brokenIndex + 1)
    .map((j) => {
      const array = j.split(",");
      if (array.length === 1) {
        return array[0];
      } else {
        const url = array[1];
        return url;
      }
    });
  const newUrlString = urlString[0];
  const getUrl = newUrlString.split("http")[1];
  const cleanUrl = getUrl.replace(/\n/g, "");
  const finalUrl = textString[0] + "\n" + "http" + cleanUrl;
  return finalUrl;
};

const parseXLinks = (myPromise, codes) => {
  return myPromise.map((i, index) => {
    return i
      .split("#")
      .filter((j) => (j !== "" && j.includes("EXTM3U") ? null : j))
      .map((j, index) => {
        const array = j.split(",");
        const type = array[0];
        const url = array[1];
        if (url && !url.includes("://")) {
          return {
            type,
            url: methodForEXTVLCOPT(i, index),
          };
        }
        return { type, url };
      })
      .filter((j) => (typeof j.url === undefined ? null : j))
      .map((j) => {
        let word;
        let myUrl;
        let myTitle;
        if (j.type && j.type.includes("group-title=")) {
          const array = j.type.split("group-title=");
          word = array[1].replace(/"/g, "");
          word = word.trim() ? word : "None";
        } else {
          word = "None";
        }
        if (j.url && j.url.includes("\n")) {
          myTitle = j.url.split("\n")[0].trim();
          myUrl = j.url.split("\n")[1].trim();
        } else {
          myUrl = j.url;
          myTitle = "Unknown";
        }
        return {
          type: word,
          url: myUrl,
          title: myTitle,
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
    const promiseBit = await fetch(BASE_URL);
    const textBit = await promiseBit.text();
    const mainList = await parseLinks(textBit);
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

export { getData, copyToClipboard, isValidUrl };
