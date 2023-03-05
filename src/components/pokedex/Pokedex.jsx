/* Style */
import {
  Container,
  PokedexImage,
  AlingPokedex,
  PokedexTerrainImage,
} from "./styled";
import Link from "next/link";
import { FormPokemon } from "../formPokemon";

export default function Pokedex({ pokemonId, children, setState }) {
  return (
    <Container>
      <PokedexImage
        src="/images/pokedex.svg"
        width={1536}
        height={760}
        alt="Pokedex"
        priority
      />

      <AlingPokedex>
        <PokedexTerrainImage
          src="/images/pokedexTerrain.jpeg"
          alt="Terreno"
          width={271}
          height={272}
        />

        <Link href={`/pokemon/${pokemonId}`}>{children}</Link>

        <FormPokemon setState={setState} pokemonId={pokemonId} />
      </AlingPokedex>
    </Container>
  );
}
