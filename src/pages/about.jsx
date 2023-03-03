import { Card, Image } from "@/components";
import { Title } from "@/components/utils/titleStyle";
import Head from "next/head";

export default function About({ pokemonId }) {
  return (
    <>
      <Head>
        <title>Página sobre a empresa</title>
      </Head>

      <Card>
        <div className="text">
          <Title>Sobre o projeto</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            obcaecati, fugiat recusandae nam tempora nulla sequi non vero amet
            maiores repudiandae ex consequatur sint harum! Non placeat magnam
            dolorem, sed praesentium voluptas quia blanditiis cupiditate
            pariatur odio? Repellat, sint accusantium!
          </p>
        </div>

        <Image
          src="/images/charizard.png"
          width={300}
          height={300}
          alt="Charizard"
        />
      </Card>
    </>
  );
}
