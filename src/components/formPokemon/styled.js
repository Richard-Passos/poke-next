import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 0;
  color: #1b1c1e;
  font-size: 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
`;

export const Form = styled.form`
  input {
    width: 100%;
    padding: 1.2rem 2rem;
    border: 0.1rem solid #1b1c1e;
    border-radius: 1rem;
    outline: none;
    box-shadow: -0.2rem 0.3rem 0 #888, -0.4rem 0.6rem #1b1c1e;
  }
`;