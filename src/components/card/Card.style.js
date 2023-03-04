import styled from "styled-components";

export const Card = styled.div`
  ${({ width }) => (width ? `width: ${width}rem;` : "")}
  ${({ height }) => (height ? `height: ${height}rem;` : "")}
  font-size: 1.6rem;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Description = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;

  display: flex;
  flex-wrap: ${({ wrap }) => wrap && "wrap"};
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  .container {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .id {
    color: #fbfcfe;
    background-color: #ed1c24;
    padding: 0.8rem 1.6rem;
    border: 0.1rem solid #1b1c1e;
    border-radius: 0.5rem;
    text-align: center;
  }
`;

export const Types = styled.div`
  width: 100%;
  isolation: isolate;

  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(5rem, 1fr));
  justify-content: center;
  gap: 1rem;

  .type {
    padding: 0.8rem 1.6rem;
    border: 0.1rem solid #1b1c1e;
    border-radius: 0.5rem;
    text-shadow: 0 0 0.25rem #000;
    box-shadow: 0 0 0.25rem #000;
    text-align: center;
    transition: 0.3s;

    position: relative;

    :before {
      content: "";
      width: 0;
      height: 100%;
      background-color: #fbfcfe;
      transition: 0.3s;

      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }

    &:hover {
      color: #1b1c1e;
      text-shadow: 0 0 0 transparent;
      :before {
        left: 0;
        width: 100%;
      }
    }
  }

  .type-normal {
    color: #aa9;
    border: 0.1rem solid #aa9;
  }

  .type-fire {
    color: #f42;
    border: 0.1rem solid #f42;
  }

  .type-water {
    color: #39f;
    border: 0.1rem solid #39f;
  }

  .type-electric {
    color: #fc3;
    border: 0.1rem solid #fc3;
  }

  .type-grass {
    color: #7c5;
    border: 0.1rem solid #7c5;
  }

  .type-ice {
    color: #6cf;
    border: 0.1rem solid #6cf;
  }

  .type-fighting {
    color: #b54;
    border: 0.1rem solid #b54;
  }

  .type-poison {
    color: #a59;
    border: 0.1rem solid #a59;
  }

  .type-ground {
    color: #db5;
    border: 0.1rem solid #db5;
  }

  .type-flying {
    color: #89f;
    border: 0.1rem solid #89f;
  }

  .type-psychic {
    color: #f59;
    border: 0.1rem solid #f59;
  }

  .type-bug {
    color: #ab2;
    border: 0.1rem solid #ab2;
  }

  .type-rock {
    color: #ba6;
    border: 0.1rem solid #ba6;
  }

  .type-ghost {
    color: #66b;
    border: 0.1rem solid #66b;
  }

  .type-dragon {
    color: #76e;
    border: 0.1rem solid #76e;
  }

  .type-dark {
    color: #754;
    border: 0.1rem solid #754;
  }

  .type-steel {
    color: #aab;
    border: 0.1rem solid #aab;
  }

  .type-fairy {
    color: #e9e;
    border: 0.1rem solid #e9e;
  }
`;
