import "tailwindcss/tailwind.css";
import Layout from "@/components/Layout";
import Script from 'next/script';

export default function RootLayout({ Component, pageProps }) {
  return (
    <html lang="en">
      <head>
        <Script       
          //src={`https://scriptstaging.cookieyes.com/client_data/43d91c49ab844efb74ac5f76/script.js`}
          src={`https://cdn-cookieyes.com/client_data/cc36826529febf9285a6be6a/script.js`}
        />
      </head>
      <Layout>
        <div className="w-5/6 m-auto">
          <Component {...pageProps} />
        </div>
        <iframe
            width="800"
            height="400"
            src="https://www.youtube.com/embed/a3ICNMQW7Ok"
            title="YouTube video player"
            allowfullscreen
          ></iframe>
      </Layout>
    </html>
  )
}
