import styled from "styled-components";

export const Nav = styled.ul`
  width: 100%;
  background-color: #1b1c1e;
  color: #fff;
  padding: 0 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 1rem;
    align-items: center;

    .logo {
      font-size: 2rem;
    }
  }
`;

export const List = styled.ul`
  padding: 2rem 0;

  display: flex;
  gap: 2rem;

  li {
    font-size: 1.4rem;
    padding-bottom: 0.2rem;
    border-bottom: 0.2rem solid transparent;
    transition: 0.3s;

    :hover {
      color: #999;
      border-color: #fff;
    }
  }
`;