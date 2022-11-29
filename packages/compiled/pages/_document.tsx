import Document, { Html, Head, Main, NextScript } from "next/document";
import { css } from "@compiled/react";

class MyDocument extends Document {
  render() {
    return (
      <Html
        css={css`
          font-family: "Inter", sans-serif;
          font-size: 14px;
          box-sizing: border-box;
        `}
      >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
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
