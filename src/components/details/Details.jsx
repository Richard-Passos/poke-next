import { useState } from "react";
import { Title } from "../utils/titleStyle";
import { Container, Moves, Stats } from "./styled";

export default function Details({ children, pokemon }) {
  const [orderedMoves, setOrderedMoves] = useState(
    pokemon.moves.sort((a, b) => b.move.name - a.move.name)
  );

  console.log(
    "🚀 ~ file: Details.jsx:5 ~ Details ~ orderedMoves:",
    pokemon.moves
  );
  return (
    <Container>
      {children}

      <div className="column">
        <div>
          <Title size={2} className="title">
            Status Base
          </Title>

          <Stats>
            {pokemon.stats.map((stat) => (
              <p key={`key-${stat.stat.name}`} className="stat">
                {stat.stat.name}:
                <span key={`key-${stat.base_stat}`}>{stat.base_stat}</span>
              </p>
            ))}
          </Stats>
        </div>

        <div>
          <Title size={2} className="title">
            Movimentos
          </Title>

          <Moves>
            {orderedMoves?.map(({ move }) => (
              <p key={`key-${move.name}`} className="move">
                {move.name}
              </p>
            ))}
          </Moves>
        </div>
      </div>
    </Container>
  );
}
