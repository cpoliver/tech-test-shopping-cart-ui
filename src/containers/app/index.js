import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { flatten, repeat } from 'ramda';

import './app.css';

import { requestReceipt, updateItemQuantity } from '../../actions';
import { DEFAULT_ITEMS, VALID_ITEMS } from '../../constants';
import ItemQuantity from '../../components/item-quantity';
import RecalculateButton from '../../components/recalculate-button';
import Receipt from '../../components/receipt';

class App extends Component {
  static defaultProps = {
    items: DEFAULT_ITEMS
  }

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      item: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    })).isRequired,
    receipt: PropTypes.shape({
      lineItems: PropTypes.array,
      total: PropTypes.number
    }).isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  unwrapItems = (items) => flatten(
    Object.keys(items).map((item) => items[item] > 0 ? repeat(item, items[item]) : [])
  )

  handleItemChange = (item, count) => {
    this.props.dispatch(updateItemQuantity(item, count));
  }

  handleRecalculate = (event) => {
    event.preventDefault();

    const { dispatch, items } = this.props;

    const x = this.unwrapItems(items);

    dispatch(requestReceipt(x));
  }

  render() {
    const { items, receipt, isFetching } = this.props;

    return (
      <div className="App">
        <div className="c-app-header-bar">
          <h1>Node Shopping Cart Demo</h1>
        </div>

        <div className="c-app-input">
          {
            VALID_ITEMS.map((item, index) => (
              <ItemQuantity item={item} key={item} count={index} onQuantityChange={this.handleItemChange} />
            ))
          }

        </div>

        <div className="c-app-header-bar">
          <RecalculateButton onRecalculate={this.handleRecalculate} />
        </div>

        <Receipt receipt={receipt} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { items, receipt, isFetching } = state;
  return { items, receipt, isFetching };
};

export default connect(mapStateToProps)(App)
