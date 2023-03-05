/* Style */
import Head from "next/head";
import { Container } from "./styled";

export default function Layout({ children }) {
  return (
    <Container>
      <Head>
        <meta name="description" content="Pokedex by Richard P" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      {children}
    </Container>
  );
}
