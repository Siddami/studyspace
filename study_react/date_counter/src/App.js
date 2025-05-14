import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("May 14 2025");
  date.setDate(date.getDate() + count);

  const style = {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    margin: "0 auto",
  };

  const btn = { display: "flex", gap: "3px", justifyContent: "center" }

  return (
    <div style={style}>
      <div style={btn}>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div style={btn}>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day${count === 1 ? "" : "s"} from today is `
            : `${Math.abs(count)} days ago is `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
