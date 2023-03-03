import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 0;
  background-color: #333;
  color: #fbfcfe;
  font-size: 1.6rem;
  border-radius: 2rem;
  box-shadow: -1rem 1rem 0.5rem rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: flex-end;

  .pokemon-name {
    text-shadow: -0.2rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
  }

  .card {
    border-right: 0.2rem solid #1b1c1e;
  }

  .relative {
    position: relative;
  }
`;

export const Measurements = styled.div`
  width: auto;
`;
export const Moves = styled.div`
  max-height: 25rem;
  background-color: #1b1c1e;
  color: #fbfcfe;
  padding: 3rem 2rem;
  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;
  }

  .move {
    padding: 1rem;
    background-color: transparent;
    color: #fbfcfe;
    border: 0.1rem solid #fbfcfe;
    border-radius: 1rem;
    transition: 0.2s;
    text-transform: capitalize;

    :hover {
      background-color: #fbfcfe;
      color: #1b1c1e;
    }
  }

  /* Scroll style */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fbfcfe;
    border-radius: 2rem;
    border: 3px solid #1b1c1e;
  }
`;