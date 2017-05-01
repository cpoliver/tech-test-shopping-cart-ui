import React from 'react';

import './app.css';

import ItemQuantity from '../item-quantity';
import RecalculateButton from '../recalculate-button';
import Receipt from '../receipt';

export default () => (
  <div className="App">
    <div className="c-app-header-bar">
      <h1>Node Shopping Cart Demo</h1>
    </div>

    <div className="c-app-input">
      <ItemQuantity item="apple" />
      <ItemQuantity item="orange" />
      <ItemQuantity item="garlic" />
      <ItemQuantity item="papaya" />
    </div>

    <div className="c-app-header-bar">
      <RecalculateButton />
    </div>

    <Receipt />
  </div>
);
