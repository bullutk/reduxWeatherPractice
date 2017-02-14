import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <SearchBar />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

          // <img src="https://www.base64-image.de/build/img/mr-base64-482fa1f767.png" className="App-logo" alt="logo" />
          
