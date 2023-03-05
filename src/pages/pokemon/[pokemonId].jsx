import Head from "next/head";
import { Loading } from "@/components/loading";
import { BtnHome } from "@/components/utils/btnHome";
import { Details } from "@/components/details";
import { Card, Description, Types } from "@/components/card";
import { PokemonImage } from "@/components/details/styled";
import { Title } from "@/components/utils/titleStyle";

/* Logic */
import { useRouter } from "next/router";

export async function getStaticPaths() {
  let IDs = [];
  for (let i = 1; i < 252; i++) {
    IDs.push(i.toString());
  }

  // params
  const paths = IDs.map((i) => {
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
  const gifPath =
    pokemon?.["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
      "front_default"
    ] || undefined;

  const router = useRouter();

  if (router.isFallback) return <Loading />;
  return (
    <>
      <Head>
        <title>Details - Pokedex</title>
      </Head>

      <BtnHome />

      <Details pokemon={pokemon}>
        <Card className="card">
          <Title className="pokemon-name" size={3.5}>
            {pokemon.name}
          </Title>

          <PokemonImage
            src={
              gifPath ??
              pokemon.sprites.front_default ??
              "https://placehold.co/150x150"
            }
            alt={pokemon.name}
            width={200}
            height={200}
          />

          <Description wrap={"wrap"}>
            <div className="container">
              <Title size={2} as="h3">
                Number:
              </Title>

              <p className="id">#{pokemon.id}</p>
            </div>

            <div className="container">
              <Title size={2} as="h3">
                Type{pokemon.types.length === 1 || "s"}:
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

            <div className="container" style={{ fontSize: `1.1em` }}>
              <Title size={1.2} as="h4">
                Height:
              </Title>
              <p>{pokemon.height / 10} m</p>

              <Title size={1.2} as="h4">
                weight:
              </Title>
              <p>{pokemon.weight / 10} Kg</p>
            </div>
          </Description>
        </Card>
      </Details>
    </>
  );
}
