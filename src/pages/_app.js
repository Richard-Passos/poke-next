/* Style */
import ResetStyle from "@/styles/reset";
import GlobalStyle from "@/styles/global";
import { Layout } from "@/components/layout";

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
