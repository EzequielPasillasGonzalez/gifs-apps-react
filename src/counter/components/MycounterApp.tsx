import { useCounter } from "../hooks/useCounter.tsx";

export const MycounterApp = () => {
  const { counter, handleAdd, handleReset, handleSubtract } = useCounter(15);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Counter: {counter}</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
