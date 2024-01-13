import { useCounter } from "../hooks/useCounter";

export const ContadorComponent = () => {
  const { counter, increment, reset, decrement } = useCounter(0);

  return (
    <>
      <h1>Contador : {counter}</h1>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-danger" onClick={() => reset()}>
        reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(true)}>
        -1
      </button>
    </>
  );
};
