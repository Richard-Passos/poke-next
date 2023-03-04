import { Layout } from "@/components";
import GlobalStyle from "@/styles/global";
import ResetStyle from "@/styles/reset";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
