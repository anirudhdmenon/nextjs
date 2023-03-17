import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
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
