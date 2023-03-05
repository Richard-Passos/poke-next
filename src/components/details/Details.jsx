/* Style */
import { Container, Moves, Stats } from "./styled";
import { Title } from "../utils/titleStyle";

export default function Details({ children, pokemon }) {
  const orderedMoves = pokemon.moves.sort((a, b) => {
    let x = a.move.name.toUpperCase();
    let y = b.move.name.toUpperCase();

    return x === y ? 0 : x > y ? 1 : -1;
  }); /* Moves in alphabetical order */

  return (
    <Container>
      <div>{children}</div>

      <div className="column">
        <div>
          <Title size={2} className="title">
            Base Stats
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
            Moves
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
