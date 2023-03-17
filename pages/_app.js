import "tailwindcss/tailwind.css";
import Layout from "@/components/Layout";
import Script from 'next/script';
import { Html } from "next/document";

export default function App({ Component, pageProps }) {
  return (
    <Html lang="en">
      <head>
        <script
          src="https://scriptstaging.cookieyes.com/client_data/43d91c49ab844efb74ac5f76/script.js"
          strategy="beforeInteractive">
        </script>
      </head>
      <Layout>
        <div className="w-5/6 m-auto">
          <Component {...pageProps} />
        </div>
      </Layout>
    </Html>
  )
}
