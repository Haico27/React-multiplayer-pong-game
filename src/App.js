import React, { Component } from 'react';
import GamesContainer from './games/GamesContainer'
import Loading from './components/Loading'
import LoadError from './components/LoadError'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <GamesContainer />
        <Loading />
        <LoadError />
      </div>
    );
  }
}

export default App;
