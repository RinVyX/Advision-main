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
          <link rel="shortcut icon" href="/logo.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
          
          <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
          ></link>

          <script src="https://smtpjs.com/v3/smtp.js">
          </script>

          <title>AdVision El Djazair</title>
          <meta property="og:title" content="AdVision El Djazair" key="title" />
          <meta property="og:site_name" content="AdVision El Djazair" key="site_name" />
          <meta property="og:description" content="Agence de communication" key="description" />
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
