import "tailwindcss/tailwind.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div className="w-5/6 m-auto">
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}
