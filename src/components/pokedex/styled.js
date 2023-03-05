/* Style */
import Image from "next/image";

/* Logic */
import styled from "styled-components";

export const Container = styled.div`
  width: 39.3em;
  height: 66.4em;
  padding: 1em 0;
  color: #1b1c1e;
  font-size: clamp(0.5rem, 2.3vw, 1rem);
  overflow: hidden;

  position: relative;

  .pokemon-name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const AlingPokedex = styled.div`
  width: 27.6em;
  height: 48.92em;

  position: absolute;
  top: 22.4%;
  left: 16.7%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .special-padding {
    padding: 1.5em 3em;
  }
`;

export const PokedexImage = styled(Image)`
  width: ${({ width }) => `${width / 10}em`};
  height: ${({ height }) => `${height / 10}em`};

  position: absolute;
  top: -7.2%;
  left: -145.5%;
`;

export const PokedexTerrainImage = styled(PokedexImage)`
  position: absolute;
  top: 0.8%;
  left: 1.2%;
`;

export const PokemonImage = styled(PokedexImage)`
  margin: 6em 0 0 1em;

  position: initial;
`;
