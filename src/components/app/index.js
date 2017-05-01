import React, { Component } from 'react';

import './app.css';

import ItemQuantity from '../item-quantity';
import Receipt from '../receipt';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemQuantity item="apple" />
        <ItemQuantity item="orange" />
        <ItemQuantity item="garlic" />
        <ItemQuantity item="papaya" />

        <div style={{clear: 'both'}}></div>
        <hr />

        <Receipt />
      </div>
    );
  }
}

export default App;
