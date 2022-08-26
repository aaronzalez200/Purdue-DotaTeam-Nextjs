import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/bebas" type="text/css"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&family=Space+Mono&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
