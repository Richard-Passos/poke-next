import { useState } from "react";
import ButtonsToggle from "../buttons";
import { Container, Form } from "./styled";

const ALLOWED_KEYS = [
  "a",
  "b",
  "c",
  "e",
  "f",
  "d",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

async function fetchPokemon(pokemonId, setState) {
  if(pokemonId) {
    const api = "https://pokeapi.co/api/v2/pokemon";
    const res = await fetch(`${api}/${pokemonId.toLowerCase()}`);
    const data = await res.json();

    setState(data.id);
  }
}

function handleSearch(ev, setState) {
  ev.preventDefault();

  const { currentTarget } = ev
  const value = currentTarget.value
    .normalize("NFD")
    .replace(/[^a-zA-Z0-9s ]/g, "");

  currentTarget.value = value;

  fetchPokemon(value, setState);
}

export default function FormPokemon({ setState }) {
  return (
    <Container>
      <Form>
        <input
          type="search"
          name="pokemoId"
          id="pokemoId"
          placeholder="Name or Number"
          onChange={(e) => handleSearch(e, setState)}
        />
      </Form>

      <ButtonsToggle setState={setState} />
    </Container>
  );
}