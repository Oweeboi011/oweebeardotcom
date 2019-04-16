import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to Owee Penaranda's Website. </h3>
          <span>My site is still under development but I'll be here soon with my new features.</span>
          <a
            className="App-link"
            href="www.oweepenaranda.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about me.
          </a>
        </header>
      </div>
    );
  }
}

export default App;
