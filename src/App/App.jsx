import React from 'react';
import logo from '../static/logo.svg';
import './App.css';

// eslint-disable-next-line react/prop-types
export const App = ({ press }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => press()}>Start</button>
    </header>
  </div>
);
