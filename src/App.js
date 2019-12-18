import React, { Component } from 'react';
import logo from './logo.svg';
import picture from './images/picture.jpg';
import './App.css';

class Photo extends Component {
  render() {
    return (
      <img src={picture} />
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Photo />
      </header>
    </div>
  );
}

export default App;
