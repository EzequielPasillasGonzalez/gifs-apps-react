import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    //* Puede recibir un callback que se dispara con el estado actual del counter
    setCounter((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    // * Values
    counter, // Nadie tiene acceso para poder modificar el counter a menos que usen los metodos
    //* Methods / Actions
    handleAdd,
    handleSubtract,
    handleReset,
  };
};
