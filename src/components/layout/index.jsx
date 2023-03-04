import Head from "next/head";
import { Container } from "./styled";

export default function Layout({ children, title }) {
  return (
    <Container>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
        <title>{title}</title>
      </Head>

      {children}
    </Container>
  );
}