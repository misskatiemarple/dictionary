import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header"></header>
        <main>
          <div className="businessName">
            <h1>SHE LOVES TRAVEL</h1>
          </div>
          <div className="secondaryTitle">
            <h2>language exchange dictionary</h2>
          </div>
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer className="text-center">
          <small>
            Coded By Katie Marple and{" "}
            <a
              href="https://github.com/misskatiemarple/dictionary"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
