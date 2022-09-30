import Search from "./Search";
import "./Search.css";

function App() {
  return (
    <div className="App">
      <Search defaultCity="Sydney" />
      <p>
        <a
          href="https://github.com/crystal-lpz/weather-react.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>{" "}
        by Crystal Lopez{" "}
      </p>
    </div>
  );
}

export default App;
