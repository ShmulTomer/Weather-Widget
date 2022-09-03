import logo from './logo.svg';
import './App.css';
import Component from './Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bits of Good
        </p>
        <Component text="hello" />
        <Component text="hello2" />
      </header>
    </div>
  );
}

export default App;
