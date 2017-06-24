import React, { Component } from 'react';
import GamesContainer from './games/GamesContainer'
import './App.css';

const games = [
  {
    title: "Game 1",
    player1: "Seyda",
    player2: "Haico",
    score: 0
  },
  {
    title: "Game 2",
    player1: "Pim",
    player2: "Gijs",
    score: 1
  },
  {
    title: "Game 3",
    player1: "Bernard",
    player2: "Roger",
    score: 2
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <GamesContainer games={ games } />
      </div>
    );
  }
}

export default App;
