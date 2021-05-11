import Head from "next/head";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { toast, Slide } from "react-toastify";
import { getData } from "../common";
import App from "../components/App";
import Error from "../components/Error";

export default function Home({ listing }) {
  const notify = () => {
    toast.dark(
      "Always use HTTP protocol when viewing this site for seamless experience. Check FAQs section for more information.",
      {
        position: "bottom-center",
        autoClose: 10000,
        closeOnClick: true,
        pauseOnHover: true,
      }
    );
  };
  const thanks = () => {
    toast.dark(
      "If you can, please make a difference in a child's life by donating books, clothes etc. or any help in whatever way possible for you.",
      {
        position: "bottom-center",
        autoClose: 10000,
        closeOnClick: true,
        pauseOnHover: true,
      }
    );
  };
  useEffect(() => {
    notify();
  }, []);
  setTimeout(() => {
    thanks();
  }, 60000);
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
      {listing === "fail" ? <Error /> : <App listing={listing} />}
      <div id="about"></div>
      <div id="channels"></div>
      <div id="my-playlist"></div>
      <ToastContainer transition={Slide} />
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  return {
    listing: await getData(ctx),
  };
};
