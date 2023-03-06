/* Style */
import { Container, Form } from "./styled";
import { ButtonsToggle } from "../buttonsToggle";

async function fetchPokemonId(pokemonId, setState) {
  if (pokemonId) {
    const api = "https://pokeapi.co/api/v2/pokemon";
    const res = await fetch(`${api}/${pokemonId.toLowerCase()}`);
    const data = await res.json();

    setState(data.id);
  }
}

function handleSearch(ev, setState) {
  ev.preventDefault();

  const { currentTarget } = ev;
  const value = currentTarget.value
    .normalize("NFD")
    .replace(/[^a-zA-Z0-9s ]/g, ""); /* Remove special caracters */

  currentTarget.value = value;

  fetchPokemonId(value, setState);
}

export default function FormPokemon({ setState }) {
  return (
    <Container>
      <Form>
        <input
          type="search"
          id="pokemoId"
          placeholder="Name or Number"
          onChange={(e) => handleSearch(e, setState)}
        />
      </Form>

      <ButtonsToggle setState={setState} />
    </Container>
  );
}
