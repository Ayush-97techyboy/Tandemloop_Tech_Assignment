import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    // Parse input into array of numbers
    const nums = input
      .split(",")
      .map((s) => parseInt(s.trim(), 10))
      .filter((n) => !isNaN(n));
    const output = {};
    for (let i = 1; i <= 9; i++) {
      output[i] = nums.filter((n) => n % i === 0).length;
    }
    setResult(output);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <h2>Total Count of Numbers</h2>

      <div style={{ marginTop: "2rem" }}>
        <label>
          Enter numbers (comma separated):{" "}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. 1,2,8,9,12,46,76,82,15,20,30"
            style={{ width: "300px" }}
          />
        </label>
        <button style={{ marginLeft: "1rem" }} onClick={handleCalculate}>
          Calculate
        </button>
        <div style={{ marginTop: "1rem" }}>
          {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
        </div>
      </div>
    </>
  );
}

export default App;
