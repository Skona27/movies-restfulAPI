/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";

import Document, { Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html css={{
        overflowY: "scroll"
      }}>
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700&subset=latin-ext");
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
          `}
        />
        <body css={{
          fontFamily: "Raleway, sans-serif"
        }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
