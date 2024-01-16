import { useState } from "react";
import { Incrementar } from "./Incrementar";

export const CallBackComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementarPadre = (val) => {
    setCounter(counter + val);
  };

  return (
    <>
      <h1>Contador: {counter}</h1>
      <Incrementar incrementar={incrementarPadre}></Incrementar>
    </>
  );
};
