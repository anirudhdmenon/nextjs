import "tailwindcss/tailwind.css";
import Layout from "@/components/Layout";
import Script from 'next/script';

export default function RootLayout({ Component, pageProps }) {
  return (
    <html lang="en">
      <Head>
        <script id="cookieyes" type="text/javascript" src="https://scriptstaging.cookieyes.com/client_data/6064be5b3d1d7ba2c47fd42b/script.js"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9884004269444664" crossorigin="anonymous"></script>
      </Head>
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
