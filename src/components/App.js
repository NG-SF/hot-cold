import React, { Component } from 'react';
import Header from './Header';
import GameBox from './GameBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }

  toggleHidden (value) {
    this.setState({
      isHidden: value
    })
  }

  render() {
    return (
      <div className="App">
        <Header toggleGuessBox={() => this.toggleHidden(true)} />
        <GameBox toggleGuessBox={() => this.toggleHidden(false)} />
      </div>
    );
  }
}

export default App;
