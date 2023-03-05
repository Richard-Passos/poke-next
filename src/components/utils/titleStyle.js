/* Logic */
import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  font-size: ${(props) => props.size || 3}em;
`;
