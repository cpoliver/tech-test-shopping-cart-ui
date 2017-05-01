import React, { Component } from 'react';

import './app.css';

import ItemQuantity from '../item-quantity'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemQuantity item="apple" />
        <ItemQuantity item="orange" />
        <ItemQuantity item="garlic" />
        <ItemQuantity item="papaya" />
      </div>
    );
  }
}

export default App;
