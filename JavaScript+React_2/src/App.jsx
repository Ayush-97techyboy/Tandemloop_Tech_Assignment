import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [series, setSeries] = useState([]);
  const [showInfinite, setShowInfinite] = useState(false);

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
    const n = parseInt(val, 10);
    if (!isNaN(n) && n > 0 && /^\d+$/.test(val)) {
      // Valid positive integer input
      const arr = Array.from({ length: n }, (_, i) => 2 * i + 1);
      setSeries(arr);
      setShowInfinite(false);
    } else if (val.trim() !== "") {
      // Non-numeric or invalid input, show infinite series
      setSeries([]);
      setShowInfinite(true);
    } else {
      setSeries([]);
      setShowInfinite(false);
    }
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
        <h2>Odd Number Series Generator</h2>
        <input
          type="text"
          placeholder="Enter a"
          value={input}
          onChange={handleChange}
          style={{ marginRight: "0.5rem" }}
        />
        {(series.length > 0 || showInfinite) && (
          <div style={{ marginTop: "1rem" }}>
            <strong>Output: </strong>
            {showInfinite ? "1, 3, 5, 7, ......" : series.join(", ")}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
