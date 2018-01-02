import React, { Component } from 'react';
import BirdForm from './BirdForm';
import BirdList from './BirdList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BirdForm />
        <BirdList />
      </div>
    );
  }
}

export default App;
