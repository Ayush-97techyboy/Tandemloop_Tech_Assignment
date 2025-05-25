import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

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
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1em",
        }}
      >
        <button style={{ marginBottom: "1em" }}>
          <a
            href="https://javascriptreact1.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            Program-1.jsx
          </a>
        </button>

        <button style={{ marginBottom: "1em" }}>
          <a
            href="https://javascriptreact2.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            Program-2.jsx
          </a>
        </button>

        <button style={{ marginBottom: "1em" }}>
          <a
            href="https://javascriptreact3.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            Program-3.jsx
          </a>
        </button>

        <button style={{ marginBottom: "1em" }}>
          <a
            href="https://javascriptreact4.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            Program-4.jsx
          </a>
        </button>
      </div>
    </>
  );
}

export default App;
