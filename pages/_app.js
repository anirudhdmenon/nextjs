import "tailwindcss/tailwind.css";
import Layout from "@/components/Layout";
import Script from 'next/script';
import { Html } from "next/document";

export default function App({ Component, pageProps }) {
  return (
    <Html lang="en">
      <Head>
        <Script
          src="https://scriptstaging.cookieyes.com/client_data/43d91c49ab844efb74ac5f76/script.js"
          strategy="beforeInteractive">
        </Script>
      </Head>
      <Layout>
        <div className="w-5/6 m-auto">
          <Component {...pageProps} />
        </div>
      </Layout>
    </Html>
  )
}
