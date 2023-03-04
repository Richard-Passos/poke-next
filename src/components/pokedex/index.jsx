import Link from "next/link";
import { FormPokemon, Image } from "..";
import { Container, AlingPokedex } from "./styled";

export default function Pokedex({ pokemonId, children, setState }) {
  return (
    <Container>
      <Image
        src="/images/pokedex.svg"
        width={1536}
        height={760}
        alt="Pokedex"
        priority
        className="pokedex"
      />

      <AlingPokedex>
        <Image
          src="/images/pokedexTerrain.jpeg"
          alt="Terreno"
          width={271}
          height={272}
          className="pokedex-terrain"
        />
        <Link href={`/pokemon/${pokemonId}`}>{children}</Link>
        <FormPokemon setState={setState} pokemonId={pokemonId} />
      </AlingPokedex>
    </Container>
  );
}
