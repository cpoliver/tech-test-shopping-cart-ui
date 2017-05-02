import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './app.css';

import { itemArrayType, receiptType } from '../../prop-types';
import ItemQuantity from '../../components/item-quantity';
import RecalculateButton from '../../components/recalculate-button';
import Receipt from '../../components/receipt';

class App extends Component {
  static propTypes = {
    items: itemArrayType,
    receipt: receiptType.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="App">
        <div className="app-header-bar">
          <h1>Node Shopping Cart Demo</h1>
        </div>

        <div className="app-input">
          <ItemQuantity item="apple" />
          <ItemQuantity item="orange" />
          <ItemQuantity item="garlic" />
          <ItemQuantity item="papaya" />
        </div>

        <div className="app-header-bar">
          <RecalculateButton />
        </div>

        <Receipt />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { items, receipt, isFetching } = state;
  return { items, receipt, isFetching };
};

export default connect(mapStateToProps)(App);
