import { Buttons } from "./styled";

export default function ButtonsToggle({ setState }) {
  return (
    <Buttons>
      <button
        onMouseUp={() =>
          setState((prevState) => (prevState > 1 ? --prevState : 1))
        }
      >
        Prev {"<"}
      </button>

      <button onMouseUp={() => setState((prevState) => ++prevState)}>
        Next {">"}
      </button>
    </Buttons>
  );
}
