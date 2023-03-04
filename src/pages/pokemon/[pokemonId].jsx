import { Image } from "@/components";
import { Card, Description, Types } from "@/components/card";
import { Details } from "@/components/details";
import { Loading } from "@/components/loading";
import { Title } from "@/components/utils/titleStyle";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  let ids = [];

  for (let i = 1; i < 252; i++) {
    ids.push(i.toString());
  }

  // params
  const paths = ids.map((i) => {
    return {
      params: { pokemonId: i },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { pokemonId } = context.params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
}

export default function Pokemon({ pokemon }) {
  const router = useRouter();

  const gifPath =
    pokemon?.["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
      "front_default"
    ] || false;

  if (router.isFallback) return <Loading />;
  return (
    <>
      <Head>
        <title>Detalhes Pokemon</title>
      </Head>

      <Details pokemon={pokemon}>
        <Card className="card">
          <Title className="pokemon-name" size={4}>
            {pokemon.name}
          </Title>

          <Image
            src={
              gifPath
                ? gifPath
                : pokemon.sprites.front_default
                ? pokemon.sprites.front_default
                : "https://placehold.co/150x150"
            }
            alt={pokemon.name}
            width={250}
            height={250}
          />

          <Description wrap={"wrap"}>
            <div className="container">
              <Title size={2} as="h3">
                Número:
              </Title>
              <p className="id">#{pokemon.id}</p>
            </div>
            <div className="container">
              <Title size={2} as="h3">
                Tipos:
              </Title>

              <Types>
                {pokemon.types.map(({ type }) => (
                  <p
                    key={`key-${type.name}`}
                    className={`type type-${type.name}`}
                  >
                    {type.name}
                  </p>
                ))}
              </Types>
            </div>
          </Description>
        </Card>
      </Details>
    </>
  );
}
