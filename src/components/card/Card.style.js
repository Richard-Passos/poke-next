/* Logic */
import styled from "styled-components";

export const Card = styled.div`
  ${({ width }) => (width ? `width: ${width}em;` : "")}
  ${({ height }) => (height ? `height: ${height}em;` : "")}

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

export const Description = styled.div`
  width: 27.6em;
  padding: 1.5em 2em;

  display: flex;
  ${({ wrap }) => (wrap ? `flex-wrap: wrap;` : "")}
  justify-content: space-around;
  align-items: center;
  gap: 1em;

  & > {
    :not(:last-child) {
      padding-bottom: 1em;
      border-bottom: 0.1em solid #000;
    }
  }

  .container {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }

  .id {
    padding: 0.5em 1em;
    background-color: #ed1c24;
    color: #fbfcfe;
    border: 0.0625em solid #1b1c1e;
    border-radius: 0.625em;
    text-align: center;
    font-size: 1.6em;
  }
`;

export const Types = styled.div`
  width: 100%;
  isolation: isolate;

  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(5em, 1fr));
  justify-content: center;
  gap: 1em;

  .type {
    padding: 0.5em 1em;
    border: 0.035em solid transparent;
    border-radius: 0.7em;
    text-align: center;
    font-size: 1.4em;
    text-shadow: -0.25rem 0.25rem 0.25rem #000;
    box-shadow: -0.25rem 0.25rem 0.5rem #000;
    overflow: hidden;
    transition: 0.3s;

    position: relative;

    :before {
      content: "";
      width: 0;
      height: 100%;
      background-color: #fbfcfe;
      border-radius: 0.625em;
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
    border-color: #aa9;
  }

  .type-fire {
    color: #f42;
    border-color: #f42;
  }

  .type-water {
    color: #39f;
    border-color: #39f;
  }

  .type-electric {
    color: #fc3;
    border-color: #fc3;
  }

  .type-grass {
    color: #7c5;
    border-color: #7c5;
  }

  .type-ice {
    color: #6cf;
    border-color: #6cf;
  }

  .type-fighting {
    color: #b54;
    border-color: #b54;
  }

  .type-poison {
    color: #a59;
    border-color: #a59;
  }

  .type-ground {
    color: #db5;
    border-color: #db5;
  }

  .type-flying {
    color: #89f;
    border-color: #89f;
  }

  .type-psychic {
    color: #f59;
    border-color: #f59;
  }

  .type-bug {
    color: #ab2;
    border-color: #ab2;
  }

  .type-rock {
    color: #ba6;
    border-color: #ba6;
  }

  .type-ghost {
    color: #66b;
    border-color: #66b;
  }

  .type-dragon {
    color: #76e;
    border-color: #76e;
  }

  .type-dark {
    color: #754;
    border-color: #754;
  }

  .type-steel {
    color: #aab;
    border-color: #aab;
  }

  .type-fairy {
    color: #e9e;
    border-color: #e9e;
  }
`;
