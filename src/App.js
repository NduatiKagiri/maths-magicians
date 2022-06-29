import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My first
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          Project
        </p>
        <a
          className="App-link"
          href="https://github.com/NduatiKagiri"
          target="_blank"
          rel="noopener noreferrer"
        >
          @John Nduati Kagiri
        </a>
      </header>
    </div>
  );
}

export default App;
