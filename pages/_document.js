import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script id="cookieyes"
          src="https://scriptstaging.cookieyes.com/client_data/43d91c49ab844efb74ac5f76/script.js"
          strategy="beforeInteractive">
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <iframe
            width="800"
            height="400"
            src="https://www.youtube.com/embed/a3ICNMQW7Ok"
            title="YouTube video player"
            allowfullscreen
          ></iframe>
      </body>
    </Html>
  )
}
