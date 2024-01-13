import { useState } from "react";

export const useCounter = (valorInicial = 0) => {
  const [counter, setContador] = useState(valorInicial);

  const increment = (valor = 1) => {
    setContador(counter + valor);
  };
  const decrement = (valor = 1, negativo) => {
    if (!negativo && counter - valor < 1) {
      setContador(0);
      return;
    }
    setContador(counter - valor);
  };
  const reset = () => {
    setContador(0);
  };

  return {
    counter,
    increment,
    reset,
    decrement,
  };
};
