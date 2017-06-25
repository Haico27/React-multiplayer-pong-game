import React, { Component } from 'react';
import GamesContainer from './games/GamesContainer'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <GamesContainer />
      </div>
    );
  }
}

export default App;
