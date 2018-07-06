import React, { Component } from 'react';
import logo from './img/logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <span> <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sharp Herbal</h1></span>
        </header>
        <p className="App-intro">
          Site Under Cunstruction
        </p>
      </div>
    );
  }
}

export default App;
