import Document, {
  DocumentProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

export default class MyDocument extends Document<DocumentProps> {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="keywords" content="fylo" />
          <meta httpEquiv="content-language" content="en-us" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
