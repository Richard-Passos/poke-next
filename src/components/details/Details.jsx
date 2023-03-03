import { useState } from "react";
import { Title } from "../utils/titleStyle";
import { Container, Moves } from "./styled";

export default function Details({ children, pokemon }) {
  const [orderedMoves, setOrderedMoves] = useState(
    pokemon.moves.sort((a, b) => b.move.name - a.move.name)
  );
  
  
  console.log("🚀 ~ file: Details.jsx:5 ~ Details ~ orderedMoves:", pokemon.moves);
  return (
    <Container>
      <div>{children}</div>

      <div className="relative">
        <Moves>
          <Title size={2} className="title">
            Movimentos
          </Title>
          {orderedMoves?.map(({ move }) => (
            <p key={`key-${move.name}`} className="move">
              {move.name}
            </p>
          ))}
        </Moves>
      </div>
    </Container>
  );
}