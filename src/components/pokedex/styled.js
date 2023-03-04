import styled from "styled-components";

export const Container = styled.div`
  width: 39.3rem;
  height: 66.4rem;
  padding: 1rem 0;
  color: #1b1c1e;
  overflow: hidden;

  position: relative;

  .pokedex {
    position: absolute;
    top: -4.8rem;
    left: -57.2rem;
  }

  .pokemon-name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const AlingPokedex = styled.div`
  width: 27.6rem;
  height: 48.92rem;

  position: absolute;
  top: 22.4%;
  left: 16.7%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .special-padding {
    padding: 1.5rem 3rem;
  }

  .pokedex-terrain {
    position: absolute;
    top: 0.35rem;
    left: 0.35rem;
  }

  .pokemon-img {
    margin: 6rem 0 0 1rem;
  }
`;
