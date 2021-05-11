import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href="https://pics.freeicons.io/uploads/icons/png/4785625811557996998-512.png"
          />
          <link
            rel="apple-touch-icon"
            href="https://pics.freeicons.io/uploads/icons/png/4785625811557996998-512.png"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"tpkahlon",utcoffset:"-5"}))};sessionStorage.setItem("_swa","1");`,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
