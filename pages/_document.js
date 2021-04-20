import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            href="https://as2.ftcdn.net/jpg/01/05/24/69/500_F_105246940_XgMq601ANX7QuKnXjFrtYhNWlB8PPyMn.jpg"
          />
          <link
            rel="apple-touch-icon"
            href="https://as2.ftcdn.net/jpg/01/05/24/69/500_F_105246940_XgMq601ANX7QuKnXjFrtYhNWlB8PPyMn.jpg"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"tpkahlon",utcoffset:"-5"}))};sessionStorage.setItem("_swa","1");`,
            }}
          ></script>
          {/* <script
            data-ad-client="ca-pub-7162519541437651"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script> */}
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
