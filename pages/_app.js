import "tailwindcss/tailwind.css";
import Layout from "@/components/Layout";
import Script from 'next/script';

export default function RootLayout({ Component, pageProps }) {
  return (
    <html lang="en">
      <head>
        <Script       
          src={`https://scriptstaging.cookieyes.com/client_data/43d91c49ab844efb74ac5f76/script.js`}
          strategy="beforeInteractive"
        />
      </head>
      <Layout>
        <div className="w-5/6 m-auto">
          <Component {...pageProps} />
        </div>
      </Layout>
    </html>
  )
}
