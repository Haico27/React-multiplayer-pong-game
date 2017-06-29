import React, { Component } from 'react';
import Loading from './components/Loading'
import LoadError from './components/LoadError'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.children }
        <Loading />
        <LoadError />
      </div>
    );
  }
}

export default App;
