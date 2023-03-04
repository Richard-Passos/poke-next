import styled from "styled-components";

export const Container = styled.div`
  max-width: 99%;
  padding: 3rem 0;
  background-color: #333;
  color: #000;
  font-size: 1.5rem;
  border-radius: 2rem;
  box-shadow: -1rem 1rem 0.5rem rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;

  .pokemon-name {
    text-shadow: -0.3rem 0.5rem 0.3rem rgba(0, 0, 0, 0.5);
  }

  .card {
    color: #fbfcfe;
    border-bottom: 0.2rem solid #1b1c1e;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }

  .id {
    flex-grow: 1;
  }

  .column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;

    .card {
      border-bottom: none;
      border-right: 0.2rem solid #1b1c1e;
      padding-bottom: initial;
      margin-bottom: initial;
    }
  }
`;

export const Stats = styled.div`
  padding: 1rem 2rem;
  text-transform: capitalize;
  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .stat {
    padding-bottom: 0.5rem;
    border-bottom: 0.1rem solid #000;
    transition: 0.2s;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    span {
      color: #fbfcfe;
      transition: 0.2s;
    }

    :hover {
      color: #fbfcfe;

      span {
        color: #000;
      }
    }
  }
`;

export const Moves = styled.div`
  max-height: 20rem;
  padding: 1rem 2rem;
  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .move {
    padding: 1rem;
    background-color: transparent;
    color: #000;
    border: 0.1rem solid #000;
    border-radius: 1rem;
    transition: 0.3s;
    text-transform: capitalize;

    :hover {
      background-color: #1b1c1e;
      color: #fbfcfe;
      border-color: #1b1c1e;
    }
  }

  /* Scroll style */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1b1c1e;
    border-radius: 2rem;
    border: 3px solid #1b1c1e;
  }
`;
