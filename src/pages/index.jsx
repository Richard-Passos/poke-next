/* Style */
import Head from "next/head";
import { Loading } from "@/components";
import { Pokedex } from "@/components";
import { Card, Description, Types } from "@/components/card";
import { PokemonImage } from "@/components/pokedex/styled";
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
    ] || undefined;

  useEffect(() => {
    setPokemonId(1);
  }, []);

  useEffect(() => {
    fetchPokemon(pokemonId, setPokemon);
  }, [pokemonId]);

  return (
    <>
      <Head>
        <title>Home - Pokedex</title>
      </Head>

      <Title size={5} as="h1" className="logo">
        Pokedex
      </Title>

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

            <PokemonImage
              src={
                gifPath ??
                pokemon.sprites.front_default ??
                "https://placehold.co/150x150"
              }
              alt={pokemon.name}
              width={100}
              height={100}
              className="pokemon-img"
            />

            <Description>
              <p className="id">#{pokemon.id}</p>

              <Title size={2.8} className="pokemon-name">
                {pokemon.name}
              </Title>
            </Description>
          </Card>
        )}
      </Pokedex>
    </>
  );
}
