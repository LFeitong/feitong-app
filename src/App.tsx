import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/welcome';


function App():JSX.Element {
  const message: string = "Hello";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome text="Feitong"></Welcome>
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
