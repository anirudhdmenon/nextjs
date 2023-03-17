import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script 
          src="https://scriptstaging.cookieyes.com/client_data/43d91c49ab844efb74ac5f76/script.js"
          strategy="beforeInteractive">
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
