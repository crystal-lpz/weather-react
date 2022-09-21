import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
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
