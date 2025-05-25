import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [series, setSeries] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);

    let a;
    const match = val.match(/^\s*a\s*=\s*(\d+)\s*$/i);
    if (match) {
      a = parseInt(match[1], 10);
    } else if (/^\s*a\s*=\s*x\s*$/i.test(val) || /^\s*x\s*$/i.test(val)) {
      a = "x";
    } else if (/^\s*\d+\s*$/.test(val)) {
      a = parseInt(val, 10);
    } else {
      setSeries([]);
      return;
    }

    if (a !== "x" && (isNaN(a) || a < 1)) {
      setSeries([]);
      return;
    }
    let arr = [];
    if (a === "x") {
      for (let i = 1; i <= 7; i += 2) {
        arr.push(i);
      }
      arr.push("...");
    } else {
      let limit;
      if (a % 2 === 1) {
        limit = 2 * a - 1;
      } else {
        limit = 2 * (a - 1) - 1;
      }
      for (let i = 1; i <= limit; i += 2) {
        arr.push(i);
      }
    }
    setSeries(arr);
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

      <h2>Pattern_Generator</h2>

      <div style={{ marginTop: "2rem" }}>
        <label>
          Enter a number:{" "}
          <input
            type="text"
            value={input}
            onChange={handleChange}
            style={{ width: "120px" }}
          />
        </label>
        <div style={{ marginTop: "1rem" }}>
          Output:{" "}
          {series.length > 0 ? series.join(", ") : <span>Your Series</span>}
        </div>
      </div>
    </>
  );
}

export default App;