import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './app.css';

import { requestReceipt } from '../../actions';
import { itemsType, receiptType } from '../../prop-types';
import ItemQuantity from '../../components/item-quantity';
import RecalculateButton from '../../components/recalculate-button';
import Receipt from '../../components/receipt';

class App extends Component {
  static propTypes = {
    items: itemsType,
    receipt: receiptType.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  handleRecalculate = (event) => {
    event.preventDefault();

    const { dispatch, items } = this.props;
    dispatch(requestReceipt(items));
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
          <RecalculateButton handleClick={this.handleRecalculate} />
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
