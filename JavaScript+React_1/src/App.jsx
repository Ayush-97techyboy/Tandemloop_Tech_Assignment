import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operation = operation;
  }

  calculate() {
    switch (this.operation) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        if (this.b === 0) return "Error: Division by zero";
        return this.a / this.b;
      default:
        return "Invalid operation";
    }
  }
}

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const calc = new Calculator(a, b, operation);
    setResult(calc.calculate());
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

      <div
        style={{
          margin: "2rem 0",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          maxWidth: "320px",
        }}
      >
        <h2>Simple Calculator</h2>
        <div>
          <input
            type="number"
            step="any"
            placeholder="Enter a"
            value={a} 
            onChange={(e) => setA(e.target.value)}
            style={{ marginRight: "0.5rem" }}
          />
          <input
            type="number"
            step="any"
            placeholder="Enter b"
            value={b}
            onChange={(e) => setB(e.target.value)}
            style={{ marginRight: "0.5rem" }}
          />
        </div>
        <div style={{ margin: "0.5rem 0" }}>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="add">Addition (+)</option>
            <option value="subtract">Subtraction (-)</option>
            <option value="multiply">Multiplication (×)</option>
            <option value="divide">Division (÷)</option>
          </select>
        </div>
        <button onClick={handleCalculate}>Calculate</button>
        {result !== null && (
          <div style={{ marginTop: "1rem" }}>
            <strong>Result: </strong>
            {result}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
