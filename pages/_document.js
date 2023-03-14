import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script id="cookieyes" type="text/javascript" src="https://scriptstaging.cookieyes.com/client_data/43d91c49ab844efb74ac5f76/script.js" async></script>
      </Head>
      <body>
        <Main />
        <iframe
                  width="800"
                  height="400"
                  src="https://www.youtube.com/embed/a3ICNMQW7Ok"
                  title="YouTube video player"
                  allowfullscreen
                ></iframe>
        <NextScript />
      </body>
    </Html>
  )
}
