/* Style */
import Head from "next/head";
import { Image, Pokedex } from "@/components";
import { Loading } from "@/components/loading";
import { Card, Description, Types } from "@/components/card";
import { Title } from "@/components/utils/titleStyle";

/* Logic */
import { useEffect, useState } from "react";

async function fetchPokemon(pokemonId, setState) {
  if (pokemonId) {
    const api = "https://pokeapi.co/api/v2/pokemon";
    const res = await fetch(`${api}/${pokemonId}`);
    const data = await res.json();

    setState(data);
  }
}

export default function Home() {
  const [pokemonId, setPokemonId] = useState(0);
  const [pokemon, setPokemon] = useState(null);

  const gifPath =
    pokemon?.["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
      "front_default"
    ] || false;

  useEffect(() => {
    setPokemonId(1);
  }, []);

  useEffect(() => {
    fetchPokemon(pokemonId, setPokemon);
  }, [pokemonId]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Pokedex pokemonId={pokemonId} setState={setPokemonId}>
        {!pokemon ? (
          <Loading />
        ) : (
          <Card width={27.6} height={34}>
            <Types className="half-bg special-padding">
              {pokemon.types.map(({ type }) => (
                <p
                  key={`key-${type.name}`}
                  className={`type type-${type.name}`}
                >
                  {type.name}
                </p>
              ))}
            </Types>

            <Image
              src={
                gifPath
                  ? gifPath
                  : pokemon.sprites.front_default
                  ? pokemon.sprites.front_default
                  : "https://placehold.co/150x150"
              }
              alt={pokemon.name}
              width={100}
              height={100}
            />

            <Description height={6.4} className="description">
              <p className="id">#{pokemon.id}</p>

              <Title size={3} className="pokemon-name">
                {pokemon.name}
              </Title>
            </Description>
          </Card>
        )}
      </Pokedex>
    </>
  );
}
